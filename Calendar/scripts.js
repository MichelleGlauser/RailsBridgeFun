$(document).ready(function () {
	var t= $('table');
	t.addClass('classy');

	var btn = $('#submitter');

	btn.on('click', function (evt) {
		evt.preventDefault();
		var name = $('[name="eventName"]').val();
		var day = $('[name="eventDay"]').val();
		console.log('Button clicked.');
		console.log($('input').text());
		if (name.length) {
			console.log('Name is ' + name);	
		}
		else {
			console.error('No name entered.');
			return;
		}
		if (day > 0) {
			console.log('Day is ' + day);	
		}
		else {
			console.error('No day entered.');
			return;
		}

		var offset = 1;

		$($('td')[offset + (day -1)]).append('<span class="event">' + name + '</span>');
	})
});

