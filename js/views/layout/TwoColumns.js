define(
    [
        'marionette',
        'text!tpl/layout/TwoColumns.html'
    ],
    function(Marionette, tpl) {
        return Marionette.LayoutView.extend({
            className: 'container container-two-cols',
            template: tpl,
            regions: {
                left: '.layout-left',
                right: '.layout-right'
            }
        });
    }
);
