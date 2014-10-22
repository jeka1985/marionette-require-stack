define(['application', 'marionette', 'text!tpl/item/Navigation.html'], function(App, Marionette, Tpl) {
    return Marionette.ItemView.extend({
        initialize: function(options) {
            Backbone.history.on('route', this.render, this);
            this.templateHelpers = {
                links: [
                    { text: 'phrases', url: '#phrases' },
                    { text: 'broken link', url: '#qwerty' }
                ],
                getCurrentUrl: App.getCurrentUrl
            }
        },
        template: Tpl
    });
});
