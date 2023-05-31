var port = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const app = express();
const pg = require("pg");

app.use(cors);
app.use(express.json());

app.post("/denuncias", (req, res) =>{
    res.send("Hello, I'm working");
})

app.listen(port, console.log("Hello, I'm working"));