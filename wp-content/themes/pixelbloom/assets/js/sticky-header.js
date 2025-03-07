document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  
  // Check if the header has the sticky-header class
  const isSticky = header.classList.contains('sticky-header');
  
  // Only add scroll effects if sticky class is present
  if (isSticky) {
    const scrollThreshold = 50;
    
    function updateHeaderState() {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
    
    // Initial call
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
  }
});