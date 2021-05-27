const path = require('path')
const http = require("http");
const hostname = "127.0.0.1";
const flash = require("connect-flash");
const port = process.env.PORT || 3000;
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const session = require("express-session");

const dotenv = require('dotenv')
const mongoose = require('mongoose')
const passport = require("passport");
const connectDB = require('./config/db')
const morgan = require("morgan");
const methodOverride = require("method-override");

const connectMongo = require('connect-mongo')

const { createAdminUser } = require("./libs/createUser");

// Initializations
require("./config/passport");
createAdminUser();



// Load config
dotenv.config({ path: './config/config.env' })

connectDB()

// Handlebars

app.engine(".hbs", exphbs({ defaultLayout: "main", partialsDir: path.join(app.get("views"), "partials"), extname: ".hbs" }));
app.set("view engine", ".hbs");

//Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Images
app.use(express.static(__dirname+'/public'));

//middlewares

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
const MongoStore = connectMongo(session);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Variables globales
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

// Routes

app.use("/", require("./routes/index"));
app.use("/coche", require("./routes/index"));
app.use("/", require("./routes/users"));


/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/plain");
  res.end("Hello World!");
});
*/
app.listen(port, hostname, () => {
  console.log("Server started on port " + port);
});



module.exports = app;