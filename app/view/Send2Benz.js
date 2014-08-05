Ext.define('MB_Sencha.view.Send2Benz', {
    extend: 'Ext.Container',
    xtype: 'send2benz',
    requires: [
        'Ext.TitleBar',
        'Ext.data.Store',
        'Ext.DataView',
        'MB_Sencha.view.components.SBTileView'        
    ],
    fullscreen:true,

    config: { 
        listeners:{
            initialize:function(){
                var item =  Ext.create('MB_Sencha.view.components.SBTileView');
                this.add(item);
            }

        },
        items:[
               {
                 dock: 'top',
                 xtype: 'titlebar', 
                 cls:'custom-title-bar',                
                 title: 'Send2Benz'
                }
                
             ]
        }
});
