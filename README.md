# Weather Journal App

An asynchronous web app that uses Web API and user data to dynamically update the UI in a Weather Journal application.

# Table of Contents

- [Weather Journal App](#weather-journal-app)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Dependencies](#dependencies)
- [Contribute](#contribute)
- [License](#license)

# Installation
In order to install the code, you can just clone this repo by using the code snippet below.

```
git clone git@github.com:joshn28/weather-journal-app.git
```

# Usage
In order to use this project, you must:

1. Enter a valid US ZIP code.
2. Use the textbox to type how you are feeling today.
3. Click the generate button to create an entry.

# Development
In order to use this project, you need to first clone the repo:
```
# Clone repo
$ git clone git@github.com:joshn28/weather-journal-app.git

# Change directory
$ cd weather-journal-app
```
Next, you need to obtain an API key from [OpenWeatherMap](https://openweathermap.org/) and replace the placeholder text at the top of the app.js file with your API key.

Then, you need to install the dependencies as well as run the server.
```
# Install dependencies
$ npm install

# Run server
$ node server.js
```
Finally, open your web browser and type localhost:3000 into the address bar to access the application.

# Dependencies
- express
- body-parser
- cors

# Contribute

This is a personal project, no need to contribute.

# License

None.
