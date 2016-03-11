/*! --- Necesario para navegadores que no son IE usando shim --- !*/
-1!==dialogo.indexOf("no-IE")&&(document.matchesSelector=function(a){a=document.documentElement.matchesSelector(a);return a.length?a[0]:null},document.matches=function(a){a=document.documentElement.matches(a);return a.length?a[0]:null},document.querySelectorAll=function(a){return document.documentElement.querySelectorAll(a)},document.querySelector=function(a){a=document.querySelectorAll(a);return a.length?a[0]:null},document.getElementsByTagName=function(a){a=document.documentElement.getElementsByTagName(a);
return a.length?a[0]:null});
/*! Preload !*/
(function($) {
  $(window).on('load', function() {

	    setTimeout(function() {
	      $("#preload").animate({
			  opacity: 0
			}, 1000, 'ease-out');
	    }, 400);

	 });
  
})( Zepto );