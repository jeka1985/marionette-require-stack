define(
    [
        'marionette',
        'regions/Dialog'
    ],

    function(Marionette, DialogRegion) {

        var AppClass = Marionette.Application.extend({
            history: Backbone.history,
            currentPageModule: false,
            regions: {
                navigation: '#navigation',
                body: '#content',
                dialogs: {
                    selector: '#dialogs',
                    regionClass: DialogRegion
                }
            },

            onStart: function() {
                this.history.start();
            },

            getCurrentUrl: function() {
                return Backbone.history.getHash();
            }
        });

        var App = new AppClass;

        return App;
    }
);

