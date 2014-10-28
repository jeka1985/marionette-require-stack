define(
    [
        'application'
    ],
    function(Application) {

        Application
            .page('Home')
                .router({
                    '': 'showOverview',
                    'home': 'showOverview'
                })


    }
);
