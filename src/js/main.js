// Mobile menu
const toggle = document.querySelector('.mobile-nav-toggle');
const menu = document.querySelector('.mobile-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
}

// Smooth scroll for TOC links
document.querySelectorAll('.toc-item').forEach(item => {
  item.addEventListener('click', () => {
    const idx = item.querySelector('.toc-num')?.textContent;
    const target = document.querySelector(`#section-${idx}`);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Newsletter form (replace with your email provider's JS)
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    if (email) {
      // Replace this with your actual email provider submission
      alert('Thanks for subscribing! Check your inbox to confirm.');
      newsletterForm.querySelector('input').value = '';
    }
  });
}
