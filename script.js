document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll("section, header, footer");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
});

// Dark Mode Toggle
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌓Click Me';
toggleBtn.style.cssText = 'position:fixed;top:10px;right:10px;padding:8px;border:none;border-radius:5px;background:#1a73e8;color:white;cursor:pointer;z-index:1000;';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});