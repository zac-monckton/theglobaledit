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

  // Unified toggle handler — works on both real iPhone touch and desktop click.
  // Listens on the entire toggle row. If the tap/click target is the label <a>,
  // allow navigation. If it's anywhere else (arrow, row background), toggle the dropdown.
  function makeToggleHandler(dropdown, toggle, otherDropdown, otherToggle) {
    var touchHandled = false;

    function handleToggle(e) {
      // If the user tapped/clicked the label link, let it navigate — don't toggle
      if (e.target.classList.contains('mobile-toggle-label') || e.target.closest('.mobile-toggle-label')) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      var isOpen = dropdown.classList.contains('open');
      if (otherDropdown) closeDropdown(otherDropdown, otherToggle);
      isOpen ? closeDropdown(dropdown, toggle) : openDropdown(dropdown, toggle);
    }

    // touchend fires on real iPhone — handle it and set flag to skip the ghost click
    toggle.addEventListener('touchend', function(e) {
      touchHandled = true;
      handleToggle(e);
      // Reset flag after ghost click window passes
      setTimeout(function() { touchHandled = false; }, 500);
    }, { passive: false });

    // click fires on desktop and as a fallback — skip if already handled by touchend
    toggle.addEventListener('click', function(e) {
      if (touchHandled) return;
      handleToggle(e);
    });
  }

  if (travelToggle && travelDropdown) {
    makeToggleHandler(travelDropdown, travelToggle, financeDropdown, financeToggle);
  }

  if (financeToggle && financeDropdown) {
    makeToggleHandler(financeDropdown, financeToggle, travelDropdown, travelToggle);
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
