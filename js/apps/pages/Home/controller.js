define(
    [
        'application'
    ],

    function(Application) {

        Application.module('Home', function(Home, App, Backbone, Marionette) {

            Home.Controller = Marionette.Controller.extend({
                showOverview: function() {
                    require(['apps/pages/Home/Overview/overview_controller'], function() {
                        (new Home.Overview.Controller).show()
                    })
                }
            });
        })
    }
);
