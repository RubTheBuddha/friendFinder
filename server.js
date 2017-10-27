// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 8000;

app.use(express.static(path.join(__dirname, "app/public")));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(process.env.PORT || PORT, function() {
  console.log("App listening on PORT " + PORT);
});