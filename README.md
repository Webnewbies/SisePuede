# SisePuede v0.7.4
Holas! Esto es **SisePuede!**, un repositorio donde explico y motivo a utilizar las bondades de ECMASCript5+ y (X)HTML5+ incluyendo en navegadores muy antiguos *(siempre y cuando el navegador permita la creación de elementos html5)*, haciendo alusión de lo que se cree no poder, pero que en realidad.. **Si se Puede**.

:::Proyecto: 
##<a name="#whatcaniuse"></a>**⒲⒣⒜⒯ ⒞⒜⒩ ⒤ ⒰⒮⒠**

<em>La presente solución es soportado por los siguiente: IE5+, OP7+, SF1+, FF1+, CH0.2, navegadores modernos incluyendo móbiles</em>. Incluir al final de la etiqueta `</body>` antes de otros `<scripts>`.

```js
<script>
	/*! WhatCanIuse !*/
    (function(g, d) {
        var caniuse = (function() {
                'use strict';
                return !this
            })(),
            what = function(all) {
                var h = d.documentElement || d.body.parentNode || d.body,
                    k = h.nodeName.toLowerCase() === 'svg' ? h.className.baseVal : h.className;
                return all ? 'vanilla' : (k += ' no-es5', 'non-legacy');
            };

        d.write('\u003Cscript src="script/' + what(caniuse) + '.js">\u003C/script>')

    })("undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : this, document);
</script>
```

`caniuse` usa el valor de `isES5`, `isHTML5` o `isES51` para obtener resultados deseados.

`what()` define las instrucciones condicionales según el valor de `caniuse`.

<em>RESULTADOS de la investigación:</em>

	var isES5 = (function(){'use strict';return!this})();
	RESULTADOS:
		Desktop: IE:10+, EDG:12+, FF:4+, CHR:13+, SF:6+, OP:12.1+  
	    Mobiles: SF:5.1+, -OP_mini, DROIT:3+, BB:7+, OP_MOB:12+, CHRxDROIT:47+, FFxDROIT:44+, IE:10+, UCxDROIT:9.9+
	    
	var isHTML5=!!(g.HTMLCanvasElement&&g.localStorage&&d.querySelectorAll)
	RESULTADOS:
		Desktop: IE:9+:, EDG:12+, FF:3.6+, CHR:4+, SF:4+, OP:11.5+  
	    Mobiles: SF:3.2+, -OP_mini, DROIT:3+, BB:7+, OP_MOB:12+, CHRxDROIT:47+, FFxDROIT:44+, IE:10+, UCxDROIT:9.9+
	    
	var isES51 = Modernizr.es5;
	RESULTADOS:
		Desktop: IE:10+:, EDG:12+, FF:21+, CHR:23+, SF:6+, OP:15+
	    Mobiles: SF:6.1+, -OP_mini:, DROIT:4.4+, BB:10+, OP_MOB:33+, CHRxDROIT:47+, FFxDROIT:44+, IE:10+, UCxDROIT:9.9+

Básicamente mi propuesta es una versión modificada de: 

```js
<script>document.write('\u003Cscript src="script/' + (whatcaniuse?'vanilla':'non-legacy') + '.js">\u003C/script>')</script>
```

Lo cual traducido es:

		What can i use? Vanilla code or non-legacy.
		¿Qué puedo usar? Código de Vainilla o no-legado.    		
... mi nombre es Pedro (**Peter** :), y contaré de qué trata TODO esto.

->[Ver WiKi](https://github.com/Webnewbies/SisePuede/wiki)

****