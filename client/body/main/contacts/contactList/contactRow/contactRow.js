Template.contactRow.viewmodel(
  function(data) {
    return data;
  },
  {
    rowHover: false,
    rowClick: function() {
      var vm = ViewModel.byId("contacts");
      vm.selected(this._id());
    },
    category: function() {
      var cat = Categories.findOne(this.categoryId());
      return cat && cat.name;
    },
    imageUrl: function(){
      return Contacts.findOne(this._id()).imageUrl();
    },
    deleteTitle: function() {
      return "Delete '" + this.name() + "'";
    },
    delete: function() {
      var self = this;
      Client.alert({
        header: "Are you sure you want to delete '" + self.name() + "'?",
        description: "You're about to delete '" + self.name() + "'. Do you really want to delete it?",
        image: "trash",
        onApprove: function () {
          Contacts.remove(self._id());
        }
      });
    },
    cardViewModel: function() {
      return this;
    }
  },
  ['cardViewModel', 'rowHover']
);
