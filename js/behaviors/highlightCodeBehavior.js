define(
    [
        'marionette'
    ],
    function(Marionette) {

        return Marionette.Behavior.extend({
            ui: {
                code: 'code'
            },
            onRender: function() {
                this.ui.code.each(function(i, code) {
                    hljs.highlightBlock(code);
                })
            }
        });
    }
);
