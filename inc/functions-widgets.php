<?php
/* Portfolio
*****************************************/
function portfolio() { 
	echo '
	<aside class="widget">
	<h3 class="widget-title">Portfolio</h3>
	<div class="portfolio widget">';

	$args = array (
		'post_type' 							=> 'portfolio',
		'posts_per_page'         	=> '4',
		'orderby'									=> 'rand'
	);		
	$archive = new WP_Query( $args );
	while($archive->have_posts()) : $archive->the_post();
	
	echo '
	<article id="post-';
	echo the_ID(); 
	echo '
	" ';
	echo post_class(); 
	echo '
	>
		<h3 class="entry-title"><a href="';
			echo get_permalink(); 
			echo '
			">';
			echo the_title();
			echo '
			</a></h3>
		<div class="slider-image">
			<a href="';
			echo get_permalink(); 
			echo '
			">';
			echo the_post_thumbnail( 'home-blog2' );
			echo  '
			</a>
		</div>
		<div class="blurb">
				<div class="entry-content">';
				$excerpt_length = 200;
				$blog_excerpt = get_the_content();
				$text = strip_tags($blog_excerpt);
				if (strlen($text) > $excerpt_length) {
					echo $text = substr( $text, 0, $excerpt_length - 3 ).'...';
				} else {
					echo $text;
				}
				echo '
			</div><!-- .entry-content -->
		</div><!-- .blurb -->
	</article><!-- #post -->';	

	endwhile; // end of the loop.

	echo '
	</div
	</aside>
	';
}

function register_widgets() {
	register_sidebar_widget('Portfolio', 'portfolio');
}
add_action('widgets_init', 'register_widgets');
?>