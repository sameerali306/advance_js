const inputbox=document.querySelector(".input-box")
const searchbtn=document.getElementById("searchBtn")
const weatherimage=document.querySelector(".weather-image")
const temperature=document.querySelector(".temperature")
const description=document.querySelector(".description")
const wind=document.getElementById("wind-speed")


function cheackweather() {
    
}
searchbtn.addEventListener("click", ()=>{
cheackweather("input".value)
})