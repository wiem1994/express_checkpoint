const express = require("express");
const app = express();

var today = new Date();
var x =
    today.getDay() > 0 &&
    today.getDay() < 6 &&
    today.getHours() > 9 &&
    today.getHours() < 17;

app.get("/", (req, res) => {
    if (x) {
        res.sendFile(__dirname + "/public/home.html");
    } else {
        res.sendFile(__dirname + "/public/closed.html");
    }
});

app.get("/services", (req, res) => {
    if (x) {
        res.sendFile(__dirname + "/public/services.html");
    } else {
        res.sendFile(__dirname + "/public/closed.html");
    }
});

app.get("/contact", (req, res) => {
    if (x) {
        res.sendFile(__dirname + "/public/contact.html");
    } else {
        res.sendFile(__dirname + "/public/closed.html");
    }
});

app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/public/style.css");
});

const port = 5000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
