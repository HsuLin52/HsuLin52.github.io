// Function to toggle password visibility
function togglePassword() {

    const pwd = document.getElementById("password"); // Getting the password input field
    const icon = document.querySelector(".toggle-password"); // Getting the icon element used to toggle the visibility

    if (pwd.type === "password") { // If the password is hidden, show it
        pwd.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else { // If the password is visible, hide it
        pwd.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}