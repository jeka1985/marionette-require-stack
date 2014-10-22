define(
    [
        'application',
        'views/layout/OneColumn'
    ],
    function(Application, LayoutView) {

        Application.module('404.Show', function(Module, App, Backbone, Marionette, $, _) {

            Module.Layout = LayoutView;

            Module.HomeView = Marionette.ItemView.extend({
                template: _.template('Page not found')
            })
        })
    }
);
