Meteor.publish('jounals', function() {
	return Journals.find({flagged: false});
});