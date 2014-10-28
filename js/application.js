define(
    [
        'marionette',
        'regions/Dialog',
        'BH'

    ],
    function(Marionette, DialogRegion) {
        var AppClass = Marionette.Application.extend({
            history: Backbone.history,
            currentPageModule: false,

            initialize: function(){
                this.on('all', function() {
                    console.log('app:', arguments);
                })
            },

            bh: new BH,

            getbem: function(json) {
                return function(model) {
                    return json
                }
            },

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
            },

            page: function(name) {
                return this.module(name, this.PageModule)
            }
        });

        var App = new AppClass;

        return App;
    }
);

