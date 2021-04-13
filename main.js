const express = require("express");
const app = express();

const logger = (req, res, next) => {
    console.table({ method: req.method });
    console.table({ url: req.url });
    next();
};
app.get("/", logger, (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/style.css", logger, (req, res) => {
    res.sendFile(__dirname + "/public/style.css");
});

app.get("/services", logger, (req, res) => {
    res.sendFile(__dirname + "/public/services.html");
});
const port = 5000;
app.listen(port, () => {
    console.log("yes we did it");
});
