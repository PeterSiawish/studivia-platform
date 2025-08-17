document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".upload-form");
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

    const { title, author, category, book_file } = form.elements;

    // Title
    if (title.value.trim().length < 2) {
      showError(title, "Title must be at least 2 characters.");
      isValid = false;
    } else clearError(title);

    // Category
    if (!category.value) {
      showError(category, "Please select a category.");
      isValid = false;
    } else clearError(category);

    // File
    if (!book_file.files.length) {
      showError(book_file, "Please upload a book file.");
      isValid = false;
    } else {
      const file = book_file.files[0];
      const maxSizeMB = 50;
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/epub+zip",
        "text/plain",
      ];

      if (!allowedTypes.includes(file.type)) {
        showError(book_file, "Invalid file type.");
        isValid = false;
      } else if (file.size > maxSizeMB * 1024 * 1024) {
        showError(book_file, `File must be smaller than ${maxSizeMB}MB.`);
        isValid = false;
      } else clearError(book_file);
    }

    if (isValid) {
      // **TEMPORARY**: Simulate form submission until backend is ready
      alert(`Book "${title.value.trim()}" uploaded successfully!`);
      form.reset();
    }
  });
});
