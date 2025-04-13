$(document).ready(function () { // Waiting until the entire document is fully loaded

  $(".toggle-password").on("click", function () { // Toggle for Password Visibility
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

  $("#loginForm").on("submit", function (login) { // For Login Form Submission

    login.preventDefault(); // Preventing default form submission behavior

    // Getting values from email and password fields
    const enteredEmail = $("#email").val().trim();
    const enteredPassword = $("#password").val();

    const message = $("#message"); // Selecting the message element to display

    const users = JSON.parse(localStorage.getItem("users")) || []; // Retrieving users array from localStorage

    const matchedUser = users.find(user => user.email === enteredEmail && user.password === enteredPassword);  // Checking if the entered values match any user in the stored users array

    if (matchedUser) { // If the values match
      message.css("color", "#7a5d7c").text("Login successful!"); // Displays a message to say the login is successful

      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser)); // Saving the logged-in user's data in localStorage

      // Redirecting user to their account page after 1.5 sec
      setTimeout(function () { 
        window.location.href = "../Account Page/Pages/account.html";
      }, 1500);
    } else { // If the values do not match
      message.css("color", "#7a5d7c").text("Invalid email or password."); // Displays the error message
    }
  });
});