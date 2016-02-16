# SisePuede v0.6.1
Holas! Esto es **SisePuede!**, un repositorio donde explico y motivo a utilizar las bondades de ECMASCript5+ y HTML5+ incluyendo en navegadores muy antiguos *(siempre y cuando el navegador permita la creación de elementos html5)*, haciendo alusión de lo que se cree no poder, pero que en realidad **Si se Puede**.

```
document.write( '\u003Cscript src=script/' + (
			HTML5test && caniuse.ECMA262 >= 5 && caniuse.HTML5 &&  caniuse.CSS3Selector && caniuse.modernAPI 
				? (dialogo.push('html5'), 'vanilla') 
				: ( document.getElementById('browsehappy').style.cssText = 'display: block;' ,'no-legacys') )
			 + '.js>\u003C/script>' );
```

... mi nombre es Pedro (**Peter** :), y les contaré de lo que se trata esto.

## MENU del día: ECMAScript 5+ y HTML5+ para todos
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

** [Modernirz](http://modernizr.com/download/?-es5), para la detección de características de ECMAScript 5.

### Elaboración

A continuación empezaremos la cocción de nuestros alimentos.

#### Estructura

##### .. de archivos

Crear una estructura básica de archivos para un sitio Web:

	│───es5.html
	│───html5.html
	│───index.html
	│───a.ielt.htc
	└───[css]
   		├───main.css
    	├───no-js.css
    	├───no-lib.css
    └───[script]
   		├───main.js
   		├───vanilla.js
    	├───no-legacys.js
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
Para escribir código bajo el estándar `ECMAScript versión 5+`, es necesario introducir las siguientes instrucciones dentro de los bloques según plantilla:

##### <a name="vanilla"></a>index.html

Crearemos un documento html5 de tal forma que se puedan usar con navegadores que interpreten o no `ECMAScript 5+` para usar **`Vanilla JS`**.

[`Ver código`](https://github.com/Webnewbies/SisePuede/blob/master/index.html)

##### <a name="library"></a>es5.html

También crearemos un documento html5 que sea capaz de entender `ECMAScript 5+` haciendo uso de cualquier polyfills y usar con cualquier biblioteca. Para este ejemplo, usaremos `Zepto v1.1.6` o `jQuery vCompat-3.0.0-alpha1`

[`Ver código`](https://github.com/Webnewbies/SisePuede/blob/master/es5.html)

##### <a name="#es5-html5"></a>html5.html

Si queremos diseñar una página Web cuya condición es que los navegadores soporten al menos mínimas características  de `HTML5` y `ECMAScript5` sin hacer uso de polyfills.
Recomiendo [`Ver código`](https://github.com/Webnewbies/SisePuede/blob/master/html5.html)

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

Como no se hizo de esperar. No todos los ingredientes salieron como uno se quisiera. Algunas scripts no me funcionaron, asi que me sumergí al código para repararlo y esto son los resultados:

* `jQuery v3.0.0-alpha1` funciona OK desde IE > 9, pero con la versión `jQuery Compat-3.0.0-alpha1` desde IE6+
* `Zepto v1.1.6` solo hubo 2 instrucciones de código lo cual uno me dió migraña, medio día :P; me refiero a esta instrucción:

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

* `CSS_selector_engine.js` hubo un ligero error con Opera < 9 en la linea 1328

```
if(onlyOne && isLastRule && selElements.length)

Se cambió por :

if(onlyOne && isLastRule && selElements && selElements.length)
```

* Como también con `ES6/DOM4 v0.8.8` a.js la línea #126, en Firefox < 4.1

```
var __GCC__DOM_API_POLYFILL__REVERSE_POLYFILL__AUTO_INIT__ = true;

Se cambió por:

var __GCC__DOM_API_POLYFILL__REVERSE_POLYFILL__AUTO_INIT__ = false;
```

El resto; todo OK.

##Conclusiones

1. Usando polyfill, `Zepto` ha sido más efectivo en todo sentido comparado con `jQuery`. Se pueden seguir agregando más polyfills a medida se exija, previamente si funciona; ya que puedes tener problemas de compatibilidad con los polyfill usados aquí.
2. Para las bibliotecas no todo funciona. Me refiero que a más antiguo es el navegador; más obstáculos tendremos. Por ejemplo, características como <em>Ajax, Effects y algunos pocos eventos</em>.
3. En la mayoría de navegadores antiguos, al detectar un mínimo error de programación en javascript, te genera error, no pudiendo tener una apreciable experiencia. Hay que aprender a programar bien.
4. Es perder el tiempo con `IE < 10`, pero al menos hay que hacerlo bien para `IE8+`
5. `ECMAScript 6` aún está a medio camino de integrarse en todos los navegadores. Aunque Opera y Chrome están al 91% de su desarrollo, mientras que para móviles al 50%. Mejor aprendamos a programar BIÉN sobre programación en `ES5`.

##<a name="#es6"></a>Recomendaciones

1. Sugiero y enfatizo a que **uses ECMAScript 5+ y HTML5+ para tus proyectos Web públicos usando alguna Biblioteca como Zepto** , para que así tengas soporte con todos los navegadores desde los antiguos.
2. Pero sería mejor, <mark>**Vanilla JS**</mark> con `ESMACScript 6 y HTML5.1` **Recomiendo al 100%** para proyectos Web de uso en Intranets.
3. Aunque para uso público, añadiendo polyfills [es6-shim](https://github.com/es-shims/es6-shim) y si quieres también [system JS](https://github.com/systemjs/systemjs) al final de la etiqueta `HEAD`, según nuestros ejemplos de archivos; Con esos ya puedes programar con el estándar **ECMAScript 6 con estilo Vanilla JS**.


Espero que te haya gustado el "Menú". Sugerencias y opiniones son bienvenidos.


... Saludos.