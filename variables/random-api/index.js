const URL = "https://randomuser.me/api/?results=50";
const btn = document.getElementById("btn");
const genderButtonsContainer = document.getElementById("gender-buttons");
const goBackButtonContainer = document.getElementById("go-back-btn");
const profile = document.getElementById("view-profile");

let allUsers = [];
let originalUsers = [];

const getFacts = async () => {
    try {
        console.log("Getting data...");
        let response = await fetch(URL);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            allUsers = data.results;
            originalUsers = [...allUsers]; // Store the original data for the "Go Back" functionality
            displayUsers(allUsers); // Display all users initially
            showGenderButtons(); // Show gender filter buttons after data is fetched
        } else {
            console.log(`Failed to fetch data. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

const showGenderButtons = () => {
    // Create gender buttons only after data is fetched
    genderButtonsContainer.innerHTML = `
        <button id="maleBtn">Male</button>
        <button id="femaleBtn">Female</button>
    `;

    // Add event listeners to gender buttons
    document.getElementById("maleBtn").addEventListener("click", () => filterByGender("male"));
    document.getElementById("femaleBtn").addEventListener("click", () => filterByGender("female"));
};

const filterByGender = (gender) => {
    const filteredUsers = allUsers.filter((user) => user.gender === gender);
    displayUsers(filteredUsers);
    showGoBackButton(); // Show "Go Back" button when filtered by gender
};

const displayUsers = (users) => {
    const facts = document.getElementById("facts");
    let allCardsHTML = "";
    users.forEach((item, index) => {
        allCardsHTML += `
            <div class="card" id="${item.id.value}" key="${index}">
                <p>Name: ${item.name.first} ${item.name.last}</p>
                <img src="${item.picture.large}" alt="${item.name.first} ${item.name.last}">
                <button onclick="viewProfile(${index})">View Profile</button>
            </div>`;
    });
    facts.innerHTML = allCardsHTML;
};

const viewProfile = (index) => {
    const user = allUsers[index];
    const profileHTML = `
        <div class="profile-card">
        <h1>Title:${user.title.gender}</h1>
            <p>Name: ${user.name.first} ${user.name.last}</p>
            <p>Gender: ${user.gender}</p>
            <p>Location: ${user.location.city}, ${user.location.country}</p>
            <p>Email:${user.email}
            <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
            <button onclick="closeProfile()" class="close">Close Profile</button>
        </div>
    `;
    profile.innerHTML = profileHTML;
    profile.style.display = "block"; // Show the profile view
    document.getElementById("facts").style.display = "none"; // Hide the main user list
    showGoBackButton()

};

const closeProfile = () => {
    profile.style.display = "none"; // Hide the profile view
    document.getElementById("facts").style.display = "block"; // Show the user list
    
};

const showGoBackButton = () => {
    goBackButtonContainer.style.display = "block";  // Make the "Go Back" button visible
    goBackButtonContainer.innerHTML = `
        <button id="goBackBtn">Go Back</button>
    `;
    document.getElementById("goBackBtn").addEventListener("click", () => {
        displayUsers(originalUsers); // Show all users again
        goBackButtonContainer.style.display = "none"; // Hide the "Go Back" button
        showGenderButtons(); // Show the gender buttons again after going back
    });
};

btn.addEventListener("click", () => {
    if (allUsers.length === 0) {
        getFacts(); // Fetch data if not fetched yet
    } else {
        displayUsers(allUsers); // Display users immediately if already fetched
    }
});
