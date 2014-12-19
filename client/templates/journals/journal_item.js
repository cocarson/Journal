Template.journalItem.events({
	"click .delete": function() {
		var journalId = this._id;
		var journal = Journals.findOne(journalId);
		if (confirm("Are you sure you want to delete this journal?"))
			Journals.remove(journalId);
	}
});