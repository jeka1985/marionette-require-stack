define(
    [
        'application',
        'apps/pages/Phrases/home/home_view'
    ],
    function(Application) {
        Application.module('Phrases.Home', function(PhrasesHome, App) {
            PhrasesHome.Controller = Marionette.Controller.extend({
                show: function() {
                    this.layout = new PhrasesHome.Layout;

                    this.listenTo(this.layout, 'destroy', this.destroy)
                        .listenTo(this.layout, 'show', this.showGreetingText)

                    App.body.show(this.layout);
                },

                showGreetingText: function() {
                    this.layout.center.show(new PhrasesHome.HomeView)
                }
            });
        });
    }
);
