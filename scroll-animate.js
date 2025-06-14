window.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll('.new1');

  if (lines.length > 0) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Stop observing after animation triggers
        }
      });
    }, {
      root: null,
      rootMargin: "-200px 0px 0px 0px", // Trigger 200px before element fully in view
      threshold: 0
    });

    lines.forEach(line => observer.observe(line));
  }
});
