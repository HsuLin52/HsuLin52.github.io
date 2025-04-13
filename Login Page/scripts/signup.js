$(document).ready(function () {
  $(".signup-form").on("submit", function (e) {
    e.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val();
    const confirmPassword = $("#confirm-password").val();
    const message = $("#message");

    message.css("color", "#7a5d7c").text("");

    if (name === "" && email === "") {
      message.text("Please enter your full name and email.");
      return;
    } else if (name === "") {
      message.text("Please enter your full name.");
      return;
    } else if (email === "") {
      message.text("Please enter your email.");
      return;
    }

    if (password.length < 8) {
      message.text("Password should be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      message.text("Passwords do not match.");
      return;
    }

    // ✅ Store user in array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      message.text("Email already registered.");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    message.css("color", "#7a5d7c").text("Account created successfully!");

    setTimeout(function () {
      window.location.href = "../Account Page/Pages/account.html";
    }, 1500);
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