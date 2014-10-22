define(
    [
        'application',
        'apps/pages/Phrases/controller',
        'apps/pages/Phrases/router'
    ],

    function(Application) {

        Application.module('Phrases', function() {

            this.startWithParent = false;

            this.addInitializer(function() {
                this.controller = new this.Controller;
                this.router = new this.Router({
                  controller: this.controller
                });
            });

            this.addFinalizer(function() {

                this.router.destroy()
                this.controller.destroy();
                delete this.controller;
                delete this.router;
            });
        })
    }
);
