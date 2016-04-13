var count = 0;
var randomNumber = 0;
var guess = 0;

$(document).ready(function(){

	generateRandomNumber();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("#input-and-button").submit(function(event) {
  		event.preventDefault();
  	});

  	$(".new").on('click', function () {
		window.location.reload();
	})

  	$('#guessButton').click(function() {
  		guess = $('#userGuess').val();

		if (guess == '') {
			alert("Type in a number between 1-100");
		} else {
			//$('#userGuess').val('');
			addGuessToList();
			updateGuessCount();
			getTemperature();
		}
  	});

});

function generateRandomNumber() {
	randomNumber = Math.floor((Math.random() * 100) + 1);
	console.log('The random number is ' + randomNumber);
}

function addGuessToList() {
	var guess = $('#userGuess').val();
	$('#guessList').append('<li>' + guess + '</li>');
}

function updateGuessCount() {
	count++;
	$('#count').text(count);
}

function getTemperature() {
	var difference = 0;

	if (guess == randomNumber) {
		$('#feedback').text("You won!");
	} else {
		difference = Math.abs(guess - randomNumber);
	} 

	if (difference >= 50) {
		$('#feedback').text("Ice Cold");
	} else if (difference > 30 && difference <= 50) {
		$('#feedback').text("Cold");
	} else if (difference > 20 && difference < 30) {
		$('#feedback').text("Getting Warmer");
	} else if (difference > 10 && difference < 20) {
		$('#feedback').text("Hot");
	} else if (difference >= 1 && difference < 10) {
		$('#feedback').text("Burning Hot");
	}
}
