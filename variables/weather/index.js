// const inputbox=document.querySelector(".input-box")
// const searchbtn=document.getElementById("searchBtn")
// const weatherimage=document.querySelector(".weather-image")
// const temperature=document.querySelector(".temperature")
// const description=document.querySelector(".description")
// const wind=document.getElementById("wind-speed")


// async function cheackweather(city) {
//     const api_key="4cd0eee1294c67b4bc4cfc64e998c5"
//     const url=`https://api.openweathermap.org/data/2.5/
//     weather?q=${city}&appid={api_key}`
//     const weather_data= await (`${url}`).then(responce=>
//         responce.json())
//         console.log(weather_data);
        
    
// }
// searchbtn.addEventListener("click", ()=>{
// cheackweather("input".value)

// })


// async function checkWeather(city) {
//     const api_key = "4cd0eee1294c67b4bc4cfc64e998c5";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
//     try {
//         const response = await fetch(url);
//         const weather_data = await response.json();
//         console.log(weather_data);
//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//     }
// }

// // Assuming you have an input field with the id "input" and a button with id "searchbtn"
// const searchbtn = document.getElementById("searchbtn");
// const input = document.getElementById("input");

// searchbtn.addEventListener("click", () => {
//     const city = input.value;
//     checkWeather(city);
// });



const inputbox = document.querySelector(".input-box");
const searchbtn = document.getElementById("searchBtn");
const weatherimage = document.querySelector(".weather-image");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const wind = document.getElementById("wind-speed");

async function checkWeather(city) {
    try{
        const url=" http://api.weatherapi.com/v1"
           const response = await fetch(url);
        const weather_data = await response.json();
        console.log(weather_data);
        
        // Now update the UI with the weather data
        temperature.textContent = `${weather_data.main.temp}°C`;
        description.textContent = weather_data.weather[0].description;
        wind.textContent = `Wind Speed: ${weather_data.wind.speed} m/s`;
        
        // Update the weather image based on the condition
        const iconCode = weather_data.weather[0].icon;
        weatherimage.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

searchbtn.addEventListener("click", () => {
    const city = inputbox.value; // Get the value from the input box
    checkWeather(city);
});
console.log(checkWeather);
