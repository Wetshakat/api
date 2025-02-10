const { post } = require("request");

let A = 20
let b = A,B
    A = 25
console.log(b)

// const username = "benedefi" ; 

// fetch(`https://api.github.com/users/${username}`)
//   .then(response => response.json()) 
//   .then(data => console.log(data)) 
//   .catch(error => console.error("Error:", error)); 


  let userName = "wetshakat"

  fetch(`https://api.github.com/users/${userName}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));

  const API_KEY = "YOUR_API_KEY";
  const CITY = "London"; 
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(`Weather in ${CITY}: ${data.weather[0].description}`);
      console.log(`Temperature: ${data.main.temp}°C`);
    })
    .catch(error => console.error("Error fetching weather data:", error));


    
  