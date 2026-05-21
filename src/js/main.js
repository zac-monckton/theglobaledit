document.addEventListener('DOMContentLoaded', function() {

  // ─── MOBILE MENU TOGGLE ───────────────────────────────────
  var menuBtn = document.getElementById('mobileMenuBtn');
  var mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    function toggleMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      mobileMenu.classList.toggle('open');
    }
    menuBtn.addEventListener('click', toggleMenu, { passive: false });
    menuBtn.addEventListener('touchend', toggleMenu, { passive: false });
  }

  // ─── MOBILE TRAVEL DROPDOWN ───────────────────────────────
  var travelToggle = document.getElementById('travelToggle');
  var travelDropdown = document.getElementById('travelDropdown');
  var travelArrow = travelToggle ? travelToggle.querySelector('.mobile-toggle-arrow') : null;

  if (travelToggle && travelDropdown) {
    function toggleTravel(e) {
      // Allow link clicks to pass through
      if (e.target.tagName === 'A') return;
      e.preventDefault();
      e.stopPropagation();
      var isOpen = travelDropdown.classList.contains('open');
      // Close finance if open
      if (financeDropdown) financeDropdown.classList.remove('open');
      if (financeToggle) financeToggle.classList.remove('open');
      // Toggle travel
      travelDropdown.classList.toggle('open', !isOpen);
      travelToggle.classList.toggle('open', !isOpen);
    }
    travelToggle.addEventListener('click', toggleTravel, { passive: false });
    travelToggle.addEventListener('touchend', toggleTravel, { passive: false });
  }

  // ─── MOBILE FINANCE DROPDOWN ──────────────────────────────
  var financeToggle = document.getElementById('financeToggle');
  var financeDropdown = document.getElementById('financeDropdown');

  if (financeToggle && financeDropdown) {
    function toggleFinance(e) {
      if (e.target.tagName === 'A') return;
      e.preventDefault();
      e.stopPropagation();
      var isOpen = financeDropdown.classList.contains('open');
      // Close travel if open
      if (travelDropdown) travelDropdown.classList.remove('open');
      if (travelToggle) travelToggle.classList.remove('open');
      // Toggle finance
      financeDropdown.classList.toggle('open', !isOpen);
      financeToggle.classList.toggle('open', !isOpen);
    }
    financeToggle.addEventListener('click', toggleFinance, { passive: false });
    financeToggle.addEventListener('touchend', toggleFinance, { passive: false });
  }

  // ─── NEWSLETTER FORM ──────────────────────────────────────
  var newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var email = newsletterForm.querySelector('input[type="email"]').value;
      if (email) {
        alert('Thanks for subscribing! Check your inbox to confirm.');
        newsletterForm.querySelector('input').value = '';
      }
    });
  }

  // ─── COOKIE CONSENT ───────────────────────────────────────
  var cookieBanner = document.getElementById('cookieBanner');
  var cookieAccept = document.getElementById('cookieAccept');
  var cookieDecline = document.getElementById('cookieDecline');

  if (cookieBanner) {
    try {
      var consent = localStorage.getItem('tge-cookie-consent');
      if (!consent) {
        setTimeout(function() {
          cookieBanner.style.display = 'block';
        }, 1500);
      }
    } catch(e) {}

    if (cookieAccept) {
      cookieAccept.addEventListener('click', function() {
        try { localStorage.setItem('tge-cookie-consent', 'accepted'); } catch(e) {}
        cookieBanner.style.display = 'none';
      });
    }
    if (cookieDecline) {
      cookieDecline.addEventListener('click', function() {
        try { localStorage.setItem('tge-cookie-consent', 'declined'); } catch(e) {}
        cookieBanner.style.display = 'none';
      });
    }
  }

});
