var port = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const app = express();
const { Pool } = require("pg");

const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "petconnect",
  password: "test",
  port: 5432,
});

app.use(cors);
app.use(express.json());

app.post("/register", (req, res) => {});

app.post("/report", (req, res) => {
  const { animal } = req.body;
  const { city } = req.body;
  const { email } = req.body;
  const { name } = req.body;
  const { phone } = req.body;
  const { picture } = req.body;
  const { road } = req.body;
  const { suburb } = req.body;

  let sql =
    "INSERT INTO Report (animal, city, email, name, phone, picture, road, suburb ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [animal, city, email, name, phone, picture, road, suburb],
    (err, res) => {
      console.log(err);
    }
  );
});

app.listen(port, console.log("Server On"));
