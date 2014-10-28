define(
    [
        'application',
        'views/layout/OneColumn',
        'views/item/HowItWorks',
        'views/item/Bh'
    ],
    function(Application, OneColLayout, HowItWorks, BhView) {

        Application
            .page('Home')
                .views({
                    Layout: OneColLayout,
                    HowItWorks: HowItWorks,
                    BhView: BhView
                })


    }
);
