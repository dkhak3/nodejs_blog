const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

const route = require("./routes");
// import db
const db = require("./config/db");

// Connect to db
db.connect();

// đường dẫn ảnh http://localhost:3000/img/logo.png
app.use(express.static(path.join(__dirname, "public")));

// lấy giá trị của form method POST trong Form Data
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP Logger
// app.use(morgan("combined"));

// Template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
