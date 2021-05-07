const path = require('path')
const http = require("http");
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

// Handlebars

app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

//Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Images
app.use(express.static(__dirname+'/public'));


// Routes
app.use("/", require("./routes/index"));



/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/plain");
  res.end("Hello World!");
});
*/
app.listen(port, hostname, () => {
  console.log("Server started on port " + port);
});