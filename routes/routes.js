Router.route('home', { 
  path: '/'
});

Router.route('settings', {
  path: '/settings'
});

Router.route('user', {
  path: '/:username',
  data: function() {
    return Meteor.users.findOne({username: this.params.username});
  }
});

Router.route('article', {
  path: '/:username/:_id',
  data: function() {
    var user = Meteor.users.findOne({username: this.params.username});
    return Articles.findOne({_id: this.params._id, user_id: user._id});
  }
});