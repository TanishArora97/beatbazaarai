// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  // Animation for Features Section
  const featureCards = document.querySelectorAll(".feature-card");
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  
  featureCards.forEach((card) => observer.observe(card));
  
  // Animation for About Us Timeline
  const timelineItems = document.querySelectorAll(".timeline-item");
  
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  
  timelineItems.forEach((item) => timelineObserver.observe(item));
  // Real-time validation for the contact form
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});