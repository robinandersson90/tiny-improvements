const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/api/users", (req, res) => res.json([]));

app.listen(PORT, function () {
    console.log(`We are connected 🌎 on PORT ${PORT}`);
});
