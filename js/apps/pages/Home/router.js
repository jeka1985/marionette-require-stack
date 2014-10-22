define(
    [
        'application'
    ],

    function(Application) {

        Application.module('Home', function(Phrases, App) {
             Phrases.Router = App.Classes.ModuleRouter.extend({
                appRoutes: {
                    'home': 'showOverview'
                }
            })
        })
    }
);
