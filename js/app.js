var $ = require('jquery');
require('jquery-bridget');
var Flickity = require('flickity-imagesloaded');
// make Flickity a jQuery plugin
$.bridget( 'flickity', Flickity );



$(document).ready(function(){
	var $projectsImages = $('.project-images').flickity({
	  // options
	  imagesLoaded: true,
	  wrapAround: true,
	  pageDots: false
	  // setGallerySize: true
	});
	
	// elements
	var $projectsNav = $('.projects-nav');
	var $projects = $('.project');
	$projects.hide();
	$projects.first().fadeIn(1000);

	$projectsNav.on('click', '.project-link', function(){
			var projectId = $(this).data('project-id');
			$projects.hide();
			var $project = $('.projects').find('[data-project-id=' + projectId + ']');
			$project.fadeIn(200, function() {
				var $projectsImages = $('.project-images').flickity({
			  // options
			  imagesLoaded: true,
			  wrapAround: true,
			  pageDots: false
			  // setGallerySize: true
			});
			});
				
	
	})
	// var flkty = $projects.data('flickity');

	// // update selected projectLinks
	// flkty.on('cellSelect', function() {
	//   $projectLinks.filter('.is-selected')
	//     .removeClass('is-selected');
	//   $projectLinks.eq( flkty.selectedIndex )
	//     .addClass('is-selected');
	// });

	// flkty.select(0);

	// // select cell on button click
	// $projectsNav.on( 'click', '.project-link', function() {
	//   var index = $(this).index();
	//   $projects.flickity( 'select', index );
	// });
	// // previous
	// $('.button--previous').on( 'click', function() {
	//   $projects.flickity('previous');
	// });
	// // next
	// $('.button--next').on( 'click', function() {
	//   $projects.flickity('next');
	// });



});


