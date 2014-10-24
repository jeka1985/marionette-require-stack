define(
    [
        'application',
        'modules/Services',
        'modules/Classes',
        'modules/AppsManager',
        'apps/Navigation/index'
    ],
    function (App) {




        _.extend(Marionette.Module.prototype, Backbone.Events, {
            router: function(routes) {
                this.Router = App.Classes.ModuleRouter.extend(routes);
                return this;
            },
            controller: function(actions) {
                this.Controller = Marionette.Controller.extend(actions);
                return this;
            },

            view: function(views) {
                console.log('views', views)
                return this;
            }
        });

        return App
    }
);
