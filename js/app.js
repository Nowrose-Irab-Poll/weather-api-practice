const APIKey = 'ae948de89d310c21410aac115d043bae';

const searchTemperature = () => {
    const searchField = document.getElementById('city-name');
    const cityName = searchField.value;
    callAPI(cityName);
    searchField.value = '';
}

const callAPI = (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`;
    fetch(url).then(res => res.json()).then(json => parseData(json));
}

const parseData = (jsonData) => {
    console.log(jsonData);

    const cityName = jsonData.name;
    const weatherCondition = jsonData.weather[0].main;
    const temperature = jsonData.main.temp;
    const iconId = jsonData.weather[0].icon;


    showData(cityName, weatherCondition, temperature, iconId);

}

const showData = (cityName, weatherCondition, temperature, iconId) => {
    const cityField = document.getElementById('city');
    const conditionField = document.getElementById('condition');
    const temperatureField = document.getElementById('temperature');
    const weatherIcon = document.getElementById('weather-icon');

    const weatherIconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

    cityField.innerText = cityName;
    conditionField.innerText = weatherCondition;
    temperatureField.innerText = temperature;
    weatherIcon.src = weatherIconUrl;

}

callAPI('Dhaka');