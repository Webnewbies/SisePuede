# SisePuede v0.7.3
Holas! Esto es **SisePuede!**, un repositorio donde explico y motivo a utilizar las bondades de ECMASCript5+ y (X)HTML5+ incluyendo en navegadores muy antiguos *(siempre y cuando el navegador permita la creación de elementos html5)*, haciendo alusión de lo que se cree no poder, pero que en realidad.. **Si se Puede**.

:::js: <a name="#whatcaniuse"></a>**WhatCanIuse**

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

****

## MENU del día: ECMAScript 5+ y (X)HTML5+ para todos
Los objetivos del menú, es tratar a lo mayor posible; cabalgar en todos los navegadores.

### Menú
En la lista del menú tenemos:

>1. [**Vanilla JS si**, <del>no legacys</del>](#vanilla)
>2. [Zepto 1.1.+, jQuery 3.x, MooTools 1.6.x para todos](#library)
>3. [ECMAScript 5 y HTML5.1 please](#es5-html5)
>4. [ECMAScript 6 ya es una realidad](#es6)

### Herramientas

OK. Para hacer fácil la tarea, mencionaré las herramientas que usaré:

* OS: Mac OS X El Capitán v10.11.1
* Virtuals: VMware
* Browsers: Opera v[9, 35], Firefox v[4.0.1, 15, 43], Chrome v[48], Safari v[9.0.1], IE v[6,7] en XP SP3, IE v[11] y EDGE 12 en Windows 10 HE
* Editors: Sublime Text 3 y MacDown 0.5.5
* Dispositivos Móviles: BB Curve con bb5 y bb6, iPhone4-6 con ios9, Mobile. 

### Receta

Lo básico para hacer nuestro menú, es tener a la mano:

* HTML5 Fix
* DOM4
* Polyfill ES5+
* Bibliotecas con formas de uso familiar.

### Ir de Compras

Ahora me toca ir al mercado. En [HTML5 Polyfill](http://html5polyfills.com) me encontré con muchas cosas interesantes, como también en [HTML5 Cross Browser Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills). Pero probando y probando; elegí las que me han funcionado, entre los descartados son: ES5: [es5-shim v4.5.2](https://github.com/es-shims/es5-shim), selector: [Zest](https://github.com/chjj/zest) muy bueno por cierto, Legacy HTML5: [HTML5 shiv](https://github.com/aFarkas/html5shiv) y DOM4: [DOM4](https://github.com/WebReflection/dom4).

Y lo que compré, fueron:


* `HTML5 Fix`: [Hagenburger](http://www.hagenburger.net/BLOG/Simple-HTML5-Fix-for-IE.html)
* `DOM4`: [CSS_Selector_Engine](https://github.com/termi/CSS_selector_engine)
* `Polifyll para ES5+`: [ES5-DOM-Shim](https://github.com/termi/ES5-DOM-SHIM)
* `Bibliotecas`: [Zepto](http://zeptojs.com), [jQuery](http://jquery.com/), [MooTools](http://mootools.net), y [Otros](https://cdnjs.com/libraries) por probar.


### Ingredientes

Para que todo salga bién, he tenido que prestar los servicios de algunos apoyadores:

* [Modernirz](http://modernizr.com/download/?-es5), para la detección de características de ECMAScript 5.

### Elaboración

A continuación empezaremos la cocción de nuestros alimentos.

#### Estructura

##### .. de archivos

Crear una estructura básica de archivos para un sitio Web:
	
	│───5.html
	│───5.xhtml
	│───li5.html
	│───a.ielt.htc
	│───index.html
	│───plainjs.html
	└───[css]
   		├───main.css
    	├───no-js.css
    	├───no-lib.css
    └───[script]
   		├───main.js
   		├───vanilla.js
    	├───non-legacy.js
    └───[vendor]
   		├───zepto.js
   		├───jquery.js
    	├───modernirz.js
    	└───[lecagy]
   			├───a.js
    		├───a.ie8.js
    		├───a.ielt8.js
    		├───getComputedStyle.js	
    		├───CSS_selector_engine.js
    		├───xhtml-document-write.js	
    
##### .. del documento HTML5

La estructura base para nuestros archivos HTML5 serán:

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Document</title>
		<!-- {BLOQUE HEAD} -->
		<noscript><link rel="stylesheet" href="css/no-js.css"></noscript>
	</head>
	<body>
		<!-- {BLOQUE MAIN} -->
		
		<!-- {BLOQUE JAVASCRIPT} -->
	 </body>
</html>
```

#### Saborizantes

Ahora le ponemos sabor. 
Para escribir código bajo el estándar `ECMAScript versión 5+`, es necesario introducir las siguientes instrucciones dentro de los bloques según plantilla:

##### <a name="vanilla"></a>plainjs.html

Crearemos un documento html5 **con polyfills** de la forma en que se puedan usar con navegadores que interpreten o no de forma primitiva `ECMAScript 5+` y así usar **`Vanilla JS`**.

->[`Ver código fuente`](https://github.com/Webnewbies/SisePuede/blob/master/index.html)

##### <a name="library"></a>li5.html

También crearemos un documento html5 que sea capaz de entender `ECMAScript 5+` **haciendo uso de cualquier polyfill** y usar con alguna biblioteca. Para este ejemplo, usaremos `Zepto v1.1.6`, como también se pudiera usar `jQuery vCompat-3.0.0-alpha1`

->[`Ver código fuente`](https://github.com/Webnewbies/SisePuede/blob/master/es5.html)

##### <a name="#es5-html5"></a>5.html

Si queremos diseñar una página Web cuya condición es que los navegadores soporten al menos características mínimas de `HTML5` y `ECMAScript5` **sin hacer uso de polyfills**.

->[`Ver código fuente`](https://github.com/Webnewbies/SisePuede/blob/master/html5.html)

##### <a name="#es5-xhtml5"></a>5.xhtml

Si queremos diseñar una página Web XML cuya condición es que los navegadores soporten al menos características mínimas de `XHTML5` y `ECMAScript5` **sin hacer uso de polyfills**.

->[`Ver código fuente`](https://github.com/Webnewbies/SisePuede/blob/master/doctype.xhtml)

#### A Servir se ha dicho

Y buen provecho... :)

Opera 9 en MAC
![Opera 9](https://github.com/Webnewbies/SisePuede/blob/master/img/Captura%20de%20pantalla%202016-02-13%20a%20las%2011.22.22%20p.m..png?raw=true)

Internet Explorer 7 sobre WinXPSP3
![Internet Explorer 7](https://github.com/Webnewbies/SisePuede/blob/master/img/Captura%20de%20pantalla%202016-02-16%20a%20las%2011.06.06%20p.m..png?raw=true)

Internet Explorer 11 en Modo IE10 sobre Win10
![Internet Explorer 11](https://github.com/Webnewbies/SisePuede/blob/master/img/Captura%20de%20pantalla%202016-02-17%20a%20las%206.36.43%20p.m..png?raw=true)


#### A quienes le gustaron

##### ECMAScript5 y HTML5 con Polyfills

Tabla de navegadores que soportan ECMAScript5+ y HTML5 usando Polyfills, donde `Lib = [zepto1.1.6 , jquery3.0Compact]`.

Browsers		| Lib	| Legacy JS |	Vanilla JS
------------	| ----	| ----------| ---------
ie				| 	6+	|	6+		  |		9+
bb				| 	5+	|	5+		  |		7+
opera			|	7+	|	7+		  |		12+
chrome			|	1+	|	1+		  |		19+
safari			|	3+	|	4+		  |		5+
yandex			|	1+	|	1+		  |		2+
op_mob			|	6+	|	6+		  |		12+
ie_mob			|	6+	|	6+		  |		10+
saf_mob		|	3+	|	3+		  |		5+
android		|	2+	|	1+		  |		3+
ios_chr		|	1+	|	1+		  |		
firefox		|	2+	|	3+		  |		4+
SeaMonkey 	|	1+	|	2+		  |		2+
fire_mob		|	1+	|	1+		  |		
geck_mob		|	1+	|	1+		  |

##### ECMAScript5+ y HTML5+ sin Polyfills

Tabla de navegadores que soportan ECMAScript5.1+ y HTML5+ sin usar Polyfills, donde `Lib = [zepto1.1.6 , jquery3.0]`.

Browsers		|Zepto	|jQuery|	Legacy JS
------------	| ----	| ----	| ----------
ie				| 	10+	|	11+	|	10+
bb				| 	7+	|	7+	|	7+
edge			|	12+	|	12+	|	12+	
opera			|	10+	|11.6+	|	12.1+
chrome			|	30+	|	1+	|	13+
safari			|	6+	|	8+	|	5+
yandex			|	1+	|	1+	|	1+
op_mob			|	6+	|	6+	|	12+
ie_mob			|	6+	|	9+	|	10+
saf_mob		|	5+	|	3+	|	5.1+
android		| 2.3+	| 	3+	|	3+
ios_chr		|	1+	|	1+	|	1+
firefox		|	24+	|	23+	|	4+
SeaMonkey 	|	1+	| 2.6+	|	2+
fire_mob		|	1+	|	4+	|	4+
geck_mob		|	9+	|	9+	|	4+

##### ECMAScript5+ y HTML5.1 sin Polyfills

Versiones de navegadores actuales a la fecha 2016/02.

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
		"android": "47",
		"op_mob": "33+",
		"op-min": "5",
		"ie_mob": "11",
		"firefox_mob": "44",
		"edge": "13+",
		"bb": "10+",
		"yandex": "1+",
		"SeaMonkey": "2+",
		"Gecko_mob": "2+"
	}
```

###Limitaciones

Como no se hizo de esperar. No todos los ingredientes salieron como uno se quiere. Algunos scripts no funcionaron, asi que me sumergí al código para repararlo obteniendo los siguientes resultados:

* `jQuery v3.0.0-alpha1` funciona OK desde IE > 9, pero con la versión [`jQuery Compat-3.0.0-alpha1`](http://blog.jquery.com/2015/07/13/jquery-3-0-and-jquery-compat-3-0-alpha-versions-released/) desde IE6+
* Con `Zepto v1.1.6` hubo 2 instrucciones de código donde uno de esos me dió una migraña.. "medio día" :P; me refiero a la primera instrucción:

```
var dimensionProperty = dimension.replace(/./, function(m){ return m[0].toUpperCase() } )

Esto no funciona en IE<8. Se cambió por :

var dimensionProperty = dimension.replace( /(^|\s)([a-z])/g , function(_, a, b) { return a + b.toUpperCase(); });
```

Luego esta:

```
function isDocument(obj)   { return obj != null && obj.nodeType === obj.DOCUMENT_NODE }

Error en Opera < 9 . Se cambió por:

function isDocument(obj)   { return obj != null && obj.nodeType === 9 }
```

* `CSS_selector_engine.js` hubo un ligero error usando Opera < 9, en la linea #1328

```
if(onlyOne && isLastRule && selElements.length)

Se cambió por :

if(onlyOne && isLastRule && selElements && selElements.length)
```

* Como también en `ES6/DOM4 v0.8.8` a.js, la línea #126, con Firefox < 4.1

```
var __GCC__DOM_API_POLYFILL__REVERSE_POLYFILL__AUTO_INIT__ = true;

Se cambió por:

var __GCC__DOM_API_POLYFILL__REVERSE_POLYFILL__AUTO_INIT__ = false;
```

El resto; todo OK.

##Conclusiones

1. Usando polyfill; `Zepto` ha sido más efectivo en todo sentido comparado con `jQuery`. Se pueden seguir agregando más polyfills a medida se exija, previamente probando su estabilidad y funcionamiento; ya que se puede tener problemas de compatibilidad con los polyfills usados aquí.
2. No todas las bibliotecas funcionan efectivamente debido a la diversidad de navegadores existentes en el medio. Me refiero que, a más antiguo es el navegador; más obstáculos tendremos. En funcionalidades como <em>Ajax, Effects y algunos otros eventos</em>.
3. En la mayoría de antiguos navegadores, un mínimo error de programación detectado en algún archivo.js; genera un de tipo "`Type_Error`", no pudiendo tener una apreciable experiencia. Hay que aprender a programar bien.
4. Es perder el tiempo con `IE < 10`, pero al menos hay que hacerlo bien para `IE8+`
5. `ECMAScript 6` aún está a medio camino de integrarse en todos los navegadores. Aunque Opera y Chrome están al 91% de su desarrollo, mientras que para móviles al 50%. Mejor aprendamos a programar BIÉN con `ES5` y luego pasar a `ES6`.

##<a name="#es6"></a>Recomendaciones

1. Sugiero y enfatizo, **usar ECMAScript 5+ y HTML5+ para proyectos Web públicos; usando alguna Biblioteca como Zepto**, para que así tener soporte en todos los navegadores; desde los más antiguos.
2. Pero sería mejor, <mark>**Vanilla JS**</mark> con `ESMACScript 6 y HTML5.1`. **Recomiendo 100%** para proyectos Web de uso en Intranets.
3. Aunque para Internet, añadiendo polyfills [es6-shim](https://github.com/es-shims/es6-shim) y si quieres también [system JS](https://github.com/systemjs/systemjs) al final de la etiqueta `HEAD`, según nuestros ejemplos de archivos; Con esos ya puedes programar bajo el estándar **ECMAScript 6 con estilo Vanilla JS**.
4. <a name="#wciu"></a>Si se desea programar con ECMAScript 5+ y con características mínimas de HTML5, SUGIERO la solución `WhatCanIuse` publicado al principio de este documento; anteponiendo dentro de las etiquetas `HEAD` un [Servicio de Polyfill](https://cdn.polyfill.io/v2/docs/examples).

```js
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
```

Espero que le haya gustado el "Menú". Sugerencias y opiniones son bienvenidos.


... Saludos.

***