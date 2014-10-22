define(
    [
        'marionette',
        'text!tpl/layout/OneColumn.html'
    ],
    function(Marionette, tpl) {
        return Marionette.LayoutView.extend({
            className: 'container container-one-col',
            template: tpl,
            regions: {
                center: '.layout-center'
            }
        });
    }
);
