$(document).ready(function () { // Waiting until the document is fully loaded

  $(".signup-form").on("submit", function (signup) { // For Signup form submission

    signup.preventDefault(); // Preventing default form submission behavior

    // Getting user input values
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val();
    const confirmPassword = $("#confirm-password").val();

    const message = $("#message"); // Selecting the message element to display

    message.css("color", "#7a5d7c").text(""); // Clearing any previous message

    // Form Validation Checks
    if (name === "" && email === "") { // Checking if name and email fields are both empty
      message.text("Please enter your full name and email."); // Displays message to prompt the user to enter both name and email
      return;
    } else if (name === "") { // Checking if name field is empty
      message.text("Please enter your full name.");  // Displays message to prompt the user to enter name
      return;
    } else if (email === "") { // Checking if email field is empty
      message.text("Please enter your email."); // Displays message to prompt the user to enter email
      return;
    }

    if (password.length < 8) { // Checking if password is less than 8 characters
      message.text("Password should be at least 8 characters long."); // If true, error message is displayed
      return;
    }

    if (password !== confirmPassword) { // Check if password and confirm password fields match
      message.text("Passwords do not match."); // If not matching, error message is displayed
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || []; // Retrieving users array from localStorage or create empty array if the array doesn't exist

    // Checking if the entered email is already registered
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      message.text("Email already registered."); // If true, error message is displayed
      return;
    }

    users.push({ name, email, password }); // If not true, adds the new user to the array
    localStorage.setItem("users", JSON.stringify(users)); // Store the updated users array back to localStorage

    message.css("color", "#7a5d7c").text("Account created successfully!"); // Then shows success message

    // Finally, redirecting user to their account page after 1.5 sec
    setTimeout(function () {
      window.location.href = "../Account Page/Pages/account.html";
    }, 1500);
  });

  $("#password-eye").on("click", function () { // Toggle for Password Visibility in password field
    const pwd = $("#password"); // Selecting the password input field
    const icon = $(this); // Then select the clicked eye icon

    if (pwd.attr("type") === "password") { // Checking if the password field is currently of type "password"
      pwd.attr("type", "text"); // Changing input type to text (making the password visible)
      icon.removeClass("fa-eye").addClass("fa-eye-slash"); // Then changing the icon to "eye-slash"
    } else { // Otherwise
      pwd.attr("type", "password"); // Changing the input back to password (hiding the password)
      icon.removeClass("fa-eye-slash").addClass("fa-eye"); // Changing the icon back to "eye"
    }
  });

  $("#confirm-password-eye").on("click", function () { // Toggle for Password Visibility in confirm password field
    const pwd = $("#confirm-password"); // Selecting the confirm password input field
    const icon = $(this); // Then select the clicked eye icon

    if (pwd.attr("type") === "password") { // Checking if the confirm password field is currently of type "password"
      pwd.attr("type", "text"); // Changing input type to text (making the password visible)
      icon.removeClass("fa-eye").addClass("fa-eye-slash"); // Then changing the icon to "eye-slash"
    } else { // Otherwise
      pwd.attr("type", "password"); // Changing the input back to password (hiding the password)
      icon.removeClass("fa-eye-slash").addClass("fa-eye"); // Changing the icon back to "eye"
    }
  });
});