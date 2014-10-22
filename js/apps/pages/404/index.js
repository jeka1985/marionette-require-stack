define(
    [
        'application',
        'apps/pages/404/controller'
    ],
    function(Application) {

        Application.module('404', function() {

            this.startWithParent = false;

            this.addInitializer(function() {
                this.controller = new this.Controller;
                this.controller.show();
            })

            this.addFinalizer(function() {
                this.controller.destroy();
                delete this.controller;
            });

        })
    }
);
