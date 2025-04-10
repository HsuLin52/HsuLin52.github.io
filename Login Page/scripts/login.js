// Function to toggle password visibility
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
});