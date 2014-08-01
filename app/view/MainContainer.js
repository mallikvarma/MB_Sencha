Ext.define('MB_Sencha.view.MainContainer', {
    extend: 'Ext.TabPanel',
    xtype: 'maincontainer',
    requires: [
        'Ext.TitleBar',       
    ],

    config: {
        
        fullscreen:true,

        tabBar: {
            dock:'bottom',
            cls:'custom-title-bar',
            scrollable: {
                direction: 'horizontal',
                indicators: false
              }          
        }, 


        items: [
            {
                title: 'Home',
                xtype:'overview',
                label:'Overview',
                iconCls:'home',                
            },
            {
                title: 'Send2Benz',
                xtype:'send2benz',
                label:'Send2Benz',
                iconCls:'action'
            },
            {
                title: 'Concierge',
                html:'<b>View - 3</b>',
                label:'Concierge',
                iconCls:'organize'
            },
            {
                title: 'Dealer',
                html:'<b>View - 3</b>',
                label:'Dealer',
                iconCls:'user'
            },
            {
                title: 'More',
                html:'<b>View - 3</b>',
                label:'details',
                iconCls:'more'
            }
        ]
    }
});
