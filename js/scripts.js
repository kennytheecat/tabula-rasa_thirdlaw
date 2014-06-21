/*
Bones Scripts File
Author: Eddie Machado

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

Table of Contents
- IE8 ployfill for GetComputed Style (for Responsive Script below)
- Responsive Query Section
	-  if is below 481px 
	- if is larger than 481px 
	- if is above or equal to 768px 
		- load gravatars 
	- if larger than 1030px
	- add all your scripts here
		- html5.js
			// html5 shiv
		- customizer.js
			// Theme Customizer enhancements for a better user experience.
		- keyboard-image-navigation.js
			// Keyboard Image Navigation
		- skip-link-focus-fix.js
			// Skip Link Focus Fix
		- navigation.js
			// Handles toggling the navigation menu for small screens.
- A fix for the iOS orientationchange zoom bug
*/

// IE8 ployfill for GetComputed Style (for Responsive Script below)
if (!window.getComputedStyle) {
    window.getComputedStyle = function(el, pseudo) {
        this.el = el;
        this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
                prop = prop.replace(re, function () {
                    return arguments[2].toUpperCase();
                });
            }
            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        }
        return this;
    }
}

// as the page loads, call these scripts
jQuery(document).ready(function($) {

    /*
    Responsive jQuery is a tricky thing.
    There's a bunch of different ways to handle
    it, so be sure to research and find the one
    that works for you best.
    */
    
    /* getting viewport width */
    var responsive_viewport = $(window).width();
    
    /* if is below 481px */
    if (responsive_viewport < 550) {
			jQuery(document).ready(function($) {
				$("#my-menu").mmenu();
			});     
    } /* end smallest screen */
    
    /* if is larger than 481px */
    if (responsive_viewport > 481) {
        
    } /* end larger than 481px */
    
    /* if is above or equal to 768px */
    if (responsive_viewport >= 600) {
			jQuery(function(){
					jQuery('.site-header').data('size','big');
			});

			jQuery(window).scroll(function(){
					if(jQuery(document).scrollTop() > 0)
					{
							if(jQuery('.site-header').data('size') == 'big')
							{
									jQuery('.site-header').data('size','small');
									jQuery('.site-header').stop().animate({
											height:'50px'
									},600);
									jQuery('.site-branding .site-title').stop().animate({
											margin: "-33px 0px 0px 0px"
									},600);		
									jQuery('.nav-menu').stop().animate({
											margin: "-15px 0px 0px 0px"
									},600);					
							}
					}
					else
					{
							if(jQuery('.site-header').data('size') == 'small')
							{
									jQuery('.site-header').data('size','big');
									jQuery('.site-header').stop().animate({
											height:'170px'
									},600);
									jQuery('.site-branding .site-title').stop().animate({
											margin: "0px 0px 0px 0px"
									},600);	
									jQuery('.nav-menu').stop().animate({
											margin: "55px 0px 0px 0px"
									},600);						
							}  
					}
			});  

			jQuery(function(){
					jQuery('.site-main').data('size','big');
			});

			jQuery(window).scroll(function(){
					if(jQuery(document).scrollTop() > 0)
					{
							if(jQuery('.site-main').data('size') == 'big')
							{
									jQuery('.site-main').data('size','small');
									jQuery('.site-main').stop().animate({
											margin: "80px auto 0px auto"
									},600);								
							}
					}
					else
					{
							if(jQuery('.site-main').data('size') == 'small')
							{
									jQuery('.site-main').data('size','big');
									jQuery('.site-main').stop().animate({
											margin: "150px auto 0px auto"
									},600);								
							}  
					}
			});  	
			
			/* load gravatars */
			$('.comment img[data-gravatar]').each(function(){
					$(this).attr('src',$(this).attr('data-gravatar'));
			});
        
    }
    
    /* off the bat large screen actions */
    if (responsive_viewport > 1030) {
        
    }
    
	
/**********************
add all your scripts here
***********************/

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