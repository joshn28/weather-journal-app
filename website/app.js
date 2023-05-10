// Personal API Key for OpenWeatherMap API
const apiKey = '9efedeb2385a30b763768453145212fc&units=imperial';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

document.getElementById('generate').addEventListener('click', function() {
    const zip = document.getElementById('zip').value;
    getWeatherData(zip)
    .then(function(data) {
        const date = new Date();

        data.date = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
        data.content = document.getElementById('feelings').value;
        data.zip = zip;

        sendData('/addEntry', data);
    });
});

const getWeatherData = async (zip) => {
    const response = await fetch(baseURL+zip+',us&appid='+apiKey);

    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log('error', err);
    }
};

const sendData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data), 
    });
    
    try {
        const newData = await response.json();
        console.log(newData);
    } catch(error) {
        console.log("error", error);
    }
}