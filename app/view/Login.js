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
        layout:'vbox',
        cls:'mb-login-view',    
        items: [{
                title: '',
                xtype:'titlebar',
                cls:'mb-title-bar',
                docked:'top'
            },
            {
                xtype: 'fieldset',
                title: '',
                cls:'login-form',
                items: [
                        {
                            xtype: 'textfield',
                            name : 'Account',
                            label: 'Account'
                        },
                        {
                            xtype: 'passwordfield',
                            name : 'PIN',
                            label: 'PIN'
                        },

                    ]
            },
            {
                html:"<input type='checkbox'> Rememeber me",
                cls:'remember-me',
                margin:10,
            },
            {
                html:"(Forgot your mbrace account number or PIN?<br>Call the Mercedes-Benz mbrace Response Center at 1(866)990 9007 or press the i-Button in your vehicle.)",
                cls:'login-info',
                
            },
            {
                xtype: 'button',
                text : 'Login',
                id:'submitBtn',
                width:'50%',

            }
        ]
    },

});
