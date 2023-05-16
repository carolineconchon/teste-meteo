//script to call the api and manipulate the DOM

//function called by the event listener. it get the value enter by the user and send it to the api call
function handleSubmit(event) {
    event.preventDefault();
    let citySearched = document.getElementById("search").value
    getWeather(citySearched)
}

const getWeather = async function (city) {

    //api key
    const key = "657f51e2f29ebd059ff01c2a2a6beee0";

    //api url
    const url = "https://api.openweathermap.org/data/2.5/weather"

    //request api using the url and key then setting the city and the units(celsius, because the api is set on farenheit )  
    try {
        const response = await fetch(`${url}?zip=${city},fr&appid=${key}&units=metric`);
        const data = await response.json();
        console.log(data);
        //update the DOM
        document.getElementById('city').innerHTML = data.name;
        document.getElementById('temp').innerHTML = data.main.temp + "°C";
     document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${ data.weather[0].icon}@2x.png`;
        console.log(data.weather[0].icon)
    } catch (error) {
        //if the request is false or there is an error
        console.log('Une erreur s\'est produite lors de la récupération des données', error);
    }
}

//event listener when the form is submited
document.querySelector("form").addEventListener("submit", handleSubmit)

//default value when the page the app is launch
getWeather("76000")