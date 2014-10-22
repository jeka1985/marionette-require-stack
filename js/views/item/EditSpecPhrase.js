define(
    [
        'application',
        'views/item/EditPhrase',
        'text!tpl/item/EditSpecPhrase.html'
    ],

    function(App, EditPhrase, EditSpecPhrase) {

        return EditPhrase.extend({
            template: EditSpecPhrase,
            events: {
                'click .btn-primary': function() {
                    App.trigger('phrase:save', this.model);
                    this.destroy();
                }
            }
        });
    }
);
