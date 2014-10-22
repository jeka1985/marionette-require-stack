define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            "phrase": "",
            "clck": 0,
            "ctr": 0,
            "price": "0",
            "state": "",
            "type": "",
            "description": ""
        }
    });
});
