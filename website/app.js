// Personal API Key for OpenWeatherMap API
const apiKey = '9efedeb2385a30b763768453145212fc&units=imperial';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.getElementById('generate').addEventListener('click', function() {
    const zip = document.getElementById('zip').value;
    // Hide entry box
    const entry = document.getElementById('entryHolder');
    entry.classList.remove('animation')
    entry.classList.add('hidden');

    getWeatherData(zip)
    .then(function(data) {
        const date = new Date();
        // Add the date, content and zip to the data object
        data.date = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        data.feel = document.getElementById('feelings').value;
        data.zip = zip;

        sendData('/addEntry', data);
    }).then(function() {
        retrieveData();
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

const retrieveData = async () =>{
    const request = await fetch('/all');
    const zip = document.getElementById('zip').value;

    try {
        // Transform into JSON
        const appData = await request.json();
        const data = appData[zip];
        // Show entry with animation
        const entry = document.getElementById('entryHolder');
        entry.classList.remove('hidden');
        entry.classList.add('animation')
        // Clear inputs
        document.getElementById('zip').value = '';
        document.getElementById('feelings').value = '';
        // Write updated data to DOM elements
        document.getElementById('temp').innerHTML = Math.round(data.temp) + '°F';
        document.getElementById('content').innerHTML = data.feel;
        document.getElementById('date').innerHTML = data.date;
    } catch (error) {
        console.log('error', error);
        // appropriately handle the error
    }
}