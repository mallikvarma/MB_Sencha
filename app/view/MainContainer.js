Ext.define('MB_Sencha.view.MainContainer', {
    extend: 'Ext.tab.Panel',
    xtype: 'maincontainer',
    requires: [
        'Ext.TitleBar',       
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Over View',
                html:'<b>View - 1</b>',
                label:'Overview',
                icon:'home'
            },
            {
                title: 'GPS',
                html:'<b>View - 2</b>',
                label:'gps'
            },
            {
                title: 'Details',
                html:'<b>View - 3</b>',
                label:'details'
            }
        ]
    }
});
