define(
    [
        'application'
    ],

    function(App) {

        App.module('ModuleManager', function(ModuleManager, Application, Backbone, Marionette) {
            var currentPageModule = false,
                stopModule = function(name) {
                    if (name) {
                        Application.module(name).stop();
                        Application.trigger('module:stop', name);
                    }
                },
                startModule = function(name) {
                    Application.module(name).start();
                    Application.trigger('module:start', name);
                };

            ModuleManager.getModuleNameByUrl = function() {
                var name = Backbone.history.getHash().split('/')[0];
                return name ? (name.charAt(0).toUpperCase() + name.slice(1)) : 'Home'
            };

            ModuleManager.switchModule = function(name) {

                if (currentPageModule !== name) {
                    stopModule(currentPageModule);
                    startModule(name);

                    currentPageModule = name;
                }
            };

            ModuleManager.requireModule = function(name, callback) {
                require(['apps/pages/' + name + '/index'],
                    callback.bind(this),
                    function() {
                        require(['apps/pages/404/index'], function() {
                            ModuleManager.switchModule('404');
                        })
                    }
                );
            };

            ModuleManager.FrontRouter = Marionette.AppRouter.extend({

                routes: {
                    '*any': 'loadModule'
                },

                loadModule: function() {
                    var name = ModuleManager.getModuleNameByUrl();

                    ModuleManager.requireModule(name, function() {
                        ModuleManager.switchModule(name);
                    })
                }
            });

            ModuleManager.addInitializer(function() {
                new ModuleManager.FrontRouter;
            });

            ModuleManager.addFinalizer(function() {
                delete ModuleManager.FrontRouter;
            });
        });
    }
);
