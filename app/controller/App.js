Ext.define('SlideNav.controller.App',{
    extend: 'Ext.app.Controller',
    config:{
        refs:{
            main : 'main',
            navigation : 'navigation',

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
        console.log('adkg');

        var me = this;
        var mainWidth = document.body.clientWidth;
        var subtractWidth = mainWidth - (mainWidth * 0.8)

        if(!me.getNavigation()) {
            Ext.create('SlideNav.view.Navigation');
        }
        if(this.counter == 0) {
            //me.getMain().query('#slideContainer')[0].animateActiveItem(me.getNavigation() , {type: 'slide', direction: 'right'});
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
        
            this.counter = 1;
            
            
            //me.getNavigation().show({type: 'slide', direction: 'right'});
            //this.counter = 1;
        }
        else {
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
            this.counter = 0;
        }

        //console.log(me.getMain().query('#slideContainer')[0].element);

        /*console.log(me.getMain().query('#slideContainer')[0].getActiveItem())
        if(me.getMain().query('#slideContainer')[0].getActiveItem().hide()){
            me.getMain().query('#slideContainer')[0].getActiveItem().show();
        }
        else {
            me.getMain().query('#slideContainer')[0].getActiveItem().hide();
        }*/

        //Ext.Viewport.setActiveItem(me.getNavigation());
       /* me.getMain().query('#slideContainer')[0].setActiveItem(me.getNavigation());
        Ext.Animator.run({
            element: me.getNavigation().element,
            duration: 500,
            easing: 'ease-in',
            preserveEndState: true,
            from: {
                height: '0px'
            },
            to: {
                height: '250px'
            }
        });*/
        //
    }
});