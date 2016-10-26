var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var suppliers = require("./routes/suppliers");
var banks = require("./routes/banks");
var banktrans = require("./routes/banktrans");

var port = 3000;

var app = express();

//View Engine
app.set("dist", path.join(__dirname, "dist"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, "dist")));

// Body Parser MW (Middleware)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/", index);
app.use("/api", suppliers);
app.use("/api", banks);
app.use("/api", banktrans);

app.listen(port, function(){
    console.log("Server started on port " + port);
});
