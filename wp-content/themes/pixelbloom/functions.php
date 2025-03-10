<?php

/**
 * PixelBloom functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package PixelBloom
 */

if (! defined('PIXELBLOOM_VERSION')) {
  // Replace the version number of the theme on each release.
  define('PIXELBLOOM_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function pixelbloom_setup()
{
  /*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 */
  load_theme_textdomain('pixelbloom', get_template_directory() . '/languages');

  // Add default posts and comments RSS feed links to head.
  add_theme_support('automatic-feed-links');

  /*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
  add_theme_support('title-tag');

  /**
   * Add support for core block visual styles.
   */
  add_theme_support('wp-block-styles');

  /**
   * Add support for core custom logo.
   */
  add_theme_support(
    'custom-logo',
    array(
      'height'      => 120,
      'width'       => 120,
      'flex-width'  => true,
      'flex-height' => true,
    )
  );
}
add_action('after_setup_theme', 'pixelbloom_setup');

/**
 * Enqueue theme assets.
 */
function pixelbloom_scripts()
{
  // Enqueue theme stylesheet.
  wp_enqueue_style('pixelbloom-style', get_stylesheet_uri(), array(), PIXELBLOOM_VERSION);
}
add_action('wp_enqueue_scripts', 'pixelbloom_scripts');

/**
 * Remove core block patterns
 */
function pixelbloom_remove_core_patterns()
{
  // Remove all core patterns
  remove_theme_support('core-block-patterns');
}
add_action('after_setup_theme', 'pixelbloom_remove_core_patterns');

/**
 * Enqueue PixelBloom scripts for both editor and frontend
 */
function pixelbloom_enqueue_scripts()
{
  // Frontend scripts
  if (!is_admin()) {
    wp_enqueue_script(
      'pixelbloom-scripts',
      get_template_directory_uri() . '/js/pixelbloom-scripts.js',
      array(), // No dependencies needed for frontend
      PIXELBLOOM_VERSION,
      true
    );
  }
}
add_action('wp_enqueue_scripts', 'pixelbloom_enqueue_scripts');

/**
 * Enqueue block editor scripts
 */
function pixelbloom_enqueue_editor_scripts()
{
  wp_enqueue_script(
    'pixelbloom-editor-scripts',
    get_template_directory_uri() . '/js/pixelbloom-scripts.js',
    array(
      'wp-blocks',
      'wp-dom-ready',
      'wp-edit-post',
      'wp-element',
      'wp-components',
      'wp-compose',
      'wp-hooks',
      'wp-block-editor'
    ),
    PIXELBLOOM_VERSION,
    true
  );
}
add_action('enqueue_block_editor_assets', 'pixelbloom_enqueue_editor_scripts');
