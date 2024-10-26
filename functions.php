<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package av-huette
 * @since 1.0.0
 */

/**
 * Enqueue the CSS files.
 *
 * @since 1.0.0
 *
 * @return void
 */
function av_huette_styles() {
	wp_enqueue_style(
		'av-huette-style',
		get_stylesheet_uri(),
		[],
		wp_get_theme()->get( 'Version' )
	);
	wp_enqueue_script(
		'av-huette-script',
		get_theme_file_uri( 'assets/js/avh-frontend.js' ),
		array(),
		wp_get_theme()->get( 'Version' ),
		array(
			'strategy'  => 'defer',
		)
	);
}
add_action( 'wp_enqueue_scripts', 'av_huette_styles' );



function avh_setup() {
	add_editor_style( array(
		get_stylesheet_uri(),
		get_theme_file_uri( 'assets/css/editor-styles.css' )
	) );
	add_editor_style( array(
		get_stylesheet_uri()
	) );
}
add_action( 'after_setup_theme', 'avh_setup' );