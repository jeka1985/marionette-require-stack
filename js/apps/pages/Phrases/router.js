define(
    [
        'application'
    ],
    function(Application) {

        Application.module('Phrases', function(Phrases, App) {

            Phrases.Router = App.ModuleRouter.extend({
                appRoutes: {
                    'phrases': 'showTopPhrases',
                    'phrases/home': 'showHomePhrases',
                    'phrases/fullist': 'showAllPhrases'
                }
            })
        })
    }
);
