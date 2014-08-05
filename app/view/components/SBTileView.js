Ext.define('MB_Sencha.view.components.SBTileView', {
    extend: 'Ext.DataView',
    xtype: 'sbtileview',
    requires: [
        'Ext.data.Store',
    ],
    width:'100%',
    height:'100%',
    config: {        
        baseCls: 'mb-tiled-view',
        itemTpl: "<span class='x-button-icon x-shown home'></span><span class='sbtileText'>{name}</span>",
        store:{
            fields: ['name'],
            data: [
                { name: 'Send 2 Benz' },
                { name: 'Message Center' },
                { name: 'Email Benz' },
                { name: 'Location service' },
            ]
        }
    }
});
