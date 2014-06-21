<?php
/**
 * The template for displaying the footer.
 *
 * Contains footer content and the closing of the
 * #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>
	</div><!-- #main -->
	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="inner-footer">
			<div class="site-info">
				<p class="mobile"><a href="<?php echo home_url() . '/contact/'; ?>">CONTACT</a></p>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<p class="site-description"><?php bloginfo( 'description' ); ?></p>		
			</div><!-- .site-info -->
		</div>
	</footer>
</div><!-- #page -->

<?php wp_footer(); ?>
<?php if ( is_front_page() ) { ?>
	<script type="text/javascript">
	jQuery(document).ready(function() {
		jQuery('#slider').cycle({
			fx: 'fade',
			timeout:    4000,
			speed:      1500,
			next: '#promonav .next',
			pager:    '#promoindex',
			pause: 1
		});
	});	
	</script>
	
<script type="text/javascript">
(function(jQuery) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  jQuery.fn.visible = function(partial) {
    
      var $t            = jQuery(this),
          $w            = jQuery(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = jQuery(window);

var siteHeader = jQuery(".site-header");
siteHeader.each(function(i, el) {
  var el = jQuery(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) { 
  siteHeader.each(function(i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("site-header-pizazz"); 
    } 
  });
});

var allMods = jQuery(".blurb img");
allMods.each(function(i, el) {
  var el = jQuery(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) { 
  allMods.each(function(i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("pizazz"); 
    } 
  });
});

var quotes = jQuery(".quote");
quotes.each(function(i, el) {
  var el = jQuery(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) { 
  quotes.each(function(i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("quotesPizazz"); 
    } 
  }); 
});

var quotesAuthor = jQuery(".quote-author");
quotesAuthor.each(function(i, el) {
  var el = jQuery(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) { 
  quotesAuthor.each(function(i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("quotesAuthorPizazz"); 
    } 
  }); 
});
</script>	
<?php } ?>
</body>
</html>