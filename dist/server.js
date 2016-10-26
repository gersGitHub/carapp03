<<<<<<< HEAD
var express = require('express'),
    path = require('path'),
    fs = require('fs');

var app = express();
var staticRoot = __dirname + '/';

app.set('port', (process.env.PORT || 3000));

app.use(express.static(staticRoot));

app.use(function(req, res, next){

    // if the request is not html then move along
    var accept = req.accepts('html', 'json', 'xml');
    if(accept !== 'html'){
        return next();
    }

    // if the request has a '.' assume that it's for a file, move along
    var ext = path.extname(req.path);
    if (ext !== ''){
        return next();
    }

    fs.createReadStream(staticRoot + 'index.html').pipe(res);

});

//app.all('/*', function(req, res, next) {
//    res.sendFile('index.html', { root: __dirname + '/' });
//});

app.listen(app.get('port'), function() {
    console.log('app running on port', app.get('port'));
});
=======
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
>>>>>>> fed1590cbb2a1b83e7404a7ef9b5b56bd1916c6e
