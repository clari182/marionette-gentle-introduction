ContactManager.module('ContactsApp.Edit', function(Edit, ContactManager, Backbone, Marionette, $, _){
  Edit.Contact = ContactManager.ContactsApp.Common.Views.Form.extend({
    initialize: function(){
      this.title = "Edit " + this.model.get('first_name') + " " + this.model.get('last_name');
    }
  });
});