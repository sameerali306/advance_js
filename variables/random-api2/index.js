// let allUsers=[]
// let maleUsers=[]
// let femaleUsers=[]
// const URL="https://randomuser.me/api/?results=20"

// window.onload = function () {
//   document.getElementById("fetch-users-btn").addEventListener("click", () => {
//       fetchUsers();
//   }); // Added closing parenthesis and semicolon here
// };
// document.getElementById("fetch-users-btn").addEventListener("click", () => {
//     fetchUsers();
// })
// document.getElementById("male-link").addEventListener("click", () => {
//     fetchUsersByGender("male");
//   });

  // async function fetchUsers() {
  //   try {
  //       const responce = await fetch(URL);
  //       if (responce.ok) {
  //           let data = await responce.json();
  //           allUsers = data.results;
  //           DisplayUserCards(allUsers);
  //           document.getElementById("gender-links").style.display = "block";
  //           document.getElementById("fetch-users-btn").style.display = "none";
  //           document.getElementById("users-container").style.display = "flex";  // Fixed 'displat' to 'display'
  //       } else {
  //           console.log("Failed to fetch users");
  //       }
  //   } catch (error) {
//         console.log("Failed to fetch users", error);
//     }
// }

// async function fetchUsersByGender(gender) {
//     try {
//       const response = await fetch(`https://randomuser.me/api/?results=20&gender=${gender}`);
//       if (response.ok) {
//         const data = await response.json();
//         const users = data.results;
//         // Show filtered users by gender
//         displayUserCards(users);
//       } else {
//         console.log(`Failed to fetch ${gender} users`);
  //     }
  //   } catch (error) {
  //     console.log(`Error fetching ${gender} users`, error);
  //   }
  // }
  // Function to display user cards
  // function displayUserCards(users) {
  //   const usersContainer = document.getElementById("users-container");
  //   usersContainer.innerHTML = ""; // Clear previous content
  //   users.forEach(user => {
  //     const card = document.createElement("div"); // Dynamically inject user data
  //     card.className = "user-card";
  //     card.id = user.id.value;
  //     card.innerHTML = `
  // //       <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}" />
  //       <h4>${user.name.first} ${user.name.last}</h4>
  //     `;
  //     usersContainer.appendChild(card);
  //   });
  // }




  // ??????????????????????????????????????????????????????????????????????????????????
  