<?php

/**
 * PixelBloom Block Variations
 * 
 * @package PixelBloom
 */

// Register block variations
function pixelbloom_register_block_variations()
{
  // We'll skip the admin check and always load in editor context
  wp_enqueue_script(
    'pixelbloom-block-variations',
    get_template_directory_uri() . '/js/block-variations.js',
    array('wp-blocks', 'wp-dom-ready', 'wp-edit-post'),
    PIXELBLOOM_VERSION . '.' . time(), // Force cache busting
    true
  );

  // Add debugging script
  wp_add_inline_script(
    'pixelbloom-block-variations',
    'console.log("PixelBloom: Block variations script being loaded via inline script");',
    'before'
  );
}
add_action('enqueue_block_editor_assets', 'pixelbloom_register_block_variations');
