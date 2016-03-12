# SisePuede v0.9.1
Holas! Esto es **SisePuede!**, un repositorio donde explico y motivo a utilizar las bondades de ECMASCript5/6 y (X)HTML5+ incluyendo en navegadores muy antiguos *(siempre y cuando el navegador permita la creación de elementos html5)*, haciendo uso de polyfills si así lo requiera el navegador.

:::Proyecto: 
##<a name="#whatcaniuse"></a>**⒲⒣⒜⒯ ⒞⒜⒩ ⒤ ⒰⒮⒠**

```js
/*! ⒲⒣⒜⒯ ⒞⒜⒩ ⒤ ⒰⒮⒠
	/ Una solución personalizada para aventurarse con Vanilla JS
	/ Usando plenamente los estándares ECMAScript 5.1 y (X)HTML5
	/ Code Support: IE5.5+, OP7+, SF1+, FF1+, CH0.2+,modern browsers and all mobiles. 
	/ DEFAULT RESULTS for Vanilla JS: with/without polyfills
	/	Desktop: IE:10+, EDG:12+, FF:4+, CHR:13+, SF:6+, OP:12.1+  
	/   Mobiles: SF:5.1+, -OP_mini, DROIT:3+, BB:7+, OP_MOB:12+, CHRxDROIT:47+, FFxDROIT:44+, IE:10+, UCxDROIT:9.9+
	/ By Pedro Macedo M.
	/ Public Domain.
	/ NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	/ @source https://github.com/Webnewbies/SisePuede
!*/
```

```js
<script>
	/*! ⒲⒣⒜⒯ ⒞⒜⒩ ⒤ ⒰⒮⒠ !*/
    /**
     * Inyecta un archivo js según condición pero antes ejecuta callback.
     * @param {requestCallback} what - La devolución de llamada que se encarga de la respuesta.
     * @param {Object} can - this.
     * @param {Object} i - document.
     * @param {Boolean} use - instrucción a usarse en una sentencia condicional .
     */
    ;
    (function(what, can, i, use) {
        'use strict';

        use = use || !this;

        what(can, i, use);

        i.write('\u003Cscript src="script/' + (use ? 'vanilla' : 'non-legacy') + '.js">\u003C/script>');

     })(typeof what === 'function' ? what : function() {}, (function() { return this || (1, eval)('this'); }()), document);
    
    // Code what function
</script>
```

`use` usa el valor de `isUndefined`, `isHTML5`, `isES51` o **lo RECOMENDADO `isSupport` usando Polyfill**;  para obtener resultados deseados.

`what()` define las instrucciones a ejecutarse antes o después de la ejecución principal de la función IIFE (código anterior). Código de ejemplo en Javascript:

```js
/*!
	Asigna una clase .no-es5 al elemento HTML
!*/
    /**
     * @callback requestCallback
     * @param {Object} view - this
     * @param {Object} doc - document
     * @param {Boolean} bool - true|false
     */

    function what(view, doc, bool) {
        if (!bool) {
            h = doc.documentElement || doc.body.parentNode || doc.body,
            h.nodeName.toLowerCase() === 'svg' ? h.className.baseVal += ' no-es5' : h.className += ' no-es5';
        }
        return;
    }
```


<em>Instrucciones a usarse en el valor de la variable `use`:</em>

	var isUndefined = (undefined = 'whatcaniuse') && typeof undefined == 'undefined';
	RESULTADOS:
		Desktop: IE:9+, EDG:12+, FF:4+, CHR:13+, SF:6+, OP:12.1+  
	    Mobiles: SF:5.1+, -OP_mini, DROIT:3+, BB:7+, OP_MOB:12+, CHRxDROIT:47+, FFxDROIT:44+, IE:10+, UCxDROIT:9.9+
	    
	var isHTML5=!!(window.HTMLCanvasElement&&window.localStorage&&document.querySelectorAll)
	RESULTADOS:
		Desktop: IE:9+, EDG:12+, FF:3.6+, CHR:4+, SF:4+, OP:11.5+  
	    Mobiles: SF:3.2+, -OP_mini, DROIT:3+, BB:7+, OP_MOB:12+, CHRxDROIT:47+, FFxDROIT:44+, IE:10+, UCxDROIT:9.9+
	    
	var isES51 = Modernizr.es5;
	RESULTADOS:
		Desktop: IE:10+, EDG:12+, FF:21+, CHR:23+, SF:6+, OP:15+
	    Mobiles: SF:6.1+, -OP_mini:, DROIT:4.4+, BB:10+, OP_MOB:33+, CHRxDROIT:47+, FFxDROIT:44+, IE:10+, UCxDROIT:9.9+
	    
	var isSupport = !!document.createElement('main').classList
	RESULTADOS:
		Desktop: IE8+:, EDG12+:, FF:3+, CHR:4+, SF:3.1+, OP:9.5+
	    Mobiles: SF:3.2+, OP_mini:8+, DROIT:2.1+, BB:7+, OP_MOB:12+, CHRxDROIT:49+, FFxDROIT:44+, IE:10+, UCxDROIT:9.9+
	   
#####¿Cómo puedo usar las variables condicionales?

En la línea del primer código (arriba) cambiarlo quedando así:

	...
	})(typeof what === 'function' ? what : function() {}, (function() { return this || (1, eval)('this'); }()), document, !!document.createElement('main').classList);
	..

Ver resultados de confianza en [jsPerf](http://jsperf.com/what-can-i-do).

Básicamente mi propuesta es una versión modificada de: 

```js
<script>document.write('\u003Cscript src="script/' + (whatcaniuse?'vanilla':'non-legacy') + '.js">\u003C/script>')</script>
```

Lo cual traducido es:

		What can i use? Vanilla code or non-legacy.
		¿Qué puedo usar? Código de Vainilla o sin legado.    		

... mi nombre es **Peter** :), y contaré de qué trata TODO esto.

->[Ver WiKi](https://github.com/Webnewbies/SisePuede/wiki)

****