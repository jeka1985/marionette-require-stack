define(['application'], function(App) {

    App.bh.match('button-some', function(ctx, json) {

        ctx.tag('button');
        console.log(ctx, json);
    });

    App.bh.match('my', function(ctx, json) {

        ctx.tag('b');
    });

    App.bh.match('some-other__in-one', function(ctx, json) {
        console.log(ctx, json);
        ctx.tag('a')
            .attrs({
                href: 'ctx.data.some'
            });
    });

});
