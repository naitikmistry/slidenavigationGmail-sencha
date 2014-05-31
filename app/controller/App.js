Ext.define('SlideNav.controller.App',{
    extend: 'Ext.app.Controller',
    config:{
        refs:{
            main : 'main',
            navigation : 'navigation',
            slideContainer:'slideContainer',
            navBtn : '#slideNavBtn'
        },

        control : {
            navBtn : {
                tap : 'toggleNav'
            },

            navigation : {
                itemtap : function(list, index, target, record){
                    this.toggleNav();
                }
            }
        }
    },
    init: function() {
        this.counter = 0;
    },

    /**
     * Toggle the slide navogation view
     */
    toggleNav : function(){
        var me = this;
        var mainWidth = document.body.clientWidth;
        var subtractWidth = mainWidth - (mainWidth * 0.8);
        if(!me.getNavigation()) {
            Ext.create('SlideNav.view.Navigation');
        }
        if(this.counter == 0) {
            me.getMain().query('#slideContainer')[0].setMasked({
                xtype: 'mask'
            });
            me.animatorCallLeft(mainWidth, subtractWidth);
            this.counter = 1;
        }
        else {
            me.animatorCallRight(mainWidth, subtractWidth);
            setTimeout(function(){
                me.getMain().query('#slideContainer')[0].setMasked(false);
            }, 500);
            this.counter = 0;
        }
    },

    animatorCallLeft: function(mainWidth, subtractWidth) {
        var me = this;
        if(!me.getNavigation()){
            Ext.create('SlideNav.view.Navigation');
        }
        Ext.Viewport.add(me.getNavigation());
        me.getNavigation().show();
        Ext.Animator.run({
            element: me.getNavigation().element,
            duration: 500,
            easing: 'ease-in',
            preserveEndState: true,
            from: {
                left: -(mainWidth - subtractWidth)
            },
            to: {
                left: 0
            }
        });
    },

    animatorCallRight: function(mainWidth, subtractWidth) {
        var me = this;
        if(!me.getNavigation()){
            Ext.create('SlideNav.view.Navigation');
        }
        Ext.Animator.run({
            element: me.getNavigation().element,
            duration: 500,
            easing: 'ease-in',
            preserveEndState: true,
            from: {
                left: 0
            },
            to: {
                left: -(mainWidth - subtractWidth)
            }
        });
    }
});