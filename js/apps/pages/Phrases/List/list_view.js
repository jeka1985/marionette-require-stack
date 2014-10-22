define(
    [
        'application',
        'views/item/Phrase',
        'views/composite/Phrases',
        'views/layout/OneColumn'
    ],
    function(Application, PhraseView, PhrasesView, LayoutView) {

        Application.module('Phrases.List', function(PhrasesList) {
            PhrasesList.Layout = LayoutView;

            PhrasesList.PhraseView = PhraseView;

            PhrasesList.PhrasesView = PhrasesView;
        })
    }
);
