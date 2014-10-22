define(['application', 'text!tpl/composite/Phrases.html', 'views/item/Phrase'], function(App, tpl, Phrase) {
    return Marionette.CompositeView.extend({
        ui: {
            switchOnCheckbox: ".all",
            switchOnBtn: ".switch-on",
            switchOffBtn: ".switch-off",
            switchSaveBtn: ".save-collection"
        },
        events: {
            "change @ui.switchOnCheckbox": function(e) {
                App.trigger('phrases:setphrasestate', this.collection, $(e.target).is(':checked'))
            },
            "click @ui.switchOnBtn": function() {
                App.trigger('phrases:setphrasestate', this.collection, true);
                this.ui.switchOnCheckbox.prop('checked', true);
            },
            "click @ui.switchOffBtn": function() {
                App.trigger('phrases:setphrasestate', this.collection, false);
                this.ui.switchOnCheckbox.prop('checked', false);
            },
            "click @ui.switchSaveBtn": function() {
                App.trigger('phrases:saveallphrases', this.collection)
            }
        },
        template: tpl,
        tagName: 'table',
        className: 'table phrases',
        childView: Phrase,
        childViewContainer: "tbody",
        emptyView: App.Classes.EmptyView
    })
});
