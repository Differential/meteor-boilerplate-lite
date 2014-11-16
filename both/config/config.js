// -- Router Config --
Router.configure({
  layoutTemplate: 'appLayout',
  loadingTemplate: 'loading',
  progressSpinner : false
});

Router.plugin('loading', {loadingTemplate: 'loading'});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});

// Accounts Config
AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
