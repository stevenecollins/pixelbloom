/**
 * PixelBloom Header Variations
 * This creates block variations for headers with and without sticky functionality
 */

wp.domReady(function() {
  console.log('PixelBloom: Initializing Block Variations');
  
  // Register the sticky header variation
  wp.blocks.registerBlockVariation('core/group', {
    name: 'pixelbloom-sticky-header',
    title: 'Sticky Header',
    description: 'Header that sticks to the top when scrolling',
    attributes: {
      tagName: 'header',
      className: 'site-header sticky-header'
    },
    isActive: function(blockAttributes) {
      return blockAttributes.tagName === 'header' && 
              (blockAttributes.className || '').includes('sticky-header');
    },
    scope: ['inserter', 'transform'],
    icon: 'sticky'
  });
  
  // Register the regular header variation
  wp.blocks.registerBlockVariation('core/group', {
    name: 'pixelbloom-regular-header',
    title: 'Regular Header',
    description: 'Standard header that scrolls with the page',
    attributes: {
      tagName: 'header',
      className: 'site-header'
    },
    isActive: function(blockAttributes) {
      return blockAttributes.tagName === 'header' && 
              !(blockAttributes.className || '').includes('sticky-header');
    },
    scope: ['inserter', 'transform'],
    icon: 'heading'
  });
  
  console.log('PixelBloom: Header variations registered successfully');
});

