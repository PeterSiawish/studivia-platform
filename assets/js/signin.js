document.addEventListener('DOMContentLoaded', function() {
  const signinForm = document.querySelector('.signup-form');

  if (!signinForm) return;

  // create feedback elements
  const feedback = document.createElement("p");
  feedback.id = "formFeedback";
  feedback.style.marginTop = "10px";
  feedback.style.fontWeight = "600";
  signinForm.appendChild(feedback);

  signinForm.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default form submission
    console.log("Form submitted"); // debug log

    // get form values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();  
    const email = document.getElementById("email").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    // validate form values
    let errorMessages = [];
    if (username.length < 3) {
      errorMessages.push("Username must be at least 3 characters long.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessages.push("Please enter a valid email address.");
    }

    if (password.length < 6) {
      errorMessages.push("Password must be at least 6 characters long.");
    }

    if (password !== confirmPassword) {
      errorMessages.push("Passwords do not match.");
    }

    // Show feedback to the user
    if (errorMessages.length > 0) {
      feedback.textContent = errorMessages.join(" ");
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Signup successful!";
      feedback.style.color = "green";
    }
    });
  });