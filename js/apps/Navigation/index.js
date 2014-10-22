define(
    [
        'application',
        'views/item/Navigation'
    ],
    function(Application, NavigationView) {
        Application.module('Navigation', function(Navigation, App) {

            this.on('start', function() {
                App.navigation.show(new NavigationView)
            });

        })
    }
);
