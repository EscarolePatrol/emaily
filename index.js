const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authroutes")(app);
<<<<<<< HEAD
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "productions") {
  //Express will serve up production assets
  //like our main.js file, or main.css file
  app.use(express.static("client/build"));
  //Express will serve up the index.html file
  //if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
=======
>>>>>>> f8ab99cf4fbf98b6d191ca04c225a1dc0cbb32a0

const PORT = process.env.PORT || 5000;
app.listen(PORT);
