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

            /*
            * Module router - Marionette.AppRouter with overwritten 'route' method
            * with force check URL match on adding route
            * */


            Classes.ModuleRouter = Marionette.AppRouter.extend({

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
                    var routKeys = _.keys(this.appRoutes).map(function(route) {
                        return this._routeToRegExp(route).toString();
                    }.bind(this));

                    Backbone.history.handlers = Backbone.history.handlers.reduce(function(memo, handler) {
                        _.indexOf(routKeys, handler.route.toString()) < 0  && memo.push(handler)
                        return memo;
                    }, []);
                }
            })

        });
    }
);
