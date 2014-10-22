define(
    [
        'application',
        'views/layout/OneColumn'
    ],
    function(Application, LayoutView) {

        Application.module('Phrases.Home', function(PhrasesHome, App, Backbone, Marionette, $, _) {

            PhrasesHome.Layout = LayoutView;

            PhrasesHome.HomeView = Marionette.ItemView.extend({
                template: _.template('<h1>Its Phrases home</h1>')
            });
        })
    }
);
