Template.header.events({
  "click [data-action='logout']": function (e) {
    e.preventDefault();

    // Log out of Meteor Accounts
    Meteor.logout();

    // Tell the router what page it should go to once we log out
    Router.go('/');
  }
});
