window.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll('.new1');

  if (lines.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Element is at least partially visible — play animation
          entry.target.classList.add('animate');
        } else {
          // Element is completely offscreen — reset animation
          entry.target.classList.remove('animate');
        }
      });
    }, {
      root: null,
      rootMargin: "0px",  // No margin, detect exact viewport intersection
      threshold: 0        // Trigger as soon as any pixel appears/disappears
    });

    lines.forEach(line => observer.observe(line));
  }
});
