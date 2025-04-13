$(document).ready(function () {
  $(".toggle-password").on("click", function () {
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

  $("#loginForm").on("submit", function (e) {
    e.preventDefault();

    const enteredEmail = $("#email").val().trim();
    const enteredPassword = $("#password").val();
    const message = $("#message");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(user => user.email === enteredEmail && user.password === enteredPassword);

    if (matchedUser) {
      message.css("color", "#7a5d7c").text("Login successful!");

      // Save the logged-in user
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

      setTimeout(function () {
        window.location.href = "../Account Page/Pages/account.html";
      }, 1500);
    } else {
      message.css("color", "#7a5d7c").text("Invalid email or password.");
    }
  });
});