define(
    [
        'application'
    ],
    function(App) {
        App.module('Classes', function(Classes, App, Backbone, Marionette, $, _) {

            Classes.EmptyView = Marionette.ItemView.extend({
                className: 'well',
                template: _.template('loading...')
            }),

            App.PageModule = Marionette.Module.extend({

                startWithParent: false,

                resources: {},

                onStart: function() {
                    this._manageResources('init');
                    App.trigger('module:start', this.moduleName);
                },

                onStop: function() {
                    this._manageResources('destroy')
                    App.trigger('module:stop', this.moduleName);
                },

                _manageResources: function(type, definition) {
                    this._manageResources.queue = ['views', 'controller', 'router'];
                    this._manageResources.store = this._manageResources.store || {};

                    if(type && definition) {
                        this._manageResources.store[type] = definition;
                    } else if (type == 'init' && arguments.length < 2) {
                        this._manageResources.queue.forEach(function(res) {
                            var resourceDefinition = this._manageResources.store[res];

                            resourceDefinition && this.addDefinition(function() {
                                this.resources[res] = resourceDefinition.apply(this, arguments);
                            })
                        }, this);
                    } else if (type == 'destroy' && arguments.length < 2) {
                        this.resources.controller && this.resources.controller.destroy();
                        this.resources.router && this.resources.router.destroy()
                    }
                },

                router: function(query) {
                    if(_.isObject(query) || _.isFunction(query)) {
                        this._manageResources('router', function() {
                            query = _.isFunction(query) ? query.apply(this, arguments) : query;

                            return new(App.ModuleRouter.extend({
                                appRoutes: query,
                                controller: this.resources.controller
                            }));
                        })
                    }
                },

                controller: function(query) {
                    if(_.isObject(query) || _.isFunction(query)) {
                        this._manageResources('controller', function() {

                            query = _.isFunction(query) ? query.apply(this, arguments) : query;

                            _.keys(query).forEach(function(viewName){
                                this.controller[viewName] = query[viewName]
                            }, this);


                            return new (
                                Marionette.Controller.extend(query)
                            );
                        })
                    }
                },

                views: function(query) {
                    if(_.isObject(query) || _.isFunction(query)) {
                        this._manageResources('views', function() {
                            query = _.isFunction(query) ? query.apply(this, arguments) : query;
                            _.keys(query).forEach(function(viewName){
                                this.views[viewName] = query[viewName]
                            }, this);

                            return query
                        });
                    }
                }
            });


            /*
            * Module router - Marionette.AppRouter with overwritten 'route' method
            * with force check URL match on adding route
            * */


            App.ModuleRouter = Marionette.AppRouter.extend({

                forceInvokeRouteHandler: function(routeRegexp, routeStr, callback) {
                    if(routeRegexp.test(Backbone.history.getHash()) ) {
                        this.execute(callback, this._extractParameters(routeRegexp, routeStr));
                    }
                },

                route: function(route, name, callback) {

                    var routeString = route,
                        router = this;

                    if (!_.isRegExp(route)) route = this._routeToRegExp(route);
                    if (_.isFunction(name)) {
                        callback = name;
                        name = '';
                    }
                    if (!callback) callback = this[name];


                    // проблема - RouterManager уже стригерил событие route, загрузил саб-роутер.
                    // при создании саб роутера его колбэк уже вызван не будет, поскольку адрес страницы не изменился
                    // при добавлении роутов используется нативный ВВ route - который вещает колбэк на указанный фрагмент
                    // расширяем - если мы уже находимся на фрагменте на который устанавливается колбэк - принудительно вызвать
                    // выполнение обработчика совпадения фрагмента

                    /*
                    * PROBLEM : AppsManager already triggered 'route' and page fragments still same,
                    * so module router will not be checked on URL matching.
                    *
                    * SOLUTION : updated route method, add route to Backbone.history as usual, but also check if current page
                    * fragment match any appRoute and call controller callbacl
                    * */

                    this.forceInvokeRouteHandler(route, routeString, callback);

                    Backbone.history.route(route, function(fragment) {
                        var args = router._extractParameters(route, fragment);

                        router.execute(callback, args);
                        router.trigger.apply(router, ['route:' + name].concat(args));
                        router.trigger('route', name, args);

                        Backbone.history.trigger('route', router, name, args);
                    });

                    return this;
                },

                destroy: function() {

                    var args = Array.prototype.slice.call(arguments),
                        routKeys = _.keys(this.appRoutes).map(function(route) {
                        return this._routeToRegExp(route).toString();
                    }.bind(this));

                    Backbone.history.handlers = Backbone.history.handlers.reduce(function(memo, handler) {
                        _.indexOf(routKeys, handler.route.toString()) < 0  && memo.push(handler)
                        return memo;
                    }, []);


                    Marionette.triggerMethod.apply(this, ['before:destroy'].concat(args));
                    Marionette.triggerMethod.apply(this, ['destroy'].concat(args));

                    this.stopListening();
                    this.off();

                    return this;

                }
            })

        });
    }
);
