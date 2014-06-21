<?php
/** Home Page **/
get_header(); 
?>
	<div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">
			<div class="slider-container">
				<div id="slider">
					<?php				
					$args = array (
						'post_type' 							=> 'portfolio',
						'posts_per_page'         	=> '4',
						'orderby'									=> 'rand'
					);		
					$archive = new WP_Query( $args );
					while($archive->have_posts()) : $archive->the_post(); ?>
					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<div class="slider-image">
							<a href="<?php echo get_permalink(); ?>"><?php the_post_thumbnail( 'slider' ); ?></a>
						</div>
						<div class="blurb">
							<h3 class="entry-title"><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h3>
								<div class="entry-content">
								<?php
								$excerpt_length = 500;
								$blog_excerpt = get_the_content();
								$text = strip_tags($blog_excerpt);
								if (strlen($text) > $excerpt_length) {
									echo $text = substr( $text, 0, $excerpt_length - 3 ).'...';
								} else {
									echo $text;
								}
								?>
							</div><!-- .entry-content -->
						</div><!-- .blurb -->
					</article><!-- #post -->	
					<?php 
					endwhile; // end of the loop.
					?>			
				</div>
			</div>
			<section class="main-quote">
				<video autoplay loop muted>
					<source src="<?php echo get_template_directory_uri();?>/images/androm-spin.mp4" type="video/mp4">
				</video>
				<div class="inner-main-quote">
					<p class="quote">Any sufficiently advanced technology is indistinguishable from magic.</p>
					<p class="quote-author">- Arthur C. Clark's Third Law</p>
				</div>
			</section>
			<section class="blurbs">
				<div class="blurb">
					<h2><a href="<?php echo home_url(). '/portfolio/'; ?>">Portfolio</a></h2>
					<a href="<?php echo home_url(). '/portfolio/'; ?>"><img src="<?php echo home_url(). '/wp-content/themes/tabula-rasa_thirdlaw/images/portfolio.png'; ?>" alt="Portfolio"></a>
					<p><a href="<?php echo home_url(). '/portfolio/'; ?>">Third Law is based in Northern Arizona and provides web design soultions for clients mainly in the local Prescott area. Take a look... you will see some familiar faces!</a></p>
				</div>
				<div class="blurb">
					<h2><a href="<?php echo home_url(). '/features/'; ?>">Features</a></h2>
					<a href="<?php echo home_url(). '/features/'; ?>"><img src="<?php echo home_url(). '/wp-content/themes/tabula-rasa_thirdlaw/images/services.png'; ?>" alt="Services"></a>
					<p><a href="<?php echo home_url(). '/features/'; ?>">Third Law develops websites to be both beautiful and functional, and designed specifically to be ranked high in search terms for businesses in Prescott, Arizona.</a></p>				
				</div>
				<div class="blurb">
					<h2><a href="<?php echo home_url(). '/contact/'; ?>">Contact</a></h2>
					<a href="<?php echo home_url(). '/contact/'; ?>"><img src="<?php echo home_url(). '/wp-content/themes/tabula-rasa_thirdlaw/images/contact.png'; ?>" alt="Contact"></a>
					<p><a href="<?php echo home_url(). '/contact/'; ?>">Whatever your questions are, whatever stage your site is in, whatever your needs are -  a full-scale web design or just a few hours of maintenance, you'll be taken care of.</a></p>
				</div>
			</section>
			<section class="blogs">
				<div class="blogs_container">
					<div class="blog-wordpress">
						<h2>Wordpress Articles</h2>
						<?php 
						$cat_name = 'wordpress';
						$cat_id = get_cat_ID( $cat_name );
						$cat_link = get_category_link( $cat_id );					
						$args = array (
							'category_name'          => $cat_name,
							'posts_per_page'         => '4',
						);
						$archive = new WP_Query( $args );
						while($archive->have_posts()) : $archive->the_post(); ?>
							<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
									<h3 class="entry-title"><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h3>
									<div class="entry-thumbnail">
										<a href="<?php echo get_permalink(); ?>">
										<?php the_post_thumbnail('home-blog1'); ?>
										</a>
									</div>
								<div class="entry-content">
									<?php
									$excerpt_length = 200;
									$blog_excerpt = get_the_excerpt();
									$text = strip_tags($blog_excerpt);
									if (strlen($text) > $excerpt_length) {
										echo $text = substr( $text, 0, $excerpt_length - 3 ).'...';
									} else {
										echo $text;
									}
									?>
								</div><!-- .entry-content -->
							</article><!-- #post -->
						<?php 
						endwhile; // end of the loop.
						?>
					<p><a href="<?php echo $cat_link; ?>">Read More Wordpress Articles</a></p>						
					</div>
					<div class="blog-prescott">
						<h2>Prescott, Arizona</h2>
						<?php 
						$cat_name = 'prescott';
						$cat_id = get_cat_ID( $cat_name );
						$cat_link = get_category_link( $cat_id );					
						$args = array (
							'category_name'          => $cat_name,
							'posts_per_page'         => '2',
						);
						$archive = new WP_Query( $args );
						while($archive->have_posts()) : $archive->the_post(); ?>
							<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
									<h3 class="entry-title"><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h3>
									<div class="entry-thumbnail">
										<a href="<?php echo get_permalink(); ?>">
										<?php the_post_thumbnail('home-blog2'); ?>
										</a>
									</div>
								<div class="entry-content">
									<?php
									$excerpt_length = 160;
									$blog_excerpt = get_the_excerpt();
									$text = strip_tags($blog_excerpt);
									if (strlen($text) > $excerpt_length) {
										echo $text = substr( $text, 0, $excerpt_length - 3 ).'...';
									} else {
										echo $text;
									}
									?>
								</div><!-- .entry-content -->
							</article><!-- #post -->
						<?php 
						endwhile; // end of the loop.
						?>
					<p><a href="<?php echo $cat_link; ?>">Read More Prescott Articles</a></p>							
					</div>
				</div>
			</section>
		</div><!-- #content -->
	</div><!-- #primary -->			
<?php get_footer(); ?>