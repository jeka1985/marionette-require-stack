define(
    [
        'application',
        'apps/pages/Home/controller',
        'apps/pages/Home/router'
    ],
    function(Application) {


        /*
        App.module('home')
            .Router({
                'some': 'doStuff',
                'other/qwe': 'anotherStuff'
            })
            .Views({
                layout: SomeView,
                list: OtherView,
                item: ThirdView
            })
            .Controller({
                doStuff: function() {

                },

                anotherStuff: function() {

                }
            })



        App.module('home').Router({
            'some': 'doStuff',
            'other/qwe': 'anotherStuff'
        })

        App.module('home').Controller({
            doStuff: function() {

            },
            anotherStuff: function() {

            }
        })

         App.module('home').Views({
            layout: SomeView,
            list: OtherView,
            item: ThirdView
         })















        console.log(Application.module('Home', function() {

            this.startWithParent = false;

            this.addInitializer(function() {
                this.controller = new this.Controller;
                this.router = new this.Router({
                  controller: this.controller
                });
            });

            this.addFinalizer(function() {
                this.router.destroy();
                this.controller.destroy();
                delete this.controller;
                delete this.router;
            });
        }).router());
         */




        Application
            .pageModule('Home', {
                onStart: function() {
                    console.log('bingo')
                }
            })
            .router({
                '': 'showOverview',
                'home': 'showOverview'
            })
            .controller({
                showOverview: function() {
                    alert('bingo')
                }
            })


        console.log(Application.Home)

    }
);
