define(
    [
        'application'
    ],
    function(Application) {

        Application.module('Phrases.Edit', function(PhrasesEdit, App) {

            function getView(model) {
                return {
                    normal: 'views/item/EditNormalPhrase',
                    spec: 'views/item/EditSpecPhrase'
                }[model.get('type')]
            }

            PhrasesEdit.Controller = Marionette.Controller.extend({

                edit: function(model) {
                    require([getView(model)], function(EditPhraseView) {
                        App.dialogs.show( new EditPhraseView({
                             model: model
                        }))
                    })
                },

                normalizePhrase: function(model) {
                    App.request("normalizePhrase", model.get('id'), function(resp) {
                        model.set('phrase', model.get('phrase') + resp.phrase.join(', '));
                    }, this);
                },

                setPhraseState: function(model, flag) {
                    model.set('state', flag ? 'on' : 'off')
                },

                setPhrasesState: function(collection, flag) {
                    collection.each(function(model) {
                        this.setPhraseState(model, flag)
                    }, this)
                },

                savePhrase: function(model) {
                    model.save();
                },

                savePhrases: function(collection) {
                    collection.sync('create', collection);
                }
            });
        });
    }
);
