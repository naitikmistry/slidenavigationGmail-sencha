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
                listeners:{
                    initialize:function(ele){
                        var me = this;
                        var mainWidth = document.body.clientWidth;
                        var subtractWidth = mainWidth - (mainWidth * 0.8);
                        ele.element.on('drag',function(event){
                            if(event.direction.x == 1){
                                SlideNav.app.getController('App').getMain().query('#slideContainer')[0].setMasked({
                                    xtype: 'mask'
                                });
                                SlideNav.app.getController('App').animatorCallLeft(mainWidth, subtractWidth);
                            }
                            else if(event.direction.x == -1){
                                SlideNav.app.getController('App').animatorCallRight(mainWidth, subtractWidth);
                            }
                        });
                    }
                },
                items: [
                    {
                        xtype: 'panel',
                        html: 'Hello Welcome to The Design Shop.Sencha Touch is very good framework.'
                    }
                ]
            }
        ]
    }
});
