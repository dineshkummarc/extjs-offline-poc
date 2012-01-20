Ext.define('AM.view.user.Form', {
  extend: 'Ext.window.Window',
  alias : 'widget.userform',

  title : 'Add / Edit User',
  layout: 'fit',
  autoShow: true,

  initComponent: function() {
    this.items = [{
      xtype: 'form',
      items: [{
        xtype: 'textfield',
        name : 'first_name',
        fieldLabel: 'First Name'
      }, {
        xtype: 'textfield',
        name : 'last_name',
        fieldLabel: 'Last Name'
      }, {
        xtype: 'textfield',
        name : 'email',
        fieldLabel: 'Email'
      }, {
        xtype: 'hidden',
        name : 'id',
        fieldLabel: 'id'
      }]
    }];

    this.buttons = [{
      text: 'Save',
      action: 'save'
    }, {
      text: 'Cancel',
      scope: this,
      handler: this.close
    }];

    this.callParent(arguments);
  }
});

