/**
 * PixelBloom Combined Scripts
 * Handles both sticky header functionality and block variations
 */

// Immediately execute this to check loading
console.log('PixelBloom: Combined script loaded');

// Function to detect if we're in the editor
function isBlockEditor() {
  return typeof wp !== 'undefined' && wp.blocks && wp.blockEditor;
}

// Block Editor Variations (only run in editor)
if (isBlockEditor()) {
  console.log('PixelBloom: Block editor detected, registering variations');
  
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
}

// Frontend Sticky Header Functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('PixelBloom: Initializing Sticky Header frontend script');
  
  // Skip sticky header in editor
  if (isBlockEditor()) {
    console.log('PixelBloom: Editor detected, skipping frontend sticky behavior');
    return;
  }
  
  // Look for any header with the sticky-header class
  const stickyHeaders = document.querySelectorAll('.sticky-header');
  
  if (stickyHeaders.length === 0) {
    console.log('PixelBloom: No sticky headers found on page');
    return;
  }
  
  console.log(`PixelBloom: Found ${stickyHeaders.length} sticky header(s)`);
  
  // Process each sticky header
  stickyHeaders.forEach((header, index) => {
    console.log(`PixelBloom: Initializing sticky header #${index + 1}`);
    
    const scrollThreshold = 50; // Pixels scrolled before applying scrolled class
    
    // Function to update header state based on scroll position
    function updateHeaderState() {
      if (window.scrollY > scrollThreshold) {
        if (!header.classList.contains('is-scrolled')) {
          header.classList.add('is-scrolled');
          console.log(`PixelBloom: Header #${index + 1} is now in scrolled state`);
        }
      } else {
        if (header.classList.contains('is-scrolled')) {
          header.classList.remove('is-scrolled');
          console.log(`PixelBloom: Header #${index + 1} returned to normal state`);
        }
      }
    }
    
    // Initial state check
    updateHeaderState();
    
    // Add scroll event with performance optimization
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          updateHeaderState();
          ticking = false;
        });
        ticking = true;
      }
    });
  });
});

// Add a visual indicator in both contexts
(function() {
  setTimeout(function() {
    if (document.body) {
      var div = document.createElement('div');
      div.style.position = 'fixed';
      div.style.bottom = '20px';
      div.style.right = '20px';
      div.style.background = 'red';
      div.style.color = 'white';
      div.style.padding = '10px';
      div.style.zIndex = '9999';
      div.textContent = 'PixelBloom script loaded';
      document.body.appendChild(div);
    }
  }, 1000);
})();