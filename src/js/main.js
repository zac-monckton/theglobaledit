document.addEventListener('DOMContentLoaded', function() {

  // ─── MOBILE MENU ──────────────────────────────────────────
  var menuBtn = document.getElementById('mobileMenuBtn');
  var mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    function toggleMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      mobileMenu.classList.toggle('open');
    }
    menuBtn.addEventListener('click', toggleMenu);
    menuBtn.addEventListener('touchend', toggleMenu);
  }

  // ─── MOBILE TRAVEL DROPDOWN ───────────────────────────────
  var travelToggle = document.getElementById('travelToggle');
  var travelDropdown = document.getElementById('travelDropdown');

  if (travelToggle && travelDropdown) {
    function toggleTravel(e) {
      if (e.target.tagName === 'A') return;
      e.preventDefault();
      e.stopPropagation();
      travelToggle.classList.toggle('open');
      travelDropdown.classList.toggle('open');
    }
    travelToggle.addEventListener('click', toggleTravel);
    travelToggle.addEventListener('touchend', toggleTravel);
  }

  // ─── MOBILE FINANCE DROPDOWN ──────────────────────────────
  var financeToggle = document.getElementById('financeToggle');
  var financeDropdown = document.getElementById('financeDropdown');

  if (financeToggle && financeDropdown) {
    function toggleFinance(e) {
      if (e.target.tagName === 'A') return;
      e.preventDefault();
      e.stopPropagation();
      financeToggle.classList.toggle('open');
      financeDropdown.classList.toggle('open');
    }
    financeToggle.addEventListener('click', toggleFinance);
    financeToggle.addEventListener('touchend', toggleFinance);
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
    var consent = localStorage.getItem('tge-cookie-consent');
    if (!consent) {
      setTimeout(function() {
        cookieBanner.style.display = 'block';
      }, 1500);
    }

    if (cookieAccept) {
      cookieAccept.addEventListener('click', function() {
        localStorage.setItem('tge-cookie-consent', 'accepted');
        cookieBanner.style.display = 'none';
      });
    }

    if (cookieDecline) {
      cookieDecline.addEventListener('click', function() {
        localStorage.setItem('tge-cookie-consent', 'declined');
        cookieBanner.style.display = 'none';
      });
    }
  }

});
