document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.sidebar');
  const menuToggle = document.querySelector('.menu-toggle');

  // Toggle mobile menu
  menuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
  });

  // Smooth scroll and close menu
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu after clicking
        if (window.innerWidth < 768) {
          sidebar.classList.remove('active');
        }
      }
    });
  });

  // Existing project animation code...
  // (Keep your existing JavaScript for project animations here)
});