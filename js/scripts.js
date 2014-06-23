/*
 * Bones Scripts File
 * Author: Eddie Machado
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
*/


/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y }
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;


/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 * Pretty cool huh? You can create functions like this to conditionally load
 * content and other stuff dependent on the viewport.
 * Remember that mobile devices and javascript aren't the best of friends.
 * Keep it light and always make sure the larger viewports are doing the heavy lifting.
 *
*/

/*
 * We're going to swap out the gravatars.
 * In the functions.php file, you can see we're not loading the gravatar
 * images on mobile to save bandwidth. Once we hit an acceptable viewport
 * then we can swap out those images since they are located in a data attribute.
*/
function loadGravatars() {
  // set the viewport using the function above
  viewport = updateViewportDimensions();
  // if the viewport is tablet or larger, we load in the gravatars
  if (viewport.width >= 768) {
  jQuery('.comment img[data-gravatar]').each(function(){
    jQuery(this).attr('src',jQuery(this).attr('data-gravatar'));
  });
	}
} // end function

if ( viewport.width < 600 ) {
	jQuery(document).ready(function($) {
		$("#my-menu").mmenu();
	}); 
}

if ( viewport.width >= 600 &&  viewport.width < 768 ) {
	jQuery(function(){
		jQuery('.site-header').data('size','big');
	});

	jQuery(window).scroll(function(){
		if(jQuery(document).scrollTop() > 0) {
			if(jQuery('.site-header').data('size') == 'big') {
				jQuery('.site-header').data('size','small');
				jQuery('.site-header').stop().animate({
					height:'3rem'
				},600);
				jQuery('.site-branding .site-title').stop().animate({
					margin: "-1rem 0rem 0rem 0rem"
				},600);	
				jQuery('.main-navigation').stop().animate({
					margin: "-3rem 0rem 0rem 0rem"
				},600);	
				/*
				jQuery('.nav-menu').stop().animate({
					},600);					
				*/
			}
		} else {
			if(jQuery('.site-header').data('size') == 'small') {
				jQuery('.site-header').data('size','big');
				jQuery('.site-header').stop().animate({
					height:'11rem'
				},600);
				jQuery('.site-branding .site-title').stop().animate({
					margin: "0rem 0rem 0rem 0rem"
				},600);	
				jQuery('.main-navigation').stop().animate({
					margin: "0rem 0rem 0rem 0rem"
				},600);
				/*
				jQuery('.nav-menu').stop().animate({
					},600);
				*/
			}  
		}
	}); 
	
	jQuery(function(){
		jQuery('.site-main').data('size','big');
	});

	jQuery(window).scroll(function(){
		if(jQuery(document).scrollTop() > 0) {
			if(jQuery('.site-main').data('size') == 'big') {
				jQuery('.site-main').data('size','small');
				jQuery('.site-main').stop().animate({
					margin: "3rem auto 0rem auto"
				},600);								
			}
		} else {
			if(jQuery('.site-main').data('size') == 'small') {
				jQuery('.site-main').data('size','big');
				jQuery('.site-main').stop().animate({
					margin: "11rem auto 0rem auto"
				},600);								
			}  
		}
	});  
	
}

if ( viewport.width >= 768 ) {
	jQuery(function(){
		jQuery('.site-header').data('size','big');
	});

	jQuery(window).scroll(function(){
		if(jQuery(document).scrollTop() > 0) {
			if(jQuery('.site-header').data('size') == 'big') {
				jQuery('.site-header').data('size','small');
				jQuery('.site-header').stop().animate({
					height:'5rem'
				},600);
				jQuery('.site-branding .site-title').stop().animate({
					margin: "-1rem 0rem 0rem 0rem"
				},600);	
				jQuery('.main-navigation').stop().animate({
					margin: "-7rem 0rem 0rem 0rem"
				},600);	
				/*
				jQuery('.nav-menu').stop().animate({
					},600);					
				*/
			}
		} else {
			if(jQuery('.site-header').data('size') == 'small') {
				jQuery('.site-header').data('size','big');
				jQuery('.site-header').stop().animate({
					height:'15rem'
				},600);
				jQuery('.site-branding .site-title').stop().animate({
					margin: "0rem 0rem 0rem 0rem"
				},600);	
				jQuery('.main-navigation').stop().animate({
					margin: "-3rem 0rem 0rem 0rem"
				},600);
				/*
				jQuery('.nav-menu').stop().animate({
					},600);
				*/
			}  
		}
	}); 
	
	jQuery(function(){
		jQuery('.site-main').data('size','big');
	});

	jQuery(window).scroll(function(){
		if(jQuery(document).scrollTop() > 0) {
			if(jQuery('.site-main').data('size') == 'big') {
				jQuery('.site-main').data('size','small');
				jQuery('.site-main').stop().animate({
					margin: "7rem auto 0rem auto"
				},600);								
			}
		} else {
			if(jQuery('.site-main').data('size') == 'small') {
				jQuery('.site-main').data('size','big');
				jQuery('.site-main').stop().animate({
					margin: "14rem auto 0rem auto"
				},600);								
			}  
		}
	});
	
}	
/*
 * Put all your regular jQuery in here.
*/

/**********************
add all your scripts here
***********************/

jQuery(document).ready(function($) {

  /*
   * Let's fire off the gravatar function
   * You can remove this if you don't need it
  */
  loadGravatars();


/*! HTML5 Shiv v3.6 stable | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");
var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header mark meter nav output progress section summary time video",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,
b){a||(a=f);if(g)return a.createDocumentFragment();for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);

	
// Skip Link Focus Fix
( function() {
	var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( is_webkit || is_opera || is_ie ) && 'undefined' !== typeof( document.getElementById ) ) {
		var eventMethod = ( window.addEventListener ) ? 'addEventListener' : 'attachEvent';
		window[ eventMethod ]( 'hashchange', function() {
			var element = document.getElementById( location.hash.substring( 1 ) );

			if ( element ) {
				if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
					element.tabIndex = -1;

				element.focus();
			}
		}, false );
	}
})();

// Keyboard Image Navigation
jQuery( document ).ready( function( $ ) {
	$( document ).keydown( function( e ) {
		var url = false;
		if ( e.which == 37 ) {  // Left arrow key code
			url = $( '.previous-image a' ).attr( 'href' );
		}
		else if ( e.which == 39 ) {  // Right arrow key code
			url = $( '.entry-attachment a' ).attr( 'href' );
		}
		if ( url && ( !$( 'textarea, input' ).is( ':focus' ) ) ) {
			window.location = url;
		}
	} );
} );

}); /* end of as page load scripts */