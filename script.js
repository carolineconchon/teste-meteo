//script to call the api and manipulate the DOM

//function called by the event listener. it get the value enter by the user and send it to the api call
function handleSubmit(event) {
    event.preventDefault();
    let citySearched = document.getElementById("search").value
    getWeather(citySearched)
}

const getWeather = async function (city) {

    //api key
    const key = "73e0c55dbba79a4258ee5b7f698c2673";

    //api url
    const url = "http://api.weatherstack.com/"

    //request api using the url and key then setting the city and the units(celsius, because the api is set on farenheit )  
    try {
        const response = await fetch(`${url}current?access_key=${key}&query=${city}&units=m`);
        const data = await response.json();
        console.log(data);
        //update the DOM
        document.getElementById('city').innerHTML = data.location.name;
        document.getElementById('temp').innerHTML = data.current.temperature + "°C";
        document.getElementById('weather-icon').src = data.current.weather_icons;
    } catch (error) {
        //if the request is false or there is an error
        console.log('Une erreur s\'est produite lors de la récupération des données', error);
    }
}

//event listener when the form is submited
document.querySelector("form").addEventListener("submit", handleSubmit)

//default value when the page the app is launch
getWeather("penmarc'h")