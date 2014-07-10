// create a MoonGame namespace to contain all the game variables
// use the revealing module pattern with IIFE
// IIFE: function expression, surrounded by (), then immediately invoked: ()
var MoonGame = (function() {
	// constants
	var NUM_BIRDS = 20;
	var BIRD_MAX_TOP = 70;
	var BIRD_MAX_LEFT = 92;

	// Bird constructor
	var Bird = function() {
	}
	Bird.prototype.create = function() {
		this.el = $('<i class="bird icon-twitter-bird">');
		this.el.css({
			top: Math.random()*BIRD_MAX_TOP + '%',
			left: Math.random()*BIRD_MAX_LEFT + '%'
		})
		return this.el;
	};

	// Penguin constructor
	var Penguin = function() {
	}
	Penguin.prototype.create = function() {
		this.el = $('<i class="penguin icon-plancast">');
		return this.el;
	};

	// Flock constructor
	var Flock = function(penguin) {
		this.penguin = penguin;
		this.birds = [];
	}
	Flock.prototype.create = function() {
		var newEL = $('<div class="flock">');
		newEL.append(this.penguin.create())
		newEL.css('bottom', this.birds.length*50)

		// Add new birds to the flock
		for (var i = 0; i < this.birds.length; i++) {
			newEL.append(this.birds[i].el)
		};

		if(this.el) {
			this.el.replaceWith(newEL)
		}
		this.el = newEL;
		return newEL;
	};
	Flock.prototype.addBirdClickHandler = function(bird) {
		var self = this;
		bird.el.on('click', function() {
			self.birds.push(bird)
			self.create()
		})
	};

	// declare array of free-flying birds
	var birds = [];
	var flock = null;

	var init = function() {

		// create the flock
		var penguin = new Penguin();
		flock = new Flock(penguin);
		$('.sky').append(flock.create());

		// create birds in the sky
		for (var i = 0; i <NUM_BIRDS; i++) {
			var bird = new Bird();
			var birdEl = bird.create();
			$('.sky').append(birdEl)
			birds.push(bird)
			flock.addBirdClickHandler(bird);
		}


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