Template.home.helpers({
  articles: function() {
    return Articles.find({status: "published"});
  },
  recentArticles: function() {
    return Articles.find({status: "published"}, {sort: {created: 1}, limit: 3});
  }
})