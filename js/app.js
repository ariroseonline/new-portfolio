var $ = require('jquery');
require('jquery-bridget');
var Flickity = require('flickity');
// make Flickity a jQuery plugin
$.bridget( 'flickity', Flickity );


$(document).ready(function(){
	var $projects = $('.projects').flickity({
	  // options
	  wrapAround: true,
	  pageDots: false
	});
	
	// elements
	var $projectsNav = $('.projects-nav');
	var $projectLinks = $projectsNav.find('.project-link');

	var flkty = $projects.data('flickity');

	// update selected projectLinks
	flkty.on('cellSelect', function() {
	  $projectLinks.filter('.is-selected')
	    .removeClass('is-selected');
	  $projectLinks.eq( flkty.selectedIndex )
	    .addClass('is-selected');
	});

	flkty.select(0);

	// select cell on button click
	$projectsNav.on( 'click', '.project-link', function() {
	  var index = $(this).index();
	  $projects.flickity( 'select', index );
	});
	// // previous
	// $('.button--previous').on( 'click', function() {
	//   $projects.flickity('previous');
	// });
	// // next
	// $('.button--next').on( 'click', function() {
	//   $projects.flickity('next');
	// });



});


