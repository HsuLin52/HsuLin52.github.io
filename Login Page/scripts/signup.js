$(document).ready(function () {
  $(".signup-form").on("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val();
    const confirmPassword = $("#confirm-password").val();
    const message = $("#message");

    message.css("color", "red").text("");

    if (name === "" && email === "") {
      message.text("Please enter your full name and email.");
      return false;
    }
    if (name === "") {
      message.text("Please enter your full name.");
      return false;
    }
    if (email === "") {
      message.text("Please enter your email.");
      return false;
    }

    if (password.length < 8) {
      message.text("Password should be at least 8 characters long.");
      return false;
    }

    if (password !== confirmPassword) {
      message.text("Passwords do not match. Please enter the same passwords.");
      return false;
    }

    message.css("color", "#7a5d7c").text("Account created successfully!");

    // Redirect after short delay (for user to see success message)
    setTimeout(function () {
      window.location.href = "../Account Page/Pages/account.html";
    }, 1000);
  });
}); 

$(document).ready(function () {
  $("#password-eye").on("click", function () {
    const pwd = $("#password");
    const icon = $(this);

    if (pwd.attr("type") === "password") {
      pwd.attr("type", "text");
      icon.removeClass("fa-eye").addClass("fa-eye-slash");
    } else {
      pwd.attr("type", "password");
      icon.removeClass("fa-eye-slash").addClass("fa-eye");
    }
  });
});

$(document).ready(function () {
  $("#confirm-password-eye").on("click", function () {
    const pwd = $("#confirm-password");
    const icon = $(this);

    if (pwd.attr("type") === "password") {
      pwd.attr("type", "text");
      icon.removeClass("fa-eye").addClass("fa-eye-slash");
    } else {
      pwd.attr("type", "password");
      icon.removeClass("fa-eye-slash").addClass("fa-eye");
    }
  });
});