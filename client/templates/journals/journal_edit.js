Template.journalEdit.events({
	'submit form': function(e) {
		e.preventDefault();

		var currentJournalId = this._id;
		var journalProperties = {
			title: $(e.target).find('[name=title]').val(),
			content: $(e.target).find('[name=content]').val()
		}

		Journals.update(currentJournalId, {$set: journalProperties}, function(error) {
			if (error) {
				alert(error.reason);
			} else {
				Router.go('journalsList');
			}
		});
	}
});