const express = require("express");
const app = express();

var today = new Date();
var x =
    today.getDay() > 0 &&
    today.getDay() < 6 &&
    today.getHours() > 8 &&
    today.getHours() < 18;

const myLogger = function (req, res, next) {
    if (!x) {
        res.sendFile(__dirname + "/public/closed.html");
    }
    next();
};

app.use(myLogger);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});

app.get("/services", (req, res) => {
    res.sendFile(__dirname + "/public/services.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});

app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/public/style.css");
});

const port = 5000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
