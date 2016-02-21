/*! Preload !*/

(function($) {
  $(window).on('load', function() {

	    setTimeout(function() {
	      $("#preload").animate({
			  opacity: 0
			}, 1000, 'ease-out');
	    }, 400);

	 });
  
})( lib );