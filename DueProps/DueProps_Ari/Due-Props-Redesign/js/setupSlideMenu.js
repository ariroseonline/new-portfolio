/* Author:

*/

$(document).ready(function(){

	var currentSet = 0;




	$('#play-button').click(function(){
		$('#video').fadeIn('slow');
	});

	$('#close-button').click(function(){
		$('#video').fadeOut('slow');
	});

	/**
	 * MENU OPTIONS (default values in parenthesis)
	 * ------------
	 * div:        Where the slide-menu will go. ("#menu-container")
	 * controls:   Where are the controls for the menu. ("#menu-controls")
	 * loader:     If you are using a loading graphic, the menu will hide it for you once loaded. If not,
	 *               set it to 'false' or ''. (false)
	 * x:          Total width of list item including margins and padding in px. (150)
	 * y:          Total height of list item including margins and padding in px. (150)
	 * start:      Index of <ul> to open first. (0)
	 * speed:      Speed of all animations in ms . (300)
	 * delay:      Delay between list item animations when transitioning in ms. (60)
	 * easing:     Type of easing to use for list item animations, use '' for no easing effect. ('')
	 *               FYI - "easeOutBackSmall" is a custom addition I made for this demo, it is not included in the
	 *               standard set of easing animations.
	 * easeIn:     Type of easing to use for initial drop-in animation, use '' for none. ('')
	 *               This demo includes the jQuery easing plugin: http://gsgd.co.uk/sandbox/jquery/easing/
	 *               Supported easing methods in the plugin are listed and demoed at the above url.
	 * preloadAll: Wait for all menu images to load before animating in, or just the first set? (false)
	 *               By default, with this set to false, the menu will wait until all images in the first menu set are
	 *               loaded before the beginning animation is fired. If set to true, it will wait for all menu images to load.
	 */

	var options = {
		div: "#menu-container",
		controls: "#menu-controls",
		loader: "#loading",
		x: 195,
		y: 200,
		easing: "easeOutBackSmall",
		easeIn: "easeOutBack",
		preloadAll: true
	};


	// var menu = new slideMenu(options);
	


	$(window).load(function(){
		menu = new slideMenu(options);
	});



	
	$('#meet-the-props-forward-button').click(function(){
		var $controls = $('ul#menu-controls');
		var to = $controls.find('a.active').parent().index() ; //find the active category and add one
	 	to = (to < $controls.children().length - 1) ? to+1 : 0;
		menu.switchTo(to);
	});
	
	$('#meet-the-props-backward-button').click(function(){
		var $controls = $('ul#menu-controls');
		var to = $controls.find('a.active').parent().index() ; //find the active category and add one
	 	to = (to > 0) ? to-1 : $controls.children().length - 1;
		menu.switchTo(to);
	});
	
	
	
	



	var hoverIntentConfig = {    
	     over: function(){
			$(this).find('.prop-front').fadeOut('fast');
		
	},    
	     interval: 75, // number = milliseconds delay before onMouseOut    
	     out: function(){
			$(this).find('.prop-front').fadeIn('fast');
			
	}   
	};
	
	$('#menu-container ul li').hoverIntent(hoverIntentConfig);
	
	

});



