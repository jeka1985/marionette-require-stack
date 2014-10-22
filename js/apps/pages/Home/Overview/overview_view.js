define(
    [
        'application',
        'views/layout/OneColumn',
        'views/item/HowItWorks'
    ],
    function(Application, LayoutView, HowItWorksView) {

        Application.module('Home.Overview', function(HomeOverview, App, Backbone, Marionette, $, _) {

            HomeOverview.Layout = LayoutView;

            HomeOverview.HomeView = HowItWorksView
        })
    }
);
