<?php
// Register Custom Post Type
function cpt_portfolio() {

	$labels = array(
		'name'                => _x( 'Portfolio', 'Post Type General Name', 'tabua_rasa' ),
		'singular_name'       => _x( 'Portfolio', 'Post Type Singular Name', 'tabua_rasa' ),
		'menu_name'           => __( 'Portfolio', 'tabua_rasa' ),
		'parent_item_colon'   => __( 'Parent Portfolio:', 'tabua_rasa' ),
		'all_items'           => __( 'All Portfolios', 'tabua_rasa' ),
		'view_item'           => __( 'View Portfolio', 'tabua_rasa' ),
		'add_new_item'        => __( 'Add New Portfolio', 'tabua_rasa' ),
		'add_new'             => __( 'Add New', 'tabua_rasa' ),
		'edit_item'           => __( 'Edit Portfolio', 'tabua_rasa' ),
		'update_item'         => __( 'Update Portfolio', 'tabua_rasa' ),
		'search_items'        => __( 'Search Portfolio', 'tabua_rasa' ),
		'not_found'           => __( 'Not found', 'tabua_rasa' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'tabua_rasa' ),
	);
	$args = array(
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'excerpt', 'thumbnail', ),
		'taxonomies'          => array( 'category', 'post_tag' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => '',
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
	);
	register_post_type( 'portfolio', $args );

}

// Hook into the 'init' action
add_action( 'init', 'cpt_portfolio', 0 );
	
	/*
	for more information on taxonomies, go here:
	http://codex.wordpress.org/Function_Reference/register_taxonomy
	*/
	
	// now let's add custom categories (these act like categories)
    register_taxonomy( 'custom_cat', 
    	array('custom_type'), /* if you change the name of register_post_type( 'custom_type', then you have to change this */
    	array('hierarchical' => true,     /* if this is true, it acts like categories */             
    		'labels' => array(
    			'name' => __( 'Custom Categories', 'tabula_rasa' ), /* name of the custom taxonomy */
    			'singular_name' => __( 'Custom Category', 'tabula_rasa' ), /* single taxonomy name */
    			'search_items' =>  __( 'Search Custom Categories', 'tabula_rasa' ), /* search title for taxomony */
    			'all_items' => __( 'All Custom Categories', 'tabula_rasa' ), /* all title for taxonomies */
    			'parent_item' => __( 'Parent Custom Category', 'tabula_rasa' ), /* parent title for taxonomy */
    			'parent_item_colon' => __( 'Parent Custom Category:', 'tabula_rasa' ), /* parent taxonomy title */
    			'edit_item' => __( 'Edit Custom Category', 'tabula_rasa' ), /* edit custom taxonomy title */
    			'update_item' => __( 'Update Custom Category', 'tabula_rasa' ), /* update title for taxonomy */
    			'add_new_item' => __( 'Add New Custom Category', 'tabula_rasa' ), /* add new title for taxonomy */
    			'new_item_name' => __( 'New Custom Category Name', 'tabula_rasa' ) /* name title for taxonomy */
    		),
    		'show_admin_column' => true, 
    		'show_ui' => true,
    		'query_var' => true,
    		'rewrite' => array( 'slug' => 'custom-slug' ),
    	)
    );   
    
	// now let's add custom tags (these act like categories)
    register_taxonomy( 'custom_tag', 
    	array('custom_type'), /* if you change the name of register_post_type( 'custom_type', then you have to change this */
    	array('hierarchical' => false,    /* if this is false, it acts like tags */                
    		'labels' => array(
    			'name' => __( 'Custom Tags', 'tabula_rasa' ), /* name of the custom taxonomy */
    			'singular_name' => __( 'Custom Tag', 'tabula_rasa' ), /* single taxonomy name */
    			'search_items' =>  __( 'Search Custom Tags', 'tabula_rasa' ), /* search title for taxomony */
    			'all_items' => __( 'All Custom Tags', 'tabula_rasa' ), /* all title for taxonomies */
    			'parent_item' => __( 'Parent Custom Tag', 'tabula_rasa' ), /* parent title for taxonomy */
    			'parent_item_colon' => __( 'Parent Custom Tag:', 'tabula_rasa' ), /* parent taxonomy title */
    			'edit_item' => __( 'Edit Custom Tag', 'tabula_rasa' ), /* edit custom taxonomy title */
    			'update_item' => __( 'Update Custom Tag', 'tabula_rasa' ), /* update title for taxonomy */
    			'add_new_item' => __( 'Add New Custom Tag', 'tabula_rasa' ), /* add new title for taxonomy */
    			'new_item_name' => __( 'New Custom Tag Name', 'tabula_rasa' ) /* name title for taxonomy */
    		),
    		'show_admin_column' => true,
    		'show_ui' => true,
    		'query_var' => true,
    	)
    ); 
    
    /*
    	looking for custom meta boxes?
    	check out this fantastic tool:
    	https://github.com/jaredatch/Custom-Metaboxes-and-Fields-for-WordPress
    */
	

?>
