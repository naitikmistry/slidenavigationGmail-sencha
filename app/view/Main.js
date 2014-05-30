Ext.define('SlideNav.view.Main', {
    extend: 'Ext.Container',

    xtype: 'main',

    config: {
        style: {
            zIndex: -1,
            position: 'absolute'
        },
        layout:{
            type: 'card',
            align: 'stretch'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Slide Navigation',
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'list',
                        ui: 'plain',
                        itemId: 'slideNavBtn',
                        id: 'slideNavBtn'
                    }
                ]
            },
            {
                xtype: 'panel',
                itemId: 'slideContainer',
                layout: 'card',
                id: 'slideContainer',
                items: [
                    {
                        xtype: 'panel',
                        html: 'Hello Welcome to The Design Shop.Sencha Touch is very good framework.'

                        //width: '80%'
                    }
                ]
                /*style: {
                    zIndex: -1,
                    position: 'relative'
                }*/
            }


        ]

    }
});
