// ✅ Display logged-in user info
window.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  
    if (loggedInUser) {
      document.querySelector(".profile h2").textContent = loggedInUser.name;
      document.querySelector(".profile p").textContent = "Email: " + loggedInUser.email;
  
      // ✅ Also pre-fill the modal form fields
      document.getElementById("profileName").value = loggedInUser.name;
      document.getElementById("profileEmail").value = loggedInUser.email;
    } else {
      // Optional: redirect to login page if no user logged in
      window.location.href = "../../Login Page/login.html";
    }
});

document.getElementById("uploadImage").addEventListener("change", function (event) {
    const image = event.target.files[0];
    if (image) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageSrc = e.target.result;
            document.getElementById("profileImage").src = imageSrc;
            localStorage.setItem("profileImage", imageSrc); // Save to localStorage ✅
        };
        reader.readAsDataURL(image);
    }
});

// Load profile image from localStorage on page load ✅
window.addEventListener("DOMContentLoaded", () => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        document.getElementById("profileImage").src = savedImage;
    }
});

// Load profile name and email from localStorage ✅
window.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("profileName");
    const savedEmail = localStorage.getItem("profileEmail");
    const savedMessage = localStorage.getItem("profileMessage");

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

function saveProfile() {
    const name = document.getElementById("profileName").value.trim();
    const email = document.getElementById("profileEmail").value.trim();
    const message = document.getElementById("profileMessage").value.trim();
    const saveMessage = document.getElementById("saveMessage");

    if (name === "" || email === "") {
        saveMessage.style.color = "red";
        saveMessage.textContent = "Please fill in all fields.";
    } else {
        // Save to localStorage ✅
        localStorage.setItem("profileName", name);
        localStorage.setItem("profileEmail", email);
        localStorage.setItem("profileMessage", message);

        saveMessage.style.color = "#7a5d7c";
        saveMessage.textContent = "Profile updated successfully!";

        // Update display immediately ✅
        document.querySelector(".profile h2").textContent = name;
        document.querySelector("#Email").textContent = "Email: " + email;
        document.querySelector("#Message").textContent = message;

        // Close the modal after short delay ✅
        setTimeout(() => {
            document.getElementById("edit-mode").checked = false;
            saveMessage.textContent = "";
        }, 1500);
    }
}