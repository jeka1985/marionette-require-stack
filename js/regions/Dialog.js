define(
    [
        'marionette'
    ],
    function(Marionette) {
        return Marionette.Region.extend({
            onShow: function(view) {

                view.$el.addClass('modal');

                view.$el.modal();

                view.on('before:destroy', function() {
                    view.$el.modal('hide');
                })

                view.$el.on('hidden.bs.modal', function (e) {
                    view.destroy();
                })

            }
        })
    }
);
