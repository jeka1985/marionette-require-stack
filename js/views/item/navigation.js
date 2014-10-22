define(['application', 'marionette', 'text!tpl/item/Navigation.html'], function(App, Marionette, Tpl) {
    return Marionette.ItemView.extend({
        initialize: function(options) {
            Backbone.history.on('route', this.render, this);
            this.templateHelpers = {
                links: [
                    { text: 'Phrases static text', url: '#phrases/home' },
                    { text: 'Phrases top list', url: '#phrases' },
                    { text: 'broken link', url: '#qwerty' }
                ],
                getCurrentUrl: App.getCurrentUrl
            }
        },
        template: Tpl
    });
});
