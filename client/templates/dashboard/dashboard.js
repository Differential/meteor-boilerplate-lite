Template.dashboard.rendered = function() {

};

Template.dashboard.events({
  "click [data-action='add-item']": function (e) {

    // Prevent default button click behavior
    e.preventDefault();

    // Insert the form data into the "Items" collection
    Items.insert({
      name: $("[name='name']").val(),
      rating: $("[name='rating']").val()
    });

    // Hide the bootstrap modal once we submit the form
    $('#addItemModal').modal('hide');
  }

});
