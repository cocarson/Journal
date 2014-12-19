Template.journalsNew.events({
	'submit form': function(e) {
		e.preventDefault();
		var monthNames = [ "January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December" ];

		var d = new Date();
		var dateFor = monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
		var journal = {
			formattedDate: dateFor,
			date: d,
			content: $(e.target).find('[name=content]').val()
		};

		Meteor.call('journalInsert', journal, function(error, result) {
			if (error) 
				return alert(error.reason);

			Router.go('journalsList', {_id: result._id});
		});
	}
});