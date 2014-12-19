
Template.journalsList.helpers({
	journals: function() {
		return Journals.find({userId: Meteor.userId()}, {sort: {date: -1}});
	}
});