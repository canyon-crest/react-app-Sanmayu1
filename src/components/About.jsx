import { useState } from "react"
import "./About.css"

function About() {
 
 const [city, setCity] = useState("San Diego")
 const [weather, setWeather] = useState(null)

 
 const [dogImage, setDogImage] = useState("")


 const [joke, setJoke] = useState("")


 const fetchWeather = async () => {
   try {
     const response = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=94097ae8ef61b9ab53f41d1b086bec79`
     )
     const data = await response.json()
     setWeather(data)
   } catch (error) {
     console.error("Weather error:", error)
   }
 }

 const fetchDog = async () => {
   try {
     const response = await fetch("https://dog.ceo/api/breeds/image/random")
     const data = await response.json()
     setDogImage(data.message)
   } catch (error) {
     console.error("Dog error:", error)
   }
 }


 const fetchJoke = async () => {
   try {
     const response = await fetch(
       "https://v2.jokeapi.dev/joke/Any?safe-mode"
     )
     const data = await response.json()

     if (data.type === "single") {
       setJoke(data.joke)
     } else {
       setJoke(data.setup + " - " + data.delivery)
     }
   } catch (error) {
     console.error("Joke error:", error)
   }
 }

 return (
   <div className="about-container">
     <h1>About The World!</h1>

     {}
     <div className="card">
       <h2>Weather</h2>

       <input
         type="text"
         placeholder="Enter city"
         onChange={(e) => setCity(e.target.value)}
       />

       <button onClick={fetchWeather}>Get Weather</button>

       {weather && weather.main && (
         <div>
           <p><b>{weather.name}</b></p>
           <p>{Math.round(weather.main.temp)}°F</p>
           <p>{weather.weather[0].description}</p>
         </div>
       )}
     </div>

     {}
     <div className="card">
       <h2>Random Dog</h2>
       <button onClick={fetchDog}>Get Dog</button>

       {dogImage && (
         <img src={dogImage} alt="dog" className="image" />
       )}
     </div>

     {}
     <div className="card">
       <h2>Random Joke</h2>
       <button onClick={fetchJoke}>Get Joke</button>

       {joke && <p>{joke}</p>}
     </div>
   </div>
 )
}

export default About
