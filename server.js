let express = require("express");
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let app = express();
const port = 8080;

app.use(express.json());
app.use(express.static("public"));

app.get("/", function (req, res) {
    console.log("Connection received.");
    res.sendFile("./public/index.html");
});

app.post("/searchCity", function (req, res) {
    let xhttp = new XMLHttpRequest();
    let url = "https://geogratis.gc.ca/services/geoname/en/geonames.json?q=";
    let receivedData = {
        userInput: req.body.userInput,
    };

    console.log(receivedData);
    xhttp.open("GET", url + receivedData.userInput, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onload = function () {
        if (!xhttp.status === "200") {
            console.log(xhttp.responseText, "here?");
            // console.log(xhttp.responseText);
        } else {
            res.send(xhttp.responseText);
        }
    };
    xhttp.send();
});

app.listen(port, function (req, res) {
    console.log(`Listening on port ${port}.`);
});
test();
async function test() {
    const url = "https://raw.githubusercontent.com/TornadoWise/TornadoWise/45cadb218e9596c9a0bd3fb0ed33a7a3ea7219d8/data/Tornados_1980_2009.geojson";

    const response = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // Use the JSON data in your application
        })
        .catch((error) => console.error("Error fetching the JSON file:", error));
}
