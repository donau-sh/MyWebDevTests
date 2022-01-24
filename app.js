const express = require("express");
const https = require("https");

const app = new express();


app.get("/", function(req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=frankfurt&appid=b1634becb61ee9ed1dbed769bef3b56e&units=metric";
    https.get(url, function(response) {
        console.log(response.stattus);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desp = weatherData.weather[0].description;
            console.log(weatherData);
            console.log(temp);
            console.log(desp);
        })
    })

    res.send("Server is up and running.");
});



app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});