var express = require("express");
var path = require("path");
const logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 8000;

app.use(session({secret: 'secretword'}));
app.use(express.static(path.join(__dirname, './public/dist')));
app.use(logger('dev'));
app.use(bodyParser.json());

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// app.listen(port, () => {
//  console.log('All ears on port ' + port);
// });

module.exports = app;
