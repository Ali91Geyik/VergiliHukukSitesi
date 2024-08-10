function animateServiceItems() {
    const serviceItems = document.querySelectorAll('.service-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, { threshold: 0.1 });

    serviceItems.forEach(item => {
        observer.observe(item);
    });
}

document.addEventListener('DOMContentLoaded', animateServiceItems);