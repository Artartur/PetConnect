const port = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const app = express();
const { Pool } = require("pg");

app.use(cors());

const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "petconnect",
  password: "test",
  port: 5432,
});

app.use(express.json());

app.post("/report", (req, res) => {
  const { animal } = req.body;
  const { city } = req.body;
  const { description } = req.body;
  const { email } = req.body;
  const { name } = req.body;
  const { phone } = req.body;
  const { picture } = req.body;
  const { road } = req.body;
  const { suburb } = req.body;

  let sql =
    "INSERT INTO Report (animal, city, description, email, name, phone, picture, road, suburb ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

  db.query(
    sql,
    [animal, city, description, email, name, phone, picture, road, suburb],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error inserting report into database");
      } else {
        res.status(200).send("Report inserted successfully");
      }
    }
  );
});

app.listen(port, console.log("Server On"));
