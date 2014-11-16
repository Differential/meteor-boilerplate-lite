// Define Collection
Items = new Mongo.Collection('items');

// Collection Helpers https://github.com/dburles/meteor-collection-helpers
Items.helpers({

});

// Collection Hooks https://github.com/matb33/meteor-collection-hooks
Items.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
