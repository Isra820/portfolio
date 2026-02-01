const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

(function () {
  emailjs.init("-yagqRfY4q1sA-qd8");
})();

const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  formStatus.textContent = "Sending message...";

  emailjs.sendForm(
    "service_0acm0lt",
    "template_llh0srk",
    this
  )
  .then(() => {
    formStatus.textContent = "✅ Message sent successfully!";
    form.reset();
  })
  .catch((error) => {
    formStatus.textContent = "❌ Failed to send message.";
    console.error(error);
  });
});
