define(
    [
        'application',
        'views/item/EditPhrase',
        'text!tpl/item/EditNormalPhrase.html'
    ],

    function(App, EditPhrase, EditNormalPhrase) {

        return EditPhrase.extend({
            template: EditNormalPhrase,
            events: {
                'click .normalize': function() {
                    App.trigger('phrase:normalize', this.model)
                },
                'click .btn-primary': function() {
                    App.trigger('phrase:save', this.model)
                    this.destroy();
                }
            }
        });
    }
);
