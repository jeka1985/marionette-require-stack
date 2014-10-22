define(['backbone', 'models/Phrase'], function (Backbone, PhraseModel) {
    return Backbone.Collection.extend({
        url: 'index.html?savephrase',
        model: PhraseModel
    });
});
