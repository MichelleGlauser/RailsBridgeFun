var colors = [
    '#ff757a',
    '#ebadff',
    '#3ce9eb',
    '#6af0b0',
    '#ff8350'
  ]

window.setUpEasel = function() {
	var squareString = "";
	for(var i=0; i < 500; i++) {
		squareString+='<div class="square"></div>';
	}
	$('.easel').append(squareString)
}

window.visitBox = function () {
	$('.easel').on('mouseenter', '.square', function() {
		var chosenNumber = Math.floor(colors.length * Math.random()) ;
		// console.log(chosenNumber);
		$($(this)).css('background-color', colors[chosenNumber]);
	})
}

window.newColor = function () {
	$('#submitter').on('click', function (evt) {
		evt.preventDefault();
		var colorInput = $('[name="color_input"]').val();
		colors.push(colorInput);
	})
}


// Shawna's tips: .on is better for performance than 
// .click or .mouseenter because it makes one event handler 
// for everything rather than for each object. 
// 	Using "submit" on buttons is better than "click" because 
// you can press Enter to submit instead of only with a click.
