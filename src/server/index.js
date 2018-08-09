require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const salesForce = require("./config/salesforce");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/api/kudos", (req, res) => {
    salesForce.query(`SELECT Id, Name, Comment__c, Receiver__r.Name, Sender__r.Name FROM Kudos__c`).then((data) => {
        // return all of the fields from the object Kudos in SalesForce
        res.json(data.records.map(record => record._fields))
    });
});

app.get("/api/users", (req, res) => {
    salesForce.query(`SELECT id, name FROM Tiny_Improvements_User__c`).then((data) => {
        // return all of the fields from the object Tiny_Improvements_User__c in SalesForce
        res.json(data.records.map(record => record._fields))
    });
});

app.post("/api/kudos", (req, res) => {
    salesForce.createKudos(req.body).then(() => {
        res.json({ success: true })
    });
});

app.get("/api/searchemail/:email", (req, res) => {
    salesForce.query(`SELECT Id, Name, Comment__c, Receiver__r.Name, Sender__r.Name FROM Kudos__c WHERE Receiver__r.email__c = '`
        + req.params.email + `'`)
        .then((data) => {
            // search for email address
            res.json(data.records.map(record => record._fields))
        });
});

app.get("/api/mvp/", (req, res) => {
    salesForce.query(`SELECT Id, Comment__c, Receiver__r.Name, Sender__r.Name, COUNT(Receiver__c) FROM Kudos__c GROUP BY Receiver__r.Name HAVING COUNT(Receiver__c) >= 3`)
        //display all of the Receivers that have more than 3 Kudos
        .then((data) => {
            res.json(data.records.map(record => record._fields))
        });
});

app.listen(PORT, function () {
    console.log(`We are connected 🌎 on PORT ${PORT}`);
});