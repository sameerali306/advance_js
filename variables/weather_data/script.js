const url = https://api.openweathermap.org/data/2.5/weather?
const key=lat=44.34&lon=10.99&appid={API key}
const factpara = document.getElementById("facts");

const getFacts = async () => {
  console.log("getting data....");
  try {
    const response = await fetch(`${url}?key=${key}&q=London`); // Replace 'London' with the desired location
    const data = await response.json(); // Convert response to JSON
    console.log(data); // Log the data received from the API
    factpara.textContent = `Current temperature in ${data.location.name}: ${data.current.temp_c}°C`; // Update the DOM with the data
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

getFacts(); // Call the function to fetch the data
