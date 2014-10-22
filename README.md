marionette-require-stack
========================

#Overview

Yep, one more stack, **BUT** we resolved few issued you may be trapped in:

- Lazy module loading
- Multi routing
- Formalized file structure and naming convention


#Everything is module

**Module** its great feature in Marionette Framework, thats why its a seed for majority of app components we have.

- via Module Application is extended with new features 
```javascript
App.module('CoolFeature', function(CoolFeatur, App) {
  
  App.CoolFeature = function() {
    // lets make something cool
  }
});
```
- on Module base we build content sub-Apps like pages (big thank to Brian Mann)
```javascript
App.module('HomePage', function(CoolFeatur, App) {
  
  App.title.show(new App.Views.GreetingUserView({
    model: new App.Models.User({
      name: 'Mike',
      surname: 'Gorbachev'
    })
  }))
});
```

#Multi routing (alpha)

You may be trapped with multi - routers issue - then you have more then one router at once and the handlers on other routers then first does not fire as the route has happend and page fragment has not changed.
As a solution we have **subRouter**, build to resolve this issue - if you need module routing - extend its Route from subRouter. 

# Module Lazy Loading (alpha)

Application should load its page modules on demand, depends on url or hash. So AppManager does it - on history change it loads modules, start actual and stop prev. 



