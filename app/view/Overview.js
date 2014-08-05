Ext.define('MB_Sencha.view.OverView', {
    extend: 'Ext.Panel',
    xtype: 'overview',
    requires: [
        'Ext.TitleBar',        
    ],
    config: {   

        items:[
               {
                 docked: 'top',
                 xtype: 'titlebar', 
                 cls:'custom-title-bar',                
                 title: 'Home'
                },
                {
                    centered:true,
                    html: "<img src='resources/images/keyfob_120_english_010713.png'></img>"
                },
             ]
        }
});
