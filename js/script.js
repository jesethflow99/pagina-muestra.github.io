document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 70,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Gallery modal
  const galleryModal = document.getElementById('galleryModal');
  if (galleryModal) {
      galleryModal.addEventListener('show.bs.modal', function(event) {
          const button = event.relatedTarget;
          const imgSrc = button.getAttribute('data-bs-img');
          const modalImage = galleryModal.querySelector('#modalGalleryImage');
          modalImage.setAttribute('src', imgSrc);
      });
  }
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Here you would typically send the form data to a server
          // For this example, we'll just show an alert
          alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
          contactForm.reset();
      });
  }
  
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function(tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // Newsletter form
  const newsletterForms = document.querySelectorAll('.footer-newsletter form');
  newsletterForms.forEach(form => {
      form.addEventListener('submit', function(e) {
          e.preventDefault();
          const emailInput = this.querySelector('input[type="email"]');
          if (emailInput.value) {
              alert('Gracias por suscribirte a nuestro newsletter!');
              emailInput.value = '';
          }
      });
  });
  
  // Testimonials carousel autoplay
  const testimonialsCarousel = document.getElementById('testimonialsCarousel');
  if (testimonialsCarousel) {
      const carousel = new bootstrap.Carousel(testimonialsCarousel, {
          interval: 5000,
          pause: 'hover'
      });
  }
});