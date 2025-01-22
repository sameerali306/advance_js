const URL = 'https://jsonplaceholder.typicode.com/users';
const btn = document.querySelector("#btn");
const userDataDiv = document.querySelector("#user-data");

async function fetchUserData() {
  console.log("getting data.....");
  try{ 
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

  
    const users = await response.json();

    

    
    users.forEach(user => {

      const userDiv = document.createElement("div");
      userDiv.innerHTML = `ID: ${user.id}, Name: ${user.name}, City: ${user.address.city}`;
      
    
      userDataDiv.appendChild(userDiv);
    });
  } catch (error) {
    
    console.error('Error fetching data:', error);
    userDataDiv.innerHTML = 'Error fetching data.';
  }}

btn.addEventListener("click", fetchUserData);
