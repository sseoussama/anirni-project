var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors=require('cors');
var morgan = require('morgan');
var passport = require('passport');
require('./config/passport')(passport);
const {urlDb}  = require('./config');
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(passport.initialize());

 
app.use(bodyParser.json()); 



var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(urlDb, {
    useMongoClient: true
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

 app.get('/', function(req, res)
    {
        res.json('Welcome to Anirni Authentication App. Please login/register .');
    });
app.listen(5000, function(){
    console.log("Server is listening on port 5000");
});
require('./api/routes/user.routes.js')(app,passport);


