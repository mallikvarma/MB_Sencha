Ext.define('MB_Sencha.view.Login', {
    extend: 'Ext.Panel',
    xtype: 'loginview',    
    requires: [
        'Ext.TitleBar',        
    ],
    listeners:[
        {
            element: 'element',
            delegate:'#submitBtn',           
            event: 'tap',
            fn:function(){
                console.log('firing the event');
                this.fireEvent('authenticateCommand', this);
            }
        }
    ],
    config: {       
        items: [{
                title: 'Mercedez Benz',
                iconCls: 'action',
                xtype:'titlebar',
                docked:'top'
            },
            {
                xtype: 'fieldset',
                title: 'Login',
                items: [
                        {
                            xtype: 'textfield',
                            name : 'username',
                            label: 'User Name'
                        },
                        {
                            xtype: 'passwordfield',
                            name : 'password',
                            label: 'Password'
                        },
                        {
                            xtype: 'textfield',
                            name : 'account',
                            label: 'Account Num'
                        },
                        {
                            xtype: 'button',
                            text : 'Submit',
                            id:'submitBtn'                            
                        }
                    ]
            },

        ]
    },

});
