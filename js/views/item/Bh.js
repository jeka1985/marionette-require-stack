define(
    [
        'application',
        'marionette',
        'tpl/tpl.bemjson',
        'tpl/tpl.bm'

    ],
    function(App, Marionette, bemjson) {

        return Marionette.ItemView.extend({

            getTemplate: function() {
                return App.bh.apply(bemjson(this.model))
            },

            ui: {
                btn: 'button'
            },
            events: {
                'click @ui.btn': function() {
                    alert('ok')
                }

            }
        });
    }
);
