define(['application', 'marionette', 'text!tpl/item/Phrase.html'], function(App, Marionette, tpl) {
    return Marionette.ItemView.extend({
        className: 'phrase',
        tagName: 'tr',
        template: tpl,
        ui: {
            input: "input[type=text]",
            checkbox: "input[type=checkbox]",
            name: ".name"
        },
        events: {
            "change @ui.input": function() {
                App.trigger('phrase:save', this.model)
            },
            "click @ui.checkbox": function(e) {
                App.trigger('phrase:setstate', this.model, $(e.target).is(':checked'))
            },
            "click @ui.name": function() {
                App.trigger('phrase:edit', this.model)
            }
        },

        initialize: function() {
            this.model.on('change', this.render, this);
        },

        onRender: function() {
            this.model.get('state') == 'on' ?
                this.$el.addClass("active"):
                this.$el.removeClass("active");
        }
    });
});
