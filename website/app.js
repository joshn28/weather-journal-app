// Personal API Key for OpenWeatherMap API
const apiKey = '9efedeb2385a30b763768453145212fc&units=imperial';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

document.getElementById('generate').addEventListener('click', function() {
    const zip = document.getElementById('zip').value;
    getWeatherData(zip);
});

const getWeatherData = async (zip) => {
    const response = await fetch(baseURL+zip+',us&appid='+apiKey);

    try {
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log('error', err);
    }
};