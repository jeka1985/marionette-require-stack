define(
    [
        'application'
    ],
    function(Application) {

        Application.module('404', function(Module, App, Backbone, Marionette) {

            Module.Controller = Marionette.Controller.extend({
                show: function() {
                    require(['apps/pages/404/Show/show_controller'], function() {
                        (new Module.Show.Controller).show()
                    })
                }
            });
        })
    }
);
