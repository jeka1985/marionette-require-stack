define(
    [
        'application'
    ],

    function(Application) {

        Application.module('Phrases', function(Phrases, App, Backbone, Marionette) {

            Phrases.Controller = Marionette.Controller.extend({

                initialize: function() {
                    this.listenTo(App, 'phrase:edit', this.editPhrase)
                        .listenTo(App, 'phrase:save', this.savePhrase)
                        .listenTo(App, 'phrase:normalize', this.normalizePhrase)
                        .listenTo(App, 'phrase:setstate', this.setPhraseState)
                        .listenTo(App, 'phrases:setphrasestate', this.setPhrasesState)
                        .listenTo(App, 'phrases:saveallphrases', this.saveAllPhrases);
                },

                home: function() {
                    require(['apps/pages/Phrases/Home/home_controller'], function() {
                        (new Phrases.Home.Controller).show()
                    })
                },

                showTopPhrases: function() {
                    require(['apps/pages/Phrases/List/list_controller'], function() {
                        (new Phrases.List.Controller).topPhrases()
                    })
                },

                showAllPhrases: function() {
                    require(['apps/pages/Phrases/List/list_controller'], function() {
                        (new Phrases.List.Controller).allPhrases()
                    })
                },

                setPhrasesState: function(collection, flag) {
                    require(['apps/pages/Phrases/Edit/edit_controller'], function() {
                        (new Phrases.Edit.Controller).setPhrasesState(collection, flag)
                    })
                },

                saveAllPhrases: function(collection) {
                    require(['apps/pages/Phrases/Edit/edit_controller'], function() {
                        (new Phrases.Edit.Controller).savePhrases(collection, true)
                    })
                },

                editPhrase: function(model) {
                    require(['apps/pages/Phrases/Edit/edit_controller'], function() {
                        (new Phrases.Edit.Controller).edit(model)
                    })
                },

                savePhrase: function(model) {
                    require(['apps/pages/Phrases/Edit/edit_controller'], function() {
                        (new Phrases.Edit.Controller).savePhrase(model)
                    })
                },

                setPhraseState: function(model, flag) {
                    require(['apps/pages/Phrases/Edit/edit_controller'], function() {
                        (new Phrases.Edit.Controller).setPhraseState(model, flag)
                    })
                },

                normalizePhrase: function(model) {
                    require(['apps/pages/Phrases/Edit/edit_controller'], function() {
                        (new Phrases.Edit.Controller).normalizePhrase(model)
                    })
                }
            });
        })
    }
);
