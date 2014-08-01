Ext.define('MB_Sencha.view.Send2Benz', {
    extend: 'Ext.Panel',
    xtype: 'send2benz',
    requires: [
        'Ext.TitleBar',        
    ],
    fullscreen:true,

    config: { 
        layout:{
            type:'vbox',
            pack:'center',
            align:'center'
        },         
        items:[
               {
                 dock: 'top',
                 xtype: 'titlebar', 
                 cls:'custom-title-bar',                
                 title: 'Send2Benz'
                },
                 {xtype:'button', text:'Search for destination', margin:2},
                 {xtype:'button', text:'Enter street address', margin:2},
                 {xtype:'button', text:'Find address in contacts', margin:2},
                 {xtype:'button', text:'Send my current', margin:2}               
             ]
        }
});
