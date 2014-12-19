Journals = new Mongo.Collection('journals');

Meteor.methods({
	journalInsert: function(journalAttributes) {
		check(Meteor.userId(), String);
		check(journalAttributes, {
			formattedDate: String,
			date: Date,
			content: String
		});

		var user = Meteor.user();
		var journal = _.extend(journalAttributes, {
			userId: user._id,
			author: user.username
		});
		var journalId = Journals.insert(journal);
		return {
			_id: journalId
		};
	}
});