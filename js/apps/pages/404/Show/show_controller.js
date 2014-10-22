define(
    [
        'application',
        'apps/pages/404/show/show_view'
    ],
    function(Application) {
        Application.module('404.Show', function(Module, App) {
            Module.Controller = Marionette.Controller.extend({

                show: function() {
                    this.layout = new Module.Layout;

                    this.listenTo(this.layout, 'destroy', this.destroy)
                        .listenTo(this.layout, 'show', this.showGreetingText)

                    App.body.show(this.layout);
                },

                showGreetingText: function() {
                    this.layout.center.show(new Module.HomeView)
                }
            });
        });
    }
);
