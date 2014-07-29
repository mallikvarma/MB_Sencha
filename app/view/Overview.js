Ext.define('MB_Sencha.view.OverView', {
    extend: 'Ext.panel.Panel',
    xtype: 'overview',
    requires: [
        'Ext.TitleBar',        
    ],
    config: {      
        items:[
               {
                 docked: 'top',
                 xtype: 'titlebar',
                 title: 'Vehicle Overview'
                },
                {
                   html: "Vehicle Report Goes Here"
                },
             ]
        }
});
