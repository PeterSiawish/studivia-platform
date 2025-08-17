document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  // Utility: show error under a field
  const showError = (field, message) => {
    let error = field.parentElement.querySelector(".error");
    if (!error) {
      error = document.createElement("span");
      error.className = "error";
      error.style.color = "red";
      error.style.fontSize = "14px";
      field.parentElement.appendChild(error);
    }
    error.textContent = message;
  };

  // Utility: clear error for a field
  const clearError = (field) => {
    const error = field.parentElement.querySelector(".error");
    if (error) error.textContent = "";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stops the form from actually sending/reloading

    let isValid = true;

    const { name, email, subject, message } = form.elements;

    // Name
    if (name.value.trim().length < 2) {
      showError(name, "Name must be at least 2 characters.");
      isValid = false;
    } else clearError(name);

    // Email
    if (!email.checkValidity()) {
      showError(email, "Please enter a valid email address.");
      isValid = false;
    } else clearError(email);

    // Subject
    if (subject.value.trim().length < 3) {
      showError(subject, "Subject must be at least 3 characters.");
      isValid = false;
    } else clearError(subject);

    // Message
    if (message.value.trim().length < 10) {
      showError(message, "Message must be at least 10 characters.");
      isValid = false;
    } else clearError(message);

    if (isValid) {
      // **TEMPORARY**: Simulate form submission untill backend is ready
      alert("Thanks for reaching out! We'll get back to you soon.");
      form.reset();
    }
  });
});
