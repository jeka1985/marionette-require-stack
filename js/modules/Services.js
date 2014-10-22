define(
    [
        'application'
    ],

    function(Application) {

        Application.module('Services', function(Services, App, Backbone, Marionette, $, _) {

            App.reqres.setHandler("normalizePhrase", function(phraseId, callback, ctx) {
                $.ajax({
                    type: "GET",
                    dataType: "JSON",
                    url: 'normalizer.json',
                    data: {
                        phrase: phraseId
                    },
                    success: callback.bind(ctx)
                });
            });
        });

    }
);
