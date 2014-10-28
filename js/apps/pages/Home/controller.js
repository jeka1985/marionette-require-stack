define(
    [
        'application'
    ],
    function(Application) {

        Application
            .page('Home')
                .controller(function(Module, App) {
                    return {
                        initialize: function() {

                            this.layout = new Module.views.Layout;

                            App.body.show(this.layout);
                        },

                        showOverview: function() {
                           // this.layout.center.show(new Module.views.HowItWorks);
                            this.layout.center.show(new Module.views.BhView({ model: new Backbone.Model({ some: 'qwe' }) }));
                        },

                        sayHi: function() {
                            alert('qwerty');
                        },

                        onDestroy: function() {
                            console.log('ctrl destroy');
                            this.layout.destroy()
                        }
                    }
                })
    }
);
