Router.configure({
	layoutTemplate: 'layout',
	//waitOn: function() { return Meteor.subscribe('journals'); }
});

Router.route('/', {name: "journalsList"});

Router.route('/new', {name: 'journalsNew'});

Router.route('/journals/:_id', {
	name: 'journalsPage',
	data: function() { return Journals.findOne(this.params._id); }
});

Router.route('/journals/:_id/edit', {
	name: 'journalEdit',
	data: function() { return Journals.findOne(this.params._id); }
});

var OnBeforeActions;

Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('index');
  } else {
    this.next();
  }
});