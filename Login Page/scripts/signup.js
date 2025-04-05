function validateSignup() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const message = document.getElementById("message");
  
    // Reset message
    message.style.color = "red";
    message.textContent = "";
  
    // Basic checks
    if (name === "" && email === "") {
        message.textContent = "Please enter your full name and email.";
        return false;
    }
    if (name === "") {
      message.textContent = "Please enter your full name.";
      return false;
    }
    if (email === "") {
        message.textContent = "Please enter your email.";
        return false;
    }
  
    // Password length check
    if (password.length < 8) {
      message.textContent = "Password should be at least 8 characters long.";
      return false;
    }
  
    // Password match check
    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match. Please enter the same passwords.";
      return false;
    }
  
    // Success message
    message.style.color = "green";
    message.textContent = "Account created successfully!";
    return false; // Prevent form submission for now (you can change to true later)
}