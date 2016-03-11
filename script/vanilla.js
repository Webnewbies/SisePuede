/*! INICIO de Vanilla JS !*/

/*! like Zepto: $.fadeIn(), $.fadeOut(), $.prepend(), $.prependTo() !*/
function fadeIn(el, duration, display) {
    var s = el.style || el[0].style,
    	step = 25/(duration || 300);
    s.opacity = s.opacity || 0;
    s.display = display || "block";
    (function fade() { (s.opacity = parseFloat(s.opacity)+step) > 1 ? s.opacity = 1 : setTimeout(fade, 25); })();
}

function fadeOut(el, duration) {
    var s = el.style || el[0].style,
    	step = 25/(duration || 300);
    s.opacity = s.opacity || 1;
    (function fade() { (s.opacity -= step) < 0 ? s.display = "none" : setTimeout(fade, 25); })();
}

var if_show_fade = function(){
		var ele = document.getElementById('preload');
		if(ele.style.display != 'none') {
			fadeOut(ele, 2000);
		}
	}

if( dialogo.indexOf('html5') !== -1 || dialogo.indexOf('xhtml5') !== -1 ) { 
	if_show_fade();
} else if( dialogo.indexOf('es5') !== -1 ){
		window.setTimeout(function () {
			if_show_fade();
		}, 800);
	} else {
		window.setTimeout(function () {
			var el = document.getElementById('preload');
			el.innerHTML += '<div class="isa_error">Esto no debe demorar más que 1 segundo. Vuelve a cargar la página.</div>';
			var div = document.querySelector('.isa_error');
			fadeIn(div, 1000);
		}, 800);
	}
