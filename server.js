const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require('dotenv').config()
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

var corsOptions = {
    origin: "http://localhost:3000"
  };

app.use(cors(corsOptions));
app.use(cookieParser()); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parse form data client 

app.use(express.static(path.join(__dirname, 'public')))
app.use(fileUpload());

// Models
const db = require("./app/Models");

app.get("/", (req, res) => {
    res.json({ message: "Welcome to NodeJS with mongoose application." });
  });

// set port, listen for requests
const PORT = process.env.PORT || 8080;

require("./routes/auth.routes")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
  });
