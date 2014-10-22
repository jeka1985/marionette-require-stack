define(
    [
        'application',
        'apps/pages/Home/overview/overview_view'
    ],
    function(Application) {
        Application.module('Home.Overview', function(HomeOverview, App) {
            HomeOverview.Controller = Marionette.Controller.extend({
                show: function() {
                    this.layout = new HomeOverview.Layout;

                    this.listenTo(this.layout, 'destroy', this.destroy)
                        .listenTo(this.layout, 'show', this.showGreetingText)

                    App.body.show(this.layout);
                },

                showGreetingText: function() {
                    this.layout.center.show(new HomeOverview.HomeView)
                }
            });
        });
    }
);
