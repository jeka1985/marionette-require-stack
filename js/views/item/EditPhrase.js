define(
    [
        'application',
        'marionette'
    ],

    function(App, Marionette) {

        return Marionette.ItemView.extend({
            template: false,
            initialize: function() {
                this._modelBinder = new Backbone.ModelBinder();
                this.on('render', function() {
                    this._modelBinder.bind(this.model, this.el);
                }, this)
            }
        });
    }
);
