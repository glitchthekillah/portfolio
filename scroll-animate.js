window.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll('.new1');

  if (lines.length > 0) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('animate');
          observer.unobserve(el);
          
          // Remove orange tips after animation duration (2.5s)
          setTimeout(() => {
            el.classList.remove('animate');
          }, 2500);
        }
      });
    }, {
      root: null,
      rootMargin: "-200px 0px 0px 0px",
      threshold: 0
    });

    lines.forEach(line => observer.observe(line));
  }
});
