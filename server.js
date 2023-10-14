const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  try {
    res.send("<h1> Hello from Nginx!</h1>");
  } catch (error) {
    console.error(error);
  }
});
app.get("/about", function (req, res) {
  try {
    res.send("<h1> Hello from about!</h1>");
  } catch (error) {
    console.error(error);
  }
});

app.use("*", (req, res) => {
  res.status(404).send("<h1>404! Page not found</h1>");
});
app.listen(PORT, () => console.log("listening on port", PORT));
