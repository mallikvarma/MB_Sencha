Ext.define('MB_Sencha.controller.LoginController', {
    extend: 'Ext.app.Controller',
    config: {      

    	refs:{
    		loginView:'loginview'
    	},

    	control:{
    		loginView:{
    			authenticateCommand:"onLoginSubmit"
    		}
    	},

	 },

    onLoginSubmit:function(){
		console.log('switching to main view');
		 Ext.Viewport.animateActiveItem(1, { type: 'slide', direction: 'left' })
	},

	launch:function(){
		this.callParent(arguments);
	},

	init:function(){
		 this.callParent(arguments);
	}
});
