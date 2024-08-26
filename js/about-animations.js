const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateAboutElements(entry.target);
        aboutObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  function animateAboutElements(section) {
    const elements = section.querySelectorAll('.animated-text, .animated-button, .animated-image');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 200);
    });
  }
  
  function setupAboutAnimations() {
    const section = document.getElementById('about-us');
    if (section) {
      aboutObserver.observe(section);
    }
  }
  
  document.addEventListener('DOMContentLoaded', setupAboutAnimations);