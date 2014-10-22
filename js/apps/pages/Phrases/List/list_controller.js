define(
    [
        'application',
        'collections/Phrases',
        'apps/pages/Phrases/List/list_view'
    ],

    function(Application, PhrasesCollection) {

        Application.module('Phrases.List', function(PhrasesList, App, Backbone, Marionette) {

            function getPhrasesCollection() {
                return new PhrasesCollection
            }

            function getPhrasesView(collection) {
                return new PhrasesList.PhrasesView({
                    collection : collection
                })
            }

            function getPhraseLayoutView() {
                return new PhrasesList.Layout
            }

            var phrasesCollection = getPhrasesCollection();

            PhrasesList.Controller = Marionette.Controller.extend({
                initialize: function() {
                    this.layout = getPhraseLayoutView();
                    this.phrasesView = getPhrasesView(phrasesCollection)
                    this.listenTo(this.layout, 'destroy', this.destroy)
                        .listenTo(this.layout, 'show', this.renderPhrasesView)

                    App.body.show(this.layout);
                },

                renderPhrasesView: function() {
                    this.layout.center.show(this.phrasesView)
                },

                topPhrases: function() {
                    phrasesCollection.fetch({
                        url: 'js/entities/phrases/10.json'
                    })
                },

                allPhrases: function() {
                    phrasesCollection.fetch({
                        url: 'js/entities/phrases/500.json'
                    })
                },

                onDestroy: function() {
                    this.layout.destroy()
                }
            })
        })
    }
);
