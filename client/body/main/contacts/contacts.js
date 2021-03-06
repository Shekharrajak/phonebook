Template.contacts.viewmodel('contacts', {
  editMode: false,
  selected: null,
  changeEditMode: function(edit) {
    if (edit === this.editMode()) return;
    if (!edit) this.selected(null);
    this.editMode(edit);
  },
  autorun: function() {
    if (this.selected() && Client.subscriptions.mainReady) {
      this.changeEditMode(!!Contacts.findOne(this.selected()));
    }
  },
  editText: function() {
    return this.selected() ? "Edit Contact" : "New Contact";
  }
}, ['editMode']);
