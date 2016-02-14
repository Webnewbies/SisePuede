# SisePuede v0.4
Holas! Esto es **SisePuede!**, un repositorio donde explico y motivo a utilizar las bondades de ECMASCript5+ y HTML5+ incluyendo en navegadores muy antiguos *(siempre y cuando el navegador permita la creación de elementos html5)*, haciendo alusión de lo que se cree no poder, pero que en realidad **si se puede**.

... mi nombre es Pedro (**Peter** :), y les contaré de qué se trata todo esto.

## MENU del día: ECMAScript 5+ y HTML5+ para todos
Los objetivos del menú, es tratar a lo mayor posible; cabalgar en todos los navegadores.

### Menú
En la lista del menú tenemos:

>1. [**Vanilla JS si**, <del>no legacys</del>](#vanilla)
>2. [Zepto 1.1.+, jQuery 3.x, MooTools 1.6.x para todos](#library)
>3. [ECMAScript 5 y HTML5.1 please](#es5-html5)
>4. [ECMAScript 6 ya es una realidad](#es6)

### Herramientas

OK. Para hacer fácil la tarea, mencionaré las herramientas que tengo para preparar:

* OS: Mac OS X El Capitán v10.11.1
* Virtuals: VMware
* Browsers: Opera v[9, 35], Firefox v[4.0.1, 15, 43], Chrome v[48], Safari v[9.0.1], IE v[6,7] en XP SP3, IE v[11] y EDGE 12 en Windows 10 HE
* Editors: Sublime Text 3 y MacDown 0.5.5
* Dispositivos Móviles: BB Curve con bb5 y bb6, iPhone4,5y6 con ios9, Mobile. 

### Receta

Lo básico para hacer nuestro menú, es tener a la mano:

* HTML5 Fix
* DOM4
* Polyfill ES5+
* Bibliotecas con similitud de uso.

### Ir de Compras

Ahora me toca ir al mercado. En [HTML5 Polyfill](http://html5polyfills.com) me encontré con muchas cosas interesantes, como también en [HTML5 Cross Browser Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills). Pero probando y probando; solo me quedé con las que me han funcionado, entre los descartados son: ES5: [es5-shim v4.5.2](https://github.com/es-shims/es5-shim), selector: [Zest](https://github.com/chjj/zest) muy bueno por cierto, Legacy HTML5: [HTML5 shiv](https://github.com/aFarkas/html5shiv) y DOM4: [DOM4](https://github.com/WebReflection/dom4).

### Ingredientes

Lo bueno del todo, es que se hace conseguido con mucho tino, paciencia y esmero; lo siguiente:

* `HTML5 Fix`: [Hagenburger](http://www.hagenburger.net/BLOG/Simple-HTML5-Fix-for-IE.html)
* `DOM4`: [CSS_Selector_Engine](https://github.com/termi/CSS_selector_engine)
* `Polifyll para ES5+`: [ES5-DOM-Shim](https://github.com/termi/ES5-DOM-SHIM)
* `Bibliotecas`: [Zepto](http://zeptojs.com), [jQuery](http://jquery.com/), [MooTools](http://mootools.net), y [Otros](https://cdnjs.com/libraries) por probar.

### Elaboración

A continuación empezaremos la cocción de nuestros alimentos.

#### Estructura

##### .. de archivos

Crear una estructura básica de archivos para un sitio Web:

	│───index.html
	│───html5.html
	│───a.ielt.htc
	│───es5.html
	└───[css]
   		├───main.css
    	├───no-js.css
    	├───no-lib.css
    └───[script]
   		├───main.js
    	├───legacy.js
    	├───vanilla.js
    └───[vendor]
   		├───zepto.js
    	├───modernirz.js
    	└───[lecagy]
   			├───a.js
    		├───a.ie8.js
    		├───a.ielt8.js
    		├───CSS_selector_engine.js	
    
##### .. del documento HTML5

La estructura base para nuestros archivos HTML5 serán:

	<!DOCTYPE html>
	<html lang="en">
	 <head>
		<meta charset="UTF-8">
		<title>Document</title>
		<!-- {BLOQUE HEAD} -->
	 </head>
	 <body>
		<!-- {BLOQUE MAIN} -->
		
		<!-- {BLOQUE JAVASCRIPT} -->
	 </body>
	</html>

#### Saborizantes

Ahora le ponemos sabor. 
Para escribir código bajo el estándar `ECMAScript versión 5+`, es necesario introducir las siguientes instrucciones dentro de los bloques según plantillas:

##### <a name="vanilla"></a>index.html

Crearemos un documento html5 que sea capáz de interpretar `ECMAScript 5+`.

`<!-- {BLOQUE HEAD #1} -->`

```
<!-- // TODO nuestro estilo CSS2+ -->
<link rel="stylesheet" href="css/main.css">

<!-- http://modernizr.com/download/?-es5-setclasses -->
<script src="script/vendor/modernizr-custom.min.js"></script>

<script>
	var // Nos servirá para agregar el estado de cada instrucción para luego ser usado
		dialog = [];

	if( !Modernizr.es5 ) {

		dialog.push('no-es5');

		/*! @ref http://www.hagenburger.net/BLOG/Simple-HTML5-Fix-for-IE.html !*/
		'article aside dialog figcaption figure footer header main nav section mark template'.replace(/\w+/g,function(n){document.createElement(n)});

		/*! @ref http://browserhacks.com/#hack-51eca7694aed2dcc3266bc9c8de72872 !*/
		if ( /*@cc_on!@*/true ) {
	
			/*! @ref https://github.com/termi/CSS_selector_engine !*/
			document.write( '\u003Cscript src="script/vendor/legacy/CSS_selector_engine.js">\u003C/script>' );

			// {Aquí se puede agregar más polyfills para ECMAScript <= 5: http://html5polyfills.com}

			dialog.push('no-IE');
		} else {
			/*! https://gist.github.com/jalbertbowden/5174156 !*/
			var ieVersion = ( !!window.ActiveXObject && +( /msie\s(\d+)/i.exec( navigator.userAgent )[1] ) ) || NaN;

			/*! @ref https://github.com/termi/ES5-DOM-SHIM !*/
			if ( ieVersion == 8 ) document.write( '\u003Cscript src="script/vendor/legacy/a.ie8.js">\u003C/script>' );
			if ( ieVersion < 8 ) document.write( '\u003Cscript src="script/vendor/legacy/a.ielt8.js">\u003C/script>' );

			// {Aquí se puede agregar más polyfills sólo para IE<10: http://html5polyfills.com}

			ieVersion || dialog.push('IE');
		}
				
		/*! Añade métodos de ECMACScript 5/6 !*/
		document.write( '\u003Cscript src="script/vendor/legacy/a.js">\u003C/script>' );
	}
	dialog.push('es5');
</script>

<!-- // Cuando el navegador tiene desactivado el motor de Javascript -->
<noscript><link rel="stylesheet" href="css/no-js.css"></noscript>

```

`<!-- {BLOQUE MAIN} -->`

```
<header role="banner">
	<h1>¡Si se puede!</h1>
	<h2>no-Legacys</h2>
</header>
<main role="main">
	<blockquote cite="http://www.ecma-international.org/ecma-262/5.1/">
		<p>¡Empieza ahora a programar con <mark>ECMAScript 5!+</mark> :) </p>
	</blockquote>
</main>
<footer role="contentinfo">
	<p><em><span>Si te pones a pensar</span><span>,</span> <span>puedes hacer mucho más con esto..</span></em></p>
</footer>

<div id="preload">
	<div id="preload-content">
		<p>Bienvenido...</p>
	</div>
	<p id="browsehappy">Estás usando un navegador <strong>desactualizado</strong>. Por favor, <a href="http://browsehappy.com/">actualice tu navegador</a> para mejorar la experiencia.</p>
</div>
```

`<!-- {BLOQUE JAVASCRIPT} -->`

```
<script>
	/*! TODO Plain JS !*/
	document.write( '\u003Cscript type="text/javascript" src="script/' + ( dialog.indexOf('es5') != -1 ? 'vanilla' : 'legacy' ) + '.js">\u003C/script>' );
</script>
```

##### <a name="library"></a>es5.html

Crearemos un documento html5 que sea capaz de entender `ECMAScript 5+` haciendo uso de cualquier biblioteca. Para este ejemplo, usaremos `Zepto v1.1.6`

`<!-- {BLOQUE HEAD} -->`

```
<!-- Añadimos: {BLOQUE HEAD #1} -->
<!-- // Cuando no se haya podido iniciar ninguna biblioteca -->
<link rel="stylesheet" href="css/no-lib.css">
```

`<!-- {BLOQUE JAVASCRIPT} -->`

```
<!-- // Aquí se puede iniciar usando cualquier biblioteca. 
		Podrias usar la dirección https://cdnjs.com/libraries/${LibraryName} 
		donde LibraryName = ['Zepto', 'jQuery', 'MooTools', ...params];
		-->
		
<!-- /zepto/?-event-fx_methods-fx -->
<script src="http://zeptojs.com/zepto-docs.min.js"></script>
<script>window.Zepto || document.write( '\u003Cscript src="script/vendor/zepto.js">\u003C/script>' )</script>

<script>
	var libFuncName = null;
	if (typeof Zepto === "undefined" && typeof $ === "function") {
			libFuncName = $;
		} else if ( typeof Zepto === "function" ) {
			libFuncName = Zepto;
			/*! En main.js se listan plugins y los propios !*/
			document.write( '\u003Cscript src="script/main.js">\u003C/script>' );
		} else {
			try {
				dialog.push('no-lib');
				/*! Agremamos .no-lib a la etiquena html si no se pudo cargar alguna biblioteca !*/
				document.body || ( document.body = document.getElementsByTagName('body')[0] );
    			document.documentElement || ( document.documentElement = document.body.parentNode || document.getElementsByTagName('html')[0] );
    			var h = document.documentElement;
    				h.nodeName.toLowerCase() === 'svg' ? h.className.baseVal += ' no-lib' : h.className += ' no-lib';
				 throw new TypeError( 'No se pudo cargar ninguna biblioteca' );
			} catch ( e ) {
				//console.log('Upss.. ' + e.message);
			}
		}
				
		/*! Opcional | TODO Plain JS !*/
		  document.write( '\u003Cscript type="text/javascript" src="script/' + ( libFuncName ? 'vanilla' : 'legacy' ) + '.js">\u003C/script>' );
</script>
```

##### <a name="#es5-html5"></a>html5.html

Si queremos diseñar una página cuya condición es, que los navegadores soporten características mínimas de `HTML5` y `ESMACScript5` sin hacer uso de polyfills. Recomiendo una posible solución:

`<!-- {BLOQUE HEAD} -->`

```
<!-- // TODO nuestro estilo CSS3+ -->
<link rel="stylesheet" href="css/main.css">

<!-- Añadimos la clase js al elemento HTML -->
<script>
	var dialog = [];
	document.documentElement.className += ' js';
</script>

<!-- // Cuando el navegador tiene desactivado el motor de Javascript -->
<noscript><link rel="stylesheet" href="css/no-js.css"></noscript>
```

`<!-- {BLOQUE MAIN} -->`

```
<header role="banner">
	<h1>¡Si se puede!</h1>
	<h2>no-Legacys</h2>
</header>
<main role="main">
	<blockquote cite="http://www.ecma-international.org/ecma-262/5.1/"><p>¡Empieza ahora a programar con <mark>ECMAScript 5!+ con FULL HTML5</mark> :) </p></blockquote>
</main>
<footer role="contentinfo">
	<p><em><span>Si te pones a pensar</span><span>,</span> <span>puedes hacer mucho más con esto..</span></em></p>
</footer>
<div id="preload">
	<div id="preload-content">
		<p>Bienvenido...</p>
		<p id="browsehappy">Estás usando un navegador <strong>desactualizado</strong>. Por favor <a href="http://browsehappy.com/">actualize su navegador</a> para una mejor experiencia.</p>
	</div>
</div>
```

`<!-- {BLOQUE JAVASCRIPT} -->`

```
<script>
<!--
	(function( global, document, undefined ) {
		'use strict';

		var HTML5test 			= true,
			isCanvasSupported	= !!isElementSupported('canvas');

		/*
		* @ref https://github.com/ryanmorr/is-element-supported
		* @access private
		* @function isElementSupported
		* @returns {true|false|undefined}
		*/
				
		function isElementSupported( tag ) {
			var element, toString = {}.toString;
				// (Safari 4 - 5.1, Chrome 14) y (Internet Explorer 8)
			global.HTMLUnknownElement || ( global.HTMLUnknownElement = global.HTMLElement || global.HTMLGenericElement );
			if ( !global.HTMLUnknownElement ) {
				return undefined;
			}
			element = createElement( tag );
			return toString.call( element ) !== '[object HTMLUnknownElement]';
		}

		/*
		 * @ref https://github.com/Modernizr/Modernizr/blob/master/src/createElement.js
		 * @access private
		 * @function createElement
		 * @returns {HTMLElement|SVGElement} An HTML or SVG element
		 */
		function createElement() {
			var isSVG = document.documentElement.nodeName.toLowerCase() === 'svg';
			if ( typeof document.createElement !== 'function' ){
				return document.createElement( arguments[0] );
			} else {
				return isSVG ? document.createElementNS.call( document, 'http://www.w3.org/2000/svg',arguments[0] )
									: document.createElement.apply( document, arguments ) ;
			}
		}

		var caniuse = (function() {
			var ECMAScript1			= !!( Array.prototype && Array.prototype.join ),
				ECMAScript3			= !!( Array.prototype && Array.prototype.pop ),
				ECMAScript5			= (function() { 'use strict'; return !this; })(),
				ECMAScript6			= !!Object.assign,
				ECMAScript7			= !!( Array.prototype && Array.prototype.includes ),
				WebStorage			= !!global.localStorage,
				addEventListener 	= !!global.addEventListener,
				querySelectorAll 	= !!document.querySelectorAll,
				canvasSupported 	= (function() {
					  					var e;
					  					if( !!global.HTMLCanvasElement ) return true;
					  					return !isCanvasSupported ? false
					  						: ( e = createElement('canvas'),
					  						!!( e.getContext && e.getContext('2d') ) );
					  					})(),
				canvasText 			= !canvasSupported ? false : typeof createElement('canvas').getContext('2d').fillText === 'function',
				canvas2DSupported 	= !!global.CanvasRenderingContext2D && CanvasRenderingContext2D.hasOwnProperty('prototype'),
				WebGL3DSupported	= (function() {
					  					var e;
					  					if( !!global.WebGLRenderingContext && WebGLRenderingContext.hasOwnProperty('prototype') ) return true;
					  					return !isCanvasSupported ? false 
					  							: ( e = createElement('canvas'), 
					  							!!( e.getContext && ( e.getContext('webgl')  !== 'undefined' || e.getContext('experimental-webgl') !== 'undefined' ) )
					  							);
					  					})(),
				CanvasBlending		= (function( a ) {
					  					if( !canvasSupported ) return false;
					  						var c = createElement('canvas').getContext('2d'); 
					  					try {
					  						c.globalCompositeOperation = a;
					  					} catch ( e ) {}
					  						return c.globalCompositeOperation === a;
					  					}('multiply'));

			return {
					ECMA262		: ECMAScript7 ? 7 : ECMAScript6 ? 6 : ECMAScript5 ? 5 : ECMAScript3 ? 3 : ECMAScript1 ? 1 : 0,
					HTML5		: canvasText && WebStorage,
					HTML51		: WebGL3DSupported,
					HTML5full	: canvasSupported && canvas2DSupported && WebGL3DSupported && CanvasBlending,
					CSS3Selector: querySelectorAll,
					modernAPI	: addEventListener
				};

		}());

		/*! Para una condición más agresiva, cambie caniuse.HTML5 por caniuse.HTML5full  !*/
		document.write( '\u003Cscript src=script/' + ( HTML5test && caniuse.ECMA262 >= 5 && caniuse.HTML5 &&  caniuse.CSS3Selector && caniuse.modernAPI ? (dialog.push('html5'), 'vanilla') : ( document.getElementById('browsehappy').style.cssText = 'display: block;' ,'legacy') ) + '.js>\u003C/script>' );

	})( typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this, document );
//-->
</script>
```

#### A Servir se ha dicho

Y buen provecho... :)

Pantalla con Opera 9

![Opera 9](https://github.com/Webnewbies/SisePuede/blob/master/img/Captura%20de%20pantalla%202016-02-13%20a%20las%2011.22.22%20p.m..png?raw=true)

#### A quienes le gustaron

Los navegadores que lo soportan son:

##### Con polyfill ES5
```
"browsers": {
		"chrome": "1+",
		"firefox": "3+",
		"ie": "6+",
		"opera": "7+",
		"safari": "4+",
		"ios_saf": "3+",
		"ios_chr": "?",
		"android": "1+",
		"op_mob": "6+",
		"ie_mob": "6+",
		"firefox_mob": "1+",
		"bb": "5+"
	}
```

##### ES5 Nativo y HTML5Full
```
"browsers": {
		"chrome": "48+",
		"firefox": "44+",
		"ie": "11+",
		"opera": "34+",
		"safari": "9+",
		"ios_saf": "9+",
		"ios_chr": "?",
		"androit_chr": "47",
		"android": "9.9",
		"op_mob": "33+",
		"op-min": "5",
		"ie_mob": "11",
		"firefox_mob": "44",
		"edge": "12+",
		"bb": "10"
	}
```

###Limitaciones

Como no se hizo esperar, no todos los ingredientes salieron como uno se quiere. Algunas cosas no funcionaron asi que me sumergí al código para repararlo y esto son los resultados:

* `jQuery v3.0.0-alpha1` funciona OK
* `Zepto v1.1.6` solo hubo 2 instrucciones de código lo cual uno me dió migraña, medio día :P; me refiero a la linea #798

```
var dimensionProperty = dimension.replace(/./, function(m){ return m[0].toUpperCase() } )

Esto no funciona en IE<8. Se cambió por :

var dimensionProperty = dimension.replace( /(^|\s)([a-z])/g , function(_, a, b) { return a + b.toUpperCase(); });
```

Luego la linea #69

```
function isDocument(obj)   { return obj != null && obj.nodeType === obj.DOCUMENT_NODE }

Error en Opera < 9 . Se cambió por:

function isDocument(obj)   { return obj != null && obj.nodeType === 9 }
```

* `CSS_selector_engine.js` hubo un ligero error con Opera < 9 en la linea 1328

```
if(onlyOne && isLastRule && selElements.length)

Se cambió por 
if(onlyOne && isLastRule && selElements && selElements.length)
```

* Como también con `ES6/DOM4 v0.8.8` a.js la línea #126, en Firefox < 4.1

```
var __GCC__DOM_API_POLYFILL__REVERSE_POLYFILL__AUTO_INIT__ = true;

Se cambió por:

var __GCC__DOM_API_POLYFILL__REVERSE_POLYFILL__AUTO_INIT__ = false;
```

Por el momento, todo OK.

##Conclusiones

Usando polyfill, `Zepto` ha sido más efectivo en todo sentido comparado con `jQuery`. Se pueden seguir agregando más polyfills a medida se exija, previamente si funciona; ya que puedes tener problemas de compatibilidad con los polyfill expuestos aquí.

##<a name="#es6"></a>Recomendaciones

Sugiero y enfatizo a que **uses ECMAScript 5+ para todos tus proyectos Web públicos usando alguna Biblioteca como Zepto** y así sea soportado tu programación con navegadores antiguos.

Pero si es mejor, <mark>**Vanilla JS**</mark> con `ESMACScript 6 y HTML5.1` **te recomiendo 100%** para proyectos Web de uso en Intranets.

Aunque para uso público, añadiendo polyfills [es6-shim](https://github.com/es-shims/es6-shim) y si quieres también [system JS](https://github.com/systemjs/systemjs) al final de la etiqueta `HEAD`, según nuestro ejemplo arriba; puedes programar con el estándar **ECMAScript 6 al estilo Vanilla JS** code.

Espero que te haya gustado el "Menú". Sugerencias y opiniones son bienvenidos.


... Saludos.