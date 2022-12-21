const port = 3000;

var express = require('express'),
    app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());

app.get('/book', function(req, res){
//   res.render('form');// if jade
//   // You should use one of line depending on type of frontend you are with
//   res.sendFile(__dirname + '/form.html'); //if html file is root directory
//  res.sendFile("index.html"); //if html file is within public directory
console.log('I am just a get Method')
});

app.post('/book',function(req,res){
   var username = req.body.username;
   var htmlData = 'Hello:' + username;
   res.send(htmlData);
   console.log(htmlData);
});

app.listen(port);
