window.addEventListener("DOMContentLoaded", () => {

    // To display logged-in user info when the page loads

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // Retrieving the logged-in user data from localStorage
  
    if (loggedInUser) { // Checking if a user is logged in

        // Displaying user's name and email on the profile page
        document.querySelector(".profile h2").textContent = loggedInUser.name;
        document.querySelector(".profile p").textContent = "Email: " + loggedInUser.email;
    
        // Pre-filling the profile editing modal with user info
        document.getElementById("profileName").value = loggedInUser.name;
        document.getElementById("profileEmail").value = loggedInUser.email;
        
    } else { // If no user is logged in

        // Redirects to the login page
        window.location.href = "../../Login Page/login.html";
    }

    // To load saved profile image from localStorage on page load

    const savedImage = localStorage.getItem("profileImage"); // Retrieving saved image from localStorage

    if (savedImage) {
        document.getElementById("profileImage").src = savedImage; // Displaying the saved image in profile
    }

    // To load profile name and email from localStorage 

    // Retrieving saved name, email and message from local storage
    const savedName = localStorage.getItem("profileName");
    const savedEmail = localStorage.getItem("profileEmail");
    const savedMessage = localStorage.getItem("profileMessage");

    // If the data exists, pre-fill the form fields with them and display them
    if (savedName) {
        document.getElementById("profileName").value = savedName;
        document.querySelector(".profile h2").textContent = savedName;
    }

    if (savedEmail) {
        document.getElementById("profileEmail").value = savedEmail;
        document.querySelector("#Email").textContent = "Email: " + savedEmail;
    }

    if (savedMessage) {
        document.getElementById("profileMessage").value = savedMessage;
        document.querySelector("#Message").textContent = savedMessage;
    }
});

// To upload and save profile image
document.getElementById("uploadImage").addEventListener("change", function (event) {

    const image = event.target.files[0]; // Getting the uploaded image

    if (image) { 

        const reader = new FileReader(); // Creating a FileReader object to read the image

        reader.onload = function (imageUpload) {
            const imageSrc = imageUpload.target.result; // Storing the image

            document.getElementById("profileImage").src = imageSrc; // Then setting it to display as profile photo
            localStorage.setItem("profileImage", imageSrc); // Then store the image in localStorage
        };

        reader.readAsDataURL(image); // Reading the image file as Data URL
    }

});

// Function to save the profile changes when the user clicks "Save"
function saveProfile() {
    const name = document.getElementById("profileName").value.trim();
    const email = document.getElementById("profileEmail").value.trim();
    const message = document.getElementById("profileMessage").value.trim();
    const saveMessage = document.getElementById("saveMessage");

    if (name === "" || email === "") { // Validation to ensure name and email are not empty
        saveMessage.css("color", "#7a5d7c").text("Please fill in all fields.")
    } else {
        // Saving the profile details in localStorage
        localStorage.setItem("profileName", name);
        localStorage.setItem("profileEmail", email);
        localStorage.setItem("profileMessage", message);

        // Then displays success message
        saveMessage.style.color = "#7a5d7c";
        saveMessage.textContent = "Profile updated successfully!";

        // Update displayed profile content immediately
        document.querySelector(".profile h2").textContent = name;
        document.getElementById("Email").textContent = "Email: " + email;
        document.getElementById("Message").textContent = message;
        
        // Close the editing modal after 1 sec 
        setTimeout(() => {
            document.getElementById("edit-mode").checked = false;
            saveMessage.textContent = "";
        }, 1000);
    }
}

// Function for loggin out
function logout() {

    localStorage.removeItem("loggedInUser"); // Removing the logged-in user data from localStorage
  
    // Then redirecting to the login page
    window.location.href = "../../Login Page/login.html";
}