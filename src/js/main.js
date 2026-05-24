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

  // ─── MOBILE DROPDOWNS ─────────────────────────────────────
  var travelToggle    = document.getElementById('travelToggle');
  var travelDropdown  = document.getElementById('travelDropdown');
  var financeToggle   = document.getElementById('financeToggle');
  var financeDropdown = document.getElementById('financeDropdown');

  function openDropdown(dropdown, toggle) {
    dropdown.classList.add('open');
    toggle.classList.add('open');
  }

  function closeDropdown(dropdown, toggle) {
    dropdown.classList.remove('open');
    toggle.classList.remove('open');
  }

  if (travelToggle && travelDropdown) {
    // Tap the arrow to toggle — label navigates to /travel/
    var travelArrow = travelToggle.querySelector('.mobile-toggle-arrow');
    if (travelArrow) {
      travelArrow.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var isOpen = travelDropdown.classList.contains('open');
        if (financeDropdown) closeDropdown(financeDropdown, financeToggle);
        isOpen ? closeDropdown(travelDropdown, travelToggle) : openDropdown(travelDropdown, travelToggle);
      });
      travelArrow.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var isOpen = travelDropdown.classList.contains('open');
        if (financeDropdown) closeDropdown(financeDropdown, financeToggle);
        isOpen ? closeDropdown(travelDropdown, travelToggle) : openDropdown(travelDropdown, travelToggle);
      }, { passive: false });
    }
  }

  if (financeToggle && financeDropdown) {
    var financeArrow = financeToggle.querySelector('.mobile-toggle-arrow');
    if (financeArrow) {
      financeArrow.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var isOpen = financeDropdown.classList.contains('open');
        if (travelDropdown) closeDropdown(travelDropdown, travelToggle);
        isOpen ? closeDropdown(financeDropdown, financeToggle) : openDropdown(financeDropdown, financeToggle);
      });
      financeArrow.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var isOpen = financeDropdown.classList.contains('open');
        if (travelDropdown) closeDropdown(travelDropdown, travelToggle);
        isOpen ? closeDropdown(financeDropdown, financeToggle) : openDropdown(financeDropdown, financeToggle);
      }, { passive: false });
    }
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
  var cookieBanner  = document.getElementById('cookieBanner');
  var cookieAccept  = document.getElementById('cookieAccept');
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
