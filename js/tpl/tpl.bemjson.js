define(function(){

    return function(model) {

        return  {
            block: 'my',
            content: [
                {
                    block: 'button-some',
                    content: model.get('some')
                },
                {
                    block: 'some-other',
                    content: [
                        {
                            elem: 'in-one',
                            content: 'bingo'
                        }
                    ]
                }
            ]
        }
    }
});
