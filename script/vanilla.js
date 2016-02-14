/*! Necesario para navegadores que no son IE usando CSS_selector_engine.js !*/
if( dialog.indexOf('no-IE') != -1 ) { 
	document.querySelectorAll = function (selectors) {
		return document.documentElement.querySelectorAll(selectors);
	}
	document.querySelector = function (selectors) {
	    var elements = document.querySelectorAll(selectors);
	    return (elements.length) ? elements[0] : null;
	  };

	document.getElementsByTagName = function (selectors){
		var elements = document.documentElement.getElementsByTagName(selectors);
	    return (elements.length) ? elements[0] : null;
	}
}

/*! Full Vanilla like Zepto: $.fadeIn(), $.prepend(), $.prependTo() !*/
function fadeIn(el, duration, display) {
    var s = el.style || el[0].style, step = 25/(duration || 300);
    s.opacity = s.opacity || 0;
    s.display = display || "block";
    (function fade() { (s.opacity = parseFloat(s.opacity)+step) > 1 ? s.opacity = 1 : setTimeout(fade, 25); })();
}

function fadeOut(el, duration) {
    var s = el.style || el[0].style, step = 25/(duration || 300);
    s.opacity = s.opacity || 1;
    (function fade() { (s.opacity -= step) < 0 ? s.display = "none" : setTimeout(fade, 25); })();
}

if( dialog.indexOf('html5') != -1 || dialog.indexOf('es5') != -1) { 
	var ele = document.getElementById('preload');
	if(ele.style.display != 'none') {
		fadeOut(ele, 3000);
	}
}else {
	window.setTimeout(function () {
		var el = document.getElementById('preload');
		el.innerHTML += '<div class="isa_error">Esto no debe demorar más que 1 segundo. Vuelve a cargar la página.</div>';
		var div = document.querySelector('.isa_error');
		fadeIn(div, 1000);
	}, 800);
}