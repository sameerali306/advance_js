// // Add event listener for the toggle button click
// togglebtn.addEventListener("click", a);
const togglebtn = document.querySelector(".Toggle-theme");
const body = document.body;

// Function to toggle between Dark and Light modes
function a() {
    // Check if the body currently has the "Dark-mode" class
    if (body.classList.contains("Dark-mode")) {
        // Switching to Light mode
        body.classList.remove("Dark-mode");  // Remove Dark mode
        body.classList.add("Light-mode");    // Add Light mode
        body.style.backgroundColor = "#ffffff";  // Set light background color
        body.style.color = "#ffffff";            // Set dark text color for light mode
        togglebtn.textContent = "Switch to Dark Mode";  // Update button text
    } else {
        // Switching to Dark mode
        body.classList.remove("Light-mode");  // Remove Light mode
        body.classList.add("Dark-mode");      // Add Dark mode
        body.style.backgroundColor = "#333333";  // Set dark background color
        body.style.color = "#ffffff";            // Set light text color for dark mode
        togglebtn.textContent = "Switch to Light Mode";  // Update button text
    }
}

// Add event listener for the toggle button click
togglebtn.addEventListener("click", a);