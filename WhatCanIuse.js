/*! ⒲⒣⒜⒯ ⒞⒜⒩ ⒤ ⒰⒮⒠
	/ Una solución personalizada para aventurarse con Vanilla JS
	/ Usando plenamente los estándares ECMAScript 5.1 y (X)HTML5
	/ Code Support: IE5.5+, OP7+, SF1+, FF1+, CH0.2+,modern browsers and all mobiles. 
	/ DEFAULT RESULTS: with/without polyfills
	/	Desktop: IE:10+, EDG:12+, FF:4+, CHR:13+, SF:6+, OP:12.1+  
	/   Mobiles: SF:5.1+, -OP_mini, DROIT:3+, BB:7+, OP_MOB:12+, CHRxDROIT:47+, FFxDROIT:44+, IE:10+, UCxDROIT:9.9+
	/ By Pedro Macedo M.
	/ Public Domain.
	/ NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	/ @source https://github.com/Webnewbies/SisePuede
!*/

;
(function(undefined) {

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

    })(typeof what === 'function' ? what : function() {}, (function() {
        return this || (1, eval)('this');
    }()), document);

    /**
     * @callback requestCallback
     * @param {Object} w - this
     * @param {Object} d - document
     * @param {Boolean} c - true|false
     */

    function what(w, d, c) {
        if (!c) {
            h = d.documentElement || d.body.parentNode || d.body,
                k = h.nodeName.toLowerCase() === 'svg' ? h.className.baseVal : h.className;
            k += ' no-es5';
        }
        return;
    }

}).call(('object' == typeof window && window.window === window && window) || (typeof self == 'object' && self.self === self && self) || (typeof global == 'object' && global.global === global && global) || {});
