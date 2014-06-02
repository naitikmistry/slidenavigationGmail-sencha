Ext.define('SlideNav.view.Navigation', {
    extend: 'Ext.List',
    xtype: 'navigation',
    modal: true,
    hideOnMaskTap: false,
    requires : ['Ext.data.Store'],
    config: {
        cls : 'side-list',
        width: '80%',
        itemTpl : '{title}',
        listeners:{
            initialize:function(ele){
                var me = this;
                var mainWidth = document.body.clientWidth;
                var subtractWidth = mainWidth - (mainWidth * 0.8);
                ele.element.on('drag',function(event){
                    SlideNav.app.getController('App').animatorCallRight(mainWidth, subtractWidth);
                })
            }

        },
        data : [
            {
                title : 'Item 1'
            },
            {
                title : 'Item 2'
            },
            {
                title : 'Item 3'
            }
        ]
    }
});

/*Ext.define('SlideNav.view.Navigation', {
    extend: 'Ext.Panel',
    xtype: 'navigation',
    requires: ['Ext.data.Store'],
    //modal: true,
    //hideOnMaskTap: false,
    config: {
        width: '80%',
        items: [
            {
                xtype: 'list',
                itemTpl: '{title}',
                data: [
                    {
                        title: 'Item 1'
                    },
                    {
                        title: 'Item 2'
                    },
                    {
                        title: 'Item 3'
                    }
                ]
            }
        ]
    }
});*/