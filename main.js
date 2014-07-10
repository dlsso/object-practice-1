// create a MoonGame namespace to contain all the game variables
// use the revealing module pattern with IIFE
// IIFE: function expression, surrounded by (), then immediately invoked: ()
var MoonGame = (function() {

	// declare array of free-flying birds
	var birds = [];
	var flock = null;

	var init = function() {
		console.log("test")
	}


	// return an object literal with the properties and methods that we want to reveal to the rest of the program
	// everything else remains private
	return {
		init: init
	}
})();



$(document).on('ready', function() {
	MoonGame.init();
});