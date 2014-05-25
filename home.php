<?php
/** Home Page **/
get_header(); 
?>
	<div class="call_to_action">
		<div class="call_to_action_text">
			<p>Prescott Recovery Centers provides detailed information about all the rehab and treatment facilities in Prescott, Arizona.</p>
			<p>This is your first stop on your road to recovery.</p>
			<h2>
				<a href="<?php echo home_url(); ?>/at-a-glance">Search for the Best Rehab Centers in Prescott, AZ</a></h2>
		</div>
		<div class="call_to_action_image">
			<img src="<?php echo get_template_directory_uri(); ?>/images/road-to-recovery.png" />
		</div>
	</div>
	<div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">
			<div class="news_prescott">
				<h2>Recent Recovery News in Prescott</h2>
<?php $prescott_news = new WP_Query('cat=110'); // exclude category 9
while($prescott_news->have_posts()) : $prescott_news->the_post(); ?>

	<div <?php post_class(); ?> id="post-<?php the_ID(); ?>">
		<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
		<div class="entry-thumbnail">
			<?php the_post_thumbnail('prescott_news'); ?>
		</div>
		<?php the_excerpt(); ?>
	</div>
<?php endwhile; ?>
<?php wp_reset_postdata(); // reset the query ?>				
			</div>
			<div class="news_recovery">
				<h2>Recent Recovery News</h2>
<?php $recent_recovery = new WP_Query('cat=109'); // exclude category 9
while($recent_recovery->have_posts()) : $recent_recovery->the_post(); ?>

	<div <?php post_class(); ?> id="post-<?php the_ID(); ?>">
		<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
		<div class="entry-thumbnail">
			<?php the_post_thumbnail('recent_recovery'); ?>
		</div>
		<?php the_excerpt(); ?>
	</div>
<?php endwhile; ?>
<?php wp_reset_postdata(); // reset the query ?>					
			</div>
			<div class="advert">
				<h2></h2>
			</div>			
		</div><!-- #content -->
	</div><!-- #primary -->			
<?php get_footer(); ?>