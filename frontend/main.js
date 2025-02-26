

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orderForm')
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      alert('Thank you for your order! We will contact you shortly.')
      form.reset()
    })
  }
})

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNav = document.getElementById('mobileNav');

  if (mobileMenu && mobileNav) {
    mobileMenu.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }
  
  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileNav.classList.add('hidden');
    }
  });
});