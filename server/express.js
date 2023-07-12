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
  password: "password",
  port: 5432,
});

app.use(express.json());

app.get("/reports", (req, res) => {
  let sql = "SELECT * FROM Report;";

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error: ", err);
      res.status(500).send("Error getting reports");
    } else {
      res.status(200).send(result.rows);
    }
  });
});

app.post("/report", (req, res) => {
  const {
    animal,
    city,
    description,
    email,
    name,
    phone,
    picture,
    road,
    suburb,
  } = req.body;

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
