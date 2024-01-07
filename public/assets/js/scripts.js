/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	__webpack_require__(3);

	__webpack_require__(16);

	__webpack_require__(17);

	__webpack_require__(18);

	__webpack_require__(19);

	__webpack_require__(20);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var $ = jQuery;

	;(function ($) {
	    'use strict';

	    /*
	    PAGE LAODING
	    */

	    var _ref;

	    $(window).load(function () {
	        $("#gl-circle-loader-wrapper").fadeOut(500);
	    });

	    /*
	    SWIPER SLIDER
	    */
	    var jobSwiper = new Swiper('.gl-jobs-testimonial', {
	        slidesPerView: 1,
	        autoplay: 6000,
	        loop: true
	    });

	    var agentSwiper = new Swiper('.gl-agent-testimonial', (_ref = {
	        slidesPerView: 4,
	        paginationClickable: true,
	        spaceBetween: 15,
	        pagination: '.gl-agent-pagination'
	    }, _defineProperty(_ref, 'paginationClickable', true), _defineProperty(_ref, 'loop', true), _defineProperty(_ref, 'breakpoints', {
	        1024: {
	            slidesPerView: 4
	        },
	        800: {
	            slidesPerView: 3
	        },
	        640: {
	            slidesPerView: 2
	        },
	        400: {
	            slidesPerView: 1
	        }
	    }), _ref));

	    /*
	    TYPED JS
	    */
	    $("#gl-slogan").typed({
	        stringsElement: $('#typed-strings'),
	        startDelay: 500,
	        typeSpeed: 100,
	        backDelay: 1500,
	        loop: true,
	        contentType: 'html',
	        loopCount: false
	    });

	    /*
	    PICTURE FILL
	    */
	    document.createElement("picture");

	    /*
	    RATINGS
	    */
	    $('#gl-quality-rating, #gl-service-rating,#gl-response-rating').raty({
	        cancel: false,
	        half: true,
	        starType: 'i'
	    });

	    /*
	    SIDE MENU
	    */
	    var bodyEl = document.body,
	        content = document.querySelector('body'),
	        openbtn = document.getElementById('gl-side-menu-btn'),
	        closebtn = document.getElementById('gl-side-menu-close-button'),
	        isOpen = false;

	    var openregbtn = document.getElementById('gl-side-menu-btn-reg'),
	        closeregbtn = document.getElementById('gl-side-menu-close-button-reg'),
	        isOpenReg = false;

	    var openregempbtn = document.getElementById('gl-side-menu-btn-emp-reg'),
	        closeregempbtn = document.getElementById('gl-side-menu-close-button-emp-reg'),
	        isOpenEmpReg = false;

	    function init() {
	        var isExists = $('.gl-side-menu-wrap');
	        if (isExists.length) {
	            initEvents();
	        }

	        var isExistss = $('.gl-side-menu-wrap-reg');
	        if (isExistss.length) {
	            initEventsReg();
	        }

	        var isExistsss = $('.gl-side-menu-wrap-emp-reg');
	        if (isExistsss.length) {
	            initEventsEmpReg();
	        }
	    }

	    function initEvents() {
	        openbtn.addEventListener('click', toggleMenu);
	        if (closebtn) {
	            closebtn.addEventListener('click', toggleMenu);
	        }




	        // close the menu element if the target it´s not the menu element or one of its descendants..
	        // content.addEventListener( 'click', function(ev) {
	        //     var target = ev.target;
	        //     if( isOpen && target !== openbtn ) {
	        //         toggleMenu();
	        //     }
	        // } );
	    }


	    function initEventsReg() {

	        openregbtn.addEventListener('click', toggleRegMenu);
	        if (closeregbtn) {
	            closeregbtn.addEventListener('click', toggleRegMenu);
	        }


	        // close the menu element if the target it´s not the menu element or one of its descendants..
	        // content.addEventListener( 'click', function(ev) {
	        //     var target = ev.target;
	        //     if( isOpen && target !== openbtn ) {
	        //         toggleMenu();
	        //     }
	        // } );
	    }


	    function initEventsEmpReg() {

	        openregempbtn.addEventListener('click', toggleEmpRegMenu);
	        if (closeregempbtn) {
	            closeregempbtn.addEventListener('click', toggleEmpRegMenu);
	        }


	        // close the menu element if the target it´s not the menu element or one of its descendants..
	        // content.addEventListener( 'click', function(ev) {
	        //     var target = ev.target;
	        //     if( isOpen && target !== openbtn ) {
	        //         toggleMenu();
	        //     }
	        // } );
	    }

	    function toggleMenu() {
	        if (isOpen) {
	            classie.remove(bodyEl, 'gl-show-menu');
	        } else {
	            classie.add(bodyEl, 'gl-show-menu');
	        }
	        isOpen = !isOpen;
	    }

	    function toggleRegMenu() {
	        if (isOpenReg) {
	            classie.remove(bodyEl, 'gl-show-menu-reg');
	        } else {
	            classie.add(bodyEl, 'gl-show-menu-reg');
	        }
	        isOpenReg = !isOpenReg;
	    }

	     function toggleEmpRegMenu() {
	        if (isOpenEmpReg) {
	            classie.remove(bodyEl, 'gl-show-menu-emp-reg');
	        } else {
	            classie.add(bodyEl, 'gl-show-menu-emp-reg');
	        }
	        isOpenEmpReg = !isOpenEmpReg;
	    }

	    init();

	    /*
	    HEADER HEIGHT
	    */
	    var fakeDiv = $('.gl-header').height();

	    $('.gl-side-menu-wrap').height($(window).height() - fakeDiv);

	    $(window).resize(function () {
	        $('.gl-side-menu-wrap').height($(window).height() - fakeDiv);
	    });
	    $(window).trigger('resize');

	    var resizeTimer,
	        mainHeader = $(".gl-header");

	    mainHeader.after('<section class="gl-fake-div"></section>');

	    var fakeSection = mainHeader.next();
	    var mainHeaderHeight = mainHeader.outerHeight();
	    fakeSection.css({
	        'height': mainHeaderHeight
	    });

	    $(window).on('resize', function (e) {
	        clearTimeout(resizeTimer);
	        resizeTimer = setTimeout(function () {
	            var mainHeaderHeight = mainHeader.outerHeight();
	            fakeSection.css({
	                'height': mainHeaderHeight
	            });
	        }, 250);
	    });

	    /*
	    REMAINING GALLERY NUMBER
	    */
	    var tli = $('ul.gl-gallery li').length;

	    function moreNum() {
	        var result = tli - 5;

	        // $('ul.gl-gallery li').eq(4).append('<div class="gl-more-img-text">'+'<span>+' + result + '</span>'+'</div>')
	        $('ul.gl-gallery li').eq(4).find('a').addClass('gl-more-img-text').prepend('<span>+' + result + '</span>');
	    };

	    if (tli > 5) {
	        moreNum();
	    }

	    /*
	    LIST VIEW & GRID VIEW
	    */
	    var diplayBtn = $('a.gl-sorting-btn'),
	        searchItem = $('.gl-featured-items');

	    diplayBtn.on('click', function (e) {
	        e.preventDefault();

	        if (diplayBtn.hasClass('gl-grid-view')) {
	            $(this).removeClass('gl-grid-view').addClass('gl-list-view');
	            $(this).find('i').removeClass('fa-list-ul').addClass('fa-th-large');

	            searchItem.addClass('gl-listtype-display');
	        } else {
	            $(this).removeClass('gl-list-view').addClass('gl-grid-view');
	            $(this).find('i').removeClass('fa-th-large').addClass('fa-list-ul');

	            searchItem.removeClass('gl-listtype-display');
	        }
	    });

	    /*
	    ACCORDION ICON TOGGLE
	    */
	    $('.gl-floorplan-item .collapse, .gl-accordion-item .collapse').on('shown.bs.collapse', function () {
	        $(this).parent().find(".ion-ios-plus-empty").removeClass("ion-ios-plus-empty").addClass("ion-ios-minus-empty");
	    }).on('hidden.bs.collapse', function () {
	        $(this).parent().find(".ion-ios-minus-empty").removeClass("ion-ios-minus-empty").addClass("ion-ios-plus-empty");
	    });

	    /*
	    SEARCH FILTER EXPAND BTN
	    */
	    if ($(this).width() < 992) {
	        $(".gl-search-expand-btn").on('click', function (e) {
	            e.preventDefault();

	            var $btn = $(this),
	                $content = $(".gl-search-filter-bar");

	            $content.slideToggle(500, function () {
	                //execute this after slideToggle is done
	                //change text of header based on visibility of content div
	                $btn.text(function () {
	                    //change text based on condition
	                    return $content.is(":visible") ? "Search Collapse" : "Search Expand";
	                });
	            });
	        });
	    }

	    $(".gl-more-filter-btn").on('click', function (e) {
	        e.preventDefault();

	        var $btn = $(this),
	            $content = $(".gl-advanced-search-wrapper");

	        $content.slideToggle(500);
	    });

	    $(".gl-advanced-search-btn").on('click', function (event) {
	        event.preventDefault();
	        /* Act on the event */
	        var $advancedSearch = $(".gl-advanced-search-wrapper"),
	            $advancedSearchParent = $(".gl-directory-searchbar");

	        if ($advancedSearchParent.hasClass('collapsed')) {
	            $advancedSearch.slideDown();
	            $advancedSearchParent.removeClass('collapsed').addClass('expanded');
	            // .show('1000')
	        } else {
	                $advancedSearch.slideUp();
	                $advancedSearchParent.removeClass('expanded').addClass('collapsed');
	                // .hide('1000')
	            }
	    });
	    ;

	    /*
	    HERO SECTION FULL HEIGHT
	    */
	    // var fakeDiv = $('.gl-header').height();

	    // $('.gl-hero-img-wrapper, .gl-side-menu-wrap').height(
	    //     $(window).height() - fakeDiv
	    // );

	    // $(window).resize(function() {
	    //   $('.gl-hero-img-wrapper, .gl-side-menu-wrap').height(
	    //     $(window).height() - fakeDiv
	    //   );
	    // });
	    // $(window).trigger('resize');


	    /*
	    MOBILE MENU SCROLLING FIXED
	    */
	    if ($("header.gl-header").children().hasClass('.gl-header-topbar')) {
	        $(".navbar-collapse").css({ maxHeight: $(window).height() - ($(".navbar-header").height() + $(".gl-header-topbar").height()) + "px" });
	    } else {
	        $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
	    }

	    /*
	    FIXED SEARCH MAP
	    */
	    $(window).resize(function () {
	        var searchPageHeader = $(".gl-search-template .gl-header"),
	            headerHeight = searchPageHeader.outerHeight(),
	            mapParent = $('.gl-split-map').parent(),
	            mapSection = $('.gl-search-map-section'),
	            filterWrap = $('.gl-search-filter-wrapper'),
	            filterWrapHeight = filterWrap.outerHeight(),
	            total = headerHeight + filterWrapHeight;

	        if (mapParent.prev().hasClass('gl-search-filter-wrapper') || mapSection.prev().hasClass('gl-header')) {

	            $('.gl-split-map').height($(window).height() - total).css({
	                'marginTop': '-1px'
	            });

	            searchPageHeader.css({
	                'position': 'fixed',
	                'marginTop': '-1px'
	            });

	            mapParent.prev('.gl-search-filter-wrapper').css({
	                'position': 'fixed',
	                'marginTop': '-2px',
	                'z-index': 9
	            });

	            mapParent.css({
	                'paddingTop': 0
	            });

	            mapSection.css({
	                'paddingTop': 0
	            });
	        } else {

	            $('.gl-split-map').height($(window).height() - headerHeight);

	            searchPageHeader.css({
	                'position': 'fixed'
	            });
	        }

	        searchPageHeader.next().css({
	            'paddingTop': 0
	        });
	    });

	    $(window).trigger('resize');

	    /*
	    TAG REMOVE FUNCTIONALITY
	    */
	    $("a.gl-tag-btn").append('<span class="gl-close">x</span>');

	    $("a.gl-tag-btn").on('click', '.gl-close', function (e) {
	        e.preventDefault();
	        $(this).parent().remove();
	    });
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */(function(global,factory){if(( false?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
	// is present, execute the factory and get jQuery.
	// For environments that do not have a `window` with a `document`
	// (such as Node.js), expose a factory as module.exports.
	// This accentuates the need for the creation of a real `window`.
	// e.g. var jQuery = require("jquery")(window);
	// See ticket #14549 for more info.
	module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
	})(typeof window!=="undefined"?window:undefined,function(window,noGlobal){// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr=[];var document=window.document;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var version="2.2.4",// Define a local copy of jQuery
	jQuery=function jQuery(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
	// Need init if jQuery is called (just allow error to be thrown if not included)
	return new jQuery.fn.init(selector,context);},// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,// Matches dashed string for camelizing
	rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,// Used by jQuery.camelCase as callback to replace()
	fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={// The current version of jQuery being used
	jquery:version,constructor:jQuery,// Start with an empty selector
	selector:"",// The default length of a jQuery object is 0
	length:0,toArray:function toArray(){return _slice.call(this);},// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function get(num){return num!=null?// Return just the one element from the set
	num<0?this[num+this.length]:this[num]:// Return all the elements in a clean array
	_slice.call(this);},// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function pushStack(elems){// Build a new jQuery matched element set
	var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
	ret.prevObject=this;ret.context=this.context;// Return the newly-formed element set
	return ret;},// Execute a callback for every element in the matched set.
	each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();},// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
	if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
	target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
	if((typeof target==="undefined"?"undefined":_typeof(target))!=="object"&&!jQuery.isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
	if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
	if((options=arguments[i])!=null){// Extend the base object
	for(name in options){src=target[name];copy=options[name];// Prevent never-ending loop
	if(target===copy){continue;}// Recurse if we're merging plain objects or arrays
	if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}// Never move original objects, clone them
	target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
	}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
	return target;};jQuery.extend({// Unique for each copy of jQuery on the page
	expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
	isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function isWindow(obj){return obj!=null&&obj===obj.window;},isNumeric:function isNumeric(obj){// parseFloat NaNs numeric-cast false positives (null|true|false|"")
	// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	// subtraction forces infinities to NaN
	// adding 1 corrects loss of precision from parseFloat (#15100)
	var realStringObj=obj&&obj.toString();return!jQuery.isArray(obj)&&realStringObj-parseFloat(realStringObj)+1>=0;},isPlainObject:function isPlainObject(obj){var key;// Not plain objects:
	// - Any object or value whose internal [[Class]] property is not "[object Object]"
	// - DOM nodes
	// - window
	if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}// Not own constructor property must be Object
	if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype||{},"isPrototypeOf")){return false;}// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own
	for(key in obj){}return key===undefined||hasOwn.call(obj,key);},isEmptyObject:function isEmptyObject(obj){var name;for(name in obj){return false;}return true;},type:function type(obj){if(obj==null){return obj+"";}// Support: Android<4.0, iOS<6 (functionish RegExp)
	return(typeof obj==="undefined"?"undefined":_typeof(obj))==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof(obj);},// Evaluates a script in a global context
	globalEval:function globalEval(code){var script,indirect=eval;code=jQuery.trim(code);if(code){// If the code includes a valid, prologue position
	// strict mode pragma, execute code by injecting a
	// script tag into the document.
	if(code.indexOf("use strict")===1){script=document.createElement("script");script.text=code;document.head.appendChild(script).parentNode.removeChild(script);}else{// Otherwise, avoid the DOM node creation, insertion
	// and removal by using an indirect global eval
	indirect(code);}}},// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// Support: Android<4.1
	trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");},// results is for internal usage only
	makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
	// that pass the validator function
	for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
	map:function map(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
	if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
	}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
	return concat.apply([],ret);},// A global GUID counter for objects
	guid:1,// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;}// Simulated bind
	args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support:support});// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}/* jshint ignore: end */// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle=/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,// Local document vars
	setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,// Instance-specific data
	expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;},// General-purpose constants
	MAX_NEGATIVE=1<<31,// Instance methods
	hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
	"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	// 1. quoted (capture 3; capture 4 or capture 5)
	"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
	"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
	".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
	// We use this for POS matching in `select`
	"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;// NaN means non-codepoint
	// Support: Firefox<24
	// Workaround erroneous numeric interpretation of +"0x"
	return high!==high||escapedWhitespace?escaped:high<0?// BMP codepoint
	String.fromCharCode(high+0x10000):// Supplemental Plane codepoint (surrogate pair)
	String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler=function unloadHandler(){setDocument();};// Optimize for push.apply( _, NodeList )
	try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android<4.0
	// Detect silently failing push.apply
	arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?// Leverage slice if possible
	function(target,els){push_native.apply(target,slice.call(els));}:// Support: IE<9
	// Otherwise append directly
	function(target,els){var j=target.length,i=0;// Can't trust NodeList.length
	while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,nidselect,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
	nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
	if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
	if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
	// (excepting DocumentFragment context, where the methods don't exist)
	if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
	if(m=match[1]){// Document context
	if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(elem.id===m){results.push(elem);return results;}}else{return results;}// Element context
	}else{// Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}// Type selector
	}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
	}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
	if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;// qSA looks outside Element context, which is not what we want
	// Thanks to Andrew Dupont for this workaround technique
	// Support: IE <=8
	// Exclude object elements
	}else if(context.nodeName.toLowerCase()!=="object"){// Capture the context ID, setting it first if necessary
	if(nid=context.getAttribute("id")){nid=nid.replace(rescape,"\\$&");}else{context.setAttribute("id",nid=expando);}// Prefix every selector in the list
	groups=tokenize(selector);i=groups.length;nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";while(i--){groups[i]=nidselect+" "+toSelector(groups[i]);}newSelector=groups.join(",");// Expand context for sibling selectors
	newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}// All others
	return select(selector.replace(rtrim,"$1"),context,results,seed);}/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
	delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */function markFunction(fn){fn[expando]=true;return fn;}/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{// Remove from its parent by default
	if(div.parentNode){div.parentNode.removeChild(div);}// release memory in IE
	div=null;}}/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE);// Use IE sourceIndex if available on both nodes
	if(diff){return diff;}// Check if b follows a
	if(cur){while(cur=cur.nextSibling){if(cur===b){return-1;}}}return a?1:-1;}/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
	while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}// Expose support vars for convenience
	support=Sizzle.support={};/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */isXML=Sizzle.isXML=function(elem){// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
	if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
	document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if((parent=document.defaultView)&&parent.top!==parent){// Support: IE 11
	if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false);// Support: IE 9 - 10 only
	}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}}/* Attributes
		---------------------------------------------------------------------- */// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");});/* getElement(s)By*
		---------------------------------------------------------------------- */// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName=assert(function(div){div.appendChild(document.createComment(""));return!div.getElementsByTagName("*").length;});// Support: IE<9
	support.getElementsByClassName=rnative.test(document.getElementsByClassName);// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});// ID find and filter
	if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{// Support: IE6/7
	// getElementById is not reliable as a find shortcut
	delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}// Tag
	Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
	}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	results=context.getElementsByTagName(tag);// Filter out possible comments
	if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;};// Class
	Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
		---------------------------------------------------------------------- */// QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches=[];// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert(function(div){// Select is set to empty string on purpose
	// This is to test IE's treatment of not explicitly
	// setting a boolean content attribute,
	// since its presence should be enough
	// http://bugs.jquery.com/ticket/12359
	docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";// Support: IE8, Opera 11-12.16
	// Nothing should be selected when empty strings follow ^= or $= or *=
	// The test attribute must be unknown in Opera but "safe" for WinRT
	// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}// Support: IE8
	// Boolean attributes and "value" are not treated correctly
	if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
	if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Webkit/Opera - :checked should return selected option elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Safari 8+, iOS 8+
	// https://bugs.webkit.org/show_bug.cgi?id=136851
	// In-page `selector#id sibing-combinator selector` fails
	if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){// Support: Windows 8 Native Apps
	// The type and name attributes are restricted during .innerHTML assignment
	var input=document.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D");// Support: IE8
	// Enforce case-sensitivity of name attribute
	if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}// Opera 10-11 does not throw on post-comma invalid pseudos
	div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(div){// Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9)
	support.disconnectedMatch=matches.call(div,"div");// This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));/* Contains
		---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition);// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;};/* Sorting
		---------------------------------------------------------------------- */// Document order sorting
	sortOrder=hasCompare?function(a,b){// Flag for duplicate removal
	if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
	var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
	compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
	1;// Disconnected nodes
	if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
	if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}// Maintain original order
	return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){// Exit early if the nodes are identical
	if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];// Parentless nodes are either documents or disconnected
	if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;// If the nodes are siblings, we can do a quick check
	}else if(aup===bup){return siblingCheck(a,b);}// Otherwise we need full lists of their ancestors for comparison
	cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);}// Walk down the tree looking for a discrepancy
	while(ap[i]===bp[i]){i++;}return i?// Do a sibling check if the nodes have a common ancestor
	siblingCheck(ap[i],bp[i]):// Otherwise nodes in our document sort first
	ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){// Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}// Make sure that attribute selectors are quoted
	expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
	if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
	// fragment in IE 9
	elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){// Set document vars if needed
	if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){// Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
	val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput=null;return results;};/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
	while(node=elem[i++]){// Do not traverse comment nodes
	ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){// Use textContent for elements
	// innerText usage removed for consistency of new lines (jQuery #11153)
	if(typeof elem.textContent==="string"){return elem.textContent;}else{// Traverse its children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
	return ret;};Expr=Sizzle.selectors={// Can be adjusted by the user
	cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
	match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
	if(!match[3]){Sizzle.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
	// remember that false/true cast respectively to 0/1
	match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
	}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}// Accept quoted arguments as-is
	if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
	}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
	excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
	excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
	match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
	return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
	function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
	if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
	start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
	if(forward&&useCache){// Seek `elem` from a previously-cached index
	// ...in a gzip-friendly way
	node=parent;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
	diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
	if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
	if(useCache){// ...in a gzip-friendly way
	node=elem;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
	// or :nth-last-child(...) or :nth(-last)?-of-type(...)
	if(diff===false){// Use the same loop as above to seek `elem` from the start
	while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){// Cache the index of each encountered element
	if(useCache){outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
	diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){// pseudo-class names are case-insensitive
	// http://www.w3.org/TR/selectors/#pseudo-classes
	// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	// Remember that setFilters inherits from pseudos
	var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
	// arguments are needed to create the filter function
	// just as Sizzle does
	if(fn[expando]){return fn(argument);}// But maintain support for old signatures
	if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
	"not":markFunction(function(selector){// Trim the selector passed to compile
	// to avoid treating leading and trailing
	// spaces as combinators
	var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
	while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element (issue #299)
	input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
	// is based solely on the element's language value
	// being equal to the identifier C,
	// or beginning with the identifier C immediately followed by "-".
	// The matching of C against the element's language value is performed case-insensitively.
	// The identifier C does not have to be a valid language name."
	// http://www.w3.org/TR/selectors/#lang-pseudo
	"lang":markFunction(function(lang){// lang value must be a valid identifier
	if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
	"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
	"enabled":function enabled(elem){return elem.disabled===false;},"disabled":function disabled(elem){return elem.disabled===true;},"checked":function checked(elem){// In CSS3, :checked should return both checked and selected elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){// Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
	"empty":function empty(elem){// http://www.w3.org/TR/selectors/#empty-pseudo
	// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	//   but not by others (comment: 8; processing instruction: 7; etc.)
	// nodeType < 6 works because attributes (2) do not appear as children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return!Expr.pseudos["empty"](elem);},// Element/input types
	"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&(// Support: IE<8
	// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
	"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];// Add button/input type pseudos
	for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
	function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
	if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
	soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
	if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
	type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}// Filters
	for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly?soFar.length:soFar?Sizzle.error(selector):// Cache the tokens
	tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
	function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:// Check against all ancestor/preceding elements
	function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
	if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if((oldCache=uniqueCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
	return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
	uniqueCache[dir]=newCache;// A match means we're done; a fail means we have to keep checking
	if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
	elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
	matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
	[]:// ...otherwise use results directly
	results:matcherIn;// Find primary matches
	if(matcher){matcher(matcherIn,matcherOut,context,xml);}// Apply postFilter
	if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
	i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
	temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
	temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
	i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
	}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
	matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element (issue #299)
	checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
	if(matcher[expando]){// Find the next relative operator (if any) for proper handling
	j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
	tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
	elems=seed||byElement&&Expr.find["TAG"]("*",outermost),// Use integer dirruns iff this is the outermost matcher
	dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}// Add elements passing elementMatchers directly to results
	// Support: IE<9, Safari
	// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
	if(bySet){// They will have gone through all possible matchers
	if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
	if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
	// makes the latter nonnegative.
	matchedCount+=i;// Apply set filters to unmatched elements
	// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
	// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
	// no element matchers and no seed.
	// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
	// case, which will result in a "00" `matchedCount` that differs from `i` but is also
	// numerically zero.
	if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
	if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
	setMatched=condense(setMatched);}// Add matches to results
	push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
	if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}}// Override manipulation of globals by nested matchers
	if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
	if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
	cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
	cached.selector=selector;}return cached;};/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if(match.length===1){// Reduce context if the leading compound selector is an ID
	tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
	}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
	i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
	if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
	if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
	tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};// One-time assignments
	// Sort stability
	support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates=!!hasDuplicate;// Initialize against the default document
	setDocument();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached=assert(function(div1){// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition(document.createElement("div"))&1;});// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;var risSimple=/^.[^:#\[\.,]*$/;// Implement the identical functionality for filter and not
	function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){/* jshint -W018 */return!!qualifier.call(elem,i,elem)!==not;});}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}qualifier=jQuery.filter(qualifier,elements);}return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,len=this.length,ret=[],self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}// Needed because $( selector, context ) becomes $( context ).find( selector )
	ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
	// A central reference to the root jQuery(document)
	var rootjQuery,// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
	if(!selector){return this;}// Method init() accepts an alternate rootjQuery
	// so migrate can support jQuery.sub (gh-2101)
	root=root||rootjQuery;// Handle HTML strings
	if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
	match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
	if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
	if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
	// Intentionally let the error be thrown if parseHTML is not present
	jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
	if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
	if(jQuery.isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
	}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
	}else{elem=document.getElementById(match[2]);// Support: Blackberry 4.6
	// gEBID returns nodes no longer in the document (#6963)
	if(elem&&elem.parentNode){// Inject the element directly into the jQuery object
	this.length=1;this[0]=elem;}this.context=document;this.selector=selector;return this;}// HANDLE: $(expr, $(...))
	}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
	}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;// HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
	selector(jQuery);}if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
	init.prototype=jQuery.fn;// Initialize central reference
	rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
	if(cur.nodeType<11&&(pos?pos.index(cur)>-1:// Don't pass non-elements to Sizzle
	cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
	index:function index(elem){// No argument, return index in parent
	if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
	if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
	return indexOf.call(this,// If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
	if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
	if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnotwhite=/\S+/g;// Convert String-formatted options into Object-formatted ones
	function createOptions(options){var object={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
	firing,// Last fire value for non-forgettable lists
	memory,// Flag to know if list was already fired
	_fired,// Flag to prevent firing
	_locked,// Actual callback list
	list=[],// Queue of execution data for repeatable lists
	queue=[],// Index of currently firing callback (modified by add/remove as needed)
	firingIndex=-1,// Fire callbacks
	fire=function fire(){// Enforce single-firing
	_locked=options.once;// Execute callbacks for all pending executions,
	// respecting firingIndex overrides and runtime changes
	_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
	if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
	firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
	if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
	if(_locked){// Keep an empty list if we have data for future add calls
	if(memory){list=[];// Otherwise, this object is spent
	}else{list="";}}},// Actual Callbacks object
	self={// Add a callback or a collection of callbacks to the list
	add:function add(){if(list){// If we have memory from a past run, we should fire after adding
	if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){// Inspect recursively
	add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
	remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
	if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
	// If no argument is given, return whether or not list has callbacks attached.
	has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
	empty:function empty(){if(list){list=[];}return this;},// Disable .fire and .add
	// Abort any current/pending executions
	// Clear all callbacks and values
	disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return!list;},// Disable .fire
	// Also disable .add unless we have memory (since it would have no effect)
	// Abort any pending executions
	lock:function lock(){_locked=queue=[];if(!memory){list=memory="";}return this;},locked:function locked(){return!!_locked;},// Call all callbacks with the given context and arguments
	fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
	fire:function fire(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
	fired:function fired(){return!!_fired;}};return self;};jQuery.extend({Deferred:function Deferred(func){var tuples=[// action, add listener, listener list, final state
	["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},then:function then()/* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];// deferred[ done | fail | progress ] for forwarding actions to newDefer
	deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this===_promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},// Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={};// Keep pipe for back-compat
	_promise.pipe=_promise.then;// Add list-specific methods
	jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];// promise[ done | fail | progress ] = list.add
	_promise[tuple[1]]=list.add;// Handle state
	if(stateString){list.add(function(){// state = [ resolved | rejected ]
	_state=stateString;// [ reject_list | resolve_list ].disable; progress_list.lock
	},tuples[i^1][2].disable,tuples[2][2].lock);}// deferred[ resolve | reject | notify ]
	deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?_promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
	_promise.promise(deferred);// Call given func if any
	if(func){func.call(deferred,deferred);}// All done!
	return deferred;},// Deferred helper
	when:function when(subordinate/* , ..., subordinateN */){var i=0,resolveValues=_slice.call(arguments),length=resolveValues.length,// the count of uncompleted subordinates
	remaining=length!==1||subordinate&&jQuery.isFunction(subordinate.promise)?length:0,// the master Deferred.
	// If resolveValues consist of only a single Deferred, just use that.
	deferred=remaining===1?subordinate:jQuery.Deferred(),// Update function for both resolve and progress values
	updateFunc=function updateFunc(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(! --remaining){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;// Add listeners to Deferred subordinates; treat others as resolved
	if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().progress(updateFunc(i,progressContexts,progressValues)).done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject);}else{--remaining;}}}// If we're not waiting on anything, resolve the master
	if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}return deferred.promise();}});// The deferred used on DOM ready
	var readyList;jQuery.fn.ready=function(fn){// Add the callback
	jQuery.ready.promise().done(fn);return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
	isReady:false,// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1,// Hold (or release) the ready event
	holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},// Handle when the DOM is ready
	ready:function ready(wait){// Abort if there are pending holds or we're already ready
	if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
	jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
	readyList.resolveWith(document,[jQuery]);// Trigger any bound ready events
	if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}});/**
	 * The ready event handler and self cleanup method
	 */function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE9-10 only
	// Older IE sometimes signals "interactive" too soon
	if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout(jQuery.ready);}else{// Use the handy event callback
	document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
	window.addEventListener("load",completed);}}return readyList.promise(obj);};// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
	if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
	}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
	if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
	}else{bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}return chainable?elems:// Gets
	bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;};var acceptData=function acceptData(owner){// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={register:function register(owner,initial){var value=initial||{};// If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable, non-writable property
	// configurability must be true to allow the property to be
	// deleted with the delete operator
	}else{Object.defineProperty(owner,this.expando,{value:value,writable:true,configurable:true});}return owner[this.expando];},cache:function cache(owner){// We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(!acceptData(owner)){return{};}// Check if the owner object already has a cache
	var value=owner[this.expando];// If not, create one
	if(!value){value={};// We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
	// configurable must be true to allow the property to be
	// deleted when data is removed
	}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
	if(typeof data==="string"){cache[data]=value;// Handle: [ owner, { properties } ] args
	}else{// Copy the properties one-by-one to the cache object
	for(prop in data){cache[prop]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][key];},access:function access(owner,key,value){var stored;// In cases where either:
	//
	//   1. No key was specified
	//   2. A string key was specified, but no value provided
	//
	// Take the "read" path and allow the get method to determine
	// which value to return, respectively either:
	//
	//   1. The entire cache object
	//   2. The data stored at the key
	//
	if(key===undefined||key&&typeof key==="string"&&value===undefined){stored=this.get(owner,key);return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key));}// When the key is not a string, or both a key and value
	// are specified, set or extend (existing objects) with either:
	//
	//   1. An object of properties
	//   2. A key and value
	//
	this.set(owner,key,value);// Since the "set" path can have two possible entry points
	// return the expected data based on which path was taken[*]
	return value!==undefined?value:key;},remove:function remove(owner,key){var i,name,camel,cache=owner[this.expando];if(cache===undefined){return;}if(key===undefined){this.register(owner);}else{// Support array or space separated string of keys
	if(jQuery.isArray(key)){// If "name" is an array of keys...
	// When data is initially created, via ("key", "val") signature,
	// keys will be converted to camelCase.
	// Since there is no way to tell _how_ a key was added, remove
	// both plain key and camelCase key. #12786
	// This will only penalize the array argument path.
	name=key.concat(key.map(jQuery.camelCase));}else{camel=jQuery.camelCase(key);// Try the string as a key before any manipulation
	if(key in cache){name=[key,camel];}else{// If a key with the spaces exists, use it.
	// Otherwise, create an array by matching non-whitespace
	name=camel;name=name in cache?[name]:name.match(rnotwhite)||[];}}i=name.length;while(i--){delete cache[name[i]];}}// Remove the expando if there's no more data
	if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <= 35-45+
	// Webkit & Blink performance suffers when deleting properties
	// from DOM nodes, so set to undefined instead
	// https://code.google.com/p/chromium/issues/detail?id=378607
	if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:// Only convert to a number if it doesn't change the string
	+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}// Make sure we set the data so it isn't changed later
	dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
	if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE11+
	// The attrs elements can be null (#14894)
	if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
	if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data,camelKey;// The calling jQuery object (element matches) is not empty
	// (and therefore has an element appears at this[ 0 ]) and the
	// `value` parameter was not undefined. An empty jQuery object
	// will result in `undefined` for elem = this[ 0 ] which will
	// throw an exception if an attempt to read a data cache is made.
	if(elem&&value===undefined){// Attempt to get data from the cache
	// with the key as-is
	data=dataUser.get(elem,key)||// Try to find dashed key if it exists (gh-2779)
	// This is for 2.2.x only
	dataUser.get(elem,key.replace(rmultiDash,"-$&").toLowerCase());if(data!==undefined){return data;}camelKey=jQuery.camelCase(key);// Attempt to get data from the cache
	// with the key camelized
	data=dataUser.get(elem,camelKey);if(data!==undefined){return data;}// Attempt to "discover" the data in
	// HTML5 custom data-* attrs
	data=dataAttr(elem,camelKey,undefined);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
	return;}// Set the data...
	camelKey=jQuery.camelCase(key);this.each(function(){// First, attempt to store a copy or reference of any
	// data that might've been store with a camelCased key.
	var data=dataUser.get(this,camelKey);// For HTML5 data-* attribute interop, we have to
	// store property names with dashes in a camelCase form.
	// This might not apply to all properties...*
	dataUser.set(this,camelKey,value);// *... In the case of properties that might _actually_
	// have dashes, we need to also store a copy of that
	// unchanged property.
	if(key.indexOf("-")>-1&&data!==undefined){dataUser.set(this,key,value);}});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
	if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
	delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
	_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
	jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function isHidden(elem,el){// isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
	initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Trust units reported by jQuery.css
	unit=unit||initialInUnit[3];// Make sure we update the tween properties later on
	valueParts=valueParts||[];// Iteratively approximate from a nonzero starting point
	initialInUnit=+initial||1;do{// If previous iteration zeroed out, double until we get *something*.
	// Use string for doubling so we don't accidentally see scale as unchanged below
	scale=scale||".5";// Adjust and apply
	initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit);// Update scale, tolerating zero or NaN from tween.cur()
	// Break the loop if scale is unchanged or perfect, or if we've just had enough.
	}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
	adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([\w:-]+)/;var rscriptType=/^$|\/(?:java|ecma)script/i;// We have to close these tags to support XHTML (#13200)
	var wrapMap={// Support: IE9
	option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE9
	wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){// Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!=="undefined"?context.querySelectorAll(tag||"*"):[];return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;}// Mark scripts as having already been evaluated
	function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
	if(jQuery.type(elem)==="object"){// Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
	}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
	}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
	tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
	j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
	tmp=fragment.firstChild;// Ensure the created nodes are orphaned (#12392)
	tmp.textContent="";}}}// Remove wrapper from fragment
	fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
	if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem);// Append to fragment
	tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
	if(contains){setGlobalEval(tmp);}// Capture executables
	if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}// Support: IE9
	// See #13393 for more info
	function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
	if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-Object, selector, data )
	if(typeof selector!=="string"){// ( types-Object, data )
	data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
	fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
	fn=data;data=undefined;}else{// ( types, data, fn )
	fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){// Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
	fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Don't attach events to noData or text/comment nodes (but allow plain objects)
	if(!elemData){return;}// Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
	if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
	if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
	special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
	type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
	special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
	handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
	if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
	if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
	remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
	origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(event){// Make a writable jQuery.Event from the native event object
	event=jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=_slice.call(arguments),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0]=event;event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
	handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
	i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// Triggered event must either 1) have no namespace, or 2) have namespace(s)
	// a subset or equal to those in the bound event (both can have no namespace).
	if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target;// Support (at least): Chrome, IE9
	// Find delegate handlers
	// Black-hole SVG <use> instance trees (#13180)
	//
	// Support: Firefox<=42+
	// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
	if(delegateCount&&cur.nodeType&&(event.type!=="click"||isNaN(event.button)||event.button<1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (#13208)
	// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=_handlers[i];// Don't conflict with Object.prototype properties (#13203)
	sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matches[sel]){matches.push(handleObj);}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}// Add the remaining (directly-bound) handlers
	if(delegateCount<_handlers.length){handlerQueue.push({elem:this,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},// Includes some event props shared by KeyEvent and MouseEvent
	props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase "+"metaKey relatedTarget shiftKey target timeStamp view which").split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function filter(event,original){// Add which for key events
	if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}return event;}},mouseHooks:{props:("button buttons clientX clientY offsetX offsetY pageX pageY "+"screenX screenY toElement").split(" "),filter:function filter(event,original){var eventDoc,doc,body,button=original.button;// Calculate pageX/Y if missing and clientX/Y available
	if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}// Add which for click: 1 === left; 2 === middle; 3 === right
	// Note: button is not normalized, so don't use it
	if(!event.which&&button!==undefined){event.which=button&1?1:button&2?3:button&4?2:0;}return event;}},fix:function fix(event){if(event[jQuery.expando]){return event;}// Create a writable copy of the event object and normalize some properties
	var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];}// Support: Cordova 2.5 (WebKit) (#13255)
	// All events should have a target; Cordova deviceready doesn't
	if(!event.target){event.target=document;}// Support: Safari 6.0+, Chrome<28
	// Target should not be a text node (#504, #13143)
	if(event.target.nodeType===3){event.target=event.target.parentNode;}return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{// Prevent triggered image.load events from bubbling to window.load
	noBubble:true},focus:{// Fire native event if possible so blur/focus sequence is correct
	trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
	trigger:function trigger(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}},// For cross-browser consistency, don't fire native .click() on links
	_default:function _default(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){// Support: Firefox 20+
	// Firefox doesn't alert if the returnValue field is not set.
	if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
	if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
	if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android<4.0
	src.returnValue===false?returnTrue:returnFalse;// Event type
	}else{this.type=src;}// Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
	this.timeStamp=src&&src.timeStamp||jQuery.now();// Mark it as fixed
	this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
	handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-object [, selector] )
	for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
	fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;// Manipulating tables requires a tbody
	function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
	if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
	if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
	function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
	if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
	}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
	args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
	if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
	if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
	// instead of the first because it can end up
	// being emptied incorrectly in certain situations (#8070).
	for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
	if(hasScripts){// Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Reenable scripts
	jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
	for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){// Optional AJAX dependency, but won't run scripts if not present
	if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{jQuery.globalEval(node.textContent.replace(rcleanScript,""));}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);// Fix IE cloning issues
	if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
	destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
	if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
	destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
	return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
	}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <= 35-45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <= 35-45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({// Keep domManip exposed until 3.0 (gh-2225)
	domManip:domManip,detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
	jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
	elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
	if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
	if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
	}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
	return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
	},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: QtWebKit
	// .get() because push.apply(_, arraylike) throws
	push.apply(ret,elems.get());}return this.pushStack(ret);};});var iframe,elemdisplay={// Support: Firefox
	// We have to pre-define these values for FF (#10227)
	HTML:"block",BODY:"block"};/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */// Called only from within defaultDisplay
	function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();return display;}/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);// If the simple way fails, read from inside an iframe
	if(display==="none"||!display){// Use the already-created iframe if possible
	iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
	doc=iframe[0].contentDocument;// Support: IE
	doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();}// Store the correct default display
	elemdisplay[nodeName]=display;}return display;}var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
	// IE throws on elements created in popups
	// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};var swap=function swap(elem,options,callback,args){var ret,name,old={};// Remember the old values, and insert the new ones
	for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]);// Revert the old values
	for(name in options){elem.style[name]=old[name];}return ret;};var documentElement=document.documentElement;(function(){var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
	if(!div.style){return;}// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div);// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests(){div.style.cssText=// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px";// Support: Android 4.0 - 4.3 only
	// Some styles come back with percentage values, even though they shouldn't
	div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);}jQuery.extend(support,{pixelPosition:function pixelPosition(){// This test is executed only once but we still do memoizing
	// since we can use the boxSizingReliable pre-computing.
	// No need to check if the test was already performed, though.
	computeStyleTests();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){if(boxSizingReliableVal==null){computeStyleTests();}return boxSizingReliableVal;},pixelMarginRight:function pixelMarginRight(){// Support: Android 4.0-4.3
	// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
	// since that compresses better and they're computed together anyway.
	if(boxSizingReliableVal==null){computeStyleTests();}return pixelMarginRightVal;},reliableMarginLeft:function reliableMarginLeft(){// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
	if(boxSizingReliableVal==null){computeStyleTests();}return reliableMarginLeftVal;},reliableMarginRight:function reliableMarginRight(){// Support: Android 2.3
	// Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. (#3333)
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	// This support function is only executed once so no memoizing is needed.
	var ret,marginDiv=div.appendChild(document.createElement("div"));// Reset CSS: box-sizing; display; margin; border; padding
	marginDiv.style.cssText=div.style.cssText=// Support: Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:content-box;box-sizing:content-box;"+"display:block;margin:0;border:0;padding:0";marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";documentElement.appendChild(container);ret=!parseFloat(window.getComputedStyle(marginDiv).marginRight);documentElement.removeChild(container);div.removeChild(marginDiv);return ret;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed.getPropertyValue(name)||computed[name]:undefined;// Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if((ret===""||ret===undefined)&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if(computed){// A tribute to the "awesome hack by Dean Edwards"
	// Android Browser returns percentage for some values,
	// but width seems to be reliably pixels.
	// This is against the CSSOM draft spec:
	// http://dev.w3.org/csswg/cssom/#resolved-values
	if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){// Remember the original values
	width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
	style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
	style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE9-11+
	// IE returns zIndex value as an integer.
	ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
	return{get:function get(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
	// to missing dependency), remove it.
	delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
	return(this.get=hookFn).apply(this,arguments);}};}var// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"],emptyStyle=document.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name){// Shortcut for names that are not vendor prefixed
	if(name in emptyStyle){return name;}// Check for vendor prefixed names
	var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}function setPositiveNumber(elem,value,subtract){// Any relative (+/-) values have already been
	// normalized at this point
	var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
	Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?// If we already have the right measurement, avoid augmentation
	4:// Otherwise initialize for horizontal or vertical properties
	name==="width"?1:0,val=0;for(;i<4;i+=2){// Both box models exclude margin, so add it if we want it
	if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){// border-box includes padding, so remove it if we want content
	if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// At this point, extra isn't border nor margin, so remove border
	if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{// At this point, extra isn't content, so add padding
	val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// At this point, extra isn't content nor padding, so add border
	if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if(val<=0||val==null){// Fall back to computed then uncomputed css if necessary
	val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}// Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;}// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);// Normalize "", auto, and prepare for extra
	val=parseFloat(val)||0;}// Use the active box-sizing model to add/subtract irrelevant styles
	return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}values[index]=dataPriv.get(elem,"olddisplay");display=elem.style.display;if(show){// Reset the inline display of this element to learn if it is
	// being hidden by cascaded rules or not
	if(!values[index]&&display==="none"){elem.style.display="";}// Set elements which have been overridden with display: none
	// in a stylesheet to whatever the default browser style is
	// for such an element
	if(elem.style.display===""&&isHidden(elem)){values[index]=dataPriv.access(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else{hidden=isHidden(elem);if(display!=="none"||!hidden){dataPriv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}return elements;}jQuery.extend({// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function get(elem,computed){if(computed){// We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
	cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{"float":"cssFloat"},// Get and set the style property on a DOM Node
	style:function style(elem,name,value,extra){// Don't set styles on text and comment nodes
	if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
	var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Gets hook for the prefixed version, then unprefixed version
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
	if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof(value);// Convert "+=" or "-=" to relative numbers (#7345)
	if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug #9237
	type="number";}// Make sure that null and NaN values aren't set (#7116)
	if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
	if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// Support: IE9-11+
	// background-* props affect original clone's values
	if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else{// If a hook was provided get the non-computed value from there
	if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
	return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);// Make sure that we're working with the right name
	name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Try prefixed name followed by the unprefixed name
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
	if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
	if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
	if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
	if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
	// but it must have a current display style that would benefit
	return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles);// Convert to pixels if value adjustment is needed
	if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// Support: Android 2.3
	jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}});// These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={},// Assumes a single number if not a string
	parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result;// Use a property on the element directly when it is not a DOM element,
	// or when there is no matching style property that exists.
	if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
	// attempt a parseFloat and fallback to a string if the parse fails.
	// Simple values such as "10px" are parsed to Float;
	// complex values such as "rotate(1rad)" are returned as-is.
	result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
	return!result||result==="auto"?0:result;},set:function set(tween){// Use step hook for back compat.
	// Use cssHook if its there.
	// Use .style if available and use plain properties where available.
	if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back Compat <1.8 extension point
	jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;// Animations created synchronously will run synchronously
	function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();}// Generate parameters to create a standard animation
	function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
	return tween;}}}function defaultPrefilter(elem,props,opts){/* jshint validthis: true */var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=dataPriv.get(elem,"fxshow");// Handle queue: false promises
	if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
	anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Height/width overflow pass
	if(elem.nodeType===1&&("height"in props||"width"in props)){// Make sure that nothing sneaks out
	// Record all 3 overflow attributes because IE9-10 do not
	// change the overflow attribute when overflowX and
	// overflowY are set to the same value
	opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Set display property to inline-block for height/width
	// animations on inline elements that are having width/height animated
	display=jQuery.css(elem,"display");// Test default display if display is currently "none"
	checkDisplay=display==="none"?dataPriv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block";}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// show/hide pass
	for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// If there is dataShow left over from a stopped hide or show
	// and we are going to proceed with show, we should pretend to be hidden
	if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);// Any non-fx value stops us from restoring the original display value
	}else{display=undefined;}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{});}// Store state if its toggle - enables .stop().toggle() to "reverse"
	if(toggle){dataShow.hidden=!hidden;}if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}anim.done(function(){var prop;dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}// If this is a noop like .hide().hide(), restore an overwritten display value
	}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
	for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
	// Reusing 'index' because we have the correct "name"
	for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
	delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3
	// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
	// otherwise we skip this part
	length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
	if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));// attach callbacks from options
	return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnotwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;// Normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
	opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
	return this.filter(isHidden).css("opacity",0).show()// Animate to the value specified
	.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){// Operate on a copy of prop so per-property easing won't be lost
	var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
	if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
	// Timers currently will call their complete callbacks, which
	// will dequeue but only if they were gotoEnd.
	if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
	data.finish=true;// Empty the queue first
	jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
	for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
	for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
	delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];// Checks the timer has not already been removed
	if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){window.clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
	_default:400};// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn=input.value!=="";// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected=opt.selected;// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled=true;support.optDisabled=!opt.disabled;// Support: IE<=11+
	// An input loses its value after becoming a radio
	input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
	if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// All attributes are lowercase
	// Grab necessary hook if one is defined
	if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
	return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){propName=jQuery.propFix[name]||name;// Boolean attributes get special treatment (#10870)
	if(jQuery.expr.match.bool.test(name)){// Set corresponding property to false
	elem[propName]=false;}elem.removeAttribute(name);}}}});// Hooks for boolean attributes
	boolHook={set:function set(elem,value,name){if(value===false){// Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle;if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
	handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
	name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){// elem.tabIndex doesn't always return the
	// correct value when it hasn't been explicitly set
	// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	// Use proper attribute retrieval(#12072)
	var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});var rclass=/[\t\r\n\f]/g;function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}// Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem);// This expression is here for better compressibility (see addClass)
	cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){// Remove *all* instances
	while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}// Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof(value);if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type==="string"){// Toggle individual class names
	i=0;self=jQuery(this);classNames=value.match(rnotwhite)||[];while(className=classNames[i++]){// Check each className given, space separated list
	if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
	}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
	dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
	// then remove the whole classname (if there was one, the above saved it).
	// Otherwise bring back whatever was previously saved (if anything),
	// falling back to the empty string if nothing was stored.
	if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+getClass(elem)+" ").replace(rclass," ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g,rspaces=/[\x20\t\r\n\f]+/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;return typeof ret==="string"?// Handle most common string cases
	ret.replace(rreturn,""):// Handle cases where value is null/undef or number
	ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
	if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
	if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE10-11+
	// option.text throws exceptions (#14686, #14858)
	// Strip and collapse whitespace
	// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
	jQuery.trim(jQuery.text(elem)).replace(rspaces," ");}},select:{get:function get(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;// Loop through all the selected options
	for(;i<max;i++){option=options[i];// IE8-9 doesn't update selected after form reset (#2551)
	if((option.selected||i===index)&&(// Don't return options that are disabled or in a disabled optgroup
	support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
	value=jQuery(option).val();// We don't need an array for one selects
	if(one){return value;}// Multi-Selects return an array
	values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}}// Force browsers to behave consistently when non-matching value is set
	if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
	jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
	var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;// Don't do events on text and comment nodes
	if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
	namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
	event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof(event))==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
	event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
	data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
	special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
	i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
	handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
	handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
	if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name name as the event.
	// Don't do default actions on window, that's where global variables be (#6170)
	if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
	tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){// Handle event binding
	jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin"in window;// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){// Attach a single capturing handler on the document while someone wants focusin/focusout
	var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/;// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON=function(data){return JSON.parse(data+"");};// Cross-browser xml parsing
	jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}// Support: IE9
	try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */prefilters={},/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */transports={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
	originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){// For each dataType in the dataTypeExpression
	while(dataType=dataTypes[i++]){// Prepend if requested
	if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
	}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
	while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
	if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
	if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
	for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
	finalDataType=finalDataType||firstDataType;}// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
	dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
	if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
	while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
	if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
	if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
	}else if(prev!=="*"&&prev!==current){// Seek a direct converter
	conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
	if(!conv){for(conv2 in converters){// If conv2 outputs current
	tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
	conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
	if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
	}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
	if(conv!==true){// Unless errors are allowed to bubble, catch and return them
	if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
	active:0,// Last-Modified header cache for next request
	lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
	// Keys separate source (or catchall "*") and destination types with a single space
	converters:{// Convert anything to text
	"* text":String,// Text to html (true = no transformation)
	"text html":true,// Evaluate text as a json expression
	"text json":jQuery.parseJSON,// Parse text as xml
	"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function ajaxSetup(target,settings){return settings?// Building a settings object
	ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
	ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
	ajax:function ajax(url,options){// If url is an object, simulate pre-1.5 signature
	if((typeof url==="undefined"?"undefined":_typeof(url))==="object"){options=url;url=undefined;}// Force options to be an object
	options=options||{};var transport,// URL without anti-cache param
	cacheURL,// Response headers
	responseHeadersString,responseHeaders,// timeout handle
	timeoutTimer,// Url cleanup var
	urlAnchor,// To know if global events are to be dispatched
	fireGlobals,// Loop variable
	i,// Create the final options object
	s=jQuery.ajaxSetup({},options),// Callbacks context
	callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
	globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
	_statusCode=s.statusCode||{},// Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={},// The jqXHR state
	state=0,// Default abort message
	strAbort="canceled",// Fake xhr
	jqXHR={readyState:0,// Builds headers hashtable if needed
	getResponseHeader:function getResponseHeader(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;},// Raw string
	getAllResponseHeaders:function getAllResponseHeaders(){return state===2?responseHeadersString:null;},// Caches the header
	setRequestHeader:function setRequestHeader(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
	overrideMimeType:function overrideMimeType(type){if(!state){s.mimeType=type;}return this;},// Status-dependent callbacks
	statusCode:function statusCode(map){var code;if(map){if(state<2){for(code in map){// Lazy-add the new callback in a way that preserves old ones
	_statusCode[code]=[_statusCode[code],map[code]];}}else{// Execute the appropriate callbacks
	jqXHR.always(map[jqXHR.status]);}}return this;},// Cancel the request
	abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
	deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;// Remove hash character (#7531: and string promotion)
	// Add protocol if not provided (prefilters might expect it)
	// Handle falsy url in the settings object (#10093: consistency with old signature)
	// We also use the url parameter if available
	s.url=((url||s.url||location.href)+"").replace(rhash,"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket #12004
	s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
	s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
	if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE8-11+
	// IE throws exception if url is malformed, e.g. http://example.com:80x/
	try{urlAnchor.href=s.url;// Support: IE8-11+
	// Anchor's host property isn't correctly set when s.url is relative
	urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
	// it can be rejected by the transport if it is invalid
	s.crossDomain=true;}}// Convert data if not already a string
	if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
	if(state===2){return jqXHR;}// We can fire global events as of now if asked to
	// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
	if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
	s.type=s.type.toUpperCase();// Determine if request has content
	s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
	// and/or If-None-Match header later on
	cacheURL=s.url;// More options handling for requests with no content
	if(!s.hasContent){// If data is available, append data to url
	if(s.data){cacheURL=s.url+=(rquery.test(cacheURL)?"&":"?")+s.data;// #9682: remove data so that it's not used in an eventual retry
	delete s.data;}// Add anti-cache in url if needed
	if(s.cache===false){s.url=rts.test(cacheURL)?// If there is already a '_' parameter, set its value
	cacheURL.replace(rts,"$1_="+nonce++):// Otherwise add one to the end
	cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;}}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
	if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
	for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
	if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){// Abort if not done already and return
	return jqXHR.abort();}// Aborting is no longer a cancellation
	strAbort="abort";// Install callbacks on deferreds
	for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}// Get transport
	transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
	if(state===2){return jqXHR;}// Timeout
	if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{state=1;transport.send(requestHeaders,done);}catch(e){// Propagate exception as error if not done
	if(state<2){done(-1,e);// Simply rethrow otherwise
	}else{throw e;}}}// Callback for when everything is done
	function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Called once
	if(state===2){return;}// State is "done" now
	state=2;// Clear timeout if it exists
	if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport=undefined;// Cache response headers
	responseHeadersString=headers||"";// Set readyState
	jqXHR.readyState=status>0?4:0;// Determine if successful
	isSuccess=status>=200&&status<300||status===304;// Get response data
	if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Convert no matter what (that way responseXXX fields are always set)
	response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
	if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
	if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
	}else if(status===304){statusText="notmodified";// If we have data, let's convert it
	}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
	error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
	jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
	jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
	return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (#11264)
	type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}if(this[0]){// The elements to wrap the target around
	wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden=function(elem){return!jQuery.expr.filters.visible(elem);};jQuery.expr.filters.visible=function(elem){// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth>0||elem.offsetHeight>0||elem.getClientRects().length>0;};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){// Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
	add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
	buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof(v))==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){// Serialize object item.
	for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
	add(prefix,obj);}}// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,value){// If value is a function, invoke it and return its value
	value=jQuery.isFunction(value)?value():value==null?"":value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};// Set traditional to true for jQuery <= 1.3.2 behavior.
	if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}// If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
	return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
	var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
	return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
	0:200,// Support: IE9
	// #1450: sometimes IE returns 1223 when it should be 204
	1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
	if(support.cors||xhrSupported&&!options.crossDomain){return{send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
	if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
	if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
	for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
	_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE9
	// On a manual native abort, IE9 throws
	// errors on any property access that is not readyState
	if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see #8605, #14207
	xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE9 only
	// IE9 has no XHR2 but throws on binary (trac-11426)
	// For XHR2 non-text, let the caller handle it (gh-2498)
	(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
	xhr.onload=_callback();errorCallback=xhr.onerror=_callback("error");// Support: IE9
	// Use onreadystatechange to replace onabort
	// to handle uncaught aborts
	if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
	if(xhr.readyState===4){// Allow onerror to be called first,
	// but that will not handle a native abort
	// Also, save errorCallback to a variable
	// as xhr.onerror cannot be accessed
	window.setTimeout(function(){if(_callback){errorCallback();}});}};}// Create the abort callback
	_callback=_callback("abort");try{// Do send the request (this may raise an exception)
	xhr.send(options.hasContent&&options.data||null);}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
	if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}});// Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain requests
	if(s.crossDomain){var script,_callback2;return{send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
	document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
	callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
	if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
	s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
	s.dataTypes[0]="json";// Install callback
	overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
	jqXHR.always(function(){// If previous value didn't exist - remove it
	if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
	}else{window[callbackName]=overwritten;}// Save back as free
	if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
	s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
	oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
	if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
	return"script";}});// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}if(typeof context==="boolean"){keepScripts=context;context=false;}context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];// Single tag
	if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};// Keep a copy of the old load method
	var _load=jQuery.fn.load;/**
	 * Load a url into a page
	 */jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=jQuery.trim(url.slice(off));url=url.slice(0,off);}// If it's a function
	if(jQuery.isFunction(params)){// We assume that it's the callback
	callback=params;params=undefined;// Otherwise, build a param string
	}else if(params&&(typeof params==="undefined"?"undefined":_typeof(params))==="object"){type="POST";}// If we have elements to modify, make the request
	if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
	// Make value of this field explicit since
	// user can override it through ajaxSetup method
	type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
	response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
	// Exclude scripts to avoid IE 'Permission Denied' errors
	jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
	responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
	// but they are ignored because response was set above.
	// If it fails, this function gets "jqXHR", "status", "error"
	}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};/**
	 * Gets a window from an element
	 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
	if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
	// top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
	options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;if(!doc){return;}docElem=doc.documentElement;// Make sure it's not a disconnected DOM node
	if(!jQuery.contains(docElem,elem)){return box;}box=elem.getBoundingClientRect();win=getWindow(doc);return{top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft};},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	// because it is its only offset parent
	if(jQuery.css(elem,"position")==="fixed"){// Assume getBoundingClientRect is there when computed position is fixed
	offset=elem.getBoundingClientRect();}else{// Get *real* offsetParent
	offsetParent=this.offsetParent();// Get correct offsets
	offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}// Add offsetParent borders
	parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);}// Subtract parent offsets and element margins
	return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
	return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
	jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
	// isn't a whole lot we can do. See pull request at this URL for discussion:
	// https://github.com/jquery/jquery/pull/764
	return elem.document.documentElement["client"+name];}// Get document width or height
	if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	// whichever is greatest
	return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
	jQuery.css(elem,type,extra):// Set width or height on the element
	jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
	return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},size:function size(){return this.length;}});jQuery.fn.andSelf=jQuery.fn.addBack;// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}var// Map over jQuery in case of overwrite
	_jQuery=window.jQuery,// Map over the $ in case of overwrite
	_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	/* ========================================================================
	 * Bootstrap: transition.js v3.3.6
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================

	  function transitionEnd() {
	    var el = document.createElement('bootstrap');

	    var transEndEventNames = {
	      WebkitTransition: 'webkitTransitionEnd',
	      MozTransition: 'transitionend',
	      OTransition: 'oTransitionEnd otransitionend',
	      transition: 'transitionend'
	    };

	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] };
	      }
	    }

	    return false; // explicit for ie8 (  ._.)
	  }

	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false;
	    var $el = this;
	    $(this).one('bsTransitionEnd', function () {
	      called = true;
	    });
	    var callback = function callback() {
	      if (!called) $($el).trigger($.support.transition.end);
	    };
	    setTimeout(callback, duration);
	    return this;
	  };

	  $(function () {
	    $.support.transition = transitionEnd();

	    if (!$.support.transition) return;

	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function handle(e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
	      }
	    };
	  });
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	/* ========================================================================
	 * Bootstrap: alert.js v3.3.6
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // ALERT CLASS DEFINITION
	  // ======================

	  var dismiss = '[data-dismiss="alert"]';
	  var Alert = function Alert(el) {
	    $(el).on('click', dismiss, this.close);
	  };

	  Alert.VERSION = '3.3.6';

	  Alert.TRANSITION_DURATION = 150;

	  Alert.prototype.close = function (e) {
	    var $this = $(this);
	    var selector = $this.attr('data-target');

	    if (!selector) {
	      selector = $this.attr('href');
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
	    }

	    var $parent = $(selector);

	    if (e) e.preventDefault();

	    if (!$parent.length) {
	      $parent = $this.closest('.alert');
	    }

	    $parent.trigger(e = $.Event('close.bs.alert'));

	    if (e.isDefaultPrevented()) return;

	    $parent.removeClass('in');

	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.detach().trigger('closed.bs.alert').remove();
	    }

	    $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
	  };

	  // ALERT PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.alert');

	      if (!data) $this.data('bs.alert', data = new Alert(this));
	      if (typeof option == 'string') data[option].call($this);
	    });
	  }

	  var old = $.fn.alert;

	  $.fn.alert = Plugin;
	  $.fn.alert.Constructor = Alert;

	  // ALERT NO CONFLICT
	  // =================

	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old;
	    return this;
	  };

	  // ALERT DATA-API
	  // ==============

	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/* ========================================================================
	 * Bootstrap: button.js v3.3.6
	 * http://getbootstrap.com/javascript/#buttons
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // BUTTON PUBLIC CLASS DEFINITION
	  // ==============================

	  var Button = function Button(element, options) {
	    this.$element = $(element);
	    this.options = $.extend({}, Button.DEFAULTS, options);
	    this.isLoading = false;
	  };

	  Button.VERSION = '3.3.6';

	  Button.DEFAULTS = {
	    loadingText: 'loading...'
	  };

	  Button.prototype.setState = function (state) {
	    var d = 'disabled';
	    var $el = this.$element;
	    var val = $el.is('input') ? 'val' : 'html';
	    var data = $el.data();

	    state += 'Text';

	    if (data.resetText == null) $el.data('resetText', $el[val]());

	    // push to event loop to allow forms to submit
	    setTimeout($.proxy(function () {
	      $el[val](data[state] == null ? this.options[state] : data[state]);

	      if (state == 'loadingText') {
	        this.isLoading = true;
	        $el.addClass(d).attr(d, d);
	      } else if (this.isLoading) {
	        this.isLoading = false;
	        $el.removeClass(d).removeAttr(d);
	      }
	    }, this), 0);
	  };

	  Button.prototype.toggle = function () {
	    var changed = true;
	    var $parent = this.$element.closest('[data-toggle="buttons"]');

	    if ($parent.length) {
	      var $input = this.$element.find('input');
	      if ($input.prop('type') == 'radio') {
	        if ($input.prop('checked')) changed = false;
	        $parent.find('.active').removeClass('active');
	        this.$element.addClass('active');
	      } else if ($input.prop('type') == 'checkbox') {
	        if ($input.prop('checked') !== this.$element.hasClass('active')) changed = false;
	        this.$element.toggleClass('active');
	      }
	      $input.prop('checked', this.$element.hasClass('active'));
	      if (changed) $input.trigger('change');
	    } else {
	      this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
	      this.$element.toggleClass('active');
	    }
	  };

	  // BUTTON PLUGIN DEFINITION
	  // ========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.button');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data) $this.data('bs.button', data = new Button(this, options));

	      if (option == 'toggle') data.toggle();else if (option) data.setState(option);
	    });
	  }

	  var old = $.fn.button;

	  $.fn.button = Plugin;
	  $.fn.button.Constructor = Button;

	  // BUTTON NO CONFLICT
	  // ==================

	  $.fn.button.noConflict = function () {
	    $.fn.button = old;
	    return this;
	  };

	  // BUTTON DATA-API
	  // ===============

	  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	    var $btn = $(e.target);
	    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn');
	    Plugin.call($btn, 'toggle');
	    if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault();
	  }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	    $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
	  });
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/* ========================================================================
	 * Bootstrap: carousel.js v3.3.6
	 * http://getbootstrap.com/javascript/#carousel
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // CAROUSEL CLASS DEFINITION
	  // =========================

	  var Carousel = function Carousel(element, options) {
	    this.$element = $(element);
	    this.$indicators = this.$element.find('.carousel-indicators');
	    this.options = options;
	    this.paused = null;
	    this.sliding = null;
	    this.interval = null;
	    this.$active = null;
	    this.$items = null;

	    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this));

	    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
	  };

	  Carousel.VERSION = '3.3.6';

	  Carousel.TRANSITION_DURATION = 600;

	  Carousel.DEFAULTS = {
	    interval: 5000,
	    pause: 'hover',
	    wrap: true,
	    keyboard: true
	  };

	  Carousel.prototype.keydown = function (e) {
	    if (/input|textarea/i.test(e.target.tagName)) return;
	    switch (e.which) {
	      case 37:
	        this.prev();break;
	      case 39:
	        this.next();break;
	      default:
	        return;
	    }

	    e.preventDefault();
	  };

	  Carousel.prototype.cycle = function (e) {
	    e || (this.paused = false);

	    this.interval && clearInterval(this.interval);

	    this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));

	    return this;
	  };

	  Carousel.prototype.getItemIndex = function (item) {
	    this.$items = item.parent().children('.item');
	    return this.$items.index(item || this.$active);
	  };

	  Carousel.prototype.getItemForDirection = function (direction, active) {
	    var activeIndex = this.getItemIndex(active);
	    var willWrap = direction == 'prev' && activeIndex === 0 || direction == 'next' && activeIndex == this.$items.length - 1;
	    if (willWrap && !this.options.wrap) return active;
	    var delta = direction == 'prev' ? -1 : 1;
	    var itemIndex = (activeIndex + delta) % this.$items.length;
	    return this.$items.eq(itemIndex);
	  };

	  Carousel.prototype.to = function (pos) {
	    var that = this;
	    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));

	    if (pos > this.$items.length - 1 || pos < 0) return;

	    if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
	      that.to(pos);
	    }); // yes, "slid"
	    if (activeIndex == pos) return this.pause().cycle();

	    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos));
	  };

	  Carousel.prototype.pause = function (e) {
	    e || (this.paused = true);

	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end);
	      this.cycle(true);
	    }

	    this.interval = clearInterval(this.interval);

	    return this;
	  };

	  Carousel.prototype.next = function () {
	    if (this.sliding) return;
	    return this.slide('next');
	  };

	  Carousel.prototype.prev = function () {
	    if (this.sliding) return;
	    return this.slide('prev');
	  };

	  Carousel.prototype.slide = function (type, next) {
	    var $active = this.$element.find('.item.active');
	    var $next = next || this.getItemForDirection(type, $active);
	    var isCycling = this.interval;
	    var direction = type == 'next' ? 'left' : 'right';
	    var that = this;

	    if ($next.hasClass('active')) return this.sliding = false;

	    var relatedTarget = $next[0];
	    var slideEvent = $.Event('slide.bs.carousel', {
	      relatedTarget: relatedTarget,
	      direction: direction
	    });
	    this.$element.trigger(slideEvent);
	    if (slideEvent.isDefaultPrevented()) return;

	    this.sliding = true;

	    isCycling && this.pause();

	    if (this.$indicators.length) {
	      this.$indicators.find('.active').removeClass('active');
	      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
	      $nextIndicator && $nextIndicator.addClass('active');
	    }

	    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }); // yes, "slid"
	    if ($.support.transition && this.$element.hasClass('slide')) {
	      $next.addClass(type);
	      $next[0].offsetWidth; // force reflow
	      $active.addClass(direction);
	      $next.addClass(direction);
	      $active.one('bsTransitionEnd', function () {
	        $next.removeClass([type, direction].join(' ')).addClass('active');
	        $active.removeClass(['active', direction].join(' '));
	        that.sliding = false;
	        setTimeout(function () {
	          that.$element.trigger(slidEvent);
	        }, 0);
	      }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
	    } else {
	      $active.removeClass('active');
	      $next.addClass('active');
	      this.sliding = false;
	      this.$element.trigger(slidEvent);
	    }

	    isCycling && this.cycle();

	    return this;
	  };

	  // CAROUSEL PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.carousel');
	      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);
	      var action = typeof option == 'string' ? option : options.slide;

	      if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
	      if (typeof option == 'number') data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
	    });
	  }

	  var old = $.fn.carousel;

	  $.fn.carousel = Plugin;
	  $.fn.carousel.Constructor = Carousel;

	  // CAROUSEL NO CONFLICT
	  // ====================

	  $.fn.carousel.noConflict = function () {
	    $.fn.carousel = old;
	    return this;
	  };

	  // CAROUSEL DATA-API
	  // =================

	  var clickHandler = function clickHandler(e) {
	    var href;
	    var $this = $(this);
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
	    if (!$target.hasClass('carousel')) return;
	    var options = $.extend({}, $target.data(), $this.data());
	    var slideIndex = $this.attr('data-slide-to');
	    if (slideIndex) options.interval = false;

	    Plugin.call($target, options);

	    if (slideIndex) {
	      $target.data('bs.carousel').to(slideIndex);
	    }

	    e.preventDefault();
	  };

	  $(document).on('click.bs.carousel.data-api', '[data-slide]', clickHandler).on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler);

	  $(window).on('load', function () {
	    $('[data-ride="carousel"]').each(function () {
	      var $carousel = $(this);
	      Plugin.call($carousel, $carousel.data());
	    });
	  });
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/* ========================================================================
	 * Bootstrap: collapse.js v3.3.6
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================

	  var Collapse = function Collapse(element, options) {
	    this.$element = $(element);
	    this.options = $.extend({}, Collapse.DEFAULTS, options);
	    this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
	    this.transitioning = null;

	    if (this.options.parent) {
	      this.$parent = this.getParent();
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger);
	    }

	    if (this.options.toggle) this.toggle();
	  };

	  Collapse.VERSION = '3.3.6';

	  Collapse.TRANSITION_DURATION = 350;

	  Collapse.DEFAULTS = {
	    toggle: true
	  };

	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width');
	    return hasWidth ? 'width' : 'height';
	  };

	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return;

	    var activesData;
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');

	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse');
	      if (activesData && activesData.transitioning) return;
	    }

	    var startEvent = $.Event('show.bs.collapse');
	    this.$element.trigger(startEvent);
	    if (startEvent.isDefaultPrevented()) return;

	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide');
	      activesData || actives.data('bs.collapse', null);
	    }

	    var dimension = this.dimension();

	    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);

	    this.$trigger.removeClass('collapsed').attr('aria-expanded', true);

	    this.transitioning = 1;

	    var complete = function complete() {
	      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
	      this.transitioning = 0;
	      this.$element.trigger('show.bs.collapse');
	    };

	    if (!$.support.transition) return complete.call(this);

	    var scrollSize = $.camelCase(['scroll', dimension].join('-'));

	    this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
	  };

	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return;

	    var startEvent = $.Event('hide.bs.collapse');
	    this.$element.trigger(startEvent);
	    if (startEvent.isDefaultPrevented()) return;

	    var dimension = this.dimension();

	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

	    this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);

	    this.$trigger.addClass('collapsed').attr('aria-expanded', false);

	    this.transitioning = 1;

	    var complete = function complete() {
	      this.transitioning = 0;
	      this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
	    };

	    if (!$.support.transition) return complete.call(this);

	    this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
	  };

	  Collapse.prototype.toggle = function () {
	    this[(this.$element.hasClass('in') || this.$element.hasClass('collapsing')) ? 'hide' : 'show']();
	  };

	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
	      var $element = $(element);
	      this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
	    }, this)).end();
	  };

	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in');

	    $element.attr('aria-expanded', isOpen);
	    $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
	  };

	  function getTargetFromTrigger($trigger) {
	    var href;
	    var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

	    return $(target);
	  }

	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.collapse');
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
	      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.collapse;

	  $.fn.collapse = Plugin;
	  $.fn.collapse.Constructor = Collapse;

	  // COLLAPSE NO CONFLICT
	  // ====================

	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old;
	    return this;
	  };

	  // COLLAPSE DATA-API
	  // =================

	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this = $(this);

	    if (!$this.attr('data-target')) e.preventDefault();

	    var $target = getTargetFromTrigger($this);
	    var data = $target.data('bs.collapse');
	    var option = data ? 'toggle' : $this.data();

	    Plugin.call($target, option);
	  });
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	/* ========================================================================
	 * Bootstrap: dropdown.js v3.3.6
	 * http://getbootstrap.com/javascript/#dropdowns
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // DROPDOWN CLASS DEFINITION
	  // =========================

	  var backdrop = '.dropdown-backdrop';
	  var toggle = '[data-toggle="dropdown"]';
	  var Dropdown = function Dropdown(element) {
	    $(element).on('click.bs.dropdown', this.toggle);
	  };

	  Dropdown.VERSION = '3.3.6';

	  function getParent($this) {
	    var selector = $this.attr('data-target');

	    if (!selector) {
	      selector = $this.attr('href');
	      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
	    }

	    var $parent = selector && $(selector);

	    return $parent && $parent.length ? $parent : $this.parent();
	  }

	  function clearMenus(e) {
	    if (e && e.which === 3) return;
	    $(backdrop).remove();
	    $(toggle).each(function () {
	      var $this = $(this);
	      var $parent = getParent($this);
	      var relatedTarget = { relatedTarget: this };

	      if (!$parent.hasClass('open')) return;

	      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;

	      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));

	      if (e.isDefaultPrevented()) return;

	      $this.attr('aria-expanded', 'false');
	      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget));
	    });
	  }

	  Dropdown.prototype.toggle = function (e) {
	    var $this = $(this);

	    if ($this.is('.disabled, :disabled')) return;

	    var $parent = getParent($this);
	    var isActive = $parent.hasClass('open');

	    clearMenus();

	    if (!isActive) {
	      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
	        // if mobile we use a backdrop because click events don't delegate
	        $(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click', clearMenus);
	      }

	      var relatedTarget = { relatedTarget: this };
	      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));

	      if (e.isDefaultPrevented()) return;

	      $this.trigger('focus').attr('aria-expanded', 'true');

	      $parent.toggleClass('open').trigger($.Event('shown.bs.dropdown', relatedTarget));
	    }

	    return false;
	  };

	  Dropdown.prototype.keydown = function (e) {
	    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;

	    var $this = $(this);

	    e.preventDefault();
	    e.stopPropagation();

	    if ($this.is('.disabled, :disabled')) return;

	    var $parent = getParent($this);
	    var isActive = $parent.hasClass('open');

	    if (!isActive && e.which != 27 || isActive && e.which == 27) {
	      if (e.which == 27) $parent.find(toggle).trigger('focus');
	      return $this.trigger('click');
	    }

	    var desc = ' li:not(.disabled):visible a';
	    var $items = $parent.find('.dropdown-menu' + desc);

	    if (!$items.length) return;

	    var index = $items.index(e.target);

	    if (e.which == 38 && index > 0) index--; // up
	    if (e.which == 40 && index < $items.length - 1) index++; // down
	    if (!~index) index = 0;

	    $items.eq(index).trigger('focus');
	  };

	  // DROPDOWN PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.dropdown');

	      if (!data) $this.data('bs.dropdown', data = new Dropdown(this));
	      if (typeof option == 'string') data[option].call($this);
	    });
	  }

	  var old = $.fn.dropdown;

	  $.fn.dropdown = Plugin;
	  $.fn.dropdown.Constructor = Dropdown;

	  // DROPDOWN NO CONFLICT
	  // ====================

	  $.fn.dropdown.noConflict = function () {
	    $.fn.dropdown = old;
	    return this;
	  };

	  // APPLY TO STANDARD DROPDOWN ELEMENTS
	  // ===================================

	  $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
	    e.stopPropagation();
	  }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown);
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/* ========================================================================
	 * Bootstrap: modal.js v3.3.6
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // MODAL CLASS DEFINITION
	  // ======================

	  var Modal = function Modal(element, options) {
	    this.options = options;
	    this.$body = $(document.body);
	    this.$element = $(element);
	    this.$dialog = this.$element.find('.modal-dialog');
	    this.$backdrop = null;
	    this.isShown = null;
	    this.originalBodyPad = null;
	    this.scrollbarWidth = 0;
	    this.ignoreBackdropClick = false;

	    if (this.options.remote) {
	      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
	        this.$element.trigger('loaded.bs.modal');
	      }, this));
	    }
	  };

	  Modal.VERSION = '3.3.6';

	  Modal.TRANSITION_DURATION = 300;
	  Modal.BACKDROP_TRANSITION_DURATION = 150;

	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  };

	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget);
	  };

	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this;
	    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

	    this.$element.trigger(e);

	    if (this.isShown || e.isDefaultPrevented()) return;

	    this.isShown = true;

	    this.checkScrollbar();
	    this.setScrollbar();
	    this.$body.addClass('modal-open');

	    this.escape();
	    this.resize();

	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

	    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
	      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
	        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
	      });
	    });

	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade');

	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body); // don't move modals dom position
	      }

	      that.$element.show().scrollTop(0);

	      that.adjustDialog();

	      if (transition) {
	        that.$element[0].offsetWidth; // force reflow
	      }

	      that.$element.addClass('in');

	      that.enforceFocus();

	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

	      transition ? that.$dialog // wait for modal to slide in
	      .one('bsTransitionEnd', function () {
	        that.$element.trigger('focus').trigger(e);
	      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
	    });
	  };

	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault();

	    e = $.Event('hide.bs.modal');

	    this.$element.trigger(e);

	    if (!this.isShown || e.isDefaultPrevented()) return;

	    this.isShown = false;

	    this.escape();
	    this.resize();

	    $(document).off('focusin.bs.modal');

	    this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');

	    this.$dialog.off('mousedown.dismiss.bs.modal');

	    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
	  };

	  Modal.prototype.enforceFocus = function () {
	    $(document).off('focusin.bs.modal') // guard against infinite focus loop
	    .on('focusin.bs.modal', $.proxy(function (e) {
	      if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
	        this.$element.trigger('focus');
	      }
	    }, this));
	  };

	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide();
	      }, this));
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal');
	    }
	  };

	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
	    } else {
	      $(window).off('resize.bs.modal');
	    }
	  };

	  Modal.prototype.hideModal = function () {
	    var that = this;
	    this.$element.hide();
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open');
	      that.resetAdjustments();
	      that.resetScrollbar();
	      that.$element.trigger('hidden.bs.modal');
	    });
	  };

	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove();
	    this.$backdrop = null;
	  };

	  Modal.prototype.backdrop = function (callback) {
	    var that = this;
	    var animate = this.$element.hasClass('fade') ? 'fade' : '';

	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate;

	      this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body);

	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (this.ignoreBackdropClick) {
	          this.ignoreBackdropClick = false;
	          return;
	        }
	        if (e.target !== e.currentTarget) return;
	        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
	      }, this));

	      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

	      this.$backdrop.addClass('in');

	      if (!callback) return;

	      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in');

	      var callbackRemove = function callbackRemove() {
	        that.removeBackdrop();
	        callback && callback();
	      };
	      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
	    } else if (callback) {
	      callback();
	    }
	  };

	  // these following methods are used to handle overflowing modals

	  Modal.prototype.handleUpdate = function () {
	    this.adjustDialog();
	  };

	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;

	    this.$element.css({
	      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    });
	  };

	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    });
	  };

	  Modal.prototype.checkScrollbar = function () {
	    var fullWindowWidth = window.innerWidth;
	    if (!fullWindowWidth) {
	      // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect();
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
	    this.scrollbarWidth = this.measureScrollbar();
	  };

	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
	    this.originalBodyPad = document.body.style.paddingRight || '';
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
	  };

	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', this.originalBodyPad);
	  };

	  Modal.prototype.measureScrollbar = function () {
	    // thx walsh
	    var scrollDiv = document.createElement('div');
	    scrollDiv.className = 'modal-scrollbar-measure';
	    this.$body.append(scrollDiv);
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	    this.$body[0].removeChild(scrollDiv);
	    return scrollbarWidth;
	  };

	  // MODAL PLUGIN DEFINITION
	  // =======================

	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.modal');
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

	      if (!data) $this.data('bs.modal', data = new Modal(this, options));
	      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
	    });
	  }

	  var old = $.fn.modal;

	  $.fn.modal = Plugin;
	  $.fn.modal.Constructor = Modal;

	  // MODAL NO CONFLICT
	  // =================

	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old;
	    return this;
	  };

	  // MODAL DATA-API
	  // ==============

	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this = $(this);
	    var href = $this.attr('href');
	    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
	    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

	    if ($this.is('a')) e.preventDefault();

	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus');
	      });
	    });
	    Plugin.call($target, option, this);
	  });
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/* ========================================================================
	 * Bootstrap: tooltip.js v3.3.6
	 * http://getbootstrap.com/javascript/#tooltip
	 * Inspired by the original jQuery.tipsy by Jason Frame
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // TOOLTIP PUBLIC CLASS DEFINITION
	  // ===============================

	  var Tooltip = function Tooltip(element, options) {
	    this.type = null;
	    this.options = null;
	    this.enabled = null;
	    this.timeout = null;
	    this.hoverState = null;
	    this.$element = null;
	    this.inState = null;

	    this.init('tooltip', element, options);
	  };

	  Tooltip.VERSION = '3.3.6';

	  Tooltip.TRANSITION_DURATION = 150;

	  Tooltip.DEFAULTS = {
	    animation: true,
	    placement: 'top',
	    selector: false,
	    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    container: false,
	    viewport: {
	      selector: 'body',
	      padding: 0
	    }
	  };

	  Tooltip.prototype.init = function (type, element, options) {
	    this.enabled = true;
	    this.type = type;
	    this.$element = $(element);
	    this.options = this.getOptions(options);
	    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
	    this.inState = { click: false, hover: false, focus: false };

	    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
	      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
	    }

	    var triggers = this.options.trigger.split(' ');

	    for (var i = triggers.length; i--;) {
	      var trigger = triggers[i];

	      if (trigger == 'click') {
	        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
	      } else if (trigger != 'manual') {
	        var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
	        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';

	        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
	        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
	      }
	    }

	    this.options.selector ? this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' }) : this.fixTitle();
	  };

	  Tooltip.prototype.getDefaults = function () {
	    return Tooltip.DEFAULTS;
	  };

	  Tooltip.prototype.getOptions = function (options) {
	    options = $.extend({}, this.getDefaults(), this.$element.data(), options);

	    if (options.delay && typeof options.delay == 'number') {
	      options.delay = {
	        show: options.delay,
	        hide: options.delay
	      };
	    }

	    return options;
	  };

	  Tooltip.prototype.getDelegateOptions = function () {
	    var options = {};
	    var defaults = this.getDefaults();

	    this._options && $.each(this._options, function (key, value) {
	      if (defaults[key] != value) options[key] = value;
	    });

	    return options;
	  };

	  Tooltip.prototype.enter = function (obj) {
	    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
	      $(obj.currentTarget).data('bs.' + this.type, self);
	    }

	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true;
	    }

	    if (self.tip().hasClass('in') || self.hoverState == 'in') {
	      self.hoverState = 'in';
	      return;
	    }

	    clearTimeout(self.timeout);

	    self.hoverState = 'in';

	    if (!self.options.delay || !self.options.delay.show) return self.show();

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'in') self.show();
	    }, self.options.delay.show);
	  };

	  Tooltip.prototype.isInStateTrue = function () {
	    for (var key in this.inState) {
	      if (this.inState[key]) return true;
	    }

	    return false;
	  };

	  Tooltip.prototype.leave = function (obj) {
	    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
	      $(obj.currentTarget).data('bs.' + this.type, self);
	    }

	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false;
	    }

	    if (self.isInStateTrue()) return;

	    clearTimeout(self.timeout);

	    self.hoverState = 'out';

	    if (!self.options.delay || !self.options.delay.hide) return self.hide();

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'out') self.hide();
	    }, self.options.delay.hide);
	  };

	  Tooltip.prototype.show = function () {
	    var e = $.Event('show.bs.' + this.type);

	    if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e);

	      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
	      if (e.isDefaultPrevented() || !inDom) return;
	      var that = this;

	      var $tip = this.tip();

	      var tipId = this.getUID(this.type);

	      this.setContent();
	      $tip.attr('id', tipId);
	      this.$element.attr('aria-describedby', tipId);

	      if (this.options.animation) $tip.addClass('fade');

	      var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;

	      var autoToken = /\s?auto?\s?/i;
	      var autoPlace = autoToken.test(placement);
	      if (autoPlace) placement = placement.replace(autoToken, '') || 'top';

	      $tip.detach().css({ top: 0, left: 0, display: 'block' }).addClass(placement).data('bs.' + this.type, this);

	      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
	      this.$element.trigger('inserted.bs.' + this.type);

	      var pos = this.getPosition();
	      var actualWidth = $tip[0].offsetWidth;
	      var actualHeight = $tip[0].offsetHeight;

	      if (autoPlace) {
	        var orgPlacement = placement;
	        var viewportDim = this.getPosition(this.$viewport);

	        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > viewportDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < viewportDim.left ? 'right' : placement;

	        $tip.removeClass(orgPlacement).addClass(placement);
	      }

	      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);

	      this.applyPlacement(calculatedOffset, placement);

	      var complete = function complete() {
	        var prevHoverState = that.hoverState;
	        that.$element.trigger('shown.bs.' + that.type);
	        that.hoverState = null;

	        if (prevHoverState == 'out') that.leave(that);
	      };

	      $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
	    }
	  };

	  Tooltip.prototype.applyPlacement = function (offset, placement) {
	    var $tip = this.tip();
	    var width = $tip[0].offsetWidth;
	    var height = $tip[0].offsetHeight;

	    // manually read margins because getBoundingClientRect includes difference
	    var marginTop = parseInt($tip.css('margin-top'), 10);
	    var marginLeft = parseInt($tip.css('margin-left'), 10);

	    // we must check for NaN for ie 8/9
	    if (isNaN(marginTop)) marginTop = 0;
	    if (isNaN(marginLeft)) marginLeft = 0;

	    offset.top += marginTop;
	    offset.left += marginLeft;

	    // $.fn.offset doesn't round pixel values
	    // so we use setOffset directly with our own function B-0
	    $.offset.setOffset($tip[0], $.extend({
	      using: function using(props) {
	        $tip.css({
	          top: Math.round(props.top),
	          left: Math.round(props.left)
	        });
	      }
	    }, offset), 0);

	    $tip.addClass('in');

	    // check to see if placing tip in new offset caused the tip to resize itself
	    var actualWidth = $tip[0].offsetWidth;
	    var actualHeight = $tip[0].offsetHeight;

	    if (placement == 'top' && actualHeight != height) {
	      offset.top = offset.top + height - actualHeight;
	    }

	    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

	    if (delta.left) offset.left += delta.left;else offset.top += delta.top;

	    var isVertical = /top|bottom/.test(placement);
	    var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
	    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';

	    $tip.offset(offset);
	    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
	  };

	  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
	    this.arrow().css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isVertical ? 'top' : 'left', '');
	  };

	  Tooltip.prototype.setContent = function () {
	    var $tip = this.tip();
	    var title = this.getTitle();

	    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
	    $tip.removeClass('fade in top bottom left right');
	  };

	  Tooltip.prototype.hide = function (callback) {
	    var that = this;
	    var $tip = $(this.$tip);
	    var e = $.Event('hide.bs.' + this.type);

	    function complete() {
	      if (that.hoverState != 'in') $tip.detach();
	      that.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + that.type);
	      callback && callback();
	    }

	    this.$element.trigger(e);

	    if (e.isDefaultPrevented()) return;

	    $tip.removeClass('in');

	    $.support.transition && $tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();

	    this.hoverState = null;

	    return this;
	  };

	  Tooltip.prototype.fixTitle = function () {
	    var $e = this.$element;
	    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
	      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
	    }
	  };

	  Tooltip.prototype.hasContent = function () {
	    return this.getTitle();
	  };

	  Tooltip.prototype.getPosition = function ($element) {
	    $element = $element || this.$element;

	    var el = $element[0];
	    var isBody = el.tagName == 'BODY';

	    var elRect = el.getBoundingClientRect();
	    if (elRect.width == null) {
	      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
	      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
	    }
	    var elOffset = isBody ? { top: 0, left: 0 } : $element.offset();
	    var scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
	    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

	    return $.extend({}, elRect, scroll, outerDims, elOffset);
	  };

	  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
	    return placement == 'bottom' ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'top' ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'left' ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
	    /* placement == 'right' */{ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
	  };

	  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
	    var delta = { top: 0, left: 0 };
	    if (!this.$viewport) return delta;

	    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
	    var viewportDimensions = this.getPosition(this.$viewport);

	    if (/right|left/.test(placement)) {
	      var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
	      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
	      if (topEdgeOffset < viewportDimensions.top) {
	        // top overflow
	        delta.top = viewportDimensions.top - topEdgeOffset;
	      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
	        // bottom overflow
	        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
	      }
	    } else {
	      var leftEdgeOffset = pos.left - viewportPadding;
	      var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
	      if (leftEdgeOffset < viewportDimensions.left) {
	        // left overflow
	        delta.left = viewportDimensions.left - leftEdgeOffset;
	      } else if (rightEdgeOffset > viewportDimensions.right) {
	        // right overflow
	        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
	      }
	    }

	    return delta;
	  };

	  Tooltip.prototype.getTitle = function () {
	    var title;
	    var $e = this.$element;
	    var o = this.options;

	    title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);

	    return title;
	  };

	  Tooltip.prototype.getUID = function (prefix) {
	    do {
	      prefix += ~~(Math.random() * 1000000);
	    } while (document.getElementById(prefix));
	    return prefix;
	  };

	  Tooltip.prototype.tip = function () {
	    if (!this.$tip) {
	      this.$tip = $(this.options.template);
	      if (this.$tip.length != 1) {
	        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
	      }
	    }
	    return this.$tip;
	  };

	  Tooltip.prototype.arrow = function () {
	    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
	  };

	  Tooltip.prototype.enable = function () {
	    this.enabled = true;
	  };

	  Tooltip.prototype.disable = function () {
	    this.enabled = false;
	  };

	  Tooltip.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled;
	  };

	  Tooltip.prototype.toggle = function (e) {
	    var self = this;
	    if (e) {
	      self = $(e.currentTarget).data('bs.' + this.type);
	      if (!self) {
	        self = new this.constructor(e.currentTarget, this.getDelegateOptions());
	        $(e.currentTarget).data('bs.' + this.type, self);
	      }
	    }

	    if (e) {
	      self.inState.click = !self.inState.click;
	      if (self.isInStateTrue()) self.enter(self);else self.leave(self);
	    } else {
	      self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
	    }
	  };

	  Tooltip.prototype.destroy = function () {
	    var that = this;
	    clearTimeout(this.timeout);
	    this.hide(function () {
	      that.$element.off('.' + that.type).removeData('bs.' + that.type);
	      if (that.$tip) {
	        that.$tip.detach();
	      }
	      that.$tip = null;
	      that.$arrow = null;
	      that.$viewport = null;
	    });
	  };

	  // TOOLTIP PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.tooltip');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data && /destroy|hide/.test(option)) return;
	      if (!data) $this.data('bs.tooltip', data = new Tooltip(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.tooltip;

	  $.fn.tooltip = Plugin;
	  $.fn.tooltip.Constructor = Tooltip;

	  // TOOLTIP NO CONFLICT
	  // ===================

	  $.fn.tooltip.noConflict = function () {
	    $.fn.tooltip = old;
	    return this;
	  };
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/* ========================================================================
	 * Bootstrap: popover.js v3.3.6
	 * http://getbootstrap.com/javascript/#popovers
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // POPOVER PUBLIC CLASS DEFINITION
	  // ===============================

	  var Popover = function Popover(element, options) {
	    this.init('popover', element, options);
	  };

	  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');

	  Popover.VERSION = '3.3.6';

	  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	  });

	  // NOTE: POPOVER EXTENDS tooltip.js
	  // ================================

	  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);

	  Popover.prototype.constructor = Popover;

	  Popover.prototype.getDefaults = function () {
	    return Popover.DEFAULTS;
	  };

	  Popover.prototype.setContent = function () {
	    var $tip = this.tip();
	    var title = this.getTitle();
	    var content = this.getContent();

	    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
	    $tip.find('.popover-content').children().detach().end()[// we use append for html objects to maintain js events
	    this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);

	    $tip.removeClass('fade top bottom left right in');

	    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
	    // this manually by checking the contents.
	    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
	  };

	  Popover.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent();
	  };

	  Popover.prototype.getContent = function () {
	    var $e = this.$element;
	    var o = this.options;

	    return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
	  };

	  Popover.prototype.arrow = function () {
	    return this.$arrow = this.$arrow || this.tip().find('.arrow');
	  };

	  // POPOVER PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.popover');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data && /destroy|hide/.test(option)) return;
	      if (!data) $this.data('bs.popover', data = new Popover(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.popover;

	  $.fn.popover = Plugin;
	  $.fn.popover.Constructor = Popover;

	  // POPOVER NO CONFLICT
	  // ===================

	  $.fn.popover.noConflict = function () {
	    $.fn.popover = old;
	    return this;
	  };
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/* ========================================================================
	 * Bootstrap: scrollspy.js v3.3.6
	 * http://getbootstrap.com/javascript/#scrollspy
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // SCROLLSPY CLASS DEFINITION
	  // ==========================

	  function ScrollSpy(element, options) {
	    this.$body = $(document.body);
	    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
	    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
	    this.selector = (this.options.target || '') + ' .nav li > a';
	    this.offsets = [];
	    this.targets = [];
	    this.activeTarget = null;
	    this.scrollHeight = 0;

	    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this));
	    this.refresh();
	    this.process();
	  }

	  ScrollSpy.VERSION = '3.3.6';

	  ScrollSpy.DEFAULTS = {
	    offset: 10
	  };

	  ScrollSpy.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	  };

	  ScrollSpy.prototype.refresh = function () {
	    var that = this;
	    var offsetMethod = 'offset';
	    var offsetBase = 0;

	    this.offsets = [];
	    this.targets = [];
	    this.scrollHeight = this.getScrollHeight();

	    if (!$.isWindow(this.$scrollElement[0])) {
	      offsetMethod = 'position';
	      offsetBase = this.$scrollElement.scrollTop();
	    }

	    this.$body.find(this.selector).map(function () {
	      var $el = $(this);
	      var href = $el.data('target') || $el.attr('href');
	      var $href = /^#./.test(href) && $(href);

	      return $href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + offsetBase, href]] || null;
	    }).sort(function (a, b) {
	      return a[0] - b[0];
	    }).each(function () {
	      that.offsets.push(this[0]);
	      that.targets.push(this[1]);
	    });
	  };

	  ScrollSpy.prototype.process = function () {
	    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
	    var scrollHeight = this.getScrollHeight();
	    var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
	    var offsets = this.offsets;
	    var targets = this.targets;
	    var activeTarget = this.activeTarget;
	    var i;

	    if (this.scrollHeight != scrollHeight) {
	      this.refresh();
	    }

	    if (scrollTop >= maxScroll) {
	      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
	    }

	    if (activeTarget && scrollTop < offsets[0]) {
	      this.activeTarget = null;
	      return this.clear();
	    }

	    for (i = offsets.length; i--;) {
	      activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
	    }
	  };

	  ScrollSpy.prototype.activate = function (target) {
	    this.activeTarget = target;

	    this.clear();

	    var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';

	    var active = $(selector).parents('li').addClass('active');

	    if (active.parent('.dropdown-menu').length) {
	      active = active.closest('li.dropdown').addClass('active');
	    }

	    active.trigger('activate.bs.scrollspy');
	  };

	  ScrollSpy.prototype.clear = function () {
	    $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
	  };

	  // SCROLLSPY PLUGIN DEFINITION
	  // ===========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.scrollspy');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.scrollspy;

	  $.fn.scrollspy = Plugin;
	  $.fn.scrollspy.Constructor = ScrollSpy;

	  // SCROLLSPY NO CONFLICT
	  // =====================

	  $.fn.scrollspy.noConflict = function () {
	    $.fn.scrollspy = old;
	    return this;
	  };

	  // SCROLLSPY DATA-API
	  // ==================

	  $(window).on('load.bs.scrollspy.data-api', function () {
	    $('[data-spy="scroll"]').each(function () {
	      var $spy = $(this);
	      Plugin.call($spy, $spy.data());
	    });
	  });
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	/* ========================================================================
	 * Bootstrap: tab.js v3.3.6
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // TAB CLASS DEFINITION
	  // ====================

	  var Tab = function Tab(element) {
	    // jscs:disable requireDollarBeforejQueryAssignment
	    this.element = $(element);
	    // jscs:enable requireDollarBeforejQueryAssignment
	  };

	  Tab.VERSION = '3.3.6';

	  Tab.TRANSITION_DURATION = 150;

	  Tab.prototype.show = function () {
	    var $this = this.element;
	    var $ul = $this.closest('ul:not(.dropdown-menu)');
	    var selector = $this.data('target');

	    if (!selector) {
	      selector = $this.attr('href');
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
	    }

	    if ($this.parent('li').hasClass('active')) return;

	    var $previous = $ul.find('.active:last a');
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    });
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    });

	    $previous.trigger(hideEvent);
	    $this.trigger(showEvent);

	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;

	    var $target = $(selector);

	    this.activate($this.closest('li'), $ul);
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      });
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      });
	    });
	  };

	  Tab.prototype.activate = function (element, container, callback) {
	    var $active = container.find('> .active');
	    var transition = callback && $.support.transition && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length);

	    function next() {
	      $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', false);

	      element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', true);

	      if (transition) {
	        element[0].offsetWidth; // reflow for transition
	        element.addClass('in');
	      } else {
	        element.removeClass('fade');
	      }

	      if (element.parent('.dropdown-menu').length) {
	        element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', true);
	      }

	      callback && callback();
	    }

	    $active.length && transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();

	    $active.removeClass('in');
	  };

	  // TAB PLUGIN DEFINITION
	  // =====================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.tab');

	      if (!data) $this.data('bs.tab', data = new Tab(this));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.tab;

	  $.fn.tab = Plugin;
	  $.fn.tab.Constructor = Tab;

	  // TAB NO CONFLICT
	  // ===============

	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old;
	    return this;
	  };

	  // TAB DATA-API
	  // ============

	  var clickHandler = function clickHandler(e) {
	    e.preventDefault();
	    Plugin.call($(this), 'show');
	  };

	  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler).on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/* ========================================================================
	 * Bootstrap: affix.js v3.3.6
	 * http://getbootstrap.com/javascript/#affix
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // AFFIX CLASS DEFINITION
	  // ======================

	  var Affix = function Affix(element, options) {
	    this.options = $.extend({}, Affix.DEFAULTS, options);

	    this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));

	    this.$element = $(element);
	    this.affixed = null;
	    this.unpin = null;
	    this.pinnedOffset = null;

	    this.checkPosition();
	  };

	  Affix.VERSION = '3.3.6';

	  Affix.RESET = 'affix affix-top affix-bottom';

	  Affix.DEFAULTS = {
	    offset: 0,
	    target: window
	  };

	  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
	    var scrollTop = this.$target.scrollTop();
	    var position = this.$element.offset();
	    var targetHeight = this.$target.height();

	    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;

	    if (this.affixed == 'bottom') {
	      if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : 'bottom';
	      return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
	    }

	    var initializing = this.affixed == null;
	    var colliderTop = initializing ? scrollTop : position.top;
	    var colliderHeight = initializing ? targetHeight : height;

	    if (offsetTop != null && scrollTop <= offsetTop) return 'top';
	    if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return 'bottom';

	    return false;
	  };

	  Affix.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset;
	    this.$element.removeClass(Affix.RESET).addClass('affix');
	    var scrollTop = this.$target.scrollTop();
	    var position = this.$element.offset();
	    return this.pinnedOffset = position.top - scrollTop;
	  };

	  Affix.prototype.checkPositionWithEventLoop = function () {
	    setTimeout($.proxy(this.checkPosition, this), 1);
	  };

	  Affix.prototype.checkPosition = function () {
	    if (!this.$element.is(':visible')) return;

	    var height = this.$element.height();
	    var offset = this.options.offset;
	    var offsetTop = offset.top;
	    var offsetBottom = offset.bottom;
	    var scrollHeight = Math.max($(document).height(), $(document.body).height());

	    if ((typeof offset === 'undefined' ? 'undefined' : _typeof(offset)) != 'object') offsetBottom = offsetTop = offset;
	    if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
	    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);

	    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

	    if (this.affixed != affix) {
	      if (this.unpin != null) this.$element.css('top', '');

	      var affixType = 'affix' + (affix ? '-' + affix : '');
	      var e = $.Event(affixType + '.bs.affix');

	      this.$element.trigger(e);

	      if (e.isDefaultPrevented()) return;

	      this.affixed = affix;
	      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;

	      this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix');
	    }

	    if (affix == 'bottom') {
	      this.$element.offset({
	        top: scrollHeight - height - offsetBottom
	      });
	    }
	  };

	  // AFFIX PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.affix');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data) $this.data('bs.affix', data = new Affix(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.affix;

	  $.fn.affix = Plugin;
	  $.fn.affix.Constructor = Affix;

	  // AFFIX NO CONFLICT
	  // =================

	  $.fn.affix.noConflict = function () {
	    $.fn.affix = old;
	    return this;
	  };

	  // AFFIX DATA-API
	  // ==============

	  $(window).on('load', function () {
	    $('[data-spy="affix"]').each(function () {
	      var $spy = $(this);
	      var data = $spy.data();

	      data.offset = data.offset || {};

	      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
	      if (data.offsetTop != null) data.offset.top = data.offsetTop;

	      Plugin.call($spy, data);
	    });
	  });
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery, __webpack_provided_window_dot_jQuery) {'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/**
	 * Swiper 3.3.1
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 *
	 * http://www.idangero.us/swiper/
	 *
	 * Copyright 2016, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 *
	 * Licensed under MIT
	 *
	 * Released on: February 7, 2016
	 */(function(){'use strict';var $;/*===========================
	    Swiper
	    ===========================*/var Swiper=function Swiper(container,params){if(!(this instanceof Swiper))return new Swiper(container,params);var defaults={direction:'horizontal',touchEventsTarget:'container',initialSlide:0,speed:300,// autoplay
	autoplay:false,autoplayDisableOnInteraction:true,autoplayStopOnLast:false,// To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
	iOSEdgeSwipeDetection:false,iOSEdgeSwipeThreshold:20,// Free mode
	freeMode:false,freeModeMomentum:true,freeModeMomentumRatio:1,freeModeMomentumBounce:true,freeModeMomentumBounceRatio:1,freeModeSticky:false,freeModeMinimumVelocity:0.02,// Autoheight
	autoHeight:false,// Set wrapper width
	setWrapperSize:false,// Virtual Translate
	virtualTranslate:false,// Effects
	effect:'slide',// 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
	coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:true},flip:{slideShadows:true,limitRotation:true},cube:{slideShadows:true,shadow:true,shadowOffset:20,shadowScale:0.94},fade:{crossFade:false},// Parallax
	parallax:false,// Scrollbar
	scrollbar:null,scrollbarHide:true,scrollbarDraggable:false,scrollbarSnapOnRelease:false,// Keyboard Mousewheel
	keyboardControl:false,mousewheelControl:false,mousewheelReleaseOnEdges:false,mousewheelInvert:false,mousewheelForceToAxis:false,mousewheelSensitivity:1,// Hash Navigation
	hashnav:false,// Breakpoints
	breakpoints:undefined,// Slides grid
	spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:'column',slidesPerGroup:1,centeredSlides:false,slidesOffsetBefore:0,// in px
	slidesOffsetAfter:0,// in px
	// Round length
	roundLengths:false,// Touches
	touchRatio:1,touchAngle:45,simulateTouch:true,shortSwipes:true,longSwipes:true,longSwipesRatio:0.5,longSwipesMs:300,followFinger:true,onlyExternal:false,threshold:0,touchMoveStopPropagation:true,// Unique Navigation Elements
	uniqueNavElements:true,// Pagination
	pagination:null,paginationElement:'span',paginationClickable:false,paginationHide:false,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:'bullets',// 'bullets' or 'progress' or 'fraction' or 'custom'
	// Resistance
	resistance:true,resistanceRatio:0.85,// Next/prev buttons
	nextButton:null,prevButton:null,// Progress
	watchSlidesProgress:false,watchSlidesVisibility:false,// Cursor
	grabCursor:false,// Clicks
	preventClicks:true,preventClicksPropagation:true,slideToClickedSlide:false,// Lazy Loading
	lazyLoading:false,lazyLoadingInPrevNext:false,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:false,// Images
	preloadImages:true,updateOnImagesReady:true,// loop
	loop:false,loopAdditionalSlides:0,loopedSlides:null,// Control
	control:undefined,controlInverse:false,controlBy:'slide',//or 'container'
	// Swiping/no swiping
	allowSwipeToPrev:true,allowSwipeToNext:true,swipeHandler:null,//'.swipe-handler',
	noSwiping:true,noSwipingClass:'swiper-no-swiping',// NS
	slideClass:'swiper-slide',slideActiveClass:'swiper-slide-active',slideVisibleClass:'swiper-slide-visible',slideDuplicateClass:'swiper-slide-duplicate',slideNextClass:'swiper-slide-next',slidePrevClass:'swiper-slide-prev',wrapperClass:'swiper-wrapper',bulletClass:'swiper-pagination-bullet',bulletActiveClass:'swiper-pagination-bullet-active',buttonDisabledClass:'swiper-button-disabled',paginationCurrentClass:'swiper-pagination-current',paginationTotalClass:'swiper-pagination-total',paginationHiddenClass:'swiper-pagination-hidden',paginationProgressbarClass:'swiper-pagination-progressbar',// Observer
	observer:false,observeParents:false,// Accessibility
	a11y:false,prevSlideMessage:'Previous slide',nextSlideMessage:'Next slide',firstSlideMessage:'This is the first slide',lastSlideMessage:'This is the last slide',paginationBulletMessage:'Go to slide {{index}}',// Callbacks
	runCallbacksOnInit:true/*
	            Callbacks:
	            onInit: function (swiper)
	            onDestroy: function (swiper)
	            onClick: function (swiper, e)
	            onTap: function (swiper, e)
	            onDoubleTap: function (swiper, e)
	            onSliderMove: function (swiper, e)
	            onSlideChangeStart: function (swiper)
	            onSlideChangeEnd: function (swiper)
	            onTransitionStart: function (swiper)
	            onTransitionEnd: function (swiper)
	            onImagesReady: function (swiper)
	            onProgress: function (swiper, progress)
	            onTouchStart: function (swiper, e)
	            onTouchMove: function (swiper, e)
	            onTouchMoveOpposite: function (swiper, e)
	            onTouchEnd: function (swiper, e)
	            onReachBeginning: function (swiper)
	            onReachEnd: function (swiper)
	            onSetTransition: function (swiper, duration)
	            onSetTranslate: function (swiper, translate)
	            onAutoplayStart: function (swiper)
	            onAutoplayStop: function (swiper),
	            onLazyImageLoad: function (swiper, slide, image)
	            onLazyImageReady: function (swiper, slide, image)
	            */};var initialVirtualTranslate=params&&params.virtualTranslate;params=params||{};var originalParams={};for(var param in params){if(_typeof(params[param])==='object'&&params[param]!==null&&!(params[param].nodeType||params[param]===window||params[param]===document||typeof Dom7!=='undefined'&&params[param]instanceof Dom7||typeof jQuery!=='undefined'&&params[param]instanceof jQuery)){originalParams[param]={};for(var deepParam in params[param]){originalParams[param][deepParam]=params[param][deepParam];}}else{originalParams[param]=params[param];}}for(var def in defaults){if(typeof params[def]==='undefined'){params[def]=defaults[def];}else if(_typeof(params[def])==='object'){for(var deepDef in defaults[def]){if(typeof params[def][deepDef]==='undefined'){params[def][deepDef]=defaults[def][deepDef];}}}}// Swiper
	var s=this;// Params
	s.params=params;s.originalParams=originalParams;// Classname
	s.classNames=[];/*=========================
	          Dom Library and plugins
	          ===========================*/if(typeof $!=='undefined'&&typeof Dom7!=='undefined'){$=Dom7;}if(typeof $==='undefined'){if(typeof Dom7==='undefined'){$=window.Dom7||window.Zepto||__webpack_provided_window_dot_jQuery;}else{$=Dom7;}if(!$)return;}// Export it to Swiper instance
	s.$=$;/*=========================
	          Breakpoints
	          ===========================*/s.currentBreakpoint=undefined;s.getActiveBreakpoint=function(){//Get breakpoint for window width
	if(!s.params.breakpoints)return false;var breakpoint=false;var points=[],point;for(point in s.params.breakpoints){if(s.params.breakpoints.hasOwnProperty(point)){points.push(point);}}points.sort(function(a,b){return parseInt(a,10)>parseInt(b,10);});for(var i=0;i<points.length;i++){point=points[i];if(point>=window.innerWidth&&!breakpoint){breakpoint=point;}}return breakpoint||'max';};s.setBreakpoint=function(){//Set breakpoint for window width and update parameters
	var breakpoint=s.getActiveBreakpoint();if(breakpoint&&s.currentBreakpoint!==breakpoint){var breakPointsParams=breakpoint in s.params.breakpoints?s.params.breakpoints[breakpoint]:s.originalParams;var needsReLoop=s.params.loop&&breakPointsParams.slidesPerView!==s.params.slidesPerView;for(var param in breakPointsParams){s.params[param]=breakPointsParams[param];}s.currentBreakpoint=breakpoint;if(needsReLoop&&s.destroyLoop){s.reLoop(true);}}};// Set breakpoint on load
	if(s.params.breakpoints){s.setBreakpoint();}/*=========================
	          Preparation - Define Container, Wrapper and Pagination
	          ===========================*/s.container=$(container);if(s.container.length===0)return;if(s.container.length>1){var swipers=[];s.container.each(function(){var container=this;swipers.push(new Swiper(this,params));});return swipers;}// Save instance in container HTML Element and in data
	s.container[0].swiper=s;s.container.data('swiper',s);s.classNames.push('swiper-container-'+s.params.direction);if(s.params.freeMode){s.classNames.push('swiper-container-free-mode');}if(!s.support.flexbox){s.classNames.push('swiper-container-no-flexbox');s.params.slidesPerColumn=1;}if(s.params.autoHeight){s.classNames.push('swiper-container-autoheight');}// Enable slides progress when required
	if(s.params.parallax||s.params.watchSlidesVisibility){s.params.watchSlidesProgress=true;}// Coverflow / 3D
	if(['cube','coverflow','flip'].indexOf(s.params.effect)>=0){if(s.support.transforms3d){s.params.watchSlidesProgress=true;s.classNames.push('swiper-container-3d');}else{s.params.effect='slide';}}if(s.params.effect!=='slide'){s.classNames.push('swiper-container-'+s.params.effect);}if(s.params.effect==='cube'){s.params.resistanceRatio=0;s.params.slidesPerView=1;s.params.slidesPerColumn=1;s.params.slidesPerGroup=1;s.params.centeredSlides=false;s.params.spaceBetween=0;s.params.virtualTranslate=true;s.params.setWrapperSize=false;}if(s.params.effect==='fade'||s.params.effect==='flip'){s.params.slidesPerView=1;s.params.slidesPerColumn=1;s.params.slidesPerGroup=1;s.params.watchSlidesProgress=true;s.params.spaceBetween=0;s.params.setWrapperSize=false;if(typeof initialVirtualTranslate==='undefined'){s.params.virtualTranslate=true;}}// Grab Cursor
	if(s.params.grabCursor&&s.support.touch){s.params.grabCursor=false;}// Wrapper
	s.wrapper=s.container.children('.'+s.params.wrapperClass);// Pagination
	if(s.params.pagination){s.paginationContainer=$(s.params.pagination);if(s.params.uniqueNavElements&&typeof s.params.pagination==='string'&&s.paginationContainer.length>1&&s.container.find(s.params.pagination).length===1){s.paginationContainer=s.container.find(s.params.pagination);}if(s.params.paginationType==='bullets'&&s.params.paginationClickable){s.paginationContainer.addClass('swiper-pagination-clickable');}else{s.params.paginationClickable=false;}s.paginationContainer.addClass('swiper-pagination-'+s.params.paginationType);}// Next/Prev Buttons
	if(s.params.nextButton||s.params.prevButton){if(s.params.nextButton){s.nextButton=$(s.params.nextButton);if(s.params.uniqueNavElements&&typeof s.params.nextButton==='string'&&s.nextButton.length>1&&s.container.find(s.params.nextButton).length===1){s.nextButton=s.container.find(s.params.nextButton);}}if(s.params.prevButton){s.prevButton=$(s.params.prevButton);if(s.params.uniqueNavElements&&typeof s.params.prevButton==='string'&&s.prevButton.length>1&&s.container.find(s.params.prevButton).length===1){s.prevButton=s.container.find(s.params.prevButton);}}}// Is Horizontal
	s.isHorizontal=function(){return s.params.direction==='horizontal';};// s.isH = isH;
	// RTL
	s.rtl=s.isHorizontal()&&(s.container[0].dir.toLowerCase()==='rtl'||s.container.css('direction')==='rtl');if(s.rtl){s.classNames.push('swiper-container-rtl');}// Wrong RTL support
	if(s.rtl){s.wrongRTL=s.wrapper.css('display')==='-webkit-box';}// Columns
	if(s.params.slidesPerColumn>1){s.classNames.push('swiper-container-multirow');}// Check for Android
	if(s.device.android){s.classNames.push('swiper-container-android');}// Add classes
	s.container.addClass(s.classNames.join(' '));// Translate
	s.translate=0;// Progress
	s.progress=0;// Velocity
	s.velocity=0;/*=========================
	          Locks, unlocks
	          ===========================*/s.lockSwipeToNext=function(){s.params.allowSwipeToNext=false;};s.lockSwipeToPrev=function(){s.params.allowSwipeToPrev=false;};s.lockSwipes=function(){s.params.allowSwipeToNext=s.params.allowSwipeToPrev=false;};s.unlockSwipeToNext=function(){s.params.allowSwipeToNext=true;};s.unlockSwipeToPrev=function(){s.params.allowSwipeToPrev=true;};s.unlockSwipes=function(){s.params.allowSwipeToNext=s.params.allowSwipeToPrev=true;};/*=========================
	          Round helper
	          ===========================*/function round(a){return Math.floor(a);}/*=========================
	          Set grab cursor
	          ===========================*/if(s.params.grabCursor){s.container[0].style.cursor='move';s.container[0].style.cursor='-webkit-grab';s.container[0].style.cursor='-moz-grab';s.container[0].style.cursor='grab';}/*=========================
	          Update on Images Ready
	          ===========================*/s.imagesToLoad=[];s.imagesLoaded=0;s.loadImage=function(imgElement,src,srcset,checkForComplete,callback){var image;function onReady(){if(callback)callback();}if(!imgElement.complete||!checkForComplete){if(src){image=new window.Image();image.onload=onReady;image.onerror=onReady;if(srcset){image.srcset=srcset;}if(src){image.src=src;}}else{onReady();}}else{//image already loaded...
	onReady();}};s.preloadImages=function(){s.imagesToLoad=s.container.find('img');function _onReady(){if(typeof s==='undefined'||s===null)return;if(s.imagesLoaded!==undefined)s.imagesLoaded++;if(s.imagesLoaded===s.imagesToLoad.length){if(s.params.updateOnImagesReady)s.update();s.emit('onImagesReady',s);}}for(var i=0;i<s.imagesToLoad.length;i++){s.loadImage(s.imagesToLoad[i],s.imagesToLoad[i].currentSrc||s.imagesToLoad[i].getAttribute('src'),s.imagesToLoad[i].srcset||s.imagesToLoad[i].getAttribute('srcset'),true,_onReady);}};/*=========================
	          Autoplay
	          ===========================*/s.autoplayTimeoutId=undefined;s.autoplaying=false;s.autoplayPaused=false;function autoplay(){s.autoplayTimeoutId=setTimeout(function(){if(s.params.loop){s.fixLoop();s._slideNext();s.emit('onAutoplay',s);}else{if(!s.isEnd){s._slideNext();s.emit('onAutoplay',s);}else{if(!params.autoplayStopOnLast){s._slideTo(0);s.emit('onAutoplay',s);}else{s.stopAutoplay();}}}},s.params.autoplay);}s.startAutoplay=function(){if(typeof s.autoplayTimeoutId!=='undefined')return false;if(!s.params.autoplay)return false;if(s.autoplaying)return false;s.autoplaying=true;s.emit('onAutoplayStart',s);autoplay();};s.stopAutoplay=function(internal){if(!s.autoplayTimeoutId)return;if(s.autoplayTimeoutId)clearTimeout(s.autoplayTimeoutId);s.autoplaying=false;s.autoplayTimeoutId=undefined;s.emit('onAutoplayStop',s);};s.pauseAutoplay=function(speed){if(s.autoplayPaused)return;if(s.autoplayTimeoutId)clearTimeout(s.autoplayTimeoutId);s.autoplayPaused=true;if(speed===0){s.autoplayPaused=false;autoplay();}else{s.wrapper.transitionEnd(function(){if(!s)return;s.autoplayPaused=false;if(!s.autoplaying){s.stopAutoplay();}else{autoplay();}});}};/*=========================
	          Min/Max Translate
	          ===========================*/s.minTranslate=function(){return-s.snapGrid[0];};s.maxTranslate=function(){return-s.snapGrid[s.snapGrid.length-1];};/*=========================
	          Slider/slides sizes
	          ===========================*/s.updateAutoHeight=function(){// Update Height
	var slide=s.slides.eq(s.activeIndex)[0];if(typeof slide!=='undefined'){var newHeight=slide.offsetHeight;if(newHeight)s.wrapper.css('height',newHeight+'px');}};s.updateContainerSize=function(){var width,height;if(typeof s.params.width!=='undefined'){width=s.params.width;}else{width=s.container[0].clientWidth;}if(typeof s.params.height!=='undefined'){height=s.params.height;}else{height=s.container[0].clientHeight;}if(width===0&&s.isHorizontal()||height===0&&!s.isHorizontal()){return;}//Subtract paddings
	width=width-parseInt(s.container.css('padding-left'),10)-parseInt(s.container.css('padding-right'),10);height=height-parseInt(s.container.css('padding-top'),10)-parseInt(s.container.css('padding-bottom'),10);// Store values
	s.width=width;s.height=height;s.size=s.isHorizontal()?s.width:s.height;};s.updateSlidesSize=function(){s.slides=s.wrapper.children('.'+s.params.slideClass);s.snapGrid=[];s.slidesGrid=[];s.slidesSizesGrid=[];var spaceBetween=s.params.spaceBetween,slidePosition=-s.params.slidesOffsetBefore,i,prevSlideSize=0,index=0;if(typeof s.size==='undefined')return;if(typeof spaceBetween==='string'&&spaceBetween.indexOf('%')>=0){spaceBetween=parseFloat(spaceBetween.replace('%',''))/100*s.size;}s.virtualSize=-spaceBetween;// reset margins
	if(s.rtl)s.slides.css({marginLeft:'',marginTop:''});else s.slides.css({marginRight:'',marginBottom:''});var slidesNumberEvenToRows;if(s.params.slidesPerColumn>1){if(Math.floor(s.slides.length/s.params.slidesPerColumn)===s.slides.length/s.params.slidesPerColumn){slidesNumberEvenToRows=s.slides.length;}else{slidesNumberEvenToRows=Math.ceil(s.slides.length/s.params.slidesPerColumn)*s.params.slidesPerColumn;}if(s.params.slidesPerView!=='auto'&&s.params.slidesPerColumnFill==='row'){slidesNumberEvenToRows=Math.max(slidesNumberEvenToRows,s.params.slidesPerView*s.params.slidesPerColumn);}}// Calc slides
	var slideSize;var slidesPerColumn=s.params.slidesPerColumn;var slidesPerRow=slidesNumberEvenToRows/slidesPerColumn;var numFullColumns=slidesPerRow-(s.params.slidesPerColumn*slidesPerRow-s.slides.length);for(i=0;i<s.slides.length;i++){slideSize=0;var slide=s.slides.eq(i);if(s.params.slidesPerColumn>1){// Set slides order
	var newSlideOrderIndex;var column,row;if(s.params.slidesPerColumnFill==='column'){column=Math.floor(i/slidesPerColumn);row=i-column*slidesPerColumn;if(column>numFullColumns||column===numFullColumns&&row===slidesPerColumn-1){if(++row>=slidesPerColumn){row=0;column++;}}newSlideOrderIndex=column+row*slidesNumberEvenToRows/slidesPerColumn;slide.css({'-webkit-box-ordinal-group':newSlideOrderIndex,'-moz-box-ordinal-group':newSlideOrderIndex,'-ms-flex-order':newSlideOrderIndex,'-webkit-order':newSlideOrderIndex,'order':newSlideOrderIndex});}else{row=Math.floor(i/slidesPerRow);column=i-row*slidesPerRow;}slide.css({'margin-top':row!==0&&s.params.spaceBetween&&s.params.spaceBetween+'px'}).attr('data-swiper-column',column).attr('data-swiper-row',row);}if(slide.css('display')==='none')continue;if(s.params.slidesPerView==='auto'){slideSize=s.isHorizontal()?slide.outerWidth(true):slide.outerHeight(true);if(s.params.roundLengths)slideSize=round(slideSize);}else{slideSize=(s.size-(s.params.slidesPerView-1)*spaceBetween)/s.params.slidesPerView;if(s.params.roundLengths)slideSize=round(slideSize);if(s.isHorizontal()){s.slides[i].style.width=slideSize+'px';}else{s.slides[i].style.height=slideSize+'px';}}s.slides[i].swiperSlideSize=slideSize;s.slidesSizesGrid.push(slideSize);if(s.params.centeredSlides){slidePosition=slidePosition+slideSize/2+prevSlideSize/2+spaceBetween;if(i===0)slidePosition=slidePosition-s.size/2-spaceBetween;if(Math.abs(slidePosition)<1/1000)slidePosition=0;if(index%s.params.slidesPerGroup===0)s.snapGrid.push(slidePosition);s.slidesGrid.push(slidePosition);}else{if(index%s.params.slidesPerGroup===0)s.snapGrid.push(slidePosition);s.slidesGrid.push(slidePosition);slidePosition=slidePosition+slideSize+spaceBetween;}s.virtualSize+=slideSize+spaceBetween;prevSlideSize=slideSize;index++;}s.virtualSize=Math.max(s.virtualSize,s.size)+s.params.slidesOffsetAfter;var newSlidesGrid;if(s.rtl&&s.wrongRTL&&(s.params.effect==='slide'||s.params.effect==='coverflow')){s.wrapper.css({width:s.virtualSize+s.params.spaceBetween+'px'});}if(!s.support.flexbox||s.params.setWrapperSize){if(s.isHorizontal())s.wrapper.css({width:s.virtualSize+s.params.spaceBetween+'px'});else s.wrapper.css({height:s.virtualSize+s.params.spaceBetween+'px'});}if(s.params.slidesPerColumn>1){s.virtualSize=(slideSize+s.params.spaceBetween)*slidesNumberEvenToRows;s.virtualSize=Math.ceil(s.virtualSize/s.params.slidesPerColumn)-s.params.spaceBetween;s.wrapper.css({width:s.virtualSize+s.params.spaceBetween+'px'});if(s.params.centeredSlides){newSlidesGrid=[];for(i=0;i<s.snapGrid.length;i++){if(s.snapGrid[i]<s.virtualSize+s.snapGrid[0])newSlidesGrid.push(s.snapGrid[i]);}s.snapGrid=newSlidesGrid;}}// Remove last grid elements depending on width
	if(!s.params.centeredSlides){newSlidesGrid=[];for(i=0;i<s.snapGrid.length;i++){if(s.snapGrid[i]<=s.virtualSize-s.size){newSlidesGrid.push(s.snapGrid[i]);}}s.snapGrid=newSlidesGrid;if(Math.floor(s.virtualSize-s.size)-Math.floor(s.snapGrid[s.snapGrid.length-1])>1){s.snapGrid.push(s.virtualSize-s.size);}}if(s.snapGrid.length===0)s.snapGrid=[0];if(s.params.spaceBetween!==0){if(s.isHorizontal()){if(s.rtl)s.slides.css({marginLeft:spaceBetween+'px'});else s.slides.css({marginRight:spaceBetween+'px'});}else s.slides.css({marginBottom:spaceBetween+'px'});}if(s.params.watchSlidesProgress){s.updateSlidesOffset();}};s.updateSlidesOffset=function(){for(var i=0;i<s.slides.length;i++){s.slides[i].swiperSlideOffset=s.isHorizontal()?s.slides[i].offsetLeft:s.slides[i].offsetTop;}};/*=========================
	          Slider/slides progress
	          ===========================*/s.updateSlidesProgress=function(translate){if(typeof translate==='undefined'){translate=s.translate||0;}if(s.slides.length===0)return;if(typeof s.slides[0].swiperSlideOffset==='undefined')s.updateSlidesOffset();var offsetCenter=-translate;if(s.rtl)offsetCenter=translate;// Visible Slides
	s.slides.removeClass(s.params.slideVisibleClass);for(var i=0;i<s.slides.length;i++){var slide=s.slides[i];var slideProgress=(offsetCenter-slide.swiperSlideOffset)/(slide.swiperSlideSize+s.params.spaceBetween);if(s.params.watchSlidesVisibility){var slideBefore=-(offsetCenter-slide.swiperSlideOffset);var slideAfter=slideBefore+s.slidesSizesGrid[i];var isVisible=slideBefore>=0&&slideBefore<s.size||slideAfter>0&&slideAfter<=s.size||slideBefore<=0&&slideAfter>=s.size;if(isVisible){s.slides.eq(i).addClass(s.params.slideVisibleClass);}}slide.progress=s.rtl?-slideProgress:slideProgress;}};s.updateProgress=function(translate){if(typeof translate==='undefined'){translate=s.translate||0;}var translatesDiff=s.maxTranslate()-s.minTranslate();var wasBeginning=s.isBeginning;var wasEnd=s.isEnd;if(translatesDiff===0){s.progress=0;s.isBeginning=s.isEnd=true;}else{s.progress=(translate-s.minTranslate())/translatesDiff;s.isBeginning=s.progress<=0;s.isEnd=s.progress>=1;}if(s.isBeginning&&!wasBeginning)s.emit('onReachBeginning',s);if(s.isEnd&&!wasEnd)s.emit('onReachEnd',s);if(s.params.watchSlidesProgress)s.updateSlidesProgress(translate);s.emit('onProgress',s,s.progress);};s.updateActiveIndex=function(){var translate=s.rtl?s.translate:-s.translate;var newActiveIndex,i,snapIndex;for(i=0;i<s.slidesGrid.length;i++){if(typeof s.slidesGrid[i+1]!=='undefined'){if(translate>=s.slidesGrid[i]&&translate<s.slidesGrid[i+1]-(s.slidesGrid[i+1]-s.slidesGrid[i])/2){newActiveIndex=i;}else if(translate>=s.slidesGrid[i]&&translate<s.slidesGrid[i+1]){newActiveIndex=i+1;}}else{if(translate>=s.slidesGrid[i]){newActiveIndex=i;}}}// Normalize slideIndex
	if(newActiveIndex<0||typeof newActiveIndex==='undefined')newActiveIndex=0;// for (i = 0; i < s.slidesGrid.length; i++) {
	// if (- translate >= s.slidesGrid[i]) {
	// newActiveIndex = i;
	// }
	// }
	snapIndex=Math.floor(newActiveIndex/s.params.slidesPerGroup);if(snapIndex>=s.snapGrid.length)snapIndex=s.snapGrid.length-1;if(newActiveIndex===s.activeIndex){return;}s.snapIndex=snapIndex;s.previousIndex=s.activeIndex;s.activeIndex=newActiveIndex;s.updateClasses();};/*=========================
	          Classes
	          ===========================*/s.updateClasses=function(){s.slides.removeClass(s.params.slideActiveClass+' '+s.params.slideNextClass+' '+s.params.slidePrevClass);var activeSlide=s.slides.eq(s.activeIndex);// Active classes
	activeSlide.addClass(s.params.slideActiveClass);// Next Slide
	var nextSlide=activeSlide.next('.'+s.params.slideClass).addClass(s.params.slideNextClass);if(s.params.loop&&nextSlide.length===0){s.slides.eq(0).addClass(s.params.slideNextClass);}// Prev Slide
	var prevSlide=activeSlide.prev('.'+s.params.slideClass).addClass(s.params.slidePrevClass);if(s.params.loop&&prevSlide.length===0){s.slides.eq(-1).addClass(s.params.slidePrevClass);}// Pagination
	if(s.paginationContainer&&s.paginationContainer.length>0){// Current/Total
	var current,total=s.params.loop?Math.ceil((s.slides.length-s.loopedSlides*2)/s.params.slidesPerGroup):s.snapGrid.length;if(s.params.loop){current=Math.ceil((s.activeIndex-s.loopedSlides)/s.params.slidesPerGroup);if(current>s.slides.length-1-s.loopedSlides*2){current=current-(s.slides.length-s.loopedSlides*2);}if(current>total-1)current=current-total;if(current<0&&s.params.paginationType!=='bullets')current=total+current;}else{if(typeof s.snapIndex!=='undefined'){current=s.snapIndex;}else{current=s.activeIndex||0;}}// Types
	if(s.params.paginationType==='bullets'&&s.bullets&&s.bullets.length>0){s.bullets.removeClass(s.params.bulletActiveClass);if(s.paginationContainer.length>1){s.bullets.each(function(){if($(this).index()===current)$(this).addClass(s.params.bulletActiveClass);});}else{s.bullets.eq(current).addClass(s.params.bulletActiveClass);}}if(s.params.paginationType==='fraction'){s.paginationContainer.find('.'+s.params.paginationCurrentClass).text(current+1);s.paginationContainer.find('.'+s.params.paginationTotalClass).text(total);}if(s.params.paginationType==='progress'){var scale=(current+1)/total,scaleX=scale,scaleY=1;if(!s.isHorizontal()){scaleY=scale;scaleX=1;}s.paginationContainer.find('.'+s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX('+scaleX+') scaleY('+scaleY+')').transition(s.params.speed);}if(s.params.paginationType==='custom'&&s.params.paginationCustomRender){s.paginationContainer.html(s.params.paginationCustomRender(s,current+1,total));s.emit('onPaginationRendered',s,s.paginationContainer[0]);}}// Next/active buttons
	if(!s.params.loop){if(s.params.prevButton&&s.prevButton&&s.prevButton.length>0){if(s.isBeginning){s.prevButton.addClass(s.params.buttonDisabledClass);if(s.params.a11y&&s.a11y)s.a11y.disable(s.prevButton);}else{s.prevButton.removeClass(s.params.buttonDisabledClass);if(s.params.a11y&&s.a11y)s.a11y.enable(s.prevButton);}}if(s.params.nextButton&&s.nextButton&&s.nextButton.length>0){if(s.isEnd){s.nextButton.addClass(s.params.buttonDisabledClass);if(s.params.a11y&&s.a11y)s.a11y.disable(s.nextButton);}else{s.nextButton.removeClass(s.params.buttonDisabledClass);if(s.params.a11y&&s.a11y)s.a11y.enable(s.nextButton);}}}};/*=========================
	          Pagination
	          ===========================*/s.updatePagination=function(){if(!s.params.pagination)return;if(s.paginationContainer&&s.paginationContainer.length>0){var paginationHTML='';if(s.params.paginationType==='bullets'){var numberOfBullets=s.params.loop?Math.ceil((s.slides.length-s.loopedSlides*2)/s.params.slidesPerGroup):s.snapGrid.length;for(var i=0;i<numberOfBullets;i++){if(s.params.paginationBulletRender){paginationHTML+=s.params.paginationBulletRender(i,s.params.bulletClass);}else{paginationHTML+='<'+s.params.paginationElement+' class="'+s.params.bulletClass+'"></'+s.params.paginationElement+'>';}}s.paginationContainer.html(paginationHTML);s.bullets=s.paginationContainer.find('.'+s.params.bulletClass);if(s.params.paginationClickable&&s.params.a11y&&s.a11y){s.a11y.initPagination();}}if(s.params.paginationType==='fraction'){if(s.params.paginationFractionRender){paginationHTML=s.params.paginationFractionRender(s,s.params.paginationCurrentClass,s.params.paginationTotalClass);}else{paginationHTML='<span class="'+s.params.paginationCurrentClass+'"></span>'+' / '+'<span class="'+s.params.paginationTotalClass+'"></span>';}s.paginationContainer.html(paginationHTML);}if(s.params.paginationType==='progress'){if(s.params.paginationProgressRender){paginationHTML=s.params.paginationProgressRender(s,s.params.paginationProgressbarClass);}else{paginationHTML='<span class="'+s.params.paginationProgressbarClass+'"></span>';}s.paginationContainer.html(paginationHTML);}if(s.params.paginationType!=='custom'){s.emit('onPaginationRendered',s,s.paginationContainer[0]);}}};/*=========================
	          Common update method
	          ===========================*/s.update=function(updateTranslate){s.updateContainerSize();s.updateSlidesSize();s.updateProgress();s.updatePagination();s.updateClasses();if(s.params.scrollbar&&s.scrollbar){s.scrollbar.set();}function forceSetTranslate(){newTranslate=Math.min(Math.max(s.translate,s.maxTranslate()),s.minTranslate());s.setWrapperTranslate(newTranslate);s.updateActiveIndex();s.updateClasses();}if(updateTranslate){var translated,newTranslate;if(s.controller&&s.controller.spline){s.controller.spline=undefined;}if(s.params.freeMode){forceSetTranslate();if(s.params.autoHeight){s.updateAutoHeight();}}else{if((s.params.slidesPerView==='auto'||s.params.slidesPerView>1)&&s.isEnd&&!s.params.centeredSlides){translated=s.slideTo(s.slides.length-1,0,false,true);}else{translated=s.slideTo(s.activeIndex,0,false,true);}if(!translated){forceSetTranslate();}}}else if(s.params.autoHeight){s.updateAutoHeight();}};/*=========================
	          Resize Handler
	          ===========================*/s.onResize=function(forceUpdatePagination){//Breakpoints
	if(s.params.breakpoints){s.setBreakpoint();}// Disable locks on resize
	var allowSwipeToPrev=s.params.allowSwipeToPrev;var allowSwipeToNext=s.params.allowSwipeToNext;s.params.allowSwipeToPrev=s.params.allowSwipeToNext=true;s.updateContainerSize();s.updateSlidesSize();if(s.params.slidesPerView==='auto'||s.params.freeMode||forceUpdatePagination)s.updatePagination();if(s.params.scrollbar&&s.scrollbar){s.scrollbar.set();}if(s.controller&&s.controller.spline){s.controller.spline=undefined;}var slideChangedBySlideTo=false;if(s.params.freeMode){var newTranslate=Math.min(Math.max(s.translate,s.maxTranslate()),s.minTranslate());s.setWrapperTranslate(newTranslate);s.updateActiveIndex();s.updateClasses();if(s.params.autoHeight){s.updateAutoHeight();}}else{s.updateClasses();if((s.params.slidesPerView==='auto'||s.params.slidesPerView>1)&&s.isEnd&&!s.params.centeredSlides){slideChangedBySlideTo=s.slideTo(s.slides.length-1,0,false,true);}else{slideChangedBySlideTo=s.slideTo(s.activeIndex,0,false,true);}}if(s.params.lazyLoading&&!slideChangedBySlideTo&&s.lazy){s.lazy.load();}// Return locks after resize
	s.params.allowSwipeToPrev=allowSwipeToPrev;s.params.allowSwipeToNext=allowSwipeToNext;};/*=========================
	          Events
	          ===========================*///Define Touch Events
	var desktopEvents=['mousedown','mousemove','mouseup'];if(window.navigator.pointerEnabled)desktopEvents=['pointerdown','pointermove','pointerup'];else if(window.navigator.msPointerEnabled)desktopEvents=['MSPointerDown','MSPointerMove','MSPointerUp'];s.touchEvents={start:s.support.touch||!s.params.simulateTouch?'touchstart':desktopEvents[0],move:s.support.touch||!s.params.simulateTouch?'touchmove':desktopEvents[1],end:s.support.touch||!s.params.simulateTouch?'touchend':desktopEvents[2]};// WP8 Touch Events Fix
	if(window.navigator.pointerEnabled||window.navigator.msPointerEnabled){(s.params.touchEventsTarget==='container'?s.container:s.wrapper).addClass('swiper-wp8-'+s.params.direction);}// Attach/detach events
	s.initEvents=function(detach){var actionDom=detach?'off':'on';var action=detach?'removeEventListener':'addEventListener';var touchEventsTarget=s.params.touchEventsTarget==='container'?s.container[0]:s.wrapper[0];var target=s.support.touch?touchEventsTarget:document;var moveCapture=s.params.nested?true:false;//Touch Events
	if(s.browser.ie){touchEventsTarget[action](s.touchEvents.start,s.onTouchStart,false);target[action](s.touchEvents.move,s.onTouchMove,moveCapture);target[action](s.touchEvents.end,s.onTouchEnd,false);}else{if(s.support.touch){touchEventsTarget[action](s.touchEvents.start,s.onTouchStart,false);touchEventsTarget[action](s.touchEvents.move,s.onTouchMove,moveCapture);touchEventsTarget[action](s.touchEvents.end,s.onTouchEnd,false);}if(params.simulateTouch&&!s.device.ios&&!s.device.android){touchEventsTarget[action]('mousedown',s.onTouchStart,false);document[action]('mousemove',s.onTouchMove,moveCapture);document[action]('mouseup',s.onTouchEnd,false);}}window[action]('resize',s.onResize);// Next, Prev, Index
	if(s.params.nextButton&&s.nextButton&&s.nextButton.length>0){s.nextButton[actionDom]('click',s.onClickNext);if(s.params.a11y&&s.a11y)s.nextButton[actionDom]('keydown',s.a11y.onEnterKey);}if(s.params.prevButton&&s.prevButton&&s.prevButton.length>0){s.prevButton[actionDom]('click',s.onClickPrev);if(s.params.a11y&&s.a11y)s.prevButton[actionDom]('keydown',s.a11y.onEnterKey);}if(s.params.pagination&&s.params.paginationClickable){s.paginationContainer[actionDom]('click','.'+s.params.bulletClass,s.onClickIndex);if(s.params.a11y&&s.a11y)s.paginationContainer[actionDom]('keydown','.'+s.params.bulletClass,s.a11y.onEnterKey);}// Prevent Links Clicks
	if(s.params.preventClicks||s.params.preventClicksPropagation)touchEventsTarget[action]('click',s.preventClicks,true);};s.attachEvents=function(){s.initEvents();};s.detachEvents=function(){s.initEvents(true);};/*=========================
	          Handle Clicks
	          ===========================*/// Prevent Clicks
	s.allowClick=true;s.preventClicks=function(e){if(!s.allowClick){if(s.params.preventClicks)e.preventDefault();if(s.params.preventClicksPropagation&&s.animating){e.stopPropagation();e.stopImmediatePropagation();}}};// Clicks
	s.onClickNext=function(e){e.preventDefault();if(s.isEnd&&!s.params.loop)return;s.slideNext();};s.onClickPrev=function(e){e.preventDefault();if(s.isBeginning&&!s.params.loop)return;s.slidePrev();};s.onClickIndex=function(e){e.preventDefault();var index=$(this).index()*s.params.slidesPerGroup;if(s.params.loop)index=index+s.loopedSlides;s.slideTo(index);};/*=========================
	          Handle Touches
	          ===========================*/function findElementInEvent(e,selector){var el=$(e.target);if(!el.is(selector)){if(typeof selector==='string'){el=el.parents(selector);}else if(selector.nodeType){var found;el.parents().each(function(index,_el){if(_el===selector)found=selector;});if(!found)return undefined;else return selector;}}if(el.length===0){return undefined;}return el[0];}s.updateClickedSlide=function(e){var slide=findElementInEvent(e,'.'+s.params.slideClass);var slideFound=false;if(slide){for(var i=0;i<s.slides.length;i++){if(s.slides[i]===slide)slideFound=true;}}if(slide&&slideFound){s.clickedSlide=slide;s.clickedIndex=$(slide).index();}else{s.clickedSlide=undefined;s.clickedIndex=undefined;return;}if(s.params.slideToClickedSlide&&s.clickedIndex!==undefined&&s.clickedIndex!==s.activeIndex){var slideToIndex=s.clickedIndex,realIndex,duplicatedSlides;if(s.params.loop){if(s.animating)return;realIndex=$(s.clickedSlide).attr('data-swiper-slide-index');if(s.params.centeredSlides){if(slideToIndex<s.loopedSlides-s.params.slidesPerView/2||slideToIndex>s.slides.length-s.loopedSlides+s.params.slidesPerView/2){s.fixLoop();slideToIndex=s.wrapper.children('.'+s.params.slideClass+'[data-swiper-slide-index="'+realIndex+'"]:not(.swiper-slide-duplicate)').eq(0).index();setTimeout(function(){s.slideTo(slideToIndex);},0);}else{s.slideTo(slideToIndex);}}else{if(slideToIndex>s.slides.length-s.params.slidesPerView){s.fixLoop();slideToIndex=s.wrapper.children('.'+s.params.slideClass+'[data-swiper-slide-index="'+realIndex+'"]:not(.swiper-slide-duplicate)').eq(0).index();setTimeout(function(){s.slideTo(slideToIndex);},0);}else{s.slideTo(slideToIndex);}}}else{s.slideTo(slideToIndex);}}};var isTouched,isMoved,allowTouchCallbacks,touchStartTime,isScrolling,currentTranslate,startTranslate,allowThresholdMove,// Form elements to match
	formElements='input, select, textarea, button',// Last click time
	lastClickTime=Date.now(),clickTimeout,//Velocities
	velocities=[],allowMomentumBounce;// Animating Flag
	s.animating=false;// Touches information
	s.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};// Touch handlers
	var isTouchEvent,startMoving;s.onTouchStart=function(e){if(e.originalEvent)e=e.originalEvent;isTouchEvent=e.type==='touchstart';if(!isTouchEvent&&'which'in e&&e.which===3)return;if(s.params.noSwiping&&findElementInEvent(e,'.'+s.params.noSwipingClass)){s.allowClick=true;return;}if(s.params.swipeHandler){if(!findElementInEvent(e,s.params.swipeHandler))return;}var startX=s.touches.currentX=e.type==='touchstart'?e.targetTouches[0].pageX:e.pageX;var startY=s.touches.currentY=e.type==='touchstart'?e.targetTouches[0].pageY:e.pageY;// Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
	if(s.device.ios&&s.params.iOSEdgeSwipeDetection&&startX<=s.params.iOSEdgeSwipeThreshold){return;}isTouched=true;isMoved=false;allowTouchCallbacks=true;isScrolling=undefined;startMoving=undefined;s.touches.startX=startX;s.touches.startY=startY;touchStartTime=Date.now();s.allowClick=true;s.updateContainerSize();s.swipeDirection=undefined;if(s.params.threshold>0)allowThresholdMove=false;if(e.type!=='touchstart'){var preventDefault=true;if($(e.target).is(formElements))preventDefault=false;if(document.activeElement&&$(document.activeElement).is(formElements)){document.activeElement.blur();}if(preventDefault){e.preventDefault();}}s.emit('onTouchStart',s,e);};s.onTouchMove=function(e){if(e.originalEvent)e=e.originalEvent;if(isTouchEvent&&e.type==='mousemove')return;if(e.preventedByNestedSwiper){s.touches.startX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;s.touches.startY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;return;}if(s.params.onlyExternal){// isMoved = true;
	s.allowClick=false;if(isTouched){s.touches.startX=s.touches.currentX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;s.touches.startY=s.touches.currentY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;touchStartTime=Date.now();}return;}if(isTouchEvent&&document.activeElement){if(e.target===document.activeElement&&$(e.target).is(formElements)){isMoved=true;s.allowClick=false;return;}}if(allowTouchCallbacks){s.emit('onTouchMove',s,e);}if(e.targetTouches&&e.targetTouches.length>1)return;s.touches.currentX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;s.touches.currentY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;if(typeof isScrolling==='undefined'){var touchAngle=Math.atan2(Math.abs(s.touches.currentY-s.touches.startY),Math.abs(s.touches.currentX-s.touches.startX))*180/Math.PI;isScrolling=s.isHorizontal()?touchAngle>s.params.touchAngle:90-touchAngle>s.params.touchAngle;}if(isScrolling){s.emit('onTouchMoveOpposite',s,e);}if(typeof startMoving==='undefined'&&s.browser.ieTouch){if(s.touches.currentX!==s.touches.startX||s.touches.currentY!==s.touches.startY){startMoving=true;}}if(!isTouched)return;if(isScrolling){isTouched=false;return;}if(!startMoving&&s.browser.ieTouch){return;}s.allowClick=false;s.emit('onSliderMove',s,e);e.preventDefault();if(s.params.touchMoveStopPropagation&&!s.params.nested){e.stopPropagation();}if(!isMoved){if(params.loop){s.fixLoop();}startTranslate=s.getWrapperTranslate();s.setWrapperTransition(0);if(s.animating){s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');}if(s.params.autoplay&&s.autoplaying){if(s.params.autoplayDisableOnInteraction){s.stopAutoplay();}else{s.pauseAutoplay();}}allowMomentumBounce=false;//Grab Cursor
	if(s.params.grabCursor){s.container[0].style.cursor='move';s.container[0].style.cursor='-webkit-grabbing';s.container[0].style.cursor='-moz-grabbin';s.container[0].style.cursor='grabbing';}}isMoved=true;var diff=s.touches.diff=s.isHorizontal()?s.touches.currentX-s.touches.startX:s.touches.currentY-s.touches.startY;diff=diff*s.params.touchRatio;if(s.rtl)diff=-diff;s.swipeDirection=diff>0?'prev':'next';currentTranslate=diff+startTranslate;var disableParentSwiper=true;if(diff>0&&currentTranslate>s.minTranslate()){disableParentSwiper=false;if(s.params.resistance)currentTranslate=s.minTranslate()-1+Math.pow(-s.minTranslate()+startTranslate+diff,s.params.resistanceRatio);}else if(diff<0&&currentTranslate<s.maxTranslate()){disableParentSwiper=false;if(s.params.resistance)currentTranslate=s.maxTranslate()+1-Math.pow(s.maxTranslate()-startTranslate-diff,s.params.resistanceRatio);}if(disableParentSwiper){e.preventedByNestedSwiper=true;}// Directions locks
	if(!s.params.allowSwipeToNext&&s.swipeDirection==='next'&&currentTranslate<startTranslate){currentTranslate=startTranslate;}if(!s.params.allowSwipeToPrev&&s.swipeDirection==='prev'&&currentTranslate>startTranslate){currentTranslate=startTranslate;}if(!s.params.followFinger)return;// Threshold
	if(s.params.threshold>0){if(Math.abs(diff)>s.params.threshold||allowThresholdMove){if(!allowThresholdMove){allowThresholdMove=true;s.touches.startX=s.touches.currentX;s.touches.startY=s.touches.currentY;currentTranslate=startTranslate;s.touches.diff=s.isHorizontal()?s.touches.currentX-s.touches.startX:s.touches.currentY-s.touches.startY;return;}}else{currentTranslate=startTranslate;return;}}// Update active index in free mode
	if(s.params.freeMode||s.params.watchSlidesProgress){s.updateActiveIndex();}if(s.params.freeMode){//Velocity
	if(velocities.length===0){velocities.push({position:s.touches[s.isHorizontal()?'startX':'startY'],time:touchStartTime});}velocities.push({position:s.touches[s.isHorizontal()?'currentX':'currentY'],time:new window.Date().getTime()});}// Update progress
	s.updateProgress(currentTranslate);// Update translate
	s.setWrapperTranslate(currentTranslate);};s.onTouchEnd=function(e){if(e.originalEvent)e=e.originalEvent;if(allowTouchCallbacks){s.emit('onTouchEnd',s,e);}allowTouchCallbacks=false;if(!isTouched)return;//Return Grab Cursor
	if(s.params.grabCursor&&isMoved&&isTouched){s.container[0].style.cursor='move';s.container[0].style.cursor='-webkit-grab';s.container[0].style.cursor='-moz-grab';s.container[0].style.cursor='grab';}// Time diff
	var touchEndTime=Date.now();var timeDiff=touchEndTime-touchStartTime;// Tap, doubleTap, Click
	if(s.allowClick){s.updateClickedSlide(e);s.emit('onTap',s,e);if(timeDiff<300&&touchEndTime-lastClickTime>300){if(clickTimeout)clearTimeout(clickTimeout);clickTimeout=setTimeout(function(){if(!s)return;if(s.params.paginationHide&&s.paginationContainer.length>0&&!$(e.target).hasClass(s.params.bulletClass)){s.paginationContainer.toggleClass(s.params.paginationHiddenClass);}s.emit('onClick',s,e);},300);}if(timeDiff<300&&touchEndTime-lastClickTime<300){if(clickTimeout)clearTimeout(clickTimeout);s.emit('onDoubleTap',s,e);}}lastClickTime=Date.now();setTimeout(function(){if(s)s.allowClick=true;},0);if(!isTouched||!isMoved||!s.swipeDirection||s.touches.diff===0||currentTranslate===startTranslate){isTouched=isMoved=false;return;}isTouched=isMoved=false;var currentPos;if(s.params.followFinger){currentPos=s.rtl?s.translate:-s.translate;}else{currentPos=-currentTranslate;}if(s.params.freeMode){if(currentPos<-s.minTranslate()){s.slideTo(s.activeIndex);return;}else if(currentPos>-s.maxTranslate()){if(s.slides.length<s.snapGrid.length){s.slideTo(s.snapGrid.length-1);}else{s.slideTo(s.slides.length-1);}return;}if(s.params.freeModeMomentum){if(velocities.length>1){var lastMoveEvent=velocities.pop(),velocityEvent=velocities.pop();var distance=lastMoveEvent.position-velocityEvent.position;var time=lastMoveEvent.time-velocityEvent.time;s.velocity=distance/time;s.velocity=s.velocity/2;if(Math.abs(s.velocity)<s.params.freeModeMinimumVelocity){s.velocity=0;}// this implies that the user stopped moving a finger then released.
	// There would be no events with distance zero, so the last event is stale.
	if(time>150||new window.Date().getTime()-lastMoveEvent.time>300){s.velocity=0;}}else{s.velocity=0;}velocities.length=0;var momentumDuration=1000*s.params.freeModeMomentumRatio;var momentumDistance=s.velocity*momentumDuration;var newPosition=s.translate+momentumDistance;if(s.rtl)newPosition=-newPosition;var doBounce=false;var afterBouncePosition;var bounceAmount=Math.abs(s.velocity)*20*s.params.freeModeMomentumBounceRatio;if(newPosition<s.maxTranslate()){if(s.params.freeModeMomentumBounce){if(newPosition+s.maxTranslate()<-bounceAmount){newPosition=s.maxTranslate()-bounceAmount;}afterBouncePosition=s.maxTranslate();doBounce=true;allowMomentumBounce=true;}else{newPosition=s.maxTranslate();}}else if(newPosition>s.minTranslate()){if(s.params.freeModeMomentumBounce){if(newPosition-s.minTranslate()>bounceAmount){newPosition=s.minTranslate()+bounceAmount;}afterBouncePosition=s.minTranslate();doBounce=true;allowMomentumBounce=true;}else{newPosition=s.minTranslate();}}else if(s.params.freeModeSticky){var j=0,nextSlide;for(j=0;j<s.snapGrid.length;j+=1){if(s.snapGrid[j]>-newPosition){nextSlide=j;break;}}if(Math.abs(s.snapGrid[nextSlide]-newPosition)<Math.abs(s.snapGrid[nextSlide-1]-newPosition)||s.swipeDirection==='next'){newPosition=s.snapGrid[nextSlide];}else{newPosition=s.snapGrid[nextSlide-1];}if(!s.rtl)newPosition=-newPosition;}//Fix duration
	if(s.velocity!==0){if(s.rtl){momentumDuration=Math.abs((-newPosition-s.translate)/s.velocity);}else{momentumDuration=Math.abs((newPosition-s.translate)/s.velocity);}}else if(s.params.freeModeSticky){s.slideReset();return;}if(s.params.freeModeMomentumBounce&&doBounce){s.updateProgress(afterBouncePosition);s.setWrapperTransition(momentumDuration);s.setWrapperTranslate(newPosition);s.onTransitionStart();s.animating=true;s.wrapper.transitionEnd(function(){if(!s||!allowMomentumBounce)return;s.emit('onMomentumBounce',s);s.setWrapperTransition(s.params.speed);s.setWrapperTranslate(afterBouncePosition);s.wrapper.transitionEnd(function(){if(!s)return;s.onTransitionEnd();});});}else if(s.velocity){s.updateProgress(newPosition);s.setWrapperTransition(momentumDuration);s.setWrapperTranslate(newPosition);s.onTransitionStart();if(!s.animating){s.animating=true;s.wrapper.transitionEnd(function(){if(!s)return;s.onTransitionEnd();});}}else{s.updateProgress(newPosition);}s.updateActiveIndex();}if(!s.params.freeModeMomentum||timeDiff>=s.params.longSwipesMs){s.updateProgress();s.updateActiveIndex();}return;}// Find current slide
	var i,stopIndex=0,groupSize=s.slidesSizesGrid[0];for(i=0;i<s.slidesGrid.length;i+=s.params.slidesPerGroup){if(typeof s.slidesGrid[i+s.params.slidesPerGroup]!=='undefined'){if(currentPos>=s.slidesGrid[i]&&currentPos<s.slidesGrid[i+s.params.slidesPerGroup]){stopIndex=i;groupSize=s.slidesGrid[i+s.params.slidesPerGroup]-s.slidesGrid[i];}}else{if(currentPos>=s.slidesGrid[i]){stopIndex=i;groupSize=s.slidesGrid[s.slidesGrid.length-1]-s.slidesGrid[s.slidesGrid.length-2];}}}// Find current slide size
	var ratio=(currentPos-s.slidesGrid[stopIndex])/groupSize;if(timeDiff>s.params.longSwipesMs){// Long touches
	if(!s.params.longSwipes){s.slideTo(s.activeIndex);return;}if(s.swipeDirection==='next'){if(ratio>=s.params.longSwipesRatio)s.slideTo(stopIndex+s.params.slidesPerGroup);else s.slideTo(stopIndex);}if(s.swipeDirection==='prev'){if(ratio>1-s.params.longSwipesRatio)s.slideTo(stopIndex+s.params.slidesPerGroup);else s.slideTo(stopIndex);}}else{// Short swipes
	if(!s.params.shortSwipes){s.slideTo(s.activeIndex);return;}if(s.swipeDirection==='next'){s.slideTo(stopIndex+s.params.slidesPerGroup);}if(s.swipeDirection==='prev'){s.slideTo(stopIndex);}}};/*=========================
	          Transitions
	          ===========================*/s._slideTo=function(slideIndex,speed){return s.slideTo(slideIndex,speed,true,true);};s.slideTo=function(slideIndex,speed,runCallbacks,internal){if(typeof runCallbacks==='undefined')runCallbacks=true;if(typeof slideIndex==='undefined')slideIndex=0;if(slideIndex<0)slideIndex=0;s.snapIndex=Math.floor(slideIndex/s.params.slidesPerGroup);if(s.snapIndex>=s.snapGrid.length)s.snapIndex=s.snapGrid.length-1;var translate=-s.snapGrid[s.snapIndex];// Stop autoplay
	if(s.params.autoplay&&s.autoplaying){if(internal||!s.params.autoplayDisableOnInteraction){s.pauseAutoplay(speed);}else{s.stopAutoplay();}}// Update progress
	s.updateProgress(translate);// Normalize slideIndex
	for(var i=0;i<s.slidesGrid.length;i++){if(-Math.floor(translate*100)>=Math.floor(s.slidesGrid[i]*100)){slideIndex=i;}}// Directions locks
	if(!s.params.allowSwipeToNext&&translate<s.translate&&translate<s.minTranslate()){return false;}if(!s.params.allowSwipeToPrev&&translate>s.translate&&translate>s.maxTranslate()){if((s.activeIndex||0)!==slideIndex)return false;}// Update Index
	if(typeof speed==='undefined')speed=s.params.speed;s.previousIndex=s.activeIndex||0;s.activeIndex=slideIndex;if(s.rtl&&-translate===s.translate||!s.rtl&&translate===s.translate){// Update Height
	if(s.params.autoHeight){s.updateAutoHeight();}s.updateClasses();if(s.params.effect!=='slide'){s.setWrapperTranslate(translate);}return false;}s.updateClasses();s.onTransitionStart(runCallbacks);if(speed===0){s.setWrapperTranslate(translate);s.setWrapperTransition(0);s.onTransitionEnd(runCallbacks);}else{s.setWrapperTranslate(translate);s.setWrapperTransition(speed);if(!s.animating){s.animating=true;s.wrapper.transitionEnd(function(){if(!s)return;s.onTransitionEnd(runCallbacks);});}}return true;};s.onTransitionStart=function(runCallbacks){if(typeof runCallbacks==='undefined')runCallbacks=true;if(s.params.autoHeight){s.updateAutoHeight();}if(s.lazy)s.lazy.onTransitionStart();if(runCallbacks){s.emit('onTransitionStart',s);if(s.activeIndex!==s.previousIndex){s.emit('onSlideChangeStart',s);if(s.activeIndex>s.previousIndex){s.emit('onSlideNextStart',s);}else{s.emit('onSlidePrevStart',s);}}}};s.onTransitionEnd=function(runCallbacks){s.animating=false;s.setWrapperTransition(0);if(typeof runCallbacks==='undefined')runCallbacks=true;if(s.lazy)s.lazy.onTransitionEnd();if(runCallbacks){s.emit('onTransitionEnd',s);if(s.activeIndex!==s.previousIndex){s.emit('onSlideChangeEnd',s);if(s.activeIndex>s.previousIndex){s.emit('onSlideNextEnd',s);}else{s.emit('onSlidePrevEnd',s);}}}if(s.params.hashnav&&s.hashnav){s.hashnav.setHash();}};s.slideNext=function(runCallbacks,speed,internal){if(s.params.loop){if(s.animating)return false;s.fixLoop();var clientLeft=s.container[0].clientLeft;return s.slideTo(s.activeIndex+s.params.slidesPerGroup,speed,runCallbacks,internal);}else return s.slideTo(s.activeIndex+s.params.slidesPerGroup,speed,runCallbacks,internal);};s._slideNext=function(speed){return s.slideNext(true,speed,true);};s.slidePrev=function(runCallbacks,speed,internal){if(s.params.loop){if(s.animating)return false;s.fixLoop();var clientLeft=s.container[0].clientLeft;return s.slideTo(s.activeIndex-1,speed,runCallbacks,internal);}else return s.slideTo(s.activeIndex-1,speed,runCallbacks,internal);};s._slidePrev=function(speed){return s.slidePrev(true,speed,true);};s.slideReset=function(runCallbacks,speed,internal){return s.slideTo(s.activeIndex,speed,runCallbacks);};/*=========================
	          Translate/transition helpers
	          ===========================*/s.setWrapperTransition=function(duration,byController){s.wrapper.transition(duration);if(s.params.effect!=='slide'&&s.effects[s.params.effect]){s.effects[s.params.effect].setTransition(duration);}if(s.params.parallax&&s.parallax){s.parallax.setTransition(duration);}if(s.params.scrollbar&&s.scrollbar){s.scrollbar.setTransition(duration);}if(s.params.control&&s.controller){s.controller.setTransition(duration,byController);}s.emit('onSetTransition',s,duration);};s.setWrapperTranslate=function(translate,updateActiveIndex,byController){var x=0,y=0,z=0;if(s.isHorizontal()){x=s.rtl?-translate:translate;}else{y=translate;}if(s.params.roundLengths){x=round(x);y=round(y);}if(!s.params.virtualTranslate){if(s.support.transforms3d)s.wrapper.transform('translate3d('+x+'px, '+y+'px, '+z+'px)');else s.wrapper.transform('translate('+x+'px, '+y+'px)');}s.translate=s.isHorizontal()?x:y;// Check if we need to update progress
	var progress;var translatesDiff=s.maxTranslate()-s.minTranslate();if(translatesDiff===0){progress=0;}else{progress=(translate-s.minTranslate())/translatesDiff;}if(progress!==s.progress){s.updateProgress(translate);}if(updateActiveIndex)s.updateActiveIndex();if(s.params.effect!=='slide'&&s.effects[s.params.effect]){s.effects[s.params.effect].setTranslate(s.translate);}if(s.params.parallax&&s.parallax){s.parallax.setTranslate(s.translate);}if(s.params.scrollbar&&s.scrollbar){s.scrollbar.setTranslate(s.translate);}if(s.params.control&&s.controller){s.controller.setTranslate(s.translate,byController);}s.emit('onSetTranslate',s,s.translate);};s.getTranslate=function(el,axis){var matrix,curTransform,curStyle,transformMatrix;// automatic axis detection
	if(typeof axis==='undefined'){axis='x';}if(s.params.virtualTranslate){return s.rtl?-s.translate:s.translate;}curStyle=window.getComputedStyle(el,null);if(window.WebKitCSSMatrix){curTransform=curStyle.transform||curStyle.webkitTransform;if(curTransform.split(',').length>6){curTransform=curTransform.split(', ').map(function(a){return a.replace(',','.');}).join(', ');}// Some old versions of Webkit choke when 'none' is passed; pass
	// empty string instead in this case
	transformMatrix=new window.WebKitCSSMatrix(curTransform==='none'?'':curTransform);}else{transformMatrix=curStyle.MozTransform||curStyle.OTransform||curStyle.MsTransform||curStyle.msTransform||curStyle.transform||curStyle.getPropertyValue('transform').replace('translate(','matrix(1, 0, 0, 1,');matrix=transformMatrix.toString().split(',');}if(axis==='x'){//Latest Chrome and webkits Fix
	if(window.WebKitCSSMatrix)curTransform=transformMatrix.m41;//Crazy IE10 Matrix
	else if(matrix.length===16)curTransform=parseFloat(matrix[12]);//Normal Browsers
	else curTransform=parseFloat(matrix[4]);}if(axis==='y'){//Latest Chrome and webkits Fix
	if(window.WebKitCSSMatrix)curTransform=transformMatrix.m42;//Crazy IE10 Matrix
	else if(matrix.length===16)curTransform=parseFloat(matrix[13]);//Normal Browsers
	else curTransform=parseFloat(matrix[5]);}if(s.rtl&&curTransform)curTransform=-curTransform;return curTransform||0;};s.getWrapperTranslate=function(axis){if(typeof axis==='undefined'){axis=s.isHorizontal()?'x':'y';}return s.getTranslate(s.wrapper[0],axis);};/*=========================
	          Observer
	          ===========================*/s.observers=[];function initObserver(target,options){options=options||{};// create an observer instance
	var ObserverFunc=window.MutationObserver||window.WebkitMutationObserver;var observer=new ObserverFunc(function(mutations){mutations.forEach(function(mutation){s.onResize(true);s.emit('onObserverUpdate',s,mutation);});});observer.observe(target,{attributes:typeof options.attributes==='undefined'?true:options.attributes,childList:typeof options.childList==='undefined'?true:options.childList,characterData:typeof options.characterData==='undefined'?true:options.characterData});s.observers.push(observer);}s.initObservers=function(){if(s.params.observeParents){var containerParents=s.container.parents();for(var i=0;i<containerParents.length;i++){initObserver(containerParents[i]);}}// Observe container
	initObserver(s.container[0],{childList:false});// Observe wrapper
	initObserver(s.wrapper[0],{attributes:false});};s.disconnectObservers=function(){for(var i=0;i<s.observers.length;i++){s.observers[i].disconnect();}s.observers=[];};/*=========================
	          Loop
	          ===========================*/// Create looped slides
	s.createLoop=function(){// Remove duplicated slides
	s.wrapper.children('.'+s.params.slideClass+'.'+s.params.slideDuplicateClass).remove();var slides=s.wrapper.children('.'+s.params.slideClass);if(s.params.slidesPerView==='auto'&&!s.params.loopedSlides)s.params.loopedSlides=slides.length;s.loopedSlides=parseInt(s.params.loopedSlides||s.params.slidesPerView,10);s.loopedSlides=s.loopedSlides+s.params.loopAdditionalSlides;if(s.loopedSlides>slides.length){s.loopedSlides=slides.length;}var prependSlides=[],appendSlides=[],i;slides.each(function(index,el){var slide=$(this);if(index<s.loopedSlides)appendSlides.push(el);if(index<slides.length&&index>=slides.length-s.loopedSlides)prependSlides.push(el);slide.attr('data-swiper-slide-index',index);});for(i=0;i<appendSlides.length;i++){s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));}for(i=prependSlides.length-1;i>=0;i--){s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));}};s.destroyLoop=function(){s.wrapper.children('.'+s.params.slideClass+'.'+s.params.slideDuplicateClass).remove();s.slides.removeAttr('data-swiper-slide-index');};s.reLoop=function(updatePosition){var oldIndex=s.activeIndex-s.loopedSlides;s.destroyLoop();s.createLoop();s.updateSlidesSize();if(updatePosition){s.slideTo(oldIndex+s.loopedSlides,0,false);}};s.fixLoop=function(){var newIndex;//Fix For Negative Oversliding
	if(s.activeIndex<s.loopedSlides){newIndex=s.slides.length-s.loopedSlides*3+s.activeIndex;newIndex=newIndex+s.loopedSlides;s.slideTo(newIndex,0,false,true);}//Fix For Positive Oversliding
	else if(s.params.slidesPerView==='auto'&&s.activeIndex>=s.loopedSlides*2||s.activeIndex>s.slides.length-s.params.slidesPerView*2){newIndex=-s.slides.length+s.activeIndex+s.loopedSlides;newIndex=newIndex+s.loopedSlides;s.slideTo(newIndex,0,false,true);}};/*=========================
	          Append/Prepend/Remove Slides
	          ===========================*/s.appendSlide=function(slides){if(s.params.loop){s.destroyLoop();}if((typeof slides==='undefined'?'undefined':_typeof(slides))==='object'&&slides.length){for(var i=0;i<slides.length;i++){if(slides[i])s.wrapper.append(slides[i]);}}else{s.wrapper.append(slides);}if(s.params.loop){s.createLoop();}if(!(s.params.observer&&s.support.observer)){s.update(true);}};s.prependSlide=function(slides){if(s.params.loop){s.destroyLoop();}var newActiveIndex=s.activeIndex+1;if((typeof slides==='undefined'?'undefined':_typeof(slides))==='object'&&slides.length){for(var i=0;i<slides.length;i++){if(slides[i])s.wrapper.prepend(slides[i]);}newActiveIndex=s.activeIndex+slides.length;}else{s.wrapper.prepend(slides);}if(s.params.loop){s.createLoop();}if(!(s.params.observer&&s.support.observer)){s.update(true);}s.slideTo(newActiveIndex,0,false);};s.removeSlide=function(slidesIndexes){if(s.params.loop){s.destroyLoop();s.slides=s.wrapper.children('.'+s.params.slideClass);}var newActiveIndex=s.activeIndex,indexToRemove;if((typeof slidesIndexes==='undefined'?'undefined':_typeof(slidesIndexes))==='object'&&slidesIndexes.length){for(var i=0;i<slidesIndexes.length;i++){indexToRemove=slidesIndexes[i];if(s.slides[indexToRemove])s.slides.eq(indexToRemove).remove();if(indexToRemove<newActiveIndex)newActiveIndex--;}newActiveIndex=Math.max(newActiveIndex,0);}else{indexToRemove=slidesIndexes;if(s.slides[indexToRemove])s.slides.eq(indexToRemove).remove();if(indexToRemove<newActiveIndex)newActiveIndex--;newActiveIndex=Math.max(newActiveIndex,0);}if(s.params.loop){s.createLoop();}if(!(s.params.observer&&s.support.observer)){s.update(true);}if(s.params.loop){s.slideTo(newActiveIndex+s.loopedSlides,0,false);}else{s.slideTo(newActiveIndex,0,false);}};s.removeAllSlides=function(){var slidesIndexes=[];for(var i=0;i<s.slides.length;i++){slidesIndexes.push(i);}s.removeSlide(slidesIndexes);};/*=========================
	          Effects
	          ===========================*/s.effects={fade:{setTranslate:function setTranslate(){for(var i=0;i<s.slides.length;i++){var slide=s.slides.eq(i);var offset=slide[0].swiperSlideOffset;var tx=-offset;if(!s.params.virtualTranslate)tx=tx-s.translate;var ty=0;if(!s.isHorizontal()){ty=tx;tx=0;}var slideOpacity=s.params.fade.crossFade?Math.max(1-Math.abs(slide[0].progress),0):1+Math.min(Math.max(slide[0].progress,-1),0);slide.css({opacity:slideOpacity}).transform('translate3d('+tx+'px, '+ty+'px, 0px)');}},setTransition:function setTransition(duration){s.slides.transition(duration);if(s.params.virtualTranslate&&duration!==0){var eventTriggered=false;s.slides.transitionEnd(function(){if(eventTriggered)return;if(!s)return;eventTriggered=true;s.animating=false;var triggerEvents=['webkitTransitionEnd','transitionend','oTransitionEnd','MSTransitionEnd','msTransitionEnd'];for(var i=0;i<triggerEvents.length;i++){s.wrapper.trigger(triggerEvents[i]);}});}}},flip:{setTranslate:function setTranslate(){for(var i=0;i<s.slides.length;i++){var slide=s.slides.eq(i);var progress=slide[0].progress;if(s.params.flip.limitRotation){progress=Math.max(Math.min(slide[0].progress,1),-1);}var offset=slide[0].swiperSlideOffset;var rotate=-180*progress,rotateY=rotate,rotateX=0,tx=-offset,ty=0;if(!s.isHorizontal()){ty=tx;tx=0;rotateX=-rotateY;rotateY=0;}else if(s.rtl){rotateY=-rotateY;}slide[0].style.zIndex=-Math.abs(Math.round(progress))+s.slides.length;if(s.params.flip.slideShadows){//Set shadows
	var shadowBefore=s.isHorizontal()?slide.find('.swiper-slide-shadow-left'):slide.find('.swiper-slide-shadow-top');var shadowAfter=s.isHorizontal()?slide.find('.swiper-slide-shadow-right'):slide.find('.swiper-slide-shadow-bottom');if(shadowBefore.length===0){shadowBefore=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'left':'top')+'"></div>');slide.append(shadowBefore);}if(shadowAfter.length===0){shadowAfter=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'right':'bottom')+'"></div>');slide.append(shadowAfter);}if(shadowBefore.length)shadowBefore[0].style.opacity=Math.max(-progress,0);if(shadowAfter.length)shadowAfter[0].style.opacity=Math.max(progress,0);}slide.transform('translate3d('+tx+'px, '+ty+'px, 0px) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');}},setTransition:function setTransition(duration){s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);if(s.params.virtualTranslate&&duration!==0){var eventTriggered=false;s.slides.eq(s.activeIndex).transitionEnd(function(){if(eventTriggered)return;if(!s)return;if(!$(this).hasClass(s.params.slideActiveClass))return;eventTriggered=true;s.animating=false;var triggerEvents=['webkitTransitionEnd','transitionend','oTransitionEnd','MSTransitionEnd','msTransitionEnd'];for(var i=0;i<triggerEvents.length;i++){s.wrapper.trigger(triggerEvents[i]);}});}}},cube:{setTranslate:function setTranslate(){var wrapperRotate=0,cubeShadow;if(s.params.cube.shadow){if(s.isHorizontal()){cubeShadow=s.wrapper.find('.swiper-cube-shadow');if(cubeShadow.length===0){cubeShadow=$('<div class="swiper-cube-shadow"></div>');s.wrapper.append(cubeShadow);}cubeShadow.css({height:s.width+'px'});}else{cubeShadow=s.container.find('.swiper-cube-shadow');if(cubeShadow.length===0){cubeShadow=$('<div class="swiper-cube-shadow"></div>');s.container.append(cubeShadow);}}}for(var i=0;i<s.slides.length;i++){var slide=s.slides.eq(i);var slideAngle=i*90;var round=Math.floor(slideAngle/360);if(s.rtl){slideAngle=-slideAngle;round=Math.floor(-slideAngle/360);}var progress=Math.max(Math.min(slide[0].progress,1),-1);var tx=0,ty=0,tz=0;if(i%4===0){tx=-round*4*s.size;tz=0;}else if((i-1)%4===0){tx=0;tz=-round*4*s.size;}else if((i-2)%4===0){tx=s.size+round*4*s.size;tz=s.size;}else if((i-3)%4===0){tx=-s.size;tz=3*s.size+s.size*4*round;}if(s.rtl){tx=-tx;}if(!s.isHorizontal()){ty=tx;tx=0;}var transform='rotateX('+(s.isHorizontal()?0:-slideAngle)+'deg) rotateY('+(s.isHorizontal()?slideAngle:0)+'deg) translate3d('+tx+'px, '+ty+'px, '+tz+'px)';if(progress<=1&&progress>-1){wrapperRotate=i*90+progress*90;if(s.rtl)wrapperRotate=-i*90-progress*90;}slide.transform(transform);if(s.params.cube.slideShadows){//Set shadows
	var shadowBefore=s.isHorizontal()?slide.find('.swiper-slide-shadow-left'):slide.find('.swiper-slide-shadow-top');var shadowAfter=s.isHorizontal()?slide.find('.swiper-slide-shadow-right'):slide.find('.swiper-slide-shadow-bottom');if(shadowBefore.length===0){shadowBefore=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'left':'top')+'"></div>');slide.append(shadowBefore);}if(shadowAfter.length===0){shadowAfter=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'right':'bottom')+'"></div>');slide.append(shadowAfter);}if(shadowBefore.length)shadowBefore[0].style.opacity=Math.max(-progress,0);if(shadowAfter.length)shadowAfter[0].style.opacity=Math.max(progress,0);}}s.wrapper.css({'-webkit-transform-origin':'50% 50% -'+s.size/2+'px','-moz-transform-origin':'50% 50% -'+s.size/2+'px','-ms-transform-origin':'50% 50% -'+s.size/2+'px','transform-origin':'50% 50% -'+s.size/2+'px'});if(s.params.cube.shadow){if(s.isHorizontal()){cubeShadow.transform('translate3d(0px, '+(s.width/2+s.params.cube.shadowOffset)+'px, '+-s.width/2+'px) rotateX(90deg) rotateZ(0deg) scale('+s.params.cube.shadowScale+')');}else{var shadowAngle=Math.abs(wrapperRotate)-Math.floor(Math.abs(wrapperRotate)/90)*90;var multiplier=1.5-(Math.sin(shadowAngle*2*Math.PI/360)/2+Math.cos(shadowAngle*2*Math.PI/360)/2);var scale1=s.params.cube.shadowScale,scale2=s.params.cube.shadowScale/multiplier,offset=s.params.cube.shadowOffset;cubeShadow.transform('scale3d('+scale1+', 1, '+scale2+') translate3d(0px, '+(s.height/2+offset)+'px, '+-s.height/2/scale2+'px) rotateX(-90deg)');}}var zFactor=s.isSafari||s.isUiWebView?-s.size/2:0;s.wrapper.transform('translate3d(0px,0,'+zFactor+'px) rotateX('+(s.isHorizontal()?0:wrapperRotate)+'deg) rotateY('+(s.isHorizontal()?-wrapperRotate:0)+'deg)');},setTransition:function setTransition(duration){s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);if(s.params.cube.shadow&&!s.isHorizontal()){s.container.find('.swiper-cube-shadow').transition(duration);}}},coverflow:{setTranslate:function setTranslate(){var transform=s.translate;var center=s.isHorizontal()?-transform+s.width/2:-transform+s.height/2;var rotate=s.isHorizontal()?s.params.coverflow.rotate:-s.params.coverflow.rotate;var translate=s.params.coverflow.depth;//Each slide offset from center
	for(var i=0,length=s.slides.length;i<length;i++){var slide=s.slides.eq(i);var slideSize=s.slidesSizesGrid[i];var slideOffset=slide[0].swiperSlideOffset;var offsetMultiplier=(center-slideOffset-slideSize/2)/slideSize*s.params.coverflow.modifier;var rotateY=s.isHorizontal()?rotate*offsetMultiplier:0;var rotateX=s.isHorizontal()?0:rotate*offsetMultiplier;// var rotateZ = 0
	var translateZ=-translate*Math.abs(offsetMultiplier);var translateY=s.isHorizontal()?0:s.params.coverflow.stretch*offsetMultiplier;var translateX=s.isHorizontal()?s.params.coverflow.stretch*offsetMultiplier:0;//Fix for ultra small values
	if(Math.abs(translateX)<0.001)translateX=0;if(Math.abs(translateY)<0.001)translateY=0;if(Math.abs(translateZ)<0.001)translateZ=0;if(Math.abs(rotateY)<0.001)rotateY=0;if(Math.abs(rotateX)<0.001)rotateX=0;var slideTransform='translate3d('+translateX+'px,'+translateY+'px,'+translateZ+'px)  rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)';slide.transform(slideTransform);slide[0].style.zIndex=-Math.abs(Math.round(offsetMultiplier))+1;if(s.params.coverflow.slideShadows){//Set shadows
	var shadowBefore=s.isHorizontal()?slide.find('.swiper-slide-shadow-left'):slide.find('.swiper-slide-shadow-top');var shadowAfter=s.isHorizontal()?slide.find('.swiper-slide-shadow-right'):slide.find('.swiper-slide-shadow-bottom');if(shadowBefore.length===0){shadowBefore=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'left':'top')+'"></div>');slide.append(shadowBefore);}if(shadowAfter.length===0){shadowAfter=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'right':'bottom')+'"></div>');slide.append(shadowAfter);}if(shadowBefore.length)shadowBefore[0].style.opacity=offsetMultiplier>0?offsetMultiplier:0;if(shadowAfter.length)shadowAfter[0].style.opacity=-offsetMultiplier>0?-offsetMultiplier:0;}}//Set correct perspective for IE10
	if(s.browser.ie){var ws=s.wrapper[0].style;ws.perspectiveOrigin=center+'px 50%';}},setTransition:function setTransition(duration){s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);}}};/*=========================
	          Images Lazy Loading
	          ===========================*/s.lazy={initialImageLoaded:false,loadImageInSlide:function loadImageInSlide(index,loadInDuplicate){if(typeof index==='undefined')return;if(typeof loadInDuplicate==='undefined')loadInDuplicate=true;if(s.slides.length===0)return;var slide=s.slides.eq(index);var img=slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');if(slide.hasClass('swiper-lazy')&&!slide.hasClass('swiper-lazy-loaded')&&!slide.hasClass('swiper-lazy-loading')){img=img.add(slide[0]);}if(img.length===0)return;img.each(function(){var _img=$(this);_img.addClass('swiper-lazy-loading');var background=_img.attr('data-background');var src=_img.attr('data-src'),srcset=_img.attr('data-srcset');s.loadImage(_img[0],src||background,srcset,false,function(){if(background){_img.css('background-image','url("'+background+'")');_img.removeAttr('data-background');}else{if(srcset){_img.attr('srcset',srcset);_img.removeAttr('data-srcset');}if(src){_img.attr('src',src);_img.removeAttr('data-src');}}_img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');slide.find('.swiper-lazy-preloader, .preloader').remove();if(s.params.loop&&loadInDuplicate){var slideOriginalIndex=slide.attr('data-swiper-slide-index');if(slide.hasClass(s.params.slideDuplicateClass)){var originalSlide=s.wrapper.children('[data-swiper-slide-index="'+slideOriginalIndex+'"]:not(.'+s.params.slideDuplicateClass+')');s.lazy.loadImageInSlide(originalSlide.index(),false);}else{var duplicatedSlide=s.wrapper.children('.'+s.params.slideDuplicateClass+'[data-swiper-slide-index="'+slideOriginalIndex+'"]');s.lazy.loadImageInSlide(duplicatedSlide.index(),false);}}s.emit('onLazyImageReady',s,slide[0],_img[0]);});s.emit('onLazyImageLoad',s,slide[0],_img[0]);});},load:function load(){var i;if(s.params.watchSlidesVisibility){s.wrapper.children('.'+s.params.slideVisibleClass).each(function(){s.lazy.loadImageInSlide($(this).index());});}else{if(s.params.slidesPerView>1){for(i=s.activeIndex;i<s.activeIndex+s.params.slidesPerView;i++){if(s.slides[i])s.lazy.loadImageInSlide(i);}}else{s.lazy.loadImageInSlide(s.activeIndex);}}if(s.params.lazyLoadingInPrevNext){if(s.params.slidesPerView>1||s.params.lazyLoadingInPrevNextAmount&&s.params.lazyLoadingInPrevNextAmount>1){var amount=s.params.lazyLoadingInPrevNextAmount;var spv=s.params.slidesPerView;var maxIndex=Math.min(s.activeIndex+spv+Math.max(amount,spv),s.slides.length);var minIndex=Math.max(s.activeIndex-Math.max(spv,amount),0);// Next Slides
	for(i=s.activeIndex+s.params.slidesPerView;i<maxIndex;i++){if(s.slides[i])s.lazy.loadImageInSlide(i);}// Prev Slides
	for(i=minIndex;i<s.activeIndex;i++){if(s.slides[i])s.lazy.loadImageInSlide(i);}}else{var nextSlide=s.wrapper.children('.'+s.params.slideNextClass);if(nextSlide.length>0)s.lazy.loadImageInSlide(nextSlide.index());var prevSlide=s.wrapper.children('.'+s.params.slidePrevClass);if(prevSlide.length>0)s.lazy.loadImageInSlide(prevSlide.index());}}},onTransitionStart:function onTransitionStart(){if(s.params.lazyLoading){if(s.params.lazyLoadingOnTransitionStart||!s.params.lazyLoadingOnTransitionStart&&!s.lazy.initialImageLoaded){s.lazy.load();}}},onTransitionEnd:function onTransitionEnd(){if(s.params.lazyLoading&&!s.params.lazyLoadingOnTransitionStart){s.lazy.load();}}};/*=========================
	          Scrollbar
	          ===========================*/s.scrollbar={isTouched:false,setDragPosition:function setDragPosition(e){var sb=s.scrollbar;var x=0,y=0;var translate;var pointerPosition=s.isHorizontal()?e.type==='touchstart'||e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX||e.clientX:e.type==='touchstart'||e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY||e.clientY;var position=pointerPosition-sb.track.offset()[s.isHorizontal()?'left':'top']-sb.dragSize/2;var positionMin=-s.minTranslate()*sb.moveDivider;var positionMax=-s.maxTranslate()*sb.moveDivider;if(position<positionMin){position=positionMin;}else if(position>positionMax){position=positionMax;}position=-position/sb.moveDivider;s.updateProgress(position);s.setWrapperTranslate(position,true);},dragStart:function dragStart(e){var sb=s.scrollbar;sb.isTouched=true;e.preventDefault();e.stopPropagation();sb.setDragPosition(e);clearTimeout(sb.dragTimeout);sb.track.transition(0);if(s.params.scrollbarHide){sb.track.css('opacity',1);}s.wrapper.transition(100);sb.drag.transition(100);s.emit('onScrollbarDragStart',s);},dragMove:function dragMove(e){var sb=s.scrollbar;if(!sb.isTouched)return;if(e.preventDefault)e.preventDefault();else e.returnValue=false;sb.setDragPosition(e);s.wrapper.transition(0);sb.track.transition(0);sb.drag.transition(0);s.emit('onScrollbarDragMove',s);},dragEnd:function dragEnd(e){var sb=s.scrollbar;if(!sb.isTouched)return;sb.isTouched=false;if(s.params.scrollbarHide){clearTimeout(sb.dragTimeout);sb.dragTimeout=setTimeout(function(){sb.track.css('opacity',0);sb.track.transition(400);},1000);}s.emit('onScrollbarDragEnd',s);if(s.params.scrollbarSnapOnRelease){s.slideReset();}},enableDraggable:function enableDraggable(){var sb=s.scrollbar;var target=s.support.touch?sb.track:document;$(sb.track).on(s.touchEvents.start,sb.dragStart);$(target).on(s.touchEvents.move,sb.dragMove);$(target).on(s.touchEvents.end,sb.dragEnd);},disableDraggable:function disableDraggable(){var sb=s.scrollbar;var target=s.support.touch?sb.track:document;$(sb.track).off(s.touchEvents.start,sb.dragStart);$(target).off(s.touchEvents.move,sb.dragMove);$(target).off(s.touchEvents.end,sb.dragEnd);},set:function set(){if(!s.params.scrollbar)return;var sb=s.scrollbar;sb.track=$(s.params.scrollbar);if(s.params.uniqueNavElements&&typeof s.params.scrollbar==='string'&&sb.track.length>1&&s.container.find(s.params.scrollbar).length===1){sb.track=s.container.find(s.params.scrollbar);}sb.drag=sb.track.find('.swiper-scrollbar-drag');if(sb.drag.length===0){sb.drag=$('<div class="swiper-scrollbar-drag"></div>');sb.track.append(sb.drag);}sb.drag[0].style.width='';sb.drag[0].style.height='';sb.trackSize=s.isHorizontal()?sb.track[0].offsetWidth:sb.track[0].offsetHeight;sb.divider=s.size/s.virtualSize;sb.moveDivider=sb.divider*(sb.trackSize/s.size);sb.dragSize=sb.trackSize*sb.divider;if(s.isHorizontal()){sb.drag[0].style.width=sb.dragSize+'px';}else{sb.drag[0].style.height=sb.dragSize+'px';}if(sb.divider>=1){sb.track[0].style.display='none';}else{sb.track[0].style.display='';}if(s.params.scrollbarHide){sb.track[0].style.opacity=0;}},setTranslate:function setTranslate(){if(!s.params.scrollbar)return;var diff;var sb=s.scrollbar;var translate=s.translate||0;var newPos;var newSize=sb.dragSize;newPos=(sb.trackSize-sb.dragSize)*s.progress;if(s.rtl&&s.isHorizontal()){newPos=-newPos;if(newPos>0){newSize=sb.dragSize-newPos;newPos=0;}else if(-newPos+sb.dragSize>sb.trackSize){newSize=sb.trackSize+newPos;}}else{if(newPos<0){newSize=sb.dragSize+newPos;newPos=0;}else if(newPos+sb.dragSize>sb.trackSize){newSize=sb.trackSize-newPos;}}if(s.isHorizontal()){if(s.support.transforms3d){sb.drag.transform('translate3d('+newPos+'px, 0, 0)');}else{sb.drag.transform('translateX('+newPos+'px)');}sb.drag[0].style.width=newSize+'px';}else{if(s.support.transforms3d){sb.drag.transform('translate3d(0px, '+newPos+'px, 0)');}else{sb.drag.transform('translateY('+newPos+'px)');}sb.drag[0].style.height=newSize+'px';}if(s.params.scrollbarHide){clearTimeout(sb.timeout);sb.track[0].style.opacity=1;sb.timeout=setTimeout(function(){sb.track[0].style.opacity=0;sb.track.transition(400);},1000);}},setTransition:function setTransition(duration){if(!s.params.scrollbar)return;s.scrollbar.drag.transition(duration);}};/*=========================
	          Controller
	          ===========================*/s.controller={LinearSpline:function LinearSpline(x,y){this.x=x;this.y=y;this.lastIndex=x.length-1;// Given an x value (x2), return the expected y2 value:
	// (x1,y1) is the known point before given value,
	// (x3,y3) is the known point after given value.
	var i1,i3;var l=this.x.length;this.interpolate=function(x2){if(!x2)return 0;// Get the indexes of x1 and x3 (the array indexes before and after given x2):
	i3=binarySearch(this.x,x2);i1=i3-1;// We have our indexes i1 & i3, so we can calculate already:
	// y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
	return(x2-this.x[i1])*(this.y[i3]-this.y[i1])/(this.x[i3]-this.x[i1])+this.y[i1];};var binarySearch=function(){var maxIndex,minIndex,guess;return function(array,val){minIndex=-1;maxIndex=array.length;while(maxIndex-minIndex>1){if(array[guess=maxIndex+minIndex>>1]<=val){minIndex=guess;}else{maxIndex=guess;}}return maxIndex;};}();},//xxx: for now i will just save one spline function to to
	getInterpolateFunction:function getInterpolateFunction(c){if(!s.controller.spline)s.controller.spline=s.params.loop?new s.controller.LinearSpline(s.slidesGrid,c.slidesGrid):new s.controller.LinearSpline(s.snapGrid,c.snapGrid);},setTranslate:function setTranslate(translate,byController){var controlled=s.params.control;var multiplier,controlledTranslate;function setControlledTranslate(c){// this will create an Interpolate function based on the snapGrids
	// x is the Grid of the scrolled scroller and y will be the controlled scroller
	// it makes sense to create this only once and recall it for the interpolation
	// the function does a lot of value caching for performance
	translate=c.rtl&&c.params.direction==='horizontal'?-s.translate:s.translate;if(s.params.controlBy==='slide'){s.controller.getInterpolateFunction(c);// i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
	// but it did not work out
	controlledTranslate=-s.controller.spline.interpolate(-translate);}if(!controlledTranslate||s.params.controlBy==='container'){multiplier=(c.maxTranslate()-c.minTranslate())/(s.maxTranslate()-s.minTranslate());controlledTranslate=(translate-s.minTranslate())*multiplier+c.minTranslate();}if(s.params.controlInverse){controlledTranslate=c.maxTranslate()-controlledTranslate;}c.updateProgress(controlledTranslate);c.setWrapperTranslate(controlledTranslate,false,s);c.updateActiveIndex();}if(s.isArray(controlled)){for(var i=0;i<controlled.length;i++){if(controlled[i]!==byController&&controlled[i]instanceof Swiper){setControlledTranslate(controlled[i]);}}}else if(controlled instanceof Swiper&&byController!==controlled){setControlledTranslate(controlled);}},setTransition:function setTransition(duration,byController){var controlled=s.params.control;var i;function setControlledTransition(c){c.setWrapperTransition(duration,s);if(duration!==0){c.onTransitionStart();c.wrapper.transitionEnd(function(){if(!controlled)return;if(c.params.loop&&s.params.controlBy==='slide'){c.fixLoop();}c.onTransitionEnd();});}}if(s.isArray(controlled)){for(i=0;i<controlled.length;i++){if(controlled[i]!==byController&&controlled[i]instanceof Swiper){setControlledTransition(controlled[i]);}}}else if(controlled instanceof Swiper&&byController!==controlled){setControlledTransition(controlled);}}};/*=========================
	          Hash Navigation
	          ===========================*/s.hashnav={init:function init(){if(!s.params.hashnav)return;s.hashnav.initialized=true;var hash=document.location.hash.replace('#','');if(!hash)return;var speed=0;for(var i=0,length=s.slides.length;i<length;i++){var slide=s.slides.eq(i);var slideHash=slide.attr('data-hash');if(slideHash===hash&&!slide.hasClass(s.params.slideDuplicateClass)){var index=slide.index();s.slideTo(index,speed,s.params.runCallbacksOnInit,true);}}},setHash:function setHash(){if(!s.hashnav.initialized||!s.params.hashnav)return;document.location.hash=s.slides.eq(s.activeIndex).attr('data-hash')||'';}};/*=========================
	          Keyboard Control
	          ===========================*/function handleKeyboard(e){if(e.originalEvent)e=e.originalEvent;//jquery fix
	var kc=e.keyCode||e.charCode;// Directions locks
	if(!s.params.allowSwipeToNext&&(s.isHorizontal()&&kc===39||!s.isHorizontal()&&kc===40)){return false;}if(!s.params.allowSwipeToPrev&&(s.isHorizontal()&&kc===37||!s.isHorizontal()&&kc===38)){return false;}if(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey){return;}if(document.activeElement&&document.activeElement.nodeName&&(document.activeElement.nodeName.toLowerCase()==='input'||document.activeElement.nodeName.toLowerCase()==='textarea')){return;}if(kc===37||kc===39||kc===38||kc===40){var inView=false;//Check that swiper should be inside of visible area of window
	if(s.container.parents('.swiper-slide').length>0&&s.container.parents('.swiper-slide-active').length===0){return;}var windowScroll={left:window.pageXOffset,top:window.pageYOffset};var windowWidth=window.innerWidth;var windowHeight=window.innerHeight;var swiperOffset=s.container.offset();if(s.rtl)swiperOffset.left=swiperOffset.left-s.container[0].scrollLeft;var swiperCoord=[[swiperOffset.left,swiperOffset.top],[swiperOffset.left+s.width,swiperOffset.top],[swiperOffset.left,swiperOffset.top+s.height],[swiperOffset.left+s.width,swiperOffset.top+s.height]];for(var i=0;i<swiperCoord.length;i++){var point=swiperCoord[i];if(point[0]>=windowScroll.left&&point[0]<=windowScroll.left+windowWidth&&point[1]>=windowScroll.top&&point[1]<=windowScroll.top+windowHeight){inView=true;}}if(!inView)return;}if(s.isHorizontal()){if(kc===37||kc===39){if(e.preventDefault)e.preventDefault();else e.returnValue=false;}if(kc===39&&!s.rtl||kc===37&&s.rtl)s.slideNext();if(kc===37&&!s.rtl||kc===39&&s.rtl)s.slidePrev();}else{if(kc===38||kc===40){if(e.preventDefault)e.preventDefault();else e.returnValue=false;}if(kc===40)s.slideNext();if(kc===38)s.slidePrev();}}s.disableKeyboardControl=function(){s.params.keyboardControl=false;$(document).off('keydown',handleKeyboard);};s.enableKeyboardControl=function(){s.params.keyboardControl=true;$(document).on('keydown',handleKeyboard);};/*=========================
	          Mousewheel Control
	          ===========================*/s.mousewheel={event:false,lastScrollTime:new window.Date().getTime()};if(s.params.mousewheelControl){try{new window.WheelEvent('wheel');s.mousewheel.event='wheel';}catch(e){if(window.WheelEvent||s.container[0]&&'wheel'in s.container[0]){s.mousewheel.event='wheel';}}if(!s.mousewheel.event&&window.WheelEvent){}if(!s.mousewheel.event&&document.onmousewheel!==undefined){s.mousewheel.event='mousewheel';}if(!s.mousewheel.event){s.mousewheel.event='DOMMouseScroll';}}function handleMousewheel(e){if(e.originalEvent)e=e.originalEvent;//jquery fix
	var we=s.mousewheel.event;var delta=0;var rtlFactor=s.rtl?-1:1;//WebKits
	if(we==='mousewheel'){if(s.params.mousewheelForceToAxis){if(s.isHorizontal()){if(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY))delta=e.wheelDeltaX*rtlFactor;else return;}else{if(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX))delta=e.wheelDeltaY;else return;}}else{delta=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*rtlFactor:-e.wheelDeltaY;}}//Old FireFox
	else if(we==='DOMMouseScroll')delta=-e.detail;//New FireFox
	else if(we==='wheel'){if(s.params.mousewheelForceToAxis){if(s.isHorizontal()){if(Math.abs(e.deltaX)>Math.abs(e.deltaY))delta=-e.deltaX*rtlFactor;else return;}else{if(Math.abs(e.deltaY)>Math.abs(e.deltaX))delta=-e.deltaY;else return;}}else{delta=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*rtlFactor:-e.deltaY;}}if(delta===0)return;if(s.params.mousewheelInvert)delta=-delta;if(!s.params.freeMode){if(new window.Date().getTime()-s.mousewheel.lastScrollTime>60){if(delta<0){if((!s.isEnd||s.params.loop)&&!s.animating)s.slideNext();else if(s.params.mousewheelReleaseOnEdges)return true;}else{if((!s.isBeginning||s.params.loop)&&!s.animating)s.slidePrev();else if(s.params.mousewheelReleaseOnEdges)return true;}}s.mousewheel.lastScrollTime=new window.Date().getTime();}else{//Freemode or scrollContainer:
	var position=s.getWrapperTranslate()+delta*s.params.mousewheelSensitivity;var wasBeginning=s.isBeginning,wasEnd=s.isEnd;if(position>=s.minTranslate())position=s.minTranslate();if(position<=s.maxTranslate())position=s.maxTranslate();s.setWrapperTransition(0);s.setWrapperTranslate(position);s.updateProgress();s.updateActiveIndex();if(!wasBeginning&&s.isBeginning||!wasEnd&&s.isEnd){s.updateClasses();}if(s.params.freeModeSticky){clearTimeout(s.mousewheel.timeout);s.mousewheel.timeout=setTimeout(function(){s.slideReset();},300);}else{if(s.params.lazyLoading&&s.lazy){s.lazy.load();}}// Return page scroll on edge positions
	if(position===0||position===s.maxTranslate())return;}if(s.params.autoplay)s.stopAutoplay();if(e.preventDefault)e.preventDefault();else e.returnValue=false;return false;}s.disableMousewheelControl=function(){if(!s.mousewheel.event)return false;s.container.off(s.mousewheel.event,handleMousewheel);return true;};s.enableMousewheelControl=function(){if(!s.mousewheel.event)return false;s.container.on(s.mousewheel.event,handleMousewheel);return true;};/*=========================
	          Parallax
	          ===========================*/function setParallaxTransform(el,progress){el=$(el);var p,pX,pY;var rtlFactor=s.rtl?-1:1;p=el.attr('data-swiper-parallax')||'0';pX=el.attr('data-swiper-parallax-x');pY=el.attr('data-swiper-parallax-y');if(pX||pY){pX=pX||'0';pY=pY||'0';}else{if(s.isHorizontal()){pX=p;pY='0';}else{pY=p;pX='0';}}if(pX.indexOf('%')>=0){pX=parseInt(pX,10)*progress*rtlFactor+'%';}else{pX=pX*progress*rtlFactor+'px';}if(pY.indexOf('%')>=0){pY=parseInt(pY,10)*progress+'%';}else{pY=pY*progress+'px';}el.transform('translate3d('+pX+', '+pY+',0px)');}s.parallax={setTranslate:function setTranslate(){s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){setParallaxTransform(this,s.progress);});s.slides.each(function(){var slide=$(this);slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){var progress=Math.min(Math.max(slide[0].progress,-1),1);setParallaxTransform(this,progress);});});},setTransition:function setTransition(duration){if(typeof duration==='undefined')duration=s.params.speed;s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){var el=$(this);var parallaxDuration=parseInt(el.attr('data-swiper-parallax-duration'),10)||duration;if(duration===0)parallaxDuration=0;el.transition(parallaxDuration);});}};/*=========================
	          Plugins API. Collect all and init all plugins
	          ===========================*/s._plugins=[];for(var plugin in s.plugins){var p=s.plugins[plugin](s,s.params[plugin]);if(p)s._plugins.push(p);}// Method to call all plugins event/method
	s.callPlugins=function(eventName){for(var i=0;i<s._plugins.length;i++){if(eventName in s._plugins[i]){s._plugins[i][eventName](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);}}};/*=========================
	          Events/Callbacks/Plugins Emitter
	          ===========================*/function normalizeEventName(eventName){if(eventName.indexOf('on')!==0){if(eventName[0]!==eventName[0].toUpperCase()){eventName='on'+eventName[0].toUpperCase()+eventName.substring(1);}else{eventName='on'+eventName;}}return eventName;}s.emitterEventListeners={};s.emit=function(eventName){// Trigger callbacks
	if(s.params[eventName]){s.params[eventName](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);}var i;// Trigger events
	if(s.emitterEventListeners[eventName]){for(i=0;i<s.emitterEventListeners[eventName].length;i++){s.emitterEventListeners[eventName][i](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);}}// Trigger plugins
	if(s.callPlugins)s.callPlugins(eventName,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);};s.on=function(eventName,handler){eventName=normalizeEventName(eventName);if(!s.emitterEventListeners[eventName])s.emitterEventListeners[eventName]=[];s.emitterEventListeners[eventName].push(handler);return s;};s.off=function(eventName,handler){var i;eventName=normalizeEventName(eventName);if(typeof handler==='undefined'){// Remove all handlers for such event
	s.emitterEventListeners[eventName]=[];return s;}if(!s.emitterEventListeners[eventName]||s.emitterEventListeners[eventName].length===0)return;for(i=0;i<s.emitterEventListeners[eventName].length;i++){if(s.emitterEventListeners[eventName][i]===handler)s.emitterEventListeners[eventName].splice(i,1);}return s;};s.once=function(eventName,handler){eventName=normalizeEventName(eventName);var _handler=function _handler(){handler(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);s.off(eventName,_handler);};s.on(eventName,_handler);return s;};// Accessibility tools
	s.a11y={makeFocusable:function makeFocusable($el){$el.attr('tabIndex','0');return $el;},addRole:function addRole($el,role){$el.attr('role',role);return $el;},addLabel:function addLabel($el,label){$el.attr('aria-label',label);return $el;},disable:function disable($el){$el.attr('aria-disabled',true);return $el;},enable:function enable($el){$el.attr('aria-disabled',false);return $el;},onEnterKey:function onEnterKey(event){if(event.keyCode!==13)return;if($(event.target).is(s.params.nextButton)){s.onClickNext(event);if(s.isEnd){s.a11y.notify(s.params.lastSlideMessage);}else{s.a11y.notify(s.params.nextSlideMessage);}}else if($(event.target).is(s.params.prevButton)){s.onClickPrev(event);if(s.isBeginning){s.a11y.notify(s.params.firstSlideMessage);}else{s.a11y.notify(s.params.prevSlideMessage);}}if($(event.target).is('.'+s.params.bulletClass)){$(event.target)[0].click();}},liveRegion:$('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function notify(message){var notification=s.a11y.liveRegion;if(notification.length===0)return;notification.html('');notification.html(message);},init:function init(){// Setup accessibility
	if(s.params.nextButton&&s.nextButton&&s.nextButton.length>0){s.a11y.makeFocusable(s.nextButton);s.a11y.addRole(s.nextButton,'button');s.a11y.addLabel(s.nextButton,s.params.nextSlideMessage);}if(s.params.prevButton&&s.prevButton&&s.prevButton.length>0){s.a11y.makeFocusable(s.prevButton);s.a11y.addRole(s.prevButton,'button');s.a11y.addLabel(s.prevButton,s.params.prevSlideMessage);}$(s.container).append(s.a11y.liveRegion);},initPagination:function initPagination(){if(s.params.pagination&&s.params.paginationClickable&&s.bullets&&s.bullets.length){s.bullets.each(function(){var bullet=$(this);s.a11y.makeFocusable(bullet);s.a11y.addRole(bullet,'button');s.a11y.addLabel(bullet,s.params.paginationBulletMessage.replace(/{{index}}/,bullet.index()+1));});}},destroy:function destroy(){if(s.a11y.liveRegion&&s.a11y.liveRegion.length>0)s.a11y.liveRegion.remove();}};/*=========================
	          Init/Destroy
	          ===========================*/s.init=function(){if(s.params.loop)s.createLoop();s.updateContainerSize();s.updateSlidesSize();s.updatePagination();if(s.params.scrollbar&&s.scrollbar){s.scrollbar.set();if(s.params.scrollbarDraggable){s.scrollbar.enableDraggable();}}if(s.params.effect!=='slide'&&s.effects[s.params.effect]){if(!s.params.loop)s.updateProgress();s.effects[s.params.effect].setTranslate();}if(s.params.loop){s.slideTo(s.params.initialSlide+s.loopedSlides,0,s.params.runCallbacksOnInit);}else{s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit);if(s.params.initialSlide===0){if(s.parallax&&s.params.parallax)s.parallax.setTranslate();if(s.lazy&&s.params.lazyLoading){s.lazy.load();s.lazy.initialImageLoaded=true;}}}s.attachEvents();if(s.params.observer&&s.support.observer){s.initObservers();}if(s.params.preloadImages&&!s.params.lazyLoading){s.preloadImages();}if(s.params.autoplay){s.startAutoplay();}if(s.params.keyboardControl){if(s.enableKeyboardControl)s.enableKeyboardControl();}if(s.params.mousewheelControl){if(s.enableMousewheelControl)s.enableMousewheelControl();}if(s.params.hashnav){if(s.hashnav)s.hashnav.init();}if(s.params.a11y&&s.a11y)s.a11y.init();s.emit('onInit',s);};// Cleanup dynamic styles
	s.cleanupStyles=function(){// Container
	s.container.removeClass(s.classNames.join(' ')).removeAttr('style');// Wrapper
	s.wrapper.removeAttr('style');// Slides
	if(s.slides&&s.slides.length){s.slides.removeClass([s.params.slideVisibleClass,s.params.slideActiveClass,s.params.slideNextClass,s.params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-column').removeAttr('data-swiper-row');}// Pagination/Bullets
	if(s.paginationContainer&&s.paginationContainer.length){s.paginationContainer.removeClass(s.params.paginationHiddenClass);}if(s.bullets&&s.bullets.length){s.bullets.removeClass(s.params.bulletActiveClass);}// Buttons
	if(s.params.prevButton)$(s.params.prevButton).removeClass(s.params.buttonDisabledClass);if(s.params.nextButton)$(s.params.nextButton).removeClass(s.params.buttonDisabledClass);// Scrollbar
	if(s.params.scrollbar&&s.scrollbar){if(s.scrollbar.track&&s.scrollbar.track.length)s.scrollbar.track.removeAttr('style');if(s.scrollbar.drag&&s.scrollbar.drag.length)s.scrollbar.drag.removeAttr('style');}};// Destroy
	s.destroy=function(deleteInstance,cleanupStyles){// Detach evebts
	s.detachEvents();// Stop autoplay
	s.stopAutoplay();// Disable draggable
	if(s.params.scrollbar&&s.scrollbar){if(s.params.scrollbarDraggable){s.scrollbar.disableDraggable();}}// Destroy loop
	if(s.params.loop){s.destroyLoop();}// Cleanup styles
	if(cleanupStyles){s.cleanupStyles();}// Disconnect observer
	s.disconnectObservers();// Disable keyboard/mousewheel
	if(s.params.keyboardControl){if(s.disableKeyboardControl)s.disableKeyboardControl();}if(s.params.mousewheelControl){if(s.disableMousewheelControl)s.disableMousewheelControl();}// Disable a11y
	if(s.params.a11y&&s.a11y)s.a11y.destroy();// Destroy callback
	s.emit('onDestroy');// Delete instance
	if(deleteInstance!==false)s=null;};s.init();// Return swiper instance
	return s;};/*==================================================
	        Prototype
	    ====================================================*/Swiper.prototype={isSafari:function(){var ua=navigator.userAgent.toLowerCase();return ua.indexOf('safari')>=0&&ua.indexOf('chrome')<0&&ua.indexOf('android')<0;}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function isArray(arr){return Object.prototype.toString.apply(arr)==='[object Array]';},/*==================================================
	        Browser
	        ====================================================*/browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},/*==================================================
	        Devices
	        ====================================================*/device:function(){var ua=navigator.userAgent;var android=ua.match(/(Android);?[\s\/]+([\d.]+)?/);var ipad=ua.match(/(iPad).*OS\s([\d_]+)/);var ipod=ua.match(/(iPod)(.*OS\s([\d_]+))?/);var iphone=!ipad&&ua.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:ipad||iphone||ipod,android:android};}(),/*==================================================
	        Feature Detection
	        ====================================================*/support:{touch:window.Modernizr&&Modernizr.touch===true||function(){return!!('ontouchstart'in window||window.DocumentTouch&&document instanceof DocumentTouch);}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===true||function(){var div=document.createElement('div').style;return'webkitPerspective'in div||'MozPerspective'in div||'OPerspective'in div||'MsPerspective'in div||'perspective'in div;}(),flexbox:function(){var div=document.createElement('div').style;var styles='alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' ');for(var i=0;i<styles.length;i++){if(styles[i]in div)return true;}}(),observer:function(){return'MutationObserver'in window||'WebkitMutationObserver'in window;}()},/*==================================================
	        Plugins
	        ====================================================*/plugins:{}};/*===========================
	    Dom7 Library
	    ===========================*/var Dom7=function(){var Dom7=function Dom7(arr){var _this=this,i=0;// Create array-like object
	for(i=0;i<arr.length;i++){_this[i]=arr[i];}_this.length=arr.length;// Return collection with methods
	return this;};var $=function $(selector,context){var arr=[],i=0;if(selector&&!context){if(selector instanceof Dom7){return selector;}}if(selector){// String
	if(typeof selector==='string'){var els,tempParent,html=selector.trim();if(html.indexOf('<')>=0&&html.indexOf('>')>=0){var toCreate='div';if(html.indexOf('<li')===0)toCreate='ul';if(html.indexOf('<tr')===0)toCreate='tbody';if(html.indexOf('<td')===0||html.indexOf('<th')===0)toCreate='tr';if(html.indexOf('<tbody')===0)toCreate='table';if(html.indexOf('<option')===0)toCreate='select';tempParent=document.createElement(toCreate);tempParent.innerHTML=selector;for(i=0;i<tempParent.childNodes.length;i++){arr.push(tempParent.childNodes[i]);}}else{if(!context&&selector[0]==='#'&&!selector.match(/[ .<>:~]/)){// Pure ID selector
	els=[document.getElementById(selector.split('#')[1])];}else{// Other selectors
	els=(context||document).querySelectorAll(selector);}for(i=0;i<els.length;i++){if(els[i])arr.push(els[i]);}}}// Node/element
	else if(selector.nodeType||selector===window||selector===document){arr.push(selector);}//Array of elements or instance of Dom
	else if(selector.length>0&&selector[0].nodeType){for(i=0;i<selector.length;i++){arr.push(selector[i]);}}}return new Dom7(arr);};Dom7.prototype={// Classes and attriutes
	addClass:function addClass(className){if(typeof className==='undefined'){return this;}var classes=className.split(' ');for(var i=0;i<classes.length;i++){for(var j=0;j<this.length;j++){this[j].classList.add(classes[i]);}}return this;},removeClass:function removeClass(className){var classes=className.split(' ');for(var i=0;i<classes.length;i++){for(var j=0;j<this.length;j++){this[j].classList.remove(classes[i]);}}return this;},hasClass:function hasClass(className){if(!this[0])return false;else return this[0].classList.contains(className);},toggleClass:function toggleClass(className){var classes=className.split(' ');for(var i=0;i<classes.length;i++){for(var j=0;j<this.length;j++){this[j].classList.toggle(classes[i]);}}return this;},attr:function attr(attrs,value){if(arguments.length===1&&typeof attrs==='string'){// Get attr
	if(this[0])return this[0].getAttribute(attrs);else return undefined;}else{// Set attrs
	for(var i=0;i<this.length;i++){if(arguments.length===2){// String
	this[i].setAttribute(attrs,value);}else{// Object
	for(var attrName in attrs){this[i][attrName]=attrs[attrName];this[i].setAttribute(attrName,attrs[attrName]);}}}return this;}},removeAttr:function removeAttr(attr){for(var i=0;i<this.length;i++){this[i].removeAttribute(attr);}return this;},data:function data(key,value){if(typeof value==='undefined'){// Get value
	if(this[0]){var dataKey=this[0].getAttribute('data-'+key);if(dataKey)return dataKey;else if(this[0].dom7ElementDataStorage&&key in this[0].dom7ElementDataStorage)return this[0].dom7ElementDataStorage[key];else return undefined;}else return undefined;}else{// Set value
	for(var i=0;i<this.length;i++){var el=this[i];if(!el.dom7ElementDataStorage)el.dom7ElementDataStorage={};el.dom7ElementDataStorage[key]=value;}return this;}},// Transforms
	transform:function transform(_transform){for(var i=0;i<this.length;i++){var elStyle=this[i].style;elStyle.webkitTransform=elStyle.MsTransform=elStyle.msTransform=elStyle.MozTransform=elStyle.OTransform=elStyle.transform=_transform;}return this;},transition:function transition(duration){if(typeof duration!=='string'){duration=duration+'ms';}for(var i=0;i<this.length;i++){var elStyle=this[i].style;elStyle.webkitTransitionDuration=elStyle.MsTransitionDuration=elStyle.msTransitionDuration=elStyle.MozTransitionDuration=elStyle.OTransitionDuration=elStyle.transitionDuration=duration;}return this;},//Events
	on:function on(eventName,targetSelector,listener,capture){function handleLiveEvent(e){var target=e.target;if($(target).is(targetSelector))listener.call(target,e);else{var parents=$(target).parents();for(var k=0;k<parents.length;k++){if($(parents[k]).is(targetSelector))listener.call(parents[k],e);}}}var events=eventName.split(' ');var i,j;for(i=0;i<this.length;i++){if(typeof targetSelector==='function'||targetSelector===false){// Usual events
	if(typeof targetSelector==='function'){listener=arguments[1];capture=arguments[2]||false;}for(j=0;j<events.length;j++){this[i].addEventListener(events[j],listener,capture);}}else{//Live events
	for(j=0;j<events.length;j++){if(!this[i].dom7LiveListeners)this[i].dom7LiveListeners=[];this[i].dom7LiveListeners.push({listener:listener,liveListener:handleLiveEvent});this[i].addEventListener(events[j],handleLiveEvent,capture);}}}return this;},off:function off(eventName,targetSelector,listener,capture){var events=eventName.split(' ');for(var i=0;i<events.length;i++){for(var j=0;j<this.length;j++){if(typeof targetSelector==='function'||targetSelector===false){// Usual events
	if(typeof targetSelector==='function'){listener=arguments[1];capture=arguments[2]||false;}this[j].removeEventListener(events[i],listener,capture);}else{// Live event
	if(this[j].dom7LiveListeners){for(var k=0;k<this[j].dom7LiveListeners.length;k++){if(this[j].dom7LiveListeners[k].listener===listener){this[j].removeEventListener(events[i],this[j].dom7LiveListeners[k].liveListener,capture);}}}}}}return this;},once:function once(eventName,targetSelector,listener,capture){var dom=this;if(typeof targetSelector==='function'){targetSelector=false;listener=arguments[1];capture=arguments[2];}function proxy(e){listener(e);dom.off(eventName,targetSelector,proxy,capture);}dom.on(eventName,targetSelector,proxy,capture);},trigger:function trigger(eventName,eventData){for(var i=0;i<this.length;i++){var evt;try{evt=new window.CustomEvent(eventName,{detail:eventData,bubbles:true,cancelable:true});}catch(e){evt=document.createEvent('Event');evt.initEvent(eventName,true,true);evt.detail=eventData;}this[i].dispatchEvent(evt);}return this;},transitionEnd:function transitionEnd(callback){var events=['webkitTransitionEnd','transitionend','oTransitionEnd','MSTransitionEnd','msTransitionEnd'],i,j,dom=this;function fireCallBack(e){/*jshint validthis:true */if(e.target!==this)return;callback.call(this,e);for(i=0;i<events.length;i++){dom.off(events[i],fireCallBack);}}if(callback){for(i=0;i<events.length;i++){dom.on(events[i],fireCallBack);}}return this;},// Sizing/Styles
	width:function width(){if(this[0]===window){return window.innerWidth;}else{if(this.length>0){return parseFloat(this.css('width'));}else{return null;}}},outerWidth:function outerWidth(includeMargins){if(this.length>0){if(includeMargins)return this[0].offsetWidth+parseFloat(this.css('margin-right'))+parseFloat(this.css('margin-left'));else return this[0].offsetWidth;}else return null;},height:function height(){if(this[0]===window){return window.innerHeight;}else{if(this.length>0){return parseFloat(this.css('height'));}else{return null;}}},outerHeight:function outerHeight(includeMargins){if(this.length>0){if(includeMargins)return this[0].offsetHeight+parseFloat(this.css('margin-top'))+parseFloat(this.css('margin-bottom'));else return this[0].offsetHeight;}else return null;},offset:function offset(){if(this.length>0){var el=this[0];var box=el.getBoundingClientRect();var body=document.body;var clientTop=el.clientTop||body.clientTop||0;var clientLeft=el.clientLeft||body.clientLeft||0;var scrollTop=window.pageYOffset||el.scrollTop;var scrollLeft=window.pageXOffset||el.scrollLeft;return{top:box.top+scrollTop-clientTop,left:box.left+scrollLeft-clientLeft};}else{return null;}},css:function css(props,value){var i;if(arguments.length===1){if(typeof props==='string'){if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(props);}else{for(i=0;i<this.length;i++){for(var prop in props){this[i].style[prop]=props[prop];}}return this;}}if(arguments.length===2&&typeof props==='string'){for(i=0;i<this.length;i++){this[i].style[props]=value;}return this;}return this;},//Dom manipulation
	each:function each(callback){for(var i=0;i<this.length;i++){callback.call(this[i],i,this[i]);}return this;},html:function html(_html){if(typeof _html==='undefined'){return this[0]?this[0].innerHTML:undefined;}else{for(var i=0;i<this.length;i++){this[i].innerHTML=_html;}return this;}},text:function text(_text){if(typeof _text==='undefined'){if(this[0]){return this[0].textContent.trim();}else return null;}else{for(var i=0;i<this.length;i++){this[i].textContent=_text;}return this;}},is:function is(selector){if(!this[0])return false;var compareWith,i;if(typeof selector==='string'){var el=this[0];if(el===document)return selector===document;if(el===window)return selector===window;if(el.matches)return el.matches(selector);else if(el.webkitMatchesSelector)return el.webkitMatchesSelector(selector);else if(el.mozMatchesSelector)return el.mozMatchesSelector(selector);else if(el.msMatchesSelector)return el.msMatchesSelector(selector);else{compareWith=$(selector);for(i=0;i<compareWith.length;i++){if(compareWith[i]===this[0])return true;}return false;}}else if(selector===document)return this[0]===document;else if(selector===window)return this[0]===window;else{if(selector.nodeType||selector instanceof Dom7){compareWith=selector.nodeType?[selector]:selector;for(i=0;i<compareWith.length;i++){if(compareWith[i]===this[0])return true;}return false;}return false;}},index:function index(){if(this[0]){var child=this[0];var i=0;while((child=child.previousSibling)!==null){if(child.nodeType===1)i++;}return i;}else return undefined;},eq:function eq(index){if(typeof index==='undefined')return this;var length=this.length;var returnIndex;if(index>length-1){return new Dom7([]);}if(index<0){returnIndex=length+index;if(returnIndex<0)return new Dom7([]);else return new Dom7([this[returnIndex]]);}return new Dom7([this[index]]);},append:function append(newChild){var i,j;for(i=0;i<this.length;i++){if(typeof newChild==='string'){var tempDiv=document.createElement('div');tempDiv.innerHTML=newChild;while(tempDiv.firstChild){this[i].appendChild(tempDiv.firstChild);}}else if(newChild instanceof Dom7){for(j=0;j<newChild.length;j++){this[i].appendChild(newChild[j]);}}else{this[i].appendChild(newChild);}}return this;},prepend:function prepend(newChild){var i,j;for(i=0;i<this.length;i++){if(typeof newChild==='string'){var tempDiv=document.createElement('div');tempDiv.innerHTML=newChild;for(j=tempDiv.childNodes.length-1;j>=0;j--){this[i].insertBefore(tempDiv.childNodes[j],this[i].childNodes[0]);}// this[i].insertAdjacentHTML('afterbegin', newChild);
	}else if(newChild instanceof Dom7){for(j=0;j<newChild.length;j++){this[i].insertBefore(newChild[j],this[i].childNodes[0]);}}else{this[i].insertBefore(newChild,this[i].childNodes[0]);}}return this;},insertBefore:function insertBefore(selector){var before=$(selector);for(var i=0;i<this.length;i++){if(before.length===1){before[0].parentNode.insertBefore(this[i],before[0]);}else if(before.length>1){for(var j=0;j<before.length;j++){before[j].parentNode.insertBefore(this[i].cloneNode(true),before[j]);}}}},insertAfter:function insertAfter(selector){var after=$(selector);for(var i=0;i<this.length;i++){if(after.length===1){after[0].parentNode.insertBefore(this[i],after[0].nextSibling);}else if(after.length>1){for(var j=0;j<after.length;j++){after[j].parentNode.insertBefore(this[i].cloneNode(true),after[j].nextSibling);}}}},next:function next(selector){if(this.length>0){if(selector){if(this[0].nextElementSibling&&$(this[0].nextElementSibling).is(selector))return new Dom7([this[0].nextElementSibling]);else return new Dom7([]);}else{if(this[0].nextElementSibling)return new Dom7([this[0].nextElementSibling]);else return new Dom7([]);}}else return new Dom7([]);},nextAll:function nextAll(selector){var nextEls=[];var el=this[0];if(!el)return new Dom7([]);while(el.nextElementSibling){var next=el.nextElementSibling;if(selector){if($(next).is(selector))nextEls.push(next);}else nextEls.push(next);el=next;}return new Dom7(nextEls);},prev:function prev(selector){if(this.length>0){if(selector){if(this[0].previousElementSibling&&$(this[0].previousElementSibling).is(selector))return new Dom7([this[0].previousElementSibling]);else return new Dom7([]);}else{if(this[0].previousElementSibling)return new Dom7([this[0].previousElementSibling]);else return new Dom7([]);}}else return new Dom7([]);},prevAll:function prevAll(selector){var prevEls=[];var el=this[0];if(!el)return new Dom7([]);while(el.previousElementSibling){var prev=el.previousElementSibling;if(selector){if($(prev).is(selector))prevEls.push(prev);}else prevEls.push(prev);el=prev;}return new Dom7(prevEls);},parent:function parent(selector){var parents=[];for(var i=0;i<this.length;i++){if(selector){if($(this[i].parentNode).is(selector))parents.push(this[i].parentNode);}else{parents.push(this[i].parentNode);}}return $($.unique(parents));},parents:function parents(selector){var parents=[];for(var i=0;i<this.length;i++){var parent=this[i].parentNode;while(parent){if(selector){if($(parent).is(selector))parents.push(parent);}else{parents.push(parent);}parent=parent.parentNode;}}return $($.unique(parents));},find:function find(selector){var foundElements=[];for(var i=0;i<this.length;i++){var found=this[i].querySelectorAll(selector);for(var j=0;j<found.length;j++){foundElements.push(found[j]);}}return new Dom7(foundElements);},children:function children(selector){var children=[];for(var i=0;i<this.length;i++){var childNodes=this[i].childNodes;for(var j=0;j<childNodes.length;j++){if(!selector){if(childNodes[j].nodeType===1)children.push(childNodes[j]);}else{if(childNodes[j].nodeType===1&&$(childNodes[j]).is(selector))children.push(childNodes[j]);}}}return new Dom7($.unique(children));},remove:function remove(){for(var i=0;i<this.length;i++){if(this[i].parentNode)this[i].parentNode.removeChild(this[i]);}return this;},add:function add(){var dom=this;var i,j;for(i=0;i<arguments.length;i++){var toAdd=$(arguments[i]);for(j=0;j<toAdd.length;j++){dom[dom.length]=toAdd[j];dom.length++;}}return dom;}};$.fn=Dom7.prototype;$.unique=function(arr){var unique=[];for(var i=0;i<arr.length;i++){if(unique.indexOf(arr[i])===-1)unique.push(arr[i]);}return unique;};return $;}();/*===========================
	     Get Dom libraries
	     ===========================*/var swiperDomPlugins=['jQuery','Zepto','Dom7'];for(var i=0;i<swiperDomPlugins.length;i++){if(window[swiperDomPlugins[i]]){addLibraryPlugin(window[swiperDomPlugins[i]]);}}// Required DOM Plugins
	var domLib;if(typeof Dom7==='undefined'){domLib=window.Dom7||window.Zepto||__webpack_provided_window_dot_jQuery;}else{domLib=Dom7;}/*===========================
	    Add .swiper plugin from Dom libraries
	    ===========================*/function addLibraryPlugin(lib){lib.fn.swiper=function(params){var firstInstance;lib(this).each(function(){var s=new Swiper(this,params);if(!firstInstance)firstInstance=s;});return firstInstance;};}if(domLib){if(!('transitionEnd'in domLib.fn)){domLib.fn.transitionEnd=function(callback){var events=['webkitTransitionEnd','transitionend','oTransitionEnd','MSTransitionEnd','msTransitionEnd'],i,j,dom=this;function fireCallBack(e){/*jshint validthis:true */if(e.target!==this)return;callback.call(this,e);for(i=0;i<events.length;i++){dom.off(events[i],fireCallBack);}}if(callback){for(i=0;i<events.length;i++){dom.on(events[i],fireCallBack);}}return this;};}if(!('transform'in domLib.fn)){domLib.fn.transform=function(transform){for(var i=0;i<this.length;i++){var elStyle=this[i].style;elStyle.webkitTransform=elStyle.MsTransform=elStyle.msTransform=elStyle.MozTransform=elStyle.OTransform=elStyle.transform=transform;}return this;};}if(!('transition'in domLib.fn)){domLib.fn.transition=function(duration){if(typeof duration!=='string'){duration=duration+'ms';}for(var i=0;i<this.length;i++){var elStyle=this[i].style;elStyle.webkitTransitionDuration=elStyle.MsTransitionDuration=elStyle.msTransitionDuration=elStyle.MozTransitionDuration=elStyle.OTransitionDuration=elStyle.transitionDuration=duration;}return this;};}}window.Swiper=Swiper;})();/*===========================
	Swiper AMD Export
	===========================*/if(true){module.exports=window.Swiper;}else if(typeof define==='function'&&define.amd){define([],function(){'use strict';return window.Swiper;});}//# sourceMappingURL=maps/swiper.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(1)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*! picturefill - v3.0.2 - 2016-02-12
	 * https://scottjehl.github.io/picturefill/
	 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
	 */
	/*! Gecko-Picture - v1.0
	 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
	 * Firefox's early picture implementation (prior to FF41) is static and does
	 * not react to viewport changes. This tiny module fixes this.
	 */
	(function (window) {
		/*jshint eqnull:true */
		var ua = navigator.userAgent;

		if (window.HTMLPictureElement && /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) {
			addEventListener("resize", function () {
				var timer;

				var dummySrc = document.createElement("source");

				var fixRespimg = function fixRespimg(img) {
					var source, sizes;
					var picture = img.parentNode;

					if (picture.nodeName.toUpperCase() === "PICTURE") {
						source = dummySrc.cloneNode();

						picture.insertBefore(source, picture.firstElementChild);
						setTimeout(function () {
							picture.removeChild(source);
						});
					} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
						img._pfLastSize = img.offsetWidth;
						sizes = img.sizes;
						img.sizes += ",100vw";
						setTimeout(function () {
							img.sizes = sizes;
						});
					}
				};

				var findPictureImgs = function findPictureImgs() {
					var i;
					var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
					for (i = 0; i < imgs.length; i++) {
						fixRespimg(imgs[i]);
					}
				};
				var onResize = function onResize() {
					clearTimeout(timer);
					timer = setTimeout(findPictureImgs, 99);
				};
				var mq = window.matchMedia && matchMedia("(orientation: landscape)");
				var init = function init() {
					onResize();

					if (mq && mq.addListener) {
						mq.addListener(onResize);
					}
				};

				dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

				if (/^[c|i]|d$/.test(document.readyState || "")) {
					init();
				} else {
					document.addEventListener("DOMContentLoaded", init);
				}

				return onResize;
			}());
		}
	})(window);

	/*! Picturefill - v3.0.2
	 * http://scottjehl.github.io/picturefill
	 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
	 *  License: MIT
	 */

	(function (window, document, undefined) {
		// Enable strict mode
		"use strict";

		// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)

		document.createElement("picture");

		var warn, eminpx, alwaysCheckWDescriptor, evalId;
		// local object for method references and testing exposure
		var pf = {};
		var isSupportTestReady = false;
		var noop = function noop() {};
		var image = document.createElement("img");
		var getImgAttr = image.getAttribute;
		var setImgAttr = image.setAttribute;
		var removeImgAttr = image.removeAttribute;
		var docElem = document.documentElement;
		var types = {};
		var cfg = {
			//resource selection:
			algorithm: ""
		};
		var srcAttr = "data-pfsrc";
		var srcsetAttr = srcAttr + "set";
		// ua sniffing is done for undetectable img loading features,
		// to do some non crucial perf optimizations
		var ua = navigator.userAgent;
		var supportAbort = /rident/.test(ua) || /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35;
		var curSrcProp = "currentSrc";
		var regWDesc = /\s+\+?\d+(e\d+)?w/;
		var regSize = /(\([^)]+\))?\s*(.+)/;
		var setOptions = window.picturefillCFG;
		/**
	  * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
	  */
		// baseStyle also used by getEmValue (i.e.: width: 1em is important)
		var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
		var fsCss = "font-size:100%!important;";
		var isVwDirty = true;

		var cssCache = {};
		var sizeLengthCache = {};
		var DPR = window.devicePixelRatio;
		var units = {
			px: 1,
			"in": 96
		};
		var anchor = document.createElement("a");
		/**
	  * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
	  * @type {boolean}
	  */
		var alreadyRun = false;

		// Reusable, non-"g" Regexes

		// (Don't use \s, to avoid matching non-breaking space.)
		var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
		    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
		    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
		    regexTrailingCommas = /[,]+$/,
		    regexNonNegativeInteger = /^\d+$/,


		// ( Positive or negative or unsigned integers or decimals, without or without exponents.
		// Must include at least one digit.
		// According to spec tests any decimal point must be followed by a digit.
		// No leading plus sign is allowed.)
		// https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
		regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

		var on = function on(obj, evt, fn, capture) {
			if (obj.addEventListener) {
				obj.addEventListener(evt, fn, capture || false);
			} else if (obj.attachEvent) {
				obj.attachEvent("on" + evt, fn);
			}
		};

		/**
	  * simple memoize function:
	  */

		var memoize = function memoize(fn) {
			var cache = {};
			return function (input) {
				if (!(input in cache)) {
					cache[input] = fn(input);
				}
				return cache[input];
			};
		};

		// UTILITY FUNCTIONS

		// Manual is faster than RegEx
		// http://jsperf.com/whitespace-character/5
		function isSpace(c) {
			return c === " " || // space
			c === "\t" || // horizontal tab
			c === "\n" || // new line
			c === "\f" || // form feed
			c === "\r"; // carriage return
		}

		/**
	  * gets a mediaquery and returns a boolean or gets a css length and returns a number
	  * @param css mediaqueries or css length
	  * @returns {boolean|number}
	  *
	  * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
	  */
		var evalCSS = function () {

			var regLength = /^([\d\.]+)(em|vw|px)$/;
			var replace = function replace() {
				var args = arguments,
				    index = 0,
				    string = args[0];
				while (++index in args) {
					string = string.replace(args[index], args[++index]);
				}
				return string;
			};

			var buildStr = memoize(function (css) {

				return "return " + replace((css || "").toLowerCase(),
				// interpret `and`
				/\band\b/g, "&&",

				// interpret `,`
				/,/g, "||",

				// interpret `min-` as >=
				/min-([a-z-\s]+):/g, "e.$1>=",

				// interpret `max-` as <=
				/max-([a-z-\s]+):/g, "e.$1<=",

				//calc value
				/calc([^)]+)/g, "($1)",

				// interpret css values
				/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
				//make eval less evil
				/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, "") + ";";
			});

			return function (css, length) {
				var parsedLength;
				if (!(css in cssCache)) {
					cssCache[css] = false;
					if (length && (parsedLength = css.match(regLength))) {
						cssCache[css] = parsedLength[1] * units[parsedLength[2]];
					} else {
						/*jshint evil:true */
						try {
							cssCache[css] = new Function("e", buildStr(css))(units);
						} catch (e) {}
						/*jshint evil:false */
					}
				}
				return cssCache[css];
			};
		}();

		var setResolution = function setResolution(candidate, sizesattr) {
			if (candidate.w) {
				// h = means height: || descriptor.type === 'h' do not handle yet...
				candidate.cWidth = pf.calcListLength(sizesattr || "100vw");
				candidate.res = candidate.w / candidate.cWidth;
			} else {
				candidate.res = candidate.d;
			}
			return candidate;
		};

		/**
	  *
	  * @param opt
	  */
		var picturefill = function picturefill(opt) {

			if (!isSupportTestReady) {
				return;
			}

			var elements, i, plen;

			var options = opt || {};

			if (options.elements && options.elements.nodeType === 1) {
				if (options.elements.nodeName.toUpperCase() === "IMG") {
					options.elements = [options.elements];
				} else {
					options.context = options.elements;
					options.elements = null;
				}
			}

			elements = options.elements || pf.qsa(options.context || document, options.reevaluate || options.reselect ? pf.sel : pf.selShort);

			if (plen = elements.length) {

				pf.setupRun(options);
				alreadyRun = true;

				// Loop through all elements
				for (i = 0; i < plen; i++) {
					pf.fillImg(elements[i], options);
				}

				pf.teardownRun(options);
			}
		};

		/**
	  * outputs a warning for the developer
	  * @param {message}
	  * @type {Function}
	  */
		warn = window.console && console.warn ? function (message) {
			console.warn(message);
		} : noop;

		if (!(curSrcProp in image)) {
			curSrcProp = "src";
		}

		// Add support for standard mime types.
		types["image/jpeg"] = true;
		types["image/gif"] = true;
		types["image/png"] = true;

		function detectTypeSupport(type, typeUri) {
			// based on Modernizr's lossless img-webp test
			// note: asynchronous
			var image = new window.Image();
			image.onerror = function () {
				types[type] = false;
				picturefill();
			};
			image.onload = function () {
				types[type] = image.width === 1;
				picturefill();
			};
			image.src = typeUri;
			return "pending";
		}

		// test svg support
		types["image/svg+xml"] = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");

		/**
	  * updates the internal vW property with the current viewport width in px
	  */
		function updateMetrics() {

			isVwDirty = false;
			DPR = window.devicePixelRatio;
			cssCache = {};
			sizeLengthCache = {};

			pf.DPR = DPR || 1;

			units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
			units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

			units.vw = units.width / 100;
			units.vh = units.height / 100;

			evalId = [units.height, units.width, DPR].join("-");

			units.em = pf.getEmValue();
			units.rem = units.em;
		}

		function chooseLowRes(lowerValue, higherValue, dprValue, isCached) {
			var bonusFactor, tooMuch, bonus, meanDensity;

			//experimental
			if (cfg.algorithm === "saveData") {
				if (lowerValue > 2.7) {
					meanDensity = dprValue + 1;
				} else {
					tooMuch = higherValue - dprValue;
					bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

					bonus = tooMuch * bonusFactor;

					if (isCached) {
						bonus += 0.1 * bonusFactor;
					}

					meanDensity = lowerValue + bonus;
				}
			} else {
				meanDensity = dprValue > 1 ? Math.sqrt(lowerValue * higherValue) : lowerValue;
			}

			return meanDensity > dprValue;
		}

		function applyBestCandidate(img) {
			var srcSetCandidates;
			var matchingSet = pf.getSet(img);
			var evaluated = false;
			if (matchingSet !== "pending") {
				evaluated = evalId;
				if (matchingSet) {
					srcSetCandidates = pf.setRes(matchingSet);
					pf.applySetCandidate(srcSetCandidates, img);
				}
			}
			img[pf.ns].evaled = evaluated;
		}

		function ascendingSort(a, b) {
			return a.res - b.res;
		}

		function setSrcToCur(img, src, set) {
			var candidate;
			if (!set && src) {
				set = img[pf.ns].sets;
				set = set && set[set.length - 1];
			}

			candidate = getCandidateForSrc(src, set);

			if (candidate) {
				src = pf.makeUrl(src);
				img[pf.ns].curSrc = src;
				img[pf.ns].curCan = candidate;

				if (!candidate.res) {
					setResolution(candidate, candidate.set.sizes);
				}
			}
			return candidate;
		}

		function getCandidateForSrc(src, set) {
			var i, candidate, candidates;
			if (src && set) {
				candidates = pf.parseSet(set);
				src = pf.makeUrl(src);
				for (i = 0; i < candidates.length; i++) {
					if (src === pf.makeUrl(candidates[i].url)) {
						candidate = candidates[i];
						break;
					}
				}
			}
			return candidate;
		}

		function getAllSourceElements(picture, candidates) {
			var i, len, source, srcset;

			// SPEC mismatch intended for size and perf:
			// actually only source elements preceding the img should be used
			// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
			var sources = picture.getElementsByTagName("source");

			for (i = 0, len = sources.length; i < len; i++) {
				source = sources[i];
				source[pf.ns] = true;
				srcset = source.getAttribute("srcset");

				// if source does not have a srcset attribute, skip
				if (srcset) {
					candidates.push({
						srcset: srcset,
						media: source.getAttribute("media"),
						type: source.getAttribute("type"),
						sizes: source.getAttribute("sizes")
					});
				}
			}
		}

		/**
	  * Srcset Parser
	  * By Alex Bell |  MIT License
	  *
	  * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
	  *
	  * Based super duper closely on the reference algorithm at:
	  * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
	  */

		// 1. Let input be the value passed to this algorithm.
		// (TO-DO : Explain what "set" argument is here. Maybe choose a more
		// descriptive & more searchable name.  Since passing the "set" in really has
		// nothing to do with parsing proper, I would prefer this assignment eventually
		// go in an external fn.)
		function parseSrcset(input, set) {

			function collectCharacters(regEx) {
				var chars,
				    match = regEx.exec(input.substring(pos));
				if (match) {
					chars = match[0];
					pos += chars.length;
					return chars;
				}
			}

			var inputLength = input.length,
			    url,
			    descriptors,
			    currentDescriptor,
			    state,
			    c,


			// 2. Let position be a pointer into input, initially pointing at the start
			//    of the string.
			pos = 0,


			// 3. Let candidates be an initially empty source set.
			candidates = [];

			/**
	  * Adds descriptor properties to a candidate, pushes to the candidates array
	  * @return undefined
	  */
			// (Declared outside of the while loop so that it's only created once.
			// (This fn is defined before it is used, in order to pass JSHINT.
			// Unfortunately this breaks the sequencing of the spec comments. :/ )
			function parseDescriptors() {

				// 9. Descriptor parser: Let error be no.
				var pError = false,


				// 10. Let width be absent.
				// 11. Let density be absent.
				// 12. Let future-compat-h be absent. (We're implementing it now as h)
				w,
				    d,
				    h,
				    i,
				    candidate = {},
				    desc,
				    lastChar,
				    value,
				    intVal,
				    floatVal;

				// 13. For each descriptor in descriptors, run the appropriate set of steps
				// from the following list:
				for (i = 0; i < descriptors.length; i++) {
					desc = descriptors[i];

					lastChar = desc[desc.length - 1];
					value = desc.substring(0, desc.length - 1);
					intVal = parseInt(value, 10);
					floatVal = parseFloat(value);

					// If the descriptor consists of a valid non-negative integer followed by
					// a U+0077 LATIN SMALL LETTER W character
					if (regexNonNegativeInteger.test(value) && lastChar === "w") {

						// If width and density are not both absent, then let error be yes.
						if (w || d) {
							pError = true;
						}

						// Apply the rules for parsing non-negative integers to the descriptor.
						// If the result is zero, let error be yes.
						// Otherwise, let width be the result.
						if (intVal === 0) {
							pError = true;
						} else {
							w = intVal;
						}

						// If the descriptor consists of a valid floating-point number followed by
						// a U+0078 LATIN SMALL LETTER X character
					} else if (regexFloatingPoint.test(value) && lastChar === "x") {

							// If width, density and future-compat-h are not all absent, then let error
							// be yes.
							if (w || d || h) {
								pError = true;
							}

							// Apply the rules for parsing floating-point number values to the descriptor.
							// If the result is less than zero, let error be yes. Otherwise, let density
							// be the result.
							if (floatVal < 0) {
								pError = true;
							} else {
								d = floatVal;
							}

							// If the descriptor consists of a valid non-negative integer followed by
							// a U+0068 LATIN SMALL LETTER H character
						} else if (regexNonNegativeInteger.test(value) && lastChar === "h") {

								// If height and density are not both absent, then let error be yes.
								if (h || d) {
									pError = true;
								}

								// Apply the rules for parsing non-negative integers to the descriptor.
								// If the result is zero, let error be yes. Otherwise, let future-compat-h
								// be the result.
								if (intVal === 0) {
									pError = true;
								} else {
									h = intVal;
								}

								// Anything else, Let error be yes.
							} else {
									pError = true;
								}
				} // (close step 13 for loop)

				// 15. If error is still no, then append a new image source to candidates whose
				// URL is url, associated with a width width if not absent and a pixel
				// density density if not absent. Otherwise, there is a parse error.
				if (!pError) {
					candidate.url = url;

					if (w) {
						candidate.w = w;
					}
					if (d) {
						candidate.d = d;
					}
					if (h) {
						candidate.h = h;
					}
					if (!h && !d && !w) {
						candidate.d = 1;
					}
					if (candidate.d === 1) {
						set.has1x = true;
					}
					candidate.set = set;

					candidates.push(candidate);
				}
			} // (close parseDescriptors fn)

			/**
	  * Tokenizes descriptor properties prior to parsing
	  * Returns undefined.
	  * (Again, this fn is defined before it is used, in order to pass JSHINT.
	  * Unfortunately this breaks the logical sequencing of the spec comments. :/ )
	  */
			function tokenize() {

				// 8.1. Descriptor tokeniser: Skip whitespace
				collectCharacters(regexLeadingSpaces);

				// 8.2. Let current descriptor be the empty string.
				currentDescriptor = "";

				// 8.3. Let state be in descriptor.
				state = "in descriptor";

				while (true) {

					// 8.4. Let c be the character at position.
					c = input.charAt(pos);

					//  Do the following depending on the value of state.
					//  For the purpose of this step, "EOF" is a special character representing
					//  that position is past the end of input.

					// In descriptor
					if (state === "in descriptor") {
						// Do the following, depending on the value of c:

						// Space character
						// If current descriptor is not empty, append current descriptor to
						// descriptors and let current descriptor be the empty string.
						// Set state to after descriptor.
						if (isSpace(c)) {
							if (currentDescriptor) {
								descriptors.push(currentDescriptor);
								currentDescriptor = "";
								state = "after descriptor";
							}

							// U+002C COMMA (,)
							// Advance position to the next character in input. If current descriptor
							// is not empty, append current descriptor to descriptors. Jump to the step
							// labeled descriptor parser.
						} else if (c === ",") {
								pos += 1;
								if (currentDescriptor) {
									descriptors.push(currentDescriptor);
								}
								parseDescriptors();
								return;

								// U+0028 LEFT PARENTHESIS (()
								// Append c to current descriptor. Set state to in parens.
							} else if (c === "(") {
									currentDescriptor = currentDescriptor + c;
									state = "in parens";

									// EOF
									// If current descriptor is not empty, append current descriptor to
									// descriptors. Jump to the step labeled descriptor parser.
								} else if (c === "") {
										if (currentDescriptor) {
											descriptors.push(currentDescriptor);
										}
										parseDescriptors();
										return;

										// Anything else
										// Append c to current descriptor.
									} else {
											currentDescriptor = currentDescriptor + c;
										}
						// (end "in descriptor"

						// In parens
					} else if (state === "in parens") {

							// U+0029 RIGHT PARENTHESIS ())
							// Append c to current descriptor. Set state to in descriptor.
							if (c === ")") {
								currentDescriptor = currentDescriptor + c;
								state = "in descriptor";

								// EOF
								// Append current descriptor to descriptors. Jump to the step labeled
								// descriptor parser.
							} else if (c === "") {
									descriptors.push(currentDescriptor);
									parseDescriptors();
									return;

									// Anything else
									// Append c to current descriptor.
								} else {
										currentDescriptor = currentDescriptor + c;
									}

							// After descriptor
						} else if (state === "after descriptor") {

								// Do the following, depending on the value of c:
								// Space character: Stay in this state.
								if (isSpace(c)) {

									// EOF: Jump to the step labeled descriptor parser.
								} else if (c === "") {
										parseDescriptors();
										return;

										// Anything else
										// Set state to in descriptor. Set position to the previous character in input.
									} else {
											state = "in descriptor";
											pos -= 1;
										}
							}

					// Advance position to the next character in input.
					pos += 1;

					// Repeat this step.
				} // (close while true loop)
			}

			// 4. Splitting loop: Collect a sequence of characters that are space
			//    characters or U+002C COMMA characters. If any U+002C COMMA characters
			//    were collected, that is a parse error.
			while (true) {
				collectCharacters(regexLeadingCommasOrSpaces);

				// 5. If position is past the end of input, return candidates and abort these steps.
				if (pos >= inputLength) {
					return candidates; // (we're done, this is the sole return path)
				}

				// 6. Collect a sequence of characters that are not space characters,
				//    and let that be url.
				url = collectCharacters(regexLeadingNotSpaces);

				// 7. Let descriptors be a new empty list.
				descriptors = [];

				// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
				//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
				//         more than one character, that is a parse error.
				if (url.slice(-1) === ",") {
					url = url.replace(regexTrailingCommas, "");
					// (Jump ahead to step 9 to skip tokenization and just push the candidate).
					parseDescriptors();

					//	Otherwise, follow these substeps:
				} else {
						tokenize();
					} // (close else of step 8)

				// 16. Return to the step labeled splitting loop.
			} // (Close of big while loop.)
		}

		/*
	  * Sizes Parser
	  *
	  * By Alex Bell |  MIT License
	  *
	  * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
	  *
	  * Reference algorithm at:
	  * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
	  *
	  * Most comments are copied in directly from the spec
	  * (except for comments in parens).
	  *
	  * Grammar is:
	  * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
	  * <source-size> = <media-condition> <source-size-value>
	  * <source-size-value> = <length>
	  * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
	  *
	  * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
	  * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
	  *
	  * Returns the first valid <css-length> with a media condition that evaluates to true,
	  * or "100vw" if all valid media conditions evaluate to false.
	  *
	  */

		function parseSizes(strValue) {

			// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
			// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
			// CSS allows a single optional plus or minus sign:
			// http://www.w3.org/TR/CSS2/syndata.html#numbers
			// CSS is ASCII case-insensitive:
			// http://www.w3.org/TR/CSS2/syndata.html#characters )
			// Spec allows exponential notation for <number> type:
			// http://dev.w3.org/csswg/css-values/#numbers
			var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

			// (This is a quick and lenient test. Because of optional unlimited-depth internal
			// grouping parens and strict spacing rules, this could get very complicated.)
			var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

			var i;
			var unparsedSizesList;
			var unparsedSizesListLength;
			var unparsedSize;
			var lastComponentValue;
			var size;

			// UTILITY FUNCTIONS

			//  (Toy CSS parser. The goals here are:
			//  1) expansive test coverage without the weight of a full CSS parser.
			//  2) Avoiding regex wherever convenient.
			//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
			//  Returns an array of arrays.)
			function parseComponentValues(str) {
				var chrctr;
				var component = "";
				var componentArray = [];
				var listArray = [];
				var parenDepth = 0;
				var pos = 0;
				var inComment = false;

				function pushComponent() {
					if (component) {
						componentArray.push(component);
						component = "";
					}
				}

				function pushComponentArray() {
					if (componentArray[0]) {
						listArray.push(componentArray);
						componentArray = [];
					}
				}

				// (Loop forwards from the beginning of the string.)
				while (true) {
					chrctr = str.charAt(pos);

					if (chrctr === "") {
						// ( End of string reached.)
						pushComponent();
						pushComponentArray();
						return listArray;
					} else if (inComment) {
						if (chrctr === "*" && str[pos + 1] === "/") {
							// (At end of a comment.)
							inComment = false;
							pos += 2;
							pushComponent();
							continue;
						} else {
							pos += 1; // (Skip all characters inside comments.)
							continue;
						}
					} else if (isSpace(chrctr)) {
						// (If previous character in loop was also a space, or if
						// at the beginning of the string, do not add space char to
						// component.)
						if (str.charAt(pos - 1) && isSpace(str.charAt(pos - 1)) || !component) {
							pos += 1;
							continue;
						} else if (parenDepth === 0) {
							pushComponent();
							pos += 1;
							continue;
						} else {
							// (Replace any space character with a plain space for legibility.)
							chrctr = " ";
						}
					} else if (chrctr === "(") {
						parenDepth += 1;
					} else if (chrctr === ")") {
						parenDepth -= 1;
					} else if (chrctr === ",") {
						pushComponent();
						pushComponentArray();
						pos += 1;
						continue;
					} else if (chrctr === "/" && str.charAt(pos + 1) === "*") {
						inComment = true;
						pos += 2;
						continue;
					}

					component = component + chrctr;
					pos += 1;
				}
			}

			function isValidNonNegativeSourceSizeValue(s) {
				if (regexCssLengthWithUnits.test(s) && parseFloat(s) >= 0) {
					return true;
				}
				if (regexCssCalc.test(s)) {
					return true;
				}
				// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
				// "-0 is equivalent to 0 and is not a negative number." which means that
				// unitless zero and unitless negative zero must be accepted as special cases.)
				if (s === "0" || s === "-0" || s === "+0") {
					return true;
				}
				return false;
			}

			// When asked to parse a sizes attribute from an element, parse a
			// comma-separated list of component values from the value of the element's
			// sizes attribute (or the empty string, if the attribute is absent), and let
			// unparsed sizes list be the result.
			// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

			unparsedSizesList = parseComponentValues(strValue);
			unparsedSizesListLength = unparsedSizesList.length;

			// For each unparsed size in unparsed sizes list:
			for (i = 0; i < unparsedSizesListLength; i++) {
				unparsedSize = unparsedSizesList[i];

				// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
				// ( parseComponentValues() already omits spaces outside of parens. )

				// If unparsed size is now empty, that is a parse error; continue to the next
				// iteration of this algorithm.
				// ( parseComponentValues() won't push an empty array. )

				// 2. If the last component value in unparsed size is a valid non-negative
				// <source-size-value>, let size be its value and remove the component value
				// from unparsed size. Any CSS function other than the calc() function is
				// invalid. Otherwise, there is a parse error; continue to the next iteration
				// of this algorithm.
				// http://dev.w3.org/csswg/css-syntax/#parse-component-value
				lastComponentValue = unparsedSize[unparsedSize.length - 1];

				if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
					size = lastComponentValue;
					unparsedSize.pop();
				} else {
					continue;
				}

				// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
				// size. If unparsed size is now empty, return size and exit this algorithm.
				// If this was not the last item in unparsed sizes list, that is a parse error.
				if (unparsedSize.length === 0) {
					return size;
				}

				// 4. Parse the remaining component values in unparsed size as a
				// <media-condition>. If it does not parse correctly, or it does parse
				// correctly but the <media-condition> evaluates to false, continue to the
				// next iteration of this algorithm.
				// (Parsing all possible compound media conditions in JS is heavy, complicated,
				// and the payoff is unclear. Is there ever an situation where the
				// media condition parses incorrectly but still somehow evaluates to true?
				// Can we just rely on the browser/polyfill to do it?)
				unparsedSize = unparsedSize.join(" ");
				if (!pf.matchesMedia(unparsedSize)) {
					continue;
				}

				// 5. Return size and exit this algorithm.
				return size;
			}

			// If the above algorithm exhausts unparsed sizes list without returning a
			// size value, return 100vw.
			return "100vw";
		}

		// namespace
		pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

		// srcset support test
		pf.supSrcset = "srcset" in image;
		pf.supSizes = "sizes" in image;
		pf.supPicture = !!window.HTMLPictureElement;

		// UC browser does claim to support srcset and picture, but not sizes,
		// this extended test reveals the browser does support nothing
		if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
			(function (image2) {
				image.srcset = "data:,a";
				image2.src = "data:,a";
				pf.supSrcset = image.complete === image2.complete;
				pf.supPicture = pf.supSrcset && pf.supPicture;
			})(document.createElement("img"));
		}

		// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
		if (pf.supSrcset && !pf.supSizes) {

			(function () {
				var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
				var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
				var img = document.createElement("img");
				var test = function test() {
					var width = img.width;

					if (width === 2) {
						pf.supSizes = true;
					}

					alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

					isSupportTestReady = true;
					// force async
					setTimeout(picturefill);
				};

				img.onload = test;
				img.onerror = test;
				img.setAttribute("sizes", "9px");

				img.srcset = width1 + " 1w," + width2 + " 9w";
				img.src = width1;
			})();
		} else {
			isSupportTestReady = true;
		}

		// using pf.qsa instead of dom traversing does scale much better,
		// especially on sites mixing responsive and non-responsive images
		pf.selShort = "picture>img,img[srcset]";
		pf.sel = pf.selShort;
		pf.cfg = cfg;

		/**
	  * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
	  */
		pf.DPR = DPR || 1;
		pf.u = units;

		// container of supported mime types that one might need to qualify before using
		pf.types = types;

		pf.setSize = noop;

		/**
	  * Gets a string and returns the absolute URL
	  * @param src
	  * @returns {String} absolute URL
	  */

		pf.makeUrl = memoize(function (src) {
			anchor.href = src;
			return anchor.href;
		});

		/**
	  * Gets a DOM element or document and a selctor and returns the found matches
	  * Can be extended with jQuery/Sizzle for IE7 support
	  * @param context
	  * @param sel
	  * @returns {NodeList|Array}
	  */
		pf.qsa = function (context, sel) {
			return "querySelector" in context ? context.querySelectorAll(sel) : [];
		};

		/**
	  * Shortcut method for matchMedia ( for easy overriding in tests )
	  * wether native or pf.mMQ is used will be decided lazy on first call
	  * @returns {boolean}
	  */
		pf.matchesMedia = function () {
			if (window.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches) {
				pf.matchesMedia = function (media) {
					return !media || matchMedia(media).matches;
				};
			} else {
				pf.matchesMedia = pf.mMQ;
			}

			return pf.matchesMedia.apply(this, arguments);
		};

		/**
	  * A simplified matchMedia implementation for IE8 and IE9
	  * handles only min-width/max-width with px or em values
	  * @param media
	  * @returns {boolean}
	  */
		pf.mMQ = function (media) {
			return media ? evalCSS(media) : true;
		};

		/**
	  * Returns the calculated length in css pixel from the given sourceSizeValue
	  * http://dev.w3.org/csswg/css-values-3/#length-value
	  * intended Spec mismatches:
	  * * Does not check for invalid use of CSS functions
	  * * Does handle a computed length of 0 the same as a negative and therefore invalid value
	  * @param sourceSizeValue
	  * @returns {Number}
	  */
		pf.calcLength = function (sourceSizeValue) {

			var value = evalCSS(sourceSizeValue, true) || false;
			if (value < 0) {
				value = false;
			}

			return value;
		};

		/**
	  * Takes a type string and checks if its supported
	  */

		pf.supportsType = function (type) {
			return type ? types[type] : true;
		};

		/**
	  * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
	  * @param sourceSizeStr
	  * @returns {*}
	  */
		pf.parseSize = memoize(function (sourceSizeStr) {
			var match = (sourceSizeStr || "").match(regSize);
			return {
				media: match && match[1],
				length: match && match[2]
			};
		});

		pf.parseSet = function (set) {
			if (!set.cands) {
				set.cands = parseSrcset(set.srcset, set);
			}
			return set.cands;
		};

		/**
	  * returns 1em in css px for html/body default size
	  * function taken from respondjs
	  * @returns {*|number}
	  */
		pf.getEmValue = function () {
			var body;
			if (!eminpx && (body = document.body)) {
				var div = document.createElement("div"),
				    originalHTMLCSS = docElem.style.cssText,
				    originalBodyCSS = body.style.cssText;

				div.style.cssText = baseStyle;

				// 1em in a media query is the value of the default font size of the browser
				// reset docElem and body to ensure the correct value is returned
				docElem.style.cssText = fsCss;
				body.style.cssText = fsCss;

				body.appendChild(div);
				eminpx = div.offsetWidth;
				body.removeChild(div);

				//also update eminpx before returning
				eminpx = parseFloat(eminpx, 10);

				// restore the original values
				docElem.style.cssText = originalHTMLCSS;
				body.style.cssText = originalBodyCSS;
			}
			return eminpx || 16;
		};

		/**
	  * Takes a string of sizes and returns the width in pixels as a number
	  */
		pf.calcListLength = function (sourceSizeListStr) {
			// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
			//
			//                           or (min-width:30em) calc(30% - 15px)
			if (!(sourceSizeListStr in sizeLengthCache) || cfg.uT) {
				var winningLength = pf.calcLength(parseSizes(sourceSizeListStr));

				sizeLengthCache[sourceSizeListStr] = !winningLength ? units.width : winningLength;
			}

			return sizeLengthCache[sourceSizeListStr];
		};

		/**
	  * Takes a candidate object with a srcset property in the form of url/
	  * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
	  *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
	  *     "images/pic-small.png"
	  * Get an array of image candidates in the form of
	  *      {url: "/foo/bar.png", resolution: 1}
	  * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
	  * If sizes is specified, res is calculated
	  */
		pf.setRes = function (set) {
			var candidates;
			if (set) {

				candidates = pf.parseSet(set);

				for (var i = 0, len = candidates.length; i < len; i++) {
					setResolution(candidates[i], set.sizes);
				}
			}
			return candidates;
		};

		pf.setRes.res = setResolution;

		pf.applySetCandidate = function (candidates, img) {
			if (!candidates.length) {
				return;
			}
			var candidate, i, j, length, bestCandidate, curSrc, curCan, candidateSrc, abortCurSrc;

			var imageData = img[pf.ns];
			var dpr = pf.DPR;

			curSrc = imageData.curSrc || img[curSrcProp];

			curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

			// if we have a current source, we might either become lazy or give this source some advantage
			if (curCan && curCan.set === candidates[0].set) {

				// if browser can abort image request and the image has a higher pixel density than needed
				// and this image isn't downloaded yet, we skip next part and try to save bandwidth
				abortCurSrc = supportAbort && !img.complete && curCan.res - 0.1 > dpr;

				if (!abortCurSrc) {
					curCan.cached = true;

					// if current candidate is "best", "better" or "okay",
					// set it to bestCandidate
					if (curCan.res >= dpr) {
						bestCandidate = curCan;
					}
				}
			}

			if (!bestCandidate) {

				candidates.sort(ascendingSort);

				length = candidates.length;
				bestCandidate = candidates[length - 1];

				for (i = 0; i < length; i++) {
					candidate = candidates[i];
					if (candidate.res >= dpr) {
						j = i - 1;

						// we have found the perfect candidate,
						// but let's improve this a little bit with some assumptions ;-)
						if (candidates[j] && (abortCurSrc || curSrc !== pf.makeUrl(candidate.url)) && chooseLowRes(candidates[j].res, candidate.res, dpr, candidates[j].cached)) {

							bestCandidate = candidates[j];
						} else {
							bestCandidate = candidate;
						}
						break;
					}
				}
			}

			if (bestCandidate) {

				candidateSrc = pf.makeUrl(bestCandidate.url);

				imageData.curSrc = candidateSrc;
				imageData.curCan = bestCandidate;

				if (candidateSrc !== curSrc) {
					pf.setSrc(img, bestCandidate);
				}
				pf.setSize(img);
			}
		};

		pf.setSrc = function (img, bestCandidate) {
			var origWidth;
			img.src = bestCandidate.url;

			// although this is a specific Safari issue, we don't want to take too much different code paths
			if (bestCandidate.set.type === "image/svg+xml") {
				origWidth = img.style.width;
				img.style.width = img.offsetWidth + 1 + "px";

				// next line only should trigger a repaint
				// if... is only done to trick dead code removal
				if (img.offsetWidth + 1) {
					img.style.width = origWidth;
				}
			}
		};

		pf.getSet = function (img) {
			var i, set, supportsType;
			var match = false;
			var sets = img[pf.ns].sets;

			for (i = 0; i < sets.length && !match; i++) {
				set = sets[i];

				if (!set.srcset || !pf.matchesMedia(set.media) || !(supportsType = pf.supportsType(set.type))) {
					continue;
				}

				if (supportsType === "pending") {
					set = supportsType;
				}

				match = set;
				break;
			}

			return match;
		};

		pf.parseSets = function (element, parent, options) {
			var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

			var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
			var imageData = element[pf.ns];

			if (imageData.src === undefined || options.src) {
				imageData.src = getImgAttr.call(element, "src");
				if (imageData.src) {
					setImgAttr.call(element, srcAttr, imageData.src);
				} else {
					removeImgAttr.call(element, srcAttr);
				}
			}

			if (imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset) {
				srcsetAttribute = getImgAttr.call(element, "srcset");
				imageData.srcset = srcsetAttribute;
				srcsetParsed = true;
			}

			imageData.sets = [];

			if (hasPicture) {
				imageData.pic = true;
				getAllSourceElements(parent, imageData.sets);
			}

			if (imageData.srcset) {
				imageSet = {
					srcset: imageData.srcset,
					sizes: getImgAttr.call(element, "sizes")
				};

				imageData.sets.push(imageSet);

				isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

				// add normal src as candidate, if source has no w descriptor
				if (!isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x) {
					imageSet.srcset += ", " + imageData.src;
					imageSet.cands.push({
						url: imageData.src,
						d: 1,
						set: imageSet
					});
				}
			} else if (imageData.src) {
				imageData.sets.push({
					srcset: imageData.src,
					sizes: null
				});
			}

			imageData.curCan = null;
			imageData.curSrc = undefined;

			// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
			// or has a w descriptor (and does not support sizes) set support to false to evaluate
			imageData.supported = !(hasPicture || imageSet && !pf.supSrcset || isWDescripor && !pf.supSizes);

			if (srcsetParsed && pf.supSrcset && !imageData.supported) {
				if (srcsetAttribute) {
					setImgAttr.call(element, srcsetAttr, srcsetAttribute);
					element.srcset = "";
				} else {
					removeImgAttr.call(element, srcsetAttr);
				}
			}

			if (imageData.supported && !imageData.srcset && (!imageData.src && element.src || element.src !== pf.makeUrl(imageData.src))) {
				if (imageData.src === null) {
					element.removeAttribute("src");
				} else {
					element.src = imageData.src;
				}
			}

			imageData.parsed = true;
		};

		pf.fillImg = function (element, options) {
			var imageData;
			var extreme = options.reselect || options.reevaluate;

			// expando for caching data on the img
			if (!element[pf.ns]) {
				element[pf.ns] = {};
			}

			imageData = element[pf.ns];

			// if the element has already been evaluated, skip it
			// unless `options.reevaluate` is set to true ( this, for example,
			// is set to true when running `picturefill` on `resize` ).
			if (!extreme && imageData.evaled === evalId) {
				return;
			}

			if (!imageData.parsed || options.reevaluate) {
				pf.parseSets(element, element.parentNode, options);
			}

			if (!imageData.supported) {
				applyBestCandidate(element);
			} else {
				imageData.evaled = evalId;
			}
		};

		pf.setupRun = function () {
			if (!alreadyRun || isVwDirty || DPR !== window.devicePixelRatio) {
				updateMetrics();
			}
		};

		// If picture is supported, well, that's awesome.
		if (pf.supPicture) {
			picturefill = noop;
			pf.fillImg = noop;
		} else {

			// Set up picture polyfill by polling the document
			(function () {
				var isDomReady;
				var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

				var run = function run() {
					var readyState = document.readyState || "";

					timerId = setTimeout(run, readyState === "loading" ? 200 : 999);
					if (document.body) {
						pf.fillImgs();
						isDomReady = isDomReady || regReady.test(readyState);
						if (isDomReady) {
							clearTimeout(timerId);
						}
					}
				};

				var timerId = setTimeout(run, document.body ? 9 : 99);

				// Also attach picturefill on resize and readystatechange
				// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
				var debounce = function debounce(func, wait) {
					var timeout, timestamp;
					var later = function later() {
						var last = new Date() - timestamp;

						if (last < wait) {
							timeout = setTimeout(later, wait - last);
						} else {
							timeout = null;
							func();
						}
					};

					return function () {
						timestamp = new Date();

						if (!timeout) {
							timeout = setTimeout(later, wait);
						}
					};
				};
				var lastClientWidth = docElem.clientHeight;
				var onResize = function onResize() {
					isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
					lastClientWidth = docElem.clientHeight;
					if (isVwDirty) {
						pf.fillImgs();
					}
				};

				on(window, "resize", debounce(onResize, 99));
				on(document, "readystatechange", run);
			})();
		}

		pf.picturefill = picturefill;
		//use this internally for easy monkey patching/performance testing
		pf.fillImgs = picturefill;
		pf.teardownRun = noop;

		/* expose methods for testing */
		picturefill._ = pf;

		window.picturefillCFG = {
			pf: pf,
			push: function push(args) {
				var name = args.shift();
				if (typeof pf[name] === "function") {
					pf[name].apply(pf, args);
				} else {
					cfg[name] = args[0];
					if (alreadyRun) {
						pf.fillImgs({ reselect: true });
					}
				}
			}
		};

		while (setOptions && setOptions.length) {
			window.picturefillCFG.push(setOptions.shift());
		}

		/* expose picturefill */
		window.picturefill = picturefill;

		/* expose picturefill */
		if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
			// CommonJS, just export
			module.exports = picturefill;
		} else if (true) {
			// AMD support
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return picturefill;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}

		// IE8 evals this sync, so it must be the last thing we do
		if (!pf.supPicture) {
			types["image/webp"] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
		}
	})(window, document);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!function (t) {
	  "use strict";
	  var s = function s(_s, e) {
	    this.el = t(_s), this.options = t.extend({}, t.fn.typed.defaults, e), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build();
	  };s.prototype = { constructor: s, init: function init() {
	      var t = this;t.timeout = setTimeout(function () {
	        for (var s = 0; s < t.strings.length; ++s) {
	          t.sequence[s] = s;
	        }t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
	      }, t.startDelay);
	    }, build: function build() {
	      var s = this;if (this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
	        s.strings = [], this.stringsElement.hide();var e = this.stringsElement.find("p");t.each(e, function (e, i) {
	          s.strings.push(t(i).html());
	        });
	      }this.init();
	    }, typewrite: function typewrite(t, s) {
	      if (this.stop !== !0) {
	        var e = Math.round(70 * Math.random()) + this.typeSpeed,
	            i = this;i.timeout = setTimeout(function () {
	          var e = 0,
	              r = t.substr(s);if ("^" === r.charAt(0)) {
	            var o = 1;/^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, e = parseInt(r)), t = t.substring(0, s) + t.substring(s + o);
	          }if ("html" === i.contentType) {
	            var n = t.substr(s).charAt(0);if ("<" === n || "&" === n) {
	              var a = "",
	                  h = "";for (h = "<" === n ? ">" : ";"; t.substr(s).charAt(0) !== h;) {
	                a += t.substr(s).charAt(0), s++;
	              }s++, a += h;
	            }
	          }i.timeout = setTimeout(function () {
	            if (s === t.length) {
	              if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;i.timeout = setTimeout(function () {
	                i.backspace(t, s);
	              }, i.backDelay);
	            } else {
	              0 === s && i.options.preStringTyped(i.arrayPos);var e = t.substr(0, s + 1);i.attr ? i.el.attr(i.attr, e) : i.isInput ? i.el.val(e) : "html" === i.contentType ? i.el.html(e) : i.el.text(e), s++, i.typewrite(t, s);
	            }
	          }, e);
	        }, e);
	      }
	    }, backspace: function backspace(t, s) {
	      if (this.stop !== !0) {
	        var e = Math.round(70 * Math.random()) + this.backSpeed,
	            i = this;i.timeout = setTimeout(function () {
	          if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
	            for (var e = ""; "<" !== t.substr(s).charAt(0);) {
	              e -= t.substr(s).charAt(0), s--;
	            }s--, e += "<";
	          }var r = t.substr(0, s);i.attr ? i.el.attr(i.attr, r) : i.isInput ? i.el.val(r) : "html" === i.contentType ? i.el.html(r) : i.el.text(r), s > i.stopNum ? (s--, i.backspace(t, s)) : s <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], s));
	        }, e);
	      }
	    }, shuffleArray: function shuffleArray(t) {
	      var s,
	          e,
	          i = t.length;if (i) for (; --i;) {
	        e = Math.floor(Math.random() * (i + 1)), s = t[e], t[e] = t[i], t[i] = s;
	      }return t;
	    }, reset: function reset() {
	      var t = this;clearInterval(t.timeout);var s = this.el.attr("id");this.el.after('<span id="' + s + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), t.options.resetCallback();
	    } }, t.fn.typed = function (e) {
	    return this.each(function () {
	      var i = t(this),
	          r = i.data("typed"),
	          o = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;r || i.data("typed", r = new s(this, o)), "string" == typeof e && r[e]();
	    });
	  }, t.fn.typed.defaults = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, shuffle: !1, backDelay: 500, loop: !1, loopCount: !1, showCursor: !0, cursorChar: "|", attr: null, contentType: "html", callback: function callback() {}, preStringTyped: function preStringTyped() {}, onStringTyped: function onStringTyped() {}, resetCallback: function resetCallback() {} };
	}(__webpack_provided_window_dot_jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * jQuery Raty - A Star Rating Plugin
	 *
	 * The MIT License
	 *
	 * @author  : Washington Botelho
	 * @doc     : http://wbotelhos.com/raty
	 * @version : 2.7.0
	 *
	 */

	;
	(function ($) {
	  'use strict';

	  var methods = {
	    init: function init(options) {
	      return this.each(function () {
	        this.self = $(this);

	        methods.destroy.call(this.self);

	        this.opt = $.extend(true, {}, $.fn.raty.defaults, options);

	        methods._adjustCallback.call(this);
	        methods._adjustNumber.call(this);
	        methods._adjustHints.call(this);

	        this.opt.score = methods._adjustedScore.call(this, this.opt.score);

	        if (this.opt.starType !== 'img') {
	          methods._adjustStarType.call(this);
	        }

	        methods._adjustPath.call(this);
	        methods._createStars.call(this);

	        if (this.opt.cancel) {
	          methods._createCancel.call(this);
	        }

	        if (this.opt.precision) {
	          methods._adjustPrecision.call(this);
	        }

	        methods._createScore.call(this);
	        methods._apply.call(this, this.opt.score);
	        methods._setTitle.call(this, this.opt.score);
	        methods._target.call(this, this.opt.score);

	        if (this.opt.readOnly) {
	          methods._lock.call(this);
	        } else {
	          this.style.cursor = 'pointer';

	          methods._binds.call(this);
	        }
	      });
	    },

	    _adjustCallback: function _adjustCallback() {
	      var options = ['number', 'readOnly', 'score', 'scoreName', 'target', 'path'];

	      for (var i = 0; i < options.length; i++) {
	        if (typeof this.opt[options[i]] === 'function') {
	          this.opt[options[i]] = this.opt[options[i]].call(this);
	        }
	      }
	    },

	    _adjustedScore: function _adjustedScore(score) {
	      if (!score) {
	        return score;
	      }

	      return methods._between(score, 0, this.opt.number);
	    },

	    _adjustHints: function _adjustHints() {
	      if (!this.opt.hints) {
	        this.opt.hints = [];
	      }

	      if (!this.opt.halfShow && !this.opt.half) {
	        return;
	      }

	      var steps = this.opt.precision ? 10 : 2;

	      for (var i = 0; i < this.opt.number; i++) {
	        var group = this.opt.hints[i];

	        if (Object.prototype.toString.call(group) !== '[object Array]') {
	          group = [group];
	        }

	        this.opt.hints[i] = [];

	        for (var j = 0; j < steps; j++) {
	          var hint = group[j],
	              last = group[group.length - 1];

	          if (last === undefined) {
	            last = null;
	          }

	          this.opt.hints[i][j] = hint === undefined ? last : hint;
	        }
	      }
	    },

	    _adjustNumber: function _adjustNumber() {
	      this.opt.number = methods._between(this.opt.number, 1, this.opt.numberMax);
	    },

	    _adjustPath: function _adjustPath() {
	      this.opt.path = this.opt.path || '';

	      if (this.opt.path && this.opt.path.charAt(this.opt.path.length - 1) !== '/') {
	        this.opt.path += '/';
	      }
	    },

	    _adjustPrecision: function _adjustPrecision() {
	      this.opt.half = true;
	    },

	    _adjustStarType: function _adjustStarType() {
	      var replaces = ['cancelOff', 'cancelOn', 'starHalf', 'starOff', 'starOn'];

	      this.opt.path = '';

	      for (var i = 0; i < replaces.length; i++) {
	        this.opt[replaces[i]] = this.opt[replaces[i]].replace('.', '-');
	      }
	    },

	    _apply: function _apply(score) {
	      methods._fill.call(this, score);

	      if (score) {
	        if (score > 0) {
	          this.score.val(score);
	        }

	        methods._roundStars.call(this, score);
	      }
	    },

	    _between: function _between(value, min, max) {
	      return Math.min(Math.max(parseFloat(value), min), max);
	    },

	    _binds: function _binds() {
	      if (this.cancel) {
	        methods._bindOverCancel.call(this);
	        methods._bindClickCancel.call(this);
	        methods._bindOutCancel.call(this);
	      }

	      methods._bindOver.call(this);
	      methods._bindClick.call(this);
	      methods._bindOut.call(this);
	    },

	    _bindClick: function _bindClick() {
	      var that = this;

	      that.stars.on('click.raty', function (evt) {
	        var execute = true,
	            score = that.opt.half || that.opt.precision ? that.self.data('score') : this.alt || $(this).data('alt');

	        if (that.opt.click) {
	          execute = that.opt.click.call(that, +score, evt);
	        }

	        if (execute || execute === undefined) {
	          if (that.opt.half && !that.opt.precision) {
	            score = methods._roundHalfScore.call(that, score);
	          }

	          methods._apply.call(that, score);
	        }
	      });
	    },

	    _bindClickCancel: function _bindClickCancel() {
	      var that = this;

	      that.cancel.on('click.raty', function (evt) {
	        that.score.removeAttr('value');

	        if (that.opt.click) {
	          that.opt.click.call(that, null, evt);
	        }
	      });
	    },

	    _bindOut: function _bindOut() {
	      var that = this;

	      that.self.on('mouseleave.raty', function (evt) {
	        var score = +that.score.val() || undefined;

	        methods._apply.call(that, score);
	        methods._target.call(that, score, evt);
	        methods._resetTitle.call(that);

	        if (that.opt.mouseout) {
	          that.opt.mouseout.call(that, score, evt);
	        }
	      });
	    },

	    _bindOutCancel: function _bindOutCancel() {
	      var that = this;

	      that.cancel.on('mouseleave.raty', function (evt) {
	        var icon = that.opt.cancelOff;

	        if (that.opt.starType !== 'img') {
	          icon = that.opt.cancelClass + ' ' + icon;
	        }

	        methods._setIcon.call(that, this, icon);

	        if (that.opt.mouseout) {
	          var score = +that.score.val() || undefined;

	          that.opt.mouseout.call(that, score, evt);
	        }
	      });
	    },

	    _bindOver: function _bindOver() {
	      var that = this,
	          action = that.opt.half ? 'mousemove.raty' : 'mouseover.raty';

	      that.stars.on(action, function (evt) {
	        var score = methods._getScoreByPosition.call(that, evt, this);

	        methods._fill.call(that, score);

	        if (that.opt.half) {
	          methods._roundStars.call(that, score, evt);
	          methods._setTitle.call(that, score, evt);

	          that.self.data('score', score);
	        }

	        methods._target.call(that, score, evt);

	        if (that.opt.mouseover) {
	          that.opt.mouseover.call(that, score, evt);
	        }
	      });
	    },

	    _bindOverCancel: function _bindOverCancel() {
	      var that = this;

	      that.cancel.on('mouseover.raty', function (evt) {
	        var starOff = that.opt.path + that.opt.starOff,
	            icon = that.opt.cancelOn;

	        if (that.opt.starType === 'img') {
	          that.stars.attr('src', starOff);
	        } else {
	          icon = that.opt.cancelClass + ' ' + icon;

	          that.stars.attr('class', starOff);
	        }

	        methods._setIcon.call(that, this, icon);
	        methods._target.call(that, null, evt);

	        if (that.opt.mouseover) {
	          that.opt.mouseover.call(that, null);
	        }
	      });
	    },

	    _buildScoreField: function _buildScoreField() {
	      return $('<input />', { name: this.opt.scoreName, type: 'hidden' }).appendTo(this);
	    },

	    _createCancel: function _createCancel() {
	      var icon = this.opt.path + this.opt.cancelOff,
	          cancel = $('<' + this.opt.starType + ' />', { title: this.opt.cancelHint, 'class': this.opt.cancelClass });

	      if (this.opt.starType === 'img') {
	        cancel.attr({ src: icon, alt: 'x' });
	      } else {
	        // TODO: use $.data
	        cancel.attr('data-alt', 'x').addClass(icon);
	      }

	      if (this.opt.cancelPlace === 'left') {
	        this.self.prepend('&#160;').prepend(cancel);
	      } else {
	        this.self.append('&#160;').append(cancel);
	      }

	      this.cancel = cancel;
	    },

	    _createScore: function _createScore() {
	      var score = $(this.opt.targetScore);

	      this.score = score.length ? score : methods._buildScoreField.call(this);
	    },

	    _createStars: function _createStars() {
	      for (var i = 1; i <= this.opt.number; i++) {
	        var name = methods._nameForIndex.call(this, i),
	            attrs = { alt: i, src: this.opt.path + this.opt[name] };

	        if (this.opt.starType !== 'img') {
	          attrs = { 'data-alt': i, 'class': attrs.src }; // TODO: use $.data.
	        }

	        attrs.title = methods._getHint.call(this, i);

	        $('<' + this.opt.starType + ' />', attrs).appendTo(this);

	        if (this.opt.space) {
	          this.self.append(i < this.opt.number ? '&#160;' : '');
	        }
	      }

	      this.stars = this.self.children(this.opt.starType);
	    },

	    _error: function _error(message) {
	      $(this).text(message);

	      $.error(message);
	    },

	    _fill: function _fill(score) {
	      var hash = 0;

	      for (var i = 1; i <= this.stars.length; i++) {
	        var icon,
	            star = this.stars[i - 1],
	            turnOn = methods._turnOn.call(this, i, score);

	        if (this.opt.iconRange && this.opt.iconRange.length > hash) {
	          var irange = this.opt.iconRange[hash];

	          icon = methods._getRangeIcon.call(this, irange, turnOn);

	          if (i <= irange.range) {
	            methods._setIcon.call(this, star, icon);
	          }

	          if (i === irange.range) {
	            hash++;
	          }
	        } else {
	          icon = this.opt[turnOn ? 'starOn' : 'starOff'];

	          methods._setIcon.call(this, star, icon);
	        }
	      }
	    },

	    _getFirstDecimal: function _getFirstDecimal(number) {
	      var decimal = number.toString().split('.')[1],
	          result = 0;

	      if (decimal) {
	        result = parseInt(decimal.charAt(0), 10);

	        if (decimal.slice(1, 5) === '9999') {
	          result++;
	        }
	      }

	      return result;
	    },

	    _getRangeIcon: function _getRangeIcon(irange, turnOn) {
	      return turnOn ? irange.on || this.opt.starOn : irange.off || this.opt.starOff;
	    },

	    _getScoreByPosition: function _getScoreByPosition(evt, icon) {
	      var score = parseInt(icon.alt || icon.getAttribute('data-alt'), 10);

	      if (this.opt.half) {
	        var size = methods._getWidth.call(this),
	            percent = parseFloat((evt.pageX - $(icon).offset().left) / size);

	        score = score - 1 + percent;
	      }

	      return score;
	    },

	    _getHint: function _getHint(score, evt) {
	      if (score !== 0 && !score) {
	        return this.opt.noRatedMsg;
	      }

	      var decimal = methods._getFirstDecimal.call(this, score),
	          integer = Math.ceil(score),
	          group = this.opt.hints[(integer || 1) - 1],
	          hint = group,
	          set = !evt || this.move;

	      if (this.opt.precision) {
	        if (set) {
	          decimal = decimal === 0 ? 9 : decimal - 1;
	        }

	        hint = group[decimal];
	      } else if (this.opt.halfShow || this.opt.half) {
	        decimal = set && decimal === 0 ? 1 : decimal > 5 ? 1 : 0;

	        hint = group[decimal];
	      }

	      return hint === '' ? '' : hint || score;
	    },

	    _getWidth: function _getWidth() {
	      var width = this.stars[0].width || parseFloat(this.stars.eq(0).css('font-size'));

	      if (!width) {
	        methods._error.call(this, 'Could not get the icon width!');
	      }

	      return width;
	    },

	    _lock: function _lock() {
	      var hint = methods._getHint.call(this, this.score.val());

	      this.style.cursor = '';
	      this.title = hint;

	      this.score.prop('readonly', true);
	      this.stars.prop('title', hint);

	      if (this.cancel) {
	        this.cancel.hide();
	      }

	      this.self.data('readonly', true);
	    },

	    _nameForIndex: function _nameForIndex(i) {
	      return this.opt.score && this.opt.score >= i ? 'starOn' : 'starOff';
	    },

	    _resetTitle: function _resetTitle(star) {
	      for (var i = 0; i < this.opt.number; i++) {
	        this.stars[i].title = methods._getHint.call(this, i + 1);
	      }
	    },

	    _roundHalfScore: function _roundHalfScore(score) {
	      var integer = parseInt(score, 10),
	          decimal = methods._getFirstDecimal.call(this, score);

	      if (decimal !== 0) {
	        decimal = decimal > 5 ? 1 : 0.5;
	      }

	      return integer + decimal;
	    },

	    _roundStars: function _roundStars(score, evt) {
	      var decimal = (score % 1).toFixed(2),
	          name;

	      if (evt || this.move) {
	        name = decimal > 0.5 ? 'starOn' : 'starHalf';
	      } else if (decimal > this.opt.round.down) {
	        // Up:   [x.76 .. x.99]
	        name = 'starOn';

	        if (this.opt.halfShow && decimal < this.opt.round.up) {
	          // Half: [x.26 .. x.75]
	          name = 'starHalf';
	        } else if (decimal < this.opt.round.full) {
	          // Down: [x.00 .. x.5]
	          name = 'starOff';
	        }
	      }

	      if (name) {
	        var icon = this.opt[name],
	            star = this.stars[Math.ceil(score) - 1];

	        methods._setIcon.call(this, star, icon);
	      } // Full down: [x.00 .. x.25]
	    },

	    _setIcon: function _setIcon(star, icon) {
	      star[this.opt.starType === 'img' ? 'src' : 'className'] = this.opt.path + icon;
	    },

	    _setTarget: function _setTarget(target, score) {
	      if (score) {
	        score = this.opt.targetFormat.toString().replace('{score}', score);
	      }

	      if (target.is(':input')) {
	        target.val(score);
	      } else {
	        target.html(score);
	      }
	    },

	    _setTitle: function _setTitle(score, evt) {
	      if (score) {
	        var integer = parseInt(Math.ceil(score), 10),
	            star = this.stars[integer - 1];

	        star.title = methods._getHint.call(this, score, evt);
	      }
	    },

	    _target: function _target(score, evt) {
	      if (this.opt.target) {
	        var target = $(this.opt.target);

	        if (!target.length) {
	          methods._error.call(this, 'Target selector invalid or missing!');
	        }

	        var mouseover = evt && evt.type === 'mouseover';

	        if (score === undefined) {
	          score = this.opt.targetText;
	        } else if (score === null) {
	          score = mouseover ? this.opt.cancelHint : this.opt.targetText;
	        } else {
	          if (this.opt.targetType === 'hint') {
	            score = methods._getHint.call(this, score, evt);
	          } else if (this.opt.precision) {
	            score = parseFloat(score).toFixed(1);
	          }

	          var mousemove = evt && evt.type === 'mousemove';

	          if (!mouseover && !mousemove && !this.opt.targetKeep) {
	            score = this.opt.targetText;
	          }
	        }

	        methods._setTarget.call(this, target, score);
	      }
	    },

	    _turnOn: function _turnOn(i, score) {
	      return this.opt.single ? i === score : i <= score;
	    },

	    _unlock: function _unlock() {
	      this.style.cursor = 'pointer';
	      this.removeAttribute('title');

	      this.score.removeAttr('readonly');

	      this.self.data('readonly', false);

	      for (var i = 0; i < this.opt.number; i++) {
	        this.stars[i].title = methods._getHint.call(this, i + 1);
	      }

	      if (this.cancel) {
	        this.cancel.css('display', '');
	      }
	    },

	    cancel: function cancel(click) {
	      return this.each(function () {
	        var self = $(this);

	        if (self.data('readonly') !== true) {
	          methods[click ? 'click' : 'score'].call(self, null);

	          this.score.removeAttr('value');
	        }
	      });
	    },

	    click: function click(score) {
	      return this.each(function () {
	        if ($(this).data('readonly') !== true) {
	          score = methods._adjustedScore.call(this, score);

	          methods._apply.call(this, score);

	          if (this.opt.click) {
	            this.opt.click.call(this, score, $.Event('click'));
	          }

	          methods._target.call(this, score);
	        }
	      });
	    },

	    destroy: function destroy() {
	      return this.each(function () {
	        var self = $(this),
	            raw = self.data('raw');

	        if (raw) {
	          self.off('.raty').empty().css({ cursor: raw.style.cursor }).removeData('readonly');
	        } else {
	          self.data('raw', self.clone()[0]);
	        }
	      });
	    },

	    getScore: function getScore() {
	      var score = [],
	          value;

	      this.each(function () {
	        value = this.score.val();

	        score.push(value ? +value : undefined);
	      });

	      return score.length > 1 ? score : score[0];
	    },

	    move: function move(score) {
	      return this.each(function () {
	        var integer = parseInt(score, 10),
	            decimal = methods._getFirstDecimal.call(this, score);

	        if (integer >= this.opt.number) {
	          integer = this.opt.number - 1;
	          decimal = 10;
	        }

	        var width = methods._getWidth.call(this),
	            steps = width / 10,
	            star = $(this.stars[integer]),
	            percent = star.offset().left + steps * decimal,
	            evt = $.Event('mousemove', { pageX: percent });

	        this.move = true;

	        star.trigger(evt);

	        this.move = false;
	      });
	    },

	    readOnly: function readOnly(readonly) {
	      return this.each(function () {
	        var self = $(this);

	        if (self.data('readonly') !== readonly) {
	          if (readonly) {
	            self.off('.raty').children('img').off('.raty');

	            methods._lock.call(this);
	          } else {
	            methods._binds.call(this);
	            methods._unlock.call(this);
	          }

	          self.data('readonly', readonly);
	        }
	      });
	    },

	    reload: function reload() {
	      return methods.set.call(this, {});
	    },

	    score: function score() {
	      var self = $(this);

	      return arguments.length ? methods.setScore.apply(self, arguments) : methods.getScore.call(self);
	    },

	    set: function set(options) {
	      return this.each(function () {
	        $(this).raty($.extend({}, this.opt, options));
	      });
	    },

	    setScore: function setScore(score) {
	      return this.each(function () {
	        if ($(this).data('readonly') !== true) {
	          score = methods._adjustedScore.call(this, score);

	          methods._apply.call(this, score);
	          methods._target.call(this, score);
	        }
	      });
	    }
	  };

	  $.fn.raty = function (method) {
	    if (methods[method]) {
	      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	    } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
	      return methods.init.apply(this, arguments);
	    } else {
	      $.error('Method ' + method + ' does not exist!');
	    }
	  };

	  $.fn.raty.defaults = {
	    cancel: false,
	    cancelClass: 'raty-cancel',
	    cancelHint: 'Cancel this rating!',
	    cancelOff: 'cancel-off.png',
	    cancelOn: 'cancel-on.png',
	    cancelPlace: 'left',
	    click: undefined,
	    half: false,
	    halfShow: true,
	    hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
	    iconRange: undefined,
	    mouseout: undefined,
	    mouseover: undefined,
	    noRatedMsg: 'Not rated yet!',
	    number: 5,
	    numberMax: 20,
	    path: undefined,
	    precision: false,
	    readOnly: false,
	    round: { down: 0.25, full: 0.6, up: 0.76 },
	    score: undefined,
	    scoreName: 'score',
	    single: false,
	    space: true,
	    starHalf: 'star-half.png',
	    starOff: 'star-off.png',
	    starOn: 'star-on.png',
	    starType: 'img',
	    target: undefined,
	    targetFormat: '{score}',
	    targetKeep: false,
	    targetScore: undefined,
	    targetText: '',
	    targetType: 'hint'
	  };
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	// Ion.RangeSlider
	// version 2.1.4 Build: 355
	// © Denis Ineshin, 2016
	// https://github.com/IonDen
	//
	// Project page:    http://ionden.com/a/plugins/ion.rangeSlider/en.html
	// GitHub page:     https://github.com/IonDen/ion.rangeSlider
	//
	// Released under MIT licence:
	// http://ionden.com/a/plugins/licence-en.html
	// =====================================================================================================================

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	            factory($, document, window, navigator);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        factory(jQuery, document, window, navigator);
	    }
	})(function ($, document, window, navigator, undefined) {
	    "use strict";

	    // =================================================================================================================
	    // Service

	    var plugin_count = 0;

	    // IE8 fix
	    var is_old_ie = function () {
	        var n = navigator.userAgent,
	            r = /msie\s\d+/i,
	            v;
	        if (n.search(r) > 0) {
	            v = r.exec(n).toString();
	            v = v.split(" ")[1];
	            if (v < 9) {
	                $("html").addClass("lt-ie9");
	                return true;
	            }
	        }
	        return false;
	    }();
	    if (!Function.prototype.bind) {
	        Function.prototype.bind = function bind(that) {

	            var target = this;
	            var slice = [].slice;

	            if (typeof target != "function") {
	                throw new TypeError();
	            }

	            var args = slice.call(arguments, 1),
	                bound = function bound() {

	                if (this instanceof bound) {

	                    var F = function F() {};
	                    F.prototype = target.prototype;
	                    var self = new F();

	                    var result = target.apply(self, args.concat(slice.call(arguments)));
	                    if (Object(result) === result) {
	                        return result;
	                    }
	                    return self;
	                } else {

	                    return target.apply(that, args.concat(slice.call(arguments)));
	                }
	            };

	            return bound;
	        };
	    }
	    if (!Array.prototype.indexOf) {
	        Array.prototype.indexOf = function (searchElement, fromIndex) {
	            var k;
	            if (this == null) {
	                throw new TypeError('"this" is null or not defined');
	            }
	            var O = Object(this);
	            var len = O.length >>> 0;
	            if (len === 0) {
	                return -1;
	            }
	            var n = +fromIndex || 0;
	            if (Math.abs(n) === Infinity) {
	                n = 0;
	            }
	            if (n >= len) {
	                return -1;
	            }
	            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
	            while (k < len) {
	                if (k in O && O[k] === searchElement) {
	                    return k;
	                }
	                k++;
	            }
	            return -1;
	        };
	    }

	    // =================================================================================================================
	    // Template

	    var base_html = '<span class="irs">' + '<span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span>' + '<span class="irs-min">0</span><span class="irs-max">1</span>' + '<span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span>' + '</span>' + '<span class="irs-grid"></span>' + '<span class="irs-bar"></span>';

	    var single_html = '<span class="irs-bar-edge"></span>' + '<span class="irs-shadow shadow-single"></span>' + '<span class="irs-slider single"></span>';

	    var double_html = '<span class="irs-shadow shadow-from"></span>' + '<span class="irs-shadow shadow-to"></span>' + '<span class="irs-slider from"></span>' + '<span class="irs-slider to"></span>';

	    var disable_html = '<span class="irs-disable-mask"></span>';

	    // =================================================================================================================
	    // Core

	    /**
	     * Main plugin constructor
	     *
	     * @param input {Object} link to base input element
	     * @param options {Object} slider config
	     * @param plugin_count {Number}
	     * @constructor
	     */
	    var IonRangeSlider = function IonRangeSlider(input, options, plugin_count) {
	        this.VERSION = "2.1.4";
	        this.input = input;
	        this.plugin_count = plugin_count;
	        this.current_plugin = 0;
	        this.calc_count = 0;
	        this.update_tm = 0;
	        this.old_from = 0;
	        this.old_to = 0;
	        this.old_min_interval = null;
	        this.raf_id = null;
	        this.dragging = false;
	        this.force_redraw = false;
	        this.no_diapason = false;
	        this.is_key = false;
	        this.is_update = false;
	        this.is_start = true;
	        this.is_finish = false;
	        this.is_active = false;
	        this.is_resize = false;
	        this.is_click = false;

	        // cache for links to all DOM elements
	        this.$cache = {
	            win: $(window),
	            body: $(document.body),
	            input: $(input),
	            cont: null,
	            rs: null,
	            min: null,
	            max: null,
	            from: null,
	            to: null,
	            single: null,
	            bar: null,
	            line: null,
	            s_single: null,
	            s_from: null,
	            s_to: null,
	            shad_single: null,
	            shad_from: null,
	            shad_to: null,
	            edge: null,
	            grid: null,
	            grid_labels: []
	        };

	        // storage for measure variables
	        this.coords = {
	            // left
	            x_gap: 0,
	            x_pointer: 0,

	            // width
	            w_rs: 0,
	            w_rs_old: 0,
	            w_handle: 0,

	            // percents
	            p_gap: 0,
	            p_gap_left: 0,
	            p_gap_right: 0,
	            p_step: 0,
	            p_pointer: 0,
	            p_handle: 0,
	            p_single_fake: 0,
	            p_single_real: 0,
	            p_from_fake: 0,
	            p_from_real: 0,
	            p_to_fake: 0,
	            p_to_real: 0,
	            p_bar_x: 0,
	            p_bar_w: 0,

	            // grid
	            grid_gap: 0,
	            big_num: 0,
	            big: [],
	            big_w: [],
	            big_p: [],
	            big_x: []
	        };

	        // storage for labels measure variables
	        this.labels = {
	            // width
	            w_min: 0,
	            w_max: 0,
	            w_from: 0,
	            w_to: 0,
	            w_single: 0,

	            // percents
	            p_min: 0,
	            p_max: 0,
	            p_from_fake: 0,
	            p_from_left: 0,
	            p_to_fake: 0,
	            p_to_left: 0,
	            p_single_fake: 0,
	            p_single_left: 0
	        };

	        /**
	         * get and validate config
	         */
	        var $inp = this.$cache.input,
	            val = $inp.prop("value"),
	            config,
	            config_from_data,
	            prop;

	        // default config
	        config = {
	            type: "single",

	            min: 10,
	            max: 100,
	            from: null,
	            to: null,
	            step: 1,

	            min_interval: 0,
	            max_interval: 0,
	            drag_interval: false,

	            values: [],
	            p_values: [],

	            from_fixed: false,
	            from_min: null,
	            from_max: null,
	            from_shadow: false,

	            to_fixed: false,
	            to_min: null,
	            to_max: null,
	            to_shadow: false,

	            prettify_enabled: true,
	            prettify_separator: " ",
	            prettify: null,

	            force_edges: false,

	            keyboard: false,
	            keyboard_step: 5,

	            grid: false,
	            grid_margin: true,
	            grid_num: 4,
	            grid_snap: false,

	            hide_min_max: false,
	            hide_from_to: false,

	            prefix: "",
	            postfix: "",
	            max_postfix: "",
	            decorate_both: true,
	            values_separator: " — ",

	            input_values_separator: ";",

	            disable: false,

	            onStart: null,
	            onChange: null,
	            onFinish: null,
	            onUpdate: null
	        };

	        // config from data-attributes extends js config
	        config_from_data = {
	            type: $inp.data("type"),

	            min: $inp.data("min"),
	            max: $inp.data("max"),
	            from: $inp.data("from"),
	            to: $inp.data("to"),
	            step: $inp.data("step"),

	            min_interval: $inp.data("minInterval"),
	            max_interval: $inp.data("maxInterval"),
	            drag_interval: $inp.data("dragInterval"),

	            values: $inp.data("values"),

	            from_fixed: $inp.data("fromFixed"),
	            from_min: $inp.data("fromMin"),
	            from_max: $inp.data("fromMax"),
	            from_shadow: $inp.data("fromShadow"),

	            to_fixed: $inp.data("toFixed"),
	            to_min: $inp.data("toMin"),
	            to_max: $inp.data("toMax"),
	            to_shadow: $inp.data("toShadow"),

	            prettify_enabled: $inp.data("prettifyEnabled"),
	            prettify_separator: $inp.data("prettifySeparator"),

	            force_edges: $inp.data("forceEdges"),

	            keyboard: $inp.data("keyboard"),
	            keyboard_step: $inp.data("keyboardStep"),

	            grid: $inp.data("grid"),
	            grid_margin: $inp.data("gridMargin"),
	            grid_num: $inp.data("gridNum"),
	            grid_snap: $inp.data("gridSnap"),

	            hide_min_max: $inp.data("hideMinMax"),
	            hide_from_to: $inp.data("hideFromTo"),

	            prefix: $inp.data("prefix"),
	            postfix: $inp.data("postfix"),
	            max_postfix: $inp.data("maxPostfix"),
	            decorate_both: $inp.data("decorateBoth"),
	            values_separator: $inp.data("valuesSeparator"),

	            input_values_separator: $inp.data("inputValuesSeparator"),

	            disable: $inp.data("disable")
	        };
	        config_from_data.values = config_from_data.values && config_from_data.values.split(",");

	        for (prop in config_from_data) {
	            if (config_from_data.hasOwnProperty(prop)) {
	                if (!config_from_data[prop] && config_from_data[prop] !== 0) {
	                    delete config_from_data[prop];
	                }
	            }
	        }

	        // input value extends default config
	        if (val) {
	            val = val.split(config_from_data.input_values_separator || options.input_values_separator || ";");

	            if (val[0] && val[0] == +val[0]) {
	                val[0] = +val[0];
	            }
	            if (val[1] && val[1] == +val[1]) {
	                val[1] = +val[1];
	            }

	            if (options && options.values && options.values.length) {
	                config.from = val[0] && options.values.indexOf(val[0]);
	                config.to = val[1] && options.values.indexOf(val[1]);
	            } else {
	                config.from = val[0] && +val[0];
	                config.to = val[1] && +val[1];
	            }
	        }

	        // js config extends default config
	        $.extend(config, options);

	        // data config extends config
	        $.extend(config, config_from_data);
	        this.options = config;

	        // validate config, to be sure that all data types are correct
	        this.validate();

	        // default result object, returned to callbacks
	        this.result = {
	            input: this.$cache.input,
	            slider: null,

	            min: this.options.min,
	            max: this.options.max,

	            from: this.options.from,
	            from_percent: 0,
	            from_value: null,

	            to: this.options.to,
	            to_percent: 0,
	            to_value: null
	        };

	        this.init();
	    };

	    IonRangeSlider.prototype = {

	        /**
	         * Starts or updates the plugin instance
	         *
	         * @param is_update {boolean}
	         */
	        init: function init(is_update) {
	            this.no_diapason = false;
	            this.coords.p_step = this.convertToPercent(this.options.step, true);

	            this.target = "base";

	            this.toggleInput();
	            this.append();
	            this.setMinMax();

	            if (is_update) {
	                this.force_redraw = true;
	                this.calc(true);

	                // callbacks called
	                this.callOnUpdate();
	            } else {
	                this.force_redraw = true;
	                this.calc(true);

	                // callbacks called
	                this.callOnStart();
	            }

	            this.updateScene();
	        },

	        /**
	         * Appends slider template to a DOM
	         */
	        append: function append() {
	            var container_html = '<span class="irs js-irs-' + this.plugin_count + '"></span>';
	            this.$cache.input.before(container_html);
	            this.$cache.input.prop("readonly", true);
	            this.$cache.cont = this.$cache.input.prev();
	            this.result.slider = this.$cache.cont;

	            this.$cache.cont.html(base_html);
	            this.$cache.rs = this.$cache.cont.find(".irs");
	            this.$cache.min = this.$cache.cont.find(".irs-min");
	            this.$cache.max = this.$cache.cont.find(".irs-max");
	            this.$cache.from = this.$cache.cont.find(".irs-from");
	            this.$cache.to = this.$cache.cont.find(".irs-to");
	            this.$cache.single = this.$cache.cont.find(".irs-single");
	            this.$cache.bar = this.$cache.cont.find(".irs-bar");
	            this.$cache.line = this.$cache.cont.find(".irs-line");
	            this.$cache.grid = this.$cache.cont.find(".irs-grid");

	            if (this.options.type === "single") {
	                this.$cache.cont.append(single_html);
	                this.$cache.edge = this.$cache.cont.find(".irs-bar-edge");
	                this.$cache.s_single = this.$cache.cont.find(".single");
	                this.$cache.from[0].style.visibility = "hidden";
	                this.$cache.to[0].style.visibility = "hidden";
	                this.$cache.shad_single = this.$cache.cont.find(".shadow-single");
	            } else {
	                this.$cache.cont.append(double_html);
	                this.$cache.s_from = this.$cache.cont.find(".from");
	                this.$cache.s_to = this.$cache.cont.find(".to");
	                this.$cache.shad_from = this.$cache.cont.find(".shadow-from");
	                this.$cache.shad_to = this.$cache.cont.find(".shadow-to");

	                this.setTopHandler();
	            }

	            if (this.options.hide_from_to) {
	                this.$cache.from[0].style.display = "none";
	                this.$cache.to[0].style.display = "none";
	                this.$cache.single[0].style.display = "none";
	            }

	            this.appendGrid();

	            if (this.options.disable) {
	                this.appendDisableMask();
	                this.$cache.input[0].disabled = true;
	            } else {
	                this.$cache.cont.removeClass("irs-disabled");
	                this.$cache.input[0].disabled = false;
	                this.bindEvents();
	            }

	            if (this.options.drag_interval) {
	                this.$cache.bar[0].style.cursor = "ew-resize";
	            }
	        },

	        /**
	         * Determine which handler has a priority
	         * works only for double slider type
	         */
	        setTopHandler: function setTopHandler() {
	            var min = this.options.min,
	                max = this.options.max,
	                from = this.options.from,
	                to = this.options.to;

	            if (from > min && to === max) {
	                this.$cache.s_from.addClass("type_last");
	            } else if (to < max) {
	                this.$cache.s_to.addClass("type_last");
	            }
	        },

	        /**
	         * Determine which handles was clicked last
	         * and which handler should have hover effect
	         *
	         * @param target {String}
	         */
	        changeLevel: function changeLevel(target) {
	            switch (target) {
	                case "single":
	                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
	                    break;
	                case "from":
	                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
	                    this.$cache.s_from.addClass("state_hover");
	                    this.$cache.s_from.addClass("type_last");
	                    this.$cache.s_to.removeClass("type_last");
	                    break;
	                case "to":
	                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake);
	                    this.$cache.s_to.addClass("state_hover");
	                    this.$cache.s_to.addClass("type_last");
	                    this.$cache.s_from.removeClass("type_last");
	                    break;
	                case "both":
	                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
	                    this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer);
	                    this.$cache.s_to.removeClass("type_last");
	                    this.$cache.s_from.removeClass("type_last");
	                    break;
	            }
	        },

	        /**
	         * Then slider is disabled
	         * appends extra layer with opacity
	         */
	        appendDisableMask: function appendDisableMask() {
	            this.$cache.cont.append(disable_html);
	            this.$cache.cont.addClass("irs-disabled");
	        },

	        /**
	         * Remove slider instance
	         * and ubind all events
	         */
	        remove: function remove() {
	            this.$cache.cont.remove();
	            this.$cache.cont = null;

	            this.$cache.line.off("keydown.irs_" + this.plugin_count);

	            this.$cache.body.off("touchmove.irs_" + this.plugin_count);
	            this.$cache.body.off("mousemove.irs_" + this.plugin_count);

	            this.$cache.win.off("touchend.irs_" + this.plugin_count);
	            this.$cache.win.off("mouseup.irs_" + this.plugin_count);

	            if (is_old_ie) {
	                this.$cache.body.off("mouseup.irs_" + this.plugin_count);
	                this.$cache.body.off("mouseleave.irs_" + this.plugin_count);
	            }

	            this.$cache.grid_labels = [];
	            this.coords.big = [];
	            this.coords.big_w = [];
	            this.coords.big_p = [];
	            this.coords.big_x = [];

	            cancelAnimationFrame(this.raf_id);
	        },

	        /**
	         * bind all slider events
	         */
	        bindEvents: function bindEvents() {
	            if (this.no_diapason) {
	                return;
	            }

	            this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
	            this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));

	            this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));
	            this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));

	            this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	            this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

	            if (this.options.drag_interval && this.options.type === "double") {
	                this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
	                this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
	            } else {
	                this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	                this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	            }

	            if (this.options.type === "single") {
	                this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
	                this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
	                this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

	                this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
	                this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
	                this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	                this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	            } else {
	                this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null));
	                this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null));

	                this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
	                this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
	                this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
	                this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
	                this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	                this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

	                this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
	                this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
	                this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
	                this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
	                this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	                this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
	            }

	            if (this.options.keyboard) {
	                this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));
	            }

	            if (is_old_ie) {
	                this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
	                this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this));
	            }
	        },

	        /**
	         * Mousemove or touchmove
	         * only for handlers
	         *
	         * @param e {Object} event object
	         */
	        pointerMove: function pointerMove(e) {
	            if (!this.dragging) {
	                return;
	            }

	            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
	            this.coords.x_pointer = x - this.coords.x_gap;

	            this.calc();
	        },

	        /**
	         * Mouseup or touchend
	         * only for handlers
	         *
	         * @param e {Object} event object
	         */
	        pointerUp: function pointerUp(e) {
	            if (this.current_plugin !== this.plugin_count) {
	                return;
	            }

	            if (this.is_active) {
	                this.is_active = false;
	            } else {
	                return;
	            }

	            this.$cache.cont.find(".state_hover").removeClass("state_hover");

	            this.force_redraw = true;

	            if (is_old_ie) {
	                $("*").prop("unselectable", false);
	            }

	            this.updateScene();
	            this.restoreOriginalMinInterval();

	            // callbacks call
	            if ($.contains(this.$cache.cont[0], e.target) || this.dragging) {
	                this.is_finish = true;
	                this.callOnFinish();
	            }

	            this.dragging = false;
	        },

	        /**
	         * Mousedown or touchstart
	         * only for handlers
	         *
	         * @param target {String|null}
	         * @param e {Object} event object
	         */
	        pointerDown: function pointerDown(target, e) {
	            e.preventDefault();
	            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
	            if (e.button === 2) {
	                return;
	            }

	            if (target === "both") {
	                this.setTempMinInterval();
	            }

	            if (!target) {
	                target = this.target;
	            }

	            this.current_plugin = this.plugin_count;
	            this.target = target;

	            this.is_active = true;
	            this.dragging = true;

	            this.coords.x_gap = this.$cache.rs.offset().left;
	            this.coords.x_pointer = x - this.coords.x_gap;

	            this.calcPointerPercent();
	            this.changeLevel(target);

	            if (is_old_ie) {
	                $("*").prop("unselectable", true);
	            }

	            this.$cache.line.trigger("focus");

	            this.updateScene();
	        },

	        /**
	         * Mousedown or touchstart
	         * for other slider elements, like diapason line
	         *
	         * @param target {String}
	         * @param e {Object} event object
	         */
	        pointerClick: function pointerClick(target, e) {
	            e.preventDefault();
	            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
	            if (e.button === 2) {
	                return;
	            }

	            this.current_plugin = this.plugin_count;
	            this.target = target;

	            this.is_click = true;
	            this.coords.x_gap = this.$cache.rs.offset().left;
	            this.coords.x_pointer = +(x - this.coords.x_gap).toFixed();

	            this.force_redraw = true;
	            this.calc();

	            this.$cache.line.trigger("focus");
	        },

	        /**
	         * Keyborard controls for focused slider
	         *
	         * @param target {String}
	         * @param e {Object} event object
	         * @returns {boolean|undefined}
	         */
	        key: function key(target, e) {
	            if (this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
	                return;
	            }

	            switch (e.which) {
	                case 83: // W
	                case 65: // A
	                case 40: // DOWN
	                case 37:
	                    // LEFT
	                    e.preventDefault();
	                    this.moveByKey(false);
	                    break;

	                case 87: // S
	                case 68: // D
	                case 38: // UP
	                case 39:
	                    // RIGHT
	                    e.preventDefault();
	                    this.moveByKey(true);
	                    break;
	            }

	            return true;
	        },

	        /**
	         * Move by key. Beta
	         * @todo refactor than have plenty of time
	         *
	         * @param right {boolean} direction to move
	         */
	        moveByKey: function moveByKey(right) {
	            var p = this.coords.p_pointer;

	            if (right) {
	                p += this.options.keyboard_step;
	            } else {
	                p -= this.options.keyboard_step;
	            }

	            this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * p);
	            this.is_key = true;
	            this.calc();
	        },

	        /**
	         * Set visibility and content
	         * of Min and Max labels
	         */
	        setMinMax: function setMinMax() {
	            if (!this.options) {
	                return;
	            }

	            if (this.options.hide_min_max) {
	                this.$cache.min[0].style.display = "none";
	                this.$cache.max[0].style.display = "none";
	                return;
	            }

	            if (this.options.values.length) {
	                this.$cache.min.html(this.decorate(this.options.p_values[this.options.min]));
	                this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
	            } else {
	                this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min));
	                this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max));
	            }

	            this.labels.w_min = this.$cache.min.outerWidth(false);
	            this.labels.w_max = this.$cache.max.outerWidth(false);
	        },

	        /**
	         * Then dragging interval, prevent interval collapsing
	         * using min_interval option
	         */
	        setTempMinInterval: function setTempMinInterval() {
	            var interval = this.result.to - this.result.from;

	            if (this.old_min_interval === null) {
	                this.old_min_interval = this.options.min_interval;
	            }

	            this.options.min_interval = interval;
	        },

	        /**
	         * Restore min_interval option to original
	         */
	        restoreOriginalMinInterval: function restoreOriginalMinInterval() {
	            if (this.old_min_interval !== null) {
	                this.options.min_interval = this.old_min_interval;
	                this.old_min_interval = null;
	            }
	        },

	        // =============================================================================================================
	        // Calculations

	        /**
	         * All calculations and measures start here
	         *
	         * @param update {boolean=}
	         */
	        calc: function calc(update) {
	            if (!this.options) {
	                return;
	            }

	            this.calc_count++;

	            if (this.calc_count === 10 || update) {
	                this.calc_count = 0;
	                this.coords.w_rs = this.$cache.rs.outerWidth(false);

	                this.calcHandlePercent();
	            }

	            if (!this.coords.w_rs) {
	                return;
	            }

	            this.calcPointerPercent();
	            var handle_x = this.getHandleX();

	            if (this.target === "click") {
	                this.coords.p_gap = this.coords.p_handle / 2;
	                handle_x = this.getHandleX();

	                if (this.options.drag_interval) {
	                    this.target = "both_one";
	                } else {
	                    this.target = this.chooseHandle(handle_x);
	                }
	            }

	            switch (this.target) {
	                case "base":
	                    var w = (this.options.max - this.options.min) / 100,
	                        f = (this.result.from - this.options.min) / w,
	                        t = (this.result.to - this.options.min) / w;

	                    this.coords.p_single_real = this.toFixed(f);
	                    this.coords.p_from_real = this.toFixed(f);
	                    this.coords.p_to_real = this.toFixed(t);

	                    this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
	                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
	                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);

	                    this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
	                    this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
	                    this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

	                    this.target = null;

	                    break;

	                case "single":
	                    if (this.options.from_fixed) {
	                        break;
	                    }

	                    this.coords.p_single_real = this.convertToRealPercent(handle_x);
	                    this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real);
	                    this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);

	                    this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);

	                    break;

	                case "from":
	                    if (this.options.from_fixed) {
	                        break;
	                    }

	                    this.coords.p_from_real = this.convertToRealPercent(handle_x);
	                    this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
	                    if (this.coords.p_from_real > this.coords.p_to_real) {
	                        this.coords.p_from_real = this.coords.p_to_real;
	                    }
	                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
	                    this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
	                    this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");

	                    this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

	                    break;

	                case "to":
	                    if (this.options.to_fixed) {
	                        break;
	                    }

	                    this.coords.p_to_real = this.convertToRealPercent(handle_x);
	                    this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
	                    if (this.coords.p_to_real < this.coords.p_from_real) {
	                        this.coords.p_to_real = this.coords.p_from_real;
	                    }
	                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
	                    this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
	                    this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");

	                    this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

	                    break;

	                case "both":
	                    if (this.options.from_fixed || this.options.to_fixed) {
	                        break;
	                    }

	                    handle_x = this.toFixed(handle_x + this.coords.p_handle * 0.1);

	                    this.coords.p_from_real = this.convertToRealPercent(handle_x) - this.coords.p_gap_left;
	                    this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
	                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
	                    this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
	                    this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

	                    this.coords.p_to_real = this.convertToRealPercent(handle_x) + this.coords.p_gap_right;
	                    this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
	                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
	                    this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
	                    this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

	                    break;

	                case "both_one":
	                    if (this.options.from_fixed || this.options.to_fixed) {
	                        break;
	                    }

	                    var real_x = this.convertToRealPercent(handle_x),
	                        from = this.result.from_percent,
	                        to = this.result.to_percent,
	                        full = to - from,
	                        half = full / 2,
	                        new_from = real_x - half,
	                        new_to = real_x + half;

	                    if (new_from < 0) {
	                        new_from = 0;
	                        new_to = new_from + full;
	                    }

	                    if (new_to > 100) {
	                        new_to = 100;
	                        new_from = new_to - full;
	                    }

	                    this.coords.p_from_real = this.calcWithStep(new_from);
	                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
	                    this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

	                    this.coords.p_to_real = this.calcWithStep(new_to);
	                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
	                    this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

	                    break;
	            }

	            if (this.options.type === "single") {
	                this.coords.p_bar_x = this.coords.p_handle / 2;
	                this.coords.p_bar_w = this.coords.p_single_fake;

	                this.result.from_percent = this.coords.p_single_real;
	                this.result.from = this.convertToValue(this.coords.p_single_real);

	                if (this.options.values.length) {
	                    this.result.from_value = this.options.values[this.result.from];
	                }
	            } else {
	                this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2);
	                this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake);

	                this.result.from_percent = this.coords.p_from_real;
	                this.result.from = this.convertToValue(this.coords.p_from_real);
	                this.result.to_percent = this.coords.p_to_real;
	                this.result.to = this.convertToValue(this.coords.p_to_real);

	                if (this.options.values.length) {
	                    this.result.from_value = this.options.values[this.result.from];
	                    this.result.to_value = this.options.values[this.result.to];
	                }
	            }

	            this.calcMinMax();
	            this.calcLabels();
	        },

	        /**
	         * calculates pointer X in percent
	         */
	        calcPointerPercent: function calcPointerPercent() {
	            if (!this.coords.w_rs) {
	                this.coords.p_pointer = 0;
	                return;
	            }

	            if (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer)) {
	                this.coords.x_pointer = 0;
	            } else if (this.coords.x_pointer > this.coords.w_rs) {
	                this.coords.x_pointer = this.coords.w_rs;
	            }

	            this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100);
	        },

	        convertToRealPercent: function convertToRealPercent(fake) {
	            var full = 100 - this.coords.p_handle;
	            return fake / full * 100;
	        },

	        convertToFakePercent: function convertToFakePercent(real) {
	            var full = 100 - this.coords.p_handle;
	            return real / 100 * full;
	        },

	        getHandleX: function getHandleX() {
	            var max = 100 - this.coords.p_handle,
	                x = this.toFixed(this.coords.p_pointer - this.coords.p_gap);

	            if (x < 0) {
	                x = 0;
	            } else if (x > max) {
	                x = max;
	            }

	            return x;
	        },

	        calcHandlePercent: function calcHandlePercent() {
	            if (this.options.type === "single") {
	                this.coords.w_handle = this.$cache.s_single.outerWidth(false);
	            } else {
	                this.coords.w_handle = this.$cache.s_from.outerWidth(false);
	            }

	            this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
	        },

	        /**
	         * Find closest handle to pointer click
	         *
	         * @param real_x {Number}
	         * @returns {String}
	         */
	        chooseHandle: function chooseHandle(real_x) {
	            if (this.options.type === "single") {
	                return "single";
	            } else {
	                var m_point = this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2;
	                if (real_x >= m_point) {
	                    return this.options.to_fixed ? "from" : "to";
	                } else {
	                    return this.options.from_fixed ? "to" : "from";
	                }
	            }
	        },

	        /**
	         * Measure Min and Max labels width in percent
	         */
	        calcMinMax: function calcMinMax() {
	            if (!this.coords.w_rs) {
	                return;
	            }

	            this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100;
	            this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100;
	        },

	        /**
	         * Measure labels width and X in percent
	         */
	        calcLabels: function calcLabels() {
	            if (!this.coords.w_rs || this.options.hide_from_to) {
	                return;
	            }

	            if (this.options.type === "single") {

	                this.labels.w_single = this.$cache.single.outerWidth(false);
	                this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100;
	                this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2;
	                this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);
	            } else {

	                this.labels.w_from = this.$cache.from.outerWidth(false);
	                this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100;
	                this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2;
	                this.labels.p_from_left = this.toFixed(this.labels.p_from_left);
	                this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake);

	                this.labels.w_to = this.$cache.to.outerWidth(false);
	                this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100;
	                this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2;
	                this.labels.p_to_left = this.toFixed(this.labels.p_to_left);
	                this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake);

	                this.labels.w_single = this.$cache.single.outerWidth(false);
	                this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100;
	                this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2;
	                this.labels.p_single_left = this.toFixed(this.labels.p_single_left);
	                this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);
	            }
	        },

	        // =============================================================================================================
	        // Drawings

	        /**
	         * Main function called in request animation frame
	         * to update everything
	         */
	        updateScene: function updateScene() {
	            if (this.raf_id) {
	                cancelAnimationFrame(this.raf_id);
	                this.raf_id = null;
	            }

	            clearTimeout(this.update_tm);
	            this.update_tm = null;

	            if (!this.options) {
	                return;
	            }

	            this.drawHandles();

	            if (this.is_active) {
	                this.raf_id = requestAnimationFrame(this.updateScene.bind(this));
	            } else {
	                this.update_tm = setTimeout(this.updateScene.bind(this), 300);
	            }
	        },

	        /**
	         * Draw handles
	         */
	        drawHandles: function drawHandles() {
	            this.coords.w_rs = this.$cache.rs.outerWidth(false);

	            if (!this.coords.w_rs) {
	                return;
	            }

	            if (this.coords.w_rs !== this.coords.w_rs_old) {
	                this.target = "base";
	                this.is_resize = true;
	            }

	            if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) {
	                this.setMinMax();
	                this.calc(true);
	                this.drawLabels();
	                if (this.options.grid) {
	                    this.calcGridMargin();
	                    this.calcGridLabels();
	                }
	                this.force_redraw = true;
	                this.coords.w_rs_old = this.coords.w_rs;
	                this.drawShadow();
	            }

	            if (!this.coords.w_rs) {
	                return;
	            }

	            if (!this.dragging && !this.force_redraw && !this.is_key) {
	                return;
	            }

	            if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {

	                this.drawLabels();

	                this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
	                this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";

	                if (this.options.type === "single") {
	                    this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%";

	                    this.$cache.single[0].style.left = this.labels.p_single_left + "%";

	                    if (this.options.values.length) {
	                        this.$cache.input.prop("value", this.result.from_value);
	                    } else {
	                        this.$cache.input.prop("value", this.result.from);
	                    }
	                    this.$cache.input.data("from", this.result.from);
	                } else {
	                    this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%";
	                    this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%";

	                    if (this.old_from !== this.result.from || this.force_redraw) {
	                        this.$cache.from[0].style.left = this.labels.p_from_left + "%";
	                    }
	                    if (this.old_to !== this.result.to || this.force_redraw) {
	                        this.$cache.to[0].style.left = this.labels.p_to_left + "%";
	                    }

	                    this.$cache.single[0].style.left = this.labels.p_single_left + "%";

	                    if (this.options.values.length) {
	                        this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value);
	                    } else {
	                        this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to);
	                    }
	                    this.$cache.input.data("from", this.result.from);
	                    this.$cache.input.data("to", this.result.to);
	                }

	                if ((this.old_from !== this.result.from || this.old_to !== this.result.to) && !this.is_start) {
	                    this.$cache.input.trigger("change");
	                }

	                this.old_from = this.result.from;
	                this.old_to = this.result.to;

	                // callbacks call
	                if (!this.is_resize && !this.is_update && !this.is_start && !this.is_finish) {
	                    this.callOnChange();
	                }
	                if (this.is_key || this.is_click) {
	                    this.is_key = false;
	                    this.is_click = false;
	                    this.callOnFinish();
	                }

	                this.is_update = false;
	                this.is_resize = false;
	                this.is_finish = false;
	            }

	            this.is_start = false;
	            this.is_key = false;
	            this.is_click = false;
	            this.force_redraw = false;
	        },

	        /**
	         * Draw labels
	         * measure labels collisions
	         * collapse close labels
	         */
	        drawLabels: function drawLabels() {
	            if (!this.options) {
	                return;
	            }

	            var values_num = this.options.values.length,
	                p_values = this.options.p_values,
	                text_single,
	                text_from,
	                text_to;

	            if (this.options.hide_from_to) {
	                return;
	            }

	            if (this.options.type === "single") {

	                if (values_num) {
	                    text_single = this.decorate(p_values[this.result.from]);
	                    this.$cache.single.html(text_single);
	                } else {
	                    text_single = this.decorate(this._prettify(this.result.from), this.result.from);
	                    this.$cache.single.html(text_single);
	                }

	                this.calcLabels();

	                if (this.labels.p_single_left < this.labels.p_min + 1) {
	                    this.$cache.min[0].style.visibility = "hidden";
	                } else {
	                    this.$cache.min[0].style.visibility = "visible";
	                }

	                if (this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1) {
	                    this.$cache.max[0].style.visibility = "hidden";
	                } else {
	                    this.$cache.max[0].style.visibility = "visible";
	                }
	            } else {

	                if (values_num) {

	                    if (this.options.decorate_both) {
	                        text_single = this.decorate(p_values[this.result.from]);
	                        text_single += this.options.values_separator;
	                        text_single += this.decorate(p_values[this.result.to]);
	                    } else {
	                        text_single = this.decorate(p_values[this.result.from] + this.options.values_separator + p_values[this.result.to]);
	                    }
	                    text_from = this.decorate(p_values[this.result.from]);
	                    text_to = this.decorate(p_values[this.result.to]);

	                    this.$cache.single.html(text_single);
	                    this.$cache.from.html(text_from);
	                    this.$cache.to.html(text_to);
	                } else {

	                    if (this.options.decorate_both) {
	                        text_single = this.decorate(this._prettify(this.result.from), this.result.from);
	                        text_single += this.options.values_separator;
	                        text_single += this.decorate(this._prettify(this.result.to), this.result.to);
	                    } else {
	                        text_single = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.to);
	                    }
	                    text_from = this.decorate(this._prettify(this.result.from), this.result.from);
	                    text_to = this.decorate(this._prettify(this.result.to), this.result.to);

	                    this.$cache.single.html(text_single);
	                    this.$cache.from.html(text_from);
	                    this.$cache.to.html(text_to);
	                }

	                this.calcLabels();

	                var min = Math.min(this.labels.p_single_left, this.labels.p_from_left),
	                    single_left = this.labels.p_single_left + this.labels.p_single_fake,
	                    to_left = this.labels.p_to_left + this.labels.p_to_fake,
	                    max = Math.max(single_left, to_left);

	                if (this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left) {
	                    this.$cache.from[0].style.visibility = "hidden";
	                    this.$cache.to[0].style.visibility = "hidden";
	                    this.$cache.single[0].style.visibility = "visible";

	                    if (this.result.from === this.result.to) {
	                        if (this.target === "from") {
	                            this.$cache.from[0].style.visibility = "visible";
	                        } else if (this.target === "to") {
	                            this.$cache.to[0].style.visibility = "visible";
	                        } else if (!this.target) {
	                            this.$cache.from[0].style.visibility = "visible";
	                        }
	                        this.$cache.single[0].style.visibility = "hidden";
	                        max = to_left;
	                    } else {
	                        this.$cache.from[0].style.visibility = "hidden";
	                        this.$cache.to[0].style.visibility = "hidden";
	                        this.$cache.single[0].style.visibility = "visible";
	                        max = Math.max(single_left, to_left);
	                    }
	                } else {
	                    this.$cache.from[0].style.visibility = "visible";
	                    this.$cache.to[0].style.visibility = "visible";
	                    this.$cache.single[0].style.visibility = "hidden";
	                }

	                if (min < this.labels.p_min + 1) {
	                    this.$cache.min[0].style.visibility = "hidden";
	                } else {
	                    this.$cache.min[0].style.visibility = "visible";
	                }

	                if (max > 100 - this.labels.p_max - 1) {
	                    this.$cache.max[0].style.visibility = "hidden";
	                } else {
	                    this.$cache.max[0].style.visibility = "visible";
	                }
	            }
	        },

	        /**
	         * Draw shadow intervals
	         */
	        drawShadow: function drawShadow() {
	            var o = this.options,
	                c = this.$cache,
	                is_from_min = typeof o.from_min === "number" && !isNaN(o.from_min),
	                is_from_max = typeof o.from_max === "number" && !isNaN(o.from_max),
	                is_to_min = typeof o.to_min === "number" && !isNaN(o.to_min),
	                is_to_max = typeof o.to_max === "number" && !isNaN(o.to_max),
	                from_min,
	                from_max,
	                to_min,
	                to_max;

	            if (o.type === "single") {
	                if (o.from_shadow && (is_from_min || is_from_max)) {
	                    from_min = this.convertToPercent(is_from_min ? o.from_min : o.min);
	                    from_max = this.convertToPercent(is_from_max ? o.from_max : o.max) - from_min;
	                    from_min = this.toFixed(from_min - this.coords.p_handle / 100 * from_min);
	                    from_max = this.toFixed(from_max - this.coords.p_handle / 100 * from_max);
	                    from_min = from_min + this.coords.p_handle / 2;

	                    c.shad_single[0].style.display = "block";
	                    c.shad_single[0].style.left = from_min + "%";
	                    c.shad_single[0].style.width = from_max + "%";
	                } else {
	                    c.shad_single[0].style.display = "none";
	                }
	            } else {
	                if (o.from_shadow && (is_from_min || is_from_max)) {
	                    from_min = this.convertToPercent(is_from_min ? o.from_min : o.min);
	                    from_max = this.convertToPercent(is_from_max ? o.from_max : o.max) - from_min;
	                    from_min = this.toFixed(from_min - this.coords.p_handle / 100 * from_min);
	                    from_max = this.toFixed(from_max - this.coords.p_handle / 100 * from_max);
	                    from_min = from_min + this.coords.p_handle / 2;

	                    c.shad_from[0].style.display = "block";
	                    c.shad_from[0].style.left = from_min + "%";
	                    c.shad_from[0].style.width = from_max + "%";
	                } else {
	                    c.shad_from[0].style.display = "none";
	                }

	                if (o.to_shadow && (is_to_min || is_to_max)) {
	                    to_min = this.convertToPercent(is_to_min ? o.to_min : o.min);
	                    to_max = this.convertToPercent(is_to_max ? o.to_max : o.max) - to_min;
	                    to_min = this.toFixed(to_min - this.coords.p_handle / 100 * to_min);
	                    to_max = this.toFixed(to_max - this.coords.p_handle / 100 * to_max);
	                    to_min = to_min + this.coords.p_handle / 2;

	                    c.shad_to[0].style.display = "block";
	                    c.shad_to[0].style.left = to_min + "%";
	                    c.shad_to[0].style.width = to_max + "%";
	                } else {
	                    c.shad_to[0].style.display = "none";
	                }
	            }
	        },

	        // =============================================================================================================
	        // Callbacks

	        callOnStart: function callOnStart() {
	            if (this.options.onStart && typeof this.options.onStart === "function") {
	                this.options.onStart(this.result);
	            }
	        },
	        callOnChange: function callOnChange() {
	            if (this.options.onChange && typeof this.options.onChange === "function") {
	                this.options.onChange(this.result);
	            }
	        },
	        callOnFinish: function callOnFinish() {
	            if (this.options.onFinish && typeof this.options.onFinish === "function") {
	                this.options.onFinish(this.result);
	            }
	        },
	        callOnUpdate: function callOnUpdate() {
	            if (this.options.onUpdate && typeof this.options.onUpdate === "function") {
	                this.options.onUpdate(this.result);
	            }
	        },

	        // =============================================================================================================
	        // Service methods

	        toggleInput: function toggleInput() {
	            this.$cache.input.toggleClass("irs-hidden-input");
	        },

	        /**
	         * Convert real value to percent
	         *
	         * @param value {Number} X in real
	         * @param no_min {boolean=} don't use min value
	         * @returns {Number} X in percent
	         */
	        convertToPercent: function convertToPercent(value, no_min) {
	            var diapason = this.options.max - this.options.min,
	                one_percent = diapason / 100,
	                val,
	                percent;

	            if (!diapason) {
	                this.no_diapason = true;
	                return 0;
	            }

	            if (no_min) {
	                val = value;
	            } else {
	                val = value - this.options.min;
	            }

	            percent = val / one_percent;

	            return this.toFixed(percent);
	        },

	        /**
	         * Convert percent to real values
	         *
	         * @param percent {Number} X in percent
	         * @returns {Number} X in real
	         */
	        convertToValue: function convertToValue(percent) {
	            var min = this.options.min,
	                max = this.options.max,
	                min_decimals = min.toString().split(".")[1],
	                max_decimals = max.toString().split(".")[1],
	                min_length,
	                max_length,
	                avg_decimals = 0,
	                abs = 0;

	            if (percent === 0) {
	                return this.options.min;
	            }
	            if (percent === 100) {
	                return this.options.max;
	            }

	            if (min_decimals) {
	                min_length = min_decimals.length;
	                avg_decimals = min_length;
	            }
	            if (max_decimals) {
	                max_length = max_decimals.length;
	                avg_decimals = max_length;
	            }
	            if (min_length && max_length) {
	                avg_decimals = min_length >= max_length ? min_length : max_length;
	            }

	            if (min < 0) {
	                abs = Math.abs(min);
	                min = +(min + abs).toFixed(avg_decimals);
	                max = +(max + abs).toFixed(avg_decimals);
	            }

	            var number = (max - min) / 100 * percent + min,
	                string = this.options.step.toString().split(".")[1],
	                result;

	            if (string) {
	                number = +number.toFixed(string.length);
	            } else {
	                number = number / this.options.step;
	                number = number * this.options.step;

	                number = +number.toFixed(0);
	            }

	            if (abs) {
	                number -= abs;
	            }

	            if (string) {
	                result = +number.toFixed(string.length);
	            } else {
	                result = this.toFixed(number);
	            }

	            if (result < this.options.min) {
	                result = this.options.min;
	            } else if (result > this.options.max) {
	                result = this.options.max;
	            }

	            return result;
	        },

	        /**
	         * Round percent value with step
	         *
	         * @param percent {Number}
	         * @returns percent {Number} rounded
	         */
	        calcWithStep: function calcWithStep(percent) {
	            var rounded = Math.round(percent / this.coords.p_step) * this.coords.p_step;

	            if (rounded > 100) {
	                rounded = 100;
	            }
	            if (percent === 100) {
	                rounded = 100;
	            }

	            return this.toFixed(rounded);
	        },

	        checkMinInterval: function checkMinInterval(p_current, p_next, type) {
	            var o = this.options,
	                current,
	                next;

	            if (!o.min_interval) {
	                return p_current;
	            }

	            current = this.convertToValue(p_current);
	            next = this.convertToValue(p_next);

	            if (type === "from") {

	                if (next - current < o.min_interval) {
	                    current = next - o.min_interval;
	                }
	            } else {

	                if (current - next < o.min_interval) {
	                    current = next + o.min_interval;
	                }
	            }

	            return this.convertToPercent(current);
	        },

	        checkMaxInterval: function checkMaxInterval(p_current, p_next, type) {
	            var o = this.options,
	                current,
	                next;

	            if (!o.max_interval) {
	                return p_current;
	            }

	            current = this.convertToValue(p_current);
	            next = this.convertToValue(p_next);

	            if (type === "from") {

	                if (next - current > o.max_interval) {
	                    current = next - o.max_interval;
	                }
	            } else {

	                if (current - next > o.max_interval) {
	                    current = next + o.max_interval;
	                }
	            }

	            return this.convertToPercent(current);
	        },

	        checkDiapason: function checkDiapason(p_num, min, max) {
	            var num = this.convertToValue(p_num),
	                o = this.options;

	            if (typeof min !== "number") {
	                min = o.min;
	            }

	            if (typeof max !== "number") {
	                max = o.max;
	            }

	            if (num < min) {
	                num = min;
	            }

	            if (num > max) {
	                num = max;
	            }

	            return this.convertToPercent(num);
	        },

	        toFixed: function toFixed(num) {
	            num = num.toFixed(9);
	            return +num;
	        },

	        _prettify: function _prettify(num) {
	            if (!this.options.prettify_enabled) {
	                return num;
	            }

	            if (this.options.prettify && typeof this.options.prettify === "function") {
	                return this.options.prettify(num);
	            } else {
	                return this.prettify(num);
	            }
	        },

	        prettify: function prettify(num) {
	            var n = num.toString();
	            return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
	        },

	        checkEdges: function checkEdges(left, width) {
	            if (!this.options.force_edges) {
	                return this.toFixed(left);
	            }

	            if (left < 0) {
	                left = 0;
	            } else if (left > 100 - width) {
	                left = 100 - width;
	            }

	            return this.toFixed(left);
	        },

	        validate: function validate() {
	            var o = this.options,
	                r = this.result,
	                v = o.values,
	                vl = v.length,
	                value,
	                i;

	            if (typeof o.min === "string") o.min = +o.min;
	            if (typeof o.max === "string") o.max = +o.max;
	            if (typeof o.from === "string") o.from = +o.from;
	            if (typeof o.to === "string") o.to = +o.to;
	            if (typeof o.step === "string") o.step = +o.step;

	            if (typeof o.from_min === "string") o.from_min = +o.from_min;
	            if (typeof o.from_max === "string") o.from_max = +o.from_max;
	            if (typeof o.to_min === "string") o.to_min = +o.to_min;
	            if (typeof o.to_max === "string") o.to_max = +o.to_max;

	            if (typeof o.keyboard_step === "string") o.keyboard_step = +o.keyboard_step;
	            if (typeof o.grid_num === "string") o.grid_num = +o.grid_num;

	            if (o.max < o.min) {
	                o.max = o.min;
	            }

	            if (vl) {
	                o.p_values = [];
	                o.min = 0;
	                o.max = vl - 1;
	                o.step = 1;
	                o.grid_num = o.max;
	                o.grid_snap = true;

	                for (i = 0; i < vl; i++) {
	                    value = +v[i];

	                    if (!isNaN(value)) {
	                        v[i] = value;
	                        value = this._prettify(value);
	                    } else {
	                        value = v[i];
	                    }

	                    o.p_values.push(value);
	                }
	            }

	            if (typeof o.from !== "number" || isNaN(o.from)) {
	                o.from = o.min;
	            }

	            if (typeof o.to !== "number" || isNaN(o.from)) {
	                o.to = o.max;
	            }

	            if (o.type === "single") {

	                if (o.from < o.min) {
	                    o.from = o.min;
	                }

	                if (o.from > o.max) {
	                    o.from = o.max;
	                }
	            } else {

	                if (o.from < o.min || o.from > o.max) {
	                    o.from = o.min;
	                }
	                if (o.to > o.max || o.to < o.min) {
	                    o.to = o.max;
	                }
	                if (o.from > o.to) {
	                    o.from = o.to;
	                }
	            }

	            if (typeof o.step !== "number" || isNaN(o.step) || !o.step || o.step < 0) {
	                o.step = 1;
	            }

	            if (typeof o.keyboard_step !== "number" || isNaN(o.keyboard_step) || !o.keyboard_step || o.keyboard_step < 0) {
	                o.keyboard_step = 5;
	            }

	            if (typeof o.from_min === "number" && o.from < o.from_min) {
	                o.from = o.from_min;
	            }

	            if (typeof o.from_max === "number" && o.from > o.from_max) {
	                o.from = o.from_max;
	            }

	            if (typeof o.to_min === "number" && o.to < o.to_min) {
	                o.to = o.to_min;
	            }

	            if (typeof o.to_max === "number" && o.from > o.to_max) {
	                o.to = o.to_max;
	            }

	            if (r) {
	                if (r.min !== o.min) {
	                    r.min = o.min;
	                }

	                if (r.max !== o.max) {
	                    r.max = o.max;
	                }

	                if (r.from < r.min || r.from > r.max) {
	                    r.from = o.from;
	                }

	                if (r.to < r.min || r.to > r.max) {
	                    r.to = o.to;
	                }
	            }

	            if (typeof o.min_interval !== "number" || isNaN(o.min_interval) || !o.min_interval || o.min_interval < 0) {
	                o.min_interval = 0;
	            }

	            if (typeof o.max_interval !== "number" || isNaN(o.max_interval) || !o.max_interval || o.max_interval < 0) {
	                o.max_interval = 0;
	            }

	            if (o.min_interval && o.min_interval > o.max - o.min) {
	                o.min_interval = o.max - o.min;
	            }

	            if (o.max_interval && o.max_interval > o.max - o.min) {
	                o.max_interval = o.max - o.min;
	            }
	        },

	        decorate: function decorate(num, original) {
	            var decorated = "",
	                o = this.options;

	            if (o.prefix) {
	                decorated += o.prefix;
	            }

	            decorated += num;

	            if (o.max_postfix) {
	                if (o.values.length && num === o.p_values[o.max]) {
	                    decorated += o.max_postfix;
	                    if (o.postfix) {
	                        decorated += " ";
	                    }
	                } else if (original === o.max) {
	                    decorated += o.max_postfix;
	                    if (o.postfix) {
	                        decorated += " ";
	                    }
	                }
	            }

	            if (o.postfix) {
	                decorated += o.postfix;
	            }

	            return decorated;
	        },

	        updateFrom: function updateFrom() {
	            this.result.from = this.options.from;
	            this.result.from_percent = this.convertToPercent(this.result.from);
	            if (this.options.values) {
	                this.result.from_value = this.options.values[this.result.from];
	            }
	        },

	        updateTo: function updateTo() {
	            this.result.to = this.options.to;
	            this.result.to_percent = this.convertToPercent(this.result.to);
	            if (this.options.values) {
	                this.result.to_value = this.options.values[this.result.to];
	            }
	        },

	        updateResult: function updateResult() {
	            this.result.min = this.options.min;
	            this.result.max = this.options.max;
	            this.updateFrom();
	            this.updateTo();
	        },

	        // =============================================================================================================
	        // Grid

	        appendGrid: function appendGrid() {
	            if (!this.options.grid) {
	                return;
	            }

	            var o = this.options,
	                i,
	                z,
	                total = o.max - o.min,
	                big_num = o.grid_num,
	                big_p = 0,
	                big_w = 0,
	                small_max = 4,
	                local_small_max,
	                small_p,
	                small_w = 0,
	                result,
	                html = '';

	            this.calcGridMargin();

	            if (o.grid_snap) {
	                big_num = total / o.step;
	                big_p = this.toFixed(o.step / (total / 100));
	            } else {
	                big_p = this.toFixed(100 / big_num);
	            }

	            if (big_num > 4) {
	                small_max = 3;
	            }
	            if (big_num > 7) {
	                small_max = 2;
	            }
	            if (big_num > 14) {
	                small_max = 1;
	            }
	            if (big_num > 28) {
	                small_max = 0;
	            }

	            for (i = 0; i < big_num + 1; i++) {
	                local_small_max = small_max;

	                big_w = this.toFixed(big_p * i);

	                if (big_w > 100) {
	                    big_w = 100;

	                    local_small_max -= 2;
	                    if (local_small_max < 0) {
	                        local_small_max = 0;
	                    }
	                }
	                this.coords.big[i] = big_w;

	                small_p = (big_w - big_p * (i - 1)) / (local_small_max + 1);

	                for (z = 1; z <= local_small_max; z++) {
	                    if (big_w === 0) {
	                        break;
	                    }

	                    small_w = this.toFixed(big_w - small_p * z);

	                    html += '<span class="irs-grid-pol small" style="left: ' + small_w + '%"></span>';
	                }

	                html += '<span class="irs-grid-pol" style="left: ' + big_w + '%"></span>';

	                result = this.convertToValue(big_w);
	                if (o.values.length) {
	                    result = o.p_values[result];
	                } else {
	                    result = this._prettify(result);
	                }

	                html += '<span class="irs-grid-text js-grid-text-' + i + '" style="left: ' + big_w + '%">' + result + '</span>';
	            }
	            this.coords.big_num = Math.ceil(big_num + 1);

	            this.$cache.cont.addClass("irs-with-grid");
	            this.$cache.grid.html(html);
	            this.cacheGridLabels();
	        },

	        cacheGridLabels: function cacheGridLabels() {
	            var $label,
	                i,
	                num = this.coords.big_num;

	            for (i = 0; i < num; i++) {
	                $label = this.$cache.grid.find(".js-grid-text-" + i);
	                this.$cache.grid_labels.push($label);
	            }

	            this.calcGridLabels();
	        },

	        calcGridLabels: function calcGridLabels() {
	            var i,
	                label,
	                start = [],
	                finish = [],
	                num = this.coords.big_num;

	            for (i = 0; i < num; i++) {
	                this.coords.big_w[i] = this.$cache.grid_labels[i].outerWidth(false);
	                this.coords.big_p[i] = this.toFixed(this.coords.big_w[i] / this.coords.w_rs * 100);
	                this.coords.big_x[i] = this.toFixed(this.coords.big_p[i] / 2);

	                start[i] = this.toFixed(this.coords.big[i] - this.coords.big_x[i]);
	                finish[i] = this.toFixed(start[i] + this.coords.big_p[i]);
	            }

	            if (this.options.force_edges) {
	                if (start[0] < -this.coords.grid_gap) {
	                    start[0] = -this.coords.grid_gap;
	                    finish[0] = this.toFixed(start[0] + this.coords.big_p[0]);

	                    this.coords.big_x[0] = this.coords.grid_gap;
	                }

	                if (finish[num - 1] > 100 + this.coords.grid_gap) {
	                    finish[num - 1] = 100 + this.coords.grid_gap;
	                    start[num - 1] = this.toFixed(finish[num - 1] - this.coords.big_p[num - 1]);

	                    this.coords.big_x[num - 1] = this.toFixed(this.coords.big_p[num - 1] - this.coords.grid_gap);
	                }
	            }

	            this.calcGridCollision(2, start, finish);
	            this.calcGridCollision(4, start, finish);

	            for (i = 0; i < num; i++) {
	                label = this.$cache.grid_labels[i][0];
	                label.style.marginLeft = -this.coords.big_x[i] + "%";
	            }
	        },

	        // Collisions Calc Beta
	        // TODO: Refactor then have plenty of time
	        calcGridCollision: function calcGridCollision(step, start, finish) {
	            var i,
	                next_i,
	                label,
	                num = this.coords.big_num;

	            for (i = 0; i < num; i += step) {
	                next_i = i + step / 2;
	                if (next_i >= num) {
	                    break;
	                }

	                label = this.$cache.grid_labels[next_i][0];

	                if (finish[i] <= start[next_i]) {
	                    label.style.visibility = "visible";
	                } else {
	                    label.style.visibility = "hidden";
	                }
	            }
	        },

	        calcGridMargin: function calcGridMargin() {
	            if (!this.options.grid_margin) {
	                return;
	            }

	            this.coords.w_rs = this.$cache.rs.outerWidth(false);
	            if (!this.coords.w_rs) {
	                return;
	            }

	            if (this.options.type === "single") {
	                this.coords.w_handle = this.$cache.s_single.outerWidth(false);
	            } else {
	                this.coords.w_handle = this.$cache.s_from.outerWidth(false);
	            }
	            this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
	            this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - 0.1);

	            this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%";
	            this.$cache.grid[0].style.left = this.coords.grid_gap + "%";
	        },

	        // =============================================================================================================
	        // Public methods

	        update: function update(options) {
	            if (!this.input) {
	                return;
	            }

	            this.is_update = true;

	            this.options.from = this.result.from;
	            this.options.to = this.result.to;

	            this.options = $.extend(this.options, options);
	            this.validate();
	            this.updateResult(options);

	            this.toggleInput();
	            this.remove();
	            this.init(true);
	        },

	        reset: function reset() {
	            if (!this.input) {
	                return;
	            }

	            this.updateResult();
	            this.update();
	        },

	        destroy: function destroy() {
	            if (!this.input) {
	                return;
	            }

	            this.toggleInput();
	            this.$cache.input.prop("readonly", false);
	            $.data(this.input, "ionRangeSlider", null);

	            this.remove();
	            this.input = null;
	            this.options = null;
	        }
	    };

	    $.fn.ionRangeSlider = function (options) {
	        return this.each(function () {
	            if (!$.data(this, "ionRangeSlider")) {
	                $.data(this, "ionRangeSlider", new IonRangeSlider(this, options, plugin_count++));
	            }
	        });
	    };

	    // =================================================================================================================
	    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

	    // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

	    // MIT license

	    (function () {
	        var lastTime = 0;
	        var vendors = ['ms', 'moz', 'webkit', 'o'];
	        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	        }

	        if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
	            var currTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	            var id = window.setTimeout(function () {
	                callback(currTime + timeToCall);
	            }, timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };

	        if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
	            clearTimeout(id);
	        };
	    })();
	});

/***/ }
/******/ ]);
//# sourceMappingURL=scripts.js.map
