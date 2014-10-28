require.config({
    baseUrl: "js/",
    deps: ['jquery', 'backbone', 'backboneBinder', 'marionette', 'bootstrap' , 'nunjucks', 'underscore', 'highlight', 'main'],
    paths: {
        jquery: 'libs/jquery-min',
        backbone: 'libs/backbone-min',
        backboneBinder: 'libs/Backbone.ModelBinder.min',
        marionette: 'libs/backbone.marionette.min',
        underscore: 'libs/underscore-min',
        bootstrap: 'libs/bootstrap',
        nunjucks: 'libs/nunjucks',
        text: 'libs/text',
        highlight: 'libs/highlight.pack',
        slickback: 'libs/slickback.full',
        BH: 'libs/bh'
    },
    shim: {

        "BH": ["jquery"],
        "bootstrap": ["jquery"],
        "highlight": ["jquery"],
        "slickback": ["backbone", "jquery"]
    }
});
