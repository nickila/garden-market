const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
//const passport = require("./config/passport");
var passport = require('passport');
require('./config/passport');
const users = require("./routes/api/users");

const PORT = process.env.PORT || 3001;
const app = express();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gardenmarket", { useNewUrlParser: true });

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("./api/users", users);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
