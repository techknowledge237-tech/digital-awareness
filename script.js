const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const interest = String(formData.get('interest') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const subject = encodeURIComponent(`Digital Access enquiry: ${interest}`);
    const body = encodeURIComponent(
      `Hello Digital Access team,\n\n` +
      `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n` +
      `Message:\n${message}\n\nSent from the Digital Access website draft form.`
    );

    // Replace the placeholder below with your real contact email before publishing.
    const contactEmail = 'YOUR_EMAIL@example.com';

    if (contactEmail === 'YOUR_EMAIL@example.com') {
      formStatus.textContent = 'The form is working in demo mode. To receive enquiries, open script.js and replace YOUR_EMAIL@example.com with your real contact email.';
      return;
    }

    formStatus.textContent = 'Opening your email app with a prepared message. Please review and send it there.';
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  });
}
