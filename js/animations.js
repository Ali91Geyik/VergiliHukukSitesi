// Intersection Observer oluştur
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateElements(entry.target);
        // Gözlemi kaldır ki tekrar tetiklenebilsin
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // Elemanın %10'u görünür olduğunda tetikle
  });
  
  function animateElements(section) {
    const elements = section.querySelectorAll('.animated-text, .animated-button, .animated-image');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 200);
    });
  }
  
  function resetAnimations(section) {
    const elements = section.querySelectorAll('.animated-text, .animated-button, .animated-image');
    elements.forEach(el => {
      el.classList.remove('visible');
    });
  }
  
  function setupAnimations() {
    const section = document.getElementById('legal-services');
    if (section) {
      // İlk yüklemede gözlemi başlat
      observer.observe(section);
  
      // Scroll olayını dinle
      window.addEventListener('scroll', () => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
        
        if (!isVisible) {
          // Bölüm görünür değilse animasyonları sıfırla ve tekrar gözleme başla
          resetAnimations(section);
          observer.observe(section);
        }
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', setupAnimations);