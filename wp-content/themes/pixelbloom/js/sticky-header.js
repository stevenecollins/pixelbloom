/**
 * PixelBloom sticky header functionality
 * Adds scroll behavior to headers with the sticky-header class
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('PixelBloom: Initializing Sticky Header frontend script');
  
  // Look for any header with the sticky-header class
  // Note: Using querySelectorAll to find all potential sticky headers
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


console.log('PixelBloom: Simple test script loaded!');

// This doesn't depend on wp.domReady
(function() {
  console.log('PixelBloom: IIFE executed');
  
  // Add visible indicator to check if script is loading
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
      div.textContent = 'PixelBloom test script loaded';
      document.body.appendChild(div);
    }
  }, 2000);
})();