// Simple interactivity (forms + buttons)

// Enroll button feedback
document.querySelectorAll(".enroll-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Thank you for enrolling! We'll contact you soon.");
  });
});

// Sponsor button feedback
document.querySelectorAll(".sponsor-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Thank you for sponsoring a learner!");
  });
});

// Quote form
document.querySelector(".quote-form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Quote request submitted. We'll get back to you!");
});

// Contact form
document.querySelector(".contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for contacting us!");
});