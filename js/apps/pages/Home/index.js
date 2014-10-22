define(
    [
        'application',
        'apps/pages/Home/controller',
        'apps/pages/Home/router'
    ],

    function(Application) {

        Application.module('Home', function() {

            this.startWithParent = false;

            this.addInitializer(function() {
                console.log('home start');

                this.controller = new this.Controller;
                this.router = new this.Router({
                  controller: this.controller
                });
            });

            this.addFinalizer(function() {
                console.log('home stop');
                this.router.destroy();
                this.controller.destroy();
                delete this.controller;
                delete this.router;
            });
        })
    }
);
