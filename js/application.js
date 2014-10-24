define(
    [
        'marionette',
        'regions/Dialog'
    ],
    function(Marionette, DialogRegion) {
        var AppClass = Marionette.Application.extend({
            history: Backbone.history,
            currentPageModule: false,


            pageModule: function(name, options) {

                return this.module(name, {
                    moduleClass: Marionette.Module.extend({
                        startWithParent: false,
                        onStart: function() {
                            console.log('ok')
                        }
                    })
                });
            },




//            pageModule: function(name, opt) {
//                return this.module(name, {
//                    moduleClass: Marionette.Module.extend({
//                        startWithParent: false,
//                        initialize: function(options, moduleName, app) {
//                            alert(1)
//                        },
//
//                        onStart: function(options) {
//                            alert(2)
//                        },
//
//                        onStop: function(options) {
//                            alert(3)
//                        }
//                    }),
//                    define: function() {
//                        console.log(this);
//                    }
//                })
//            },


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

