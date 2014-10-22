define(
    [
        'marionette',
        'behaviors/highlightCodeBehavior',
        'text!tpl/item/HowItWorks.html'
    ],
    function(Marionette, CodeBehavior, tpl) {
        return Marionette.ItemView.extend({
            behaviors: {
                codeHighlight: {
                    behaviorClass: CodeBehavior
                }
            },
            template: tpl
        });
    }
);
