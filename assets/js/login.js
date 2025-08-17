document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default form submission
    console.log("Form submitted"); // debug log

    // get form values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // simple validation
    let errorMsg = "";
    if (!username) {
      errorMsg = "Username is required.";
    } else if (!password) {
      errorMsg = "Password is required.";
    } else if (password.length < 6) {
      errorMsg = "Password must be at least 6 characters.";
    }

    // Show feedback to the user
    const feedback = document.getElementById("loginFeedback");
    if (errorMsg) {
      feedback.textContent = errorMsg;
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Login successful!";
      feedback.style.color = "green";
    }
  });
});
