/* CREATE SERVER
var fs = require('fs')

var server = http.createServer(function (req,res)
{
      console.log('request made ' + req.url);
      res.writeHead(200,{'Content-Type':'text/plain'});
      res.end('fuck you');
});
server.listen(3000,'127.0.0.1');
console.log('listening to 3000 motherfucker');

//PIPING USING SERVER
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req,res)
{
    console.log('request made ' + req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/ReadMe.txt','utf8');
    myReadStream.pipe(res);
});
server.listen(3000,'127.0.0.1');
console.log('listening to 3000 motherfucker');


var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req,res)
{
        console.log('request was made: '+ req.url);
        if(req.url ==='/home'|| req.url ==='/')
        {
            res.writeHead(200,{'Content-Type':'text/html'})
            fs.createReadStream(__dirname+'/index.html').pipe(res);
        }else if(req.url==='/api/ninjas')
        {
            var ninjas = [{name:'ryu',age:30},{name:'mitch',age:10}];
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify(ninjas));
        }
});

server.listen(3000,'127.0.0.1');

console.log('listening to port 3000 motherfucker');
    EXPRESS
    var express = require('express');

var app = express();

app.get('/',function(req,res)
{
    res.send('this is homepage');
});

app.get('/contact',function(req,res)
{
    res.send('this is contact');
});

app.listen(3000);

 */
var express = require('express');

var app = express();

app.get('/',function(req,res)
{
    res.send('this is homepage');
});

app.get('/contact',function(req,res)
{
    res.send('this is contact');
});

app.get('/profile/:id',function(req,res)
{
    res.send('this is contact');
});

app.listen(3000);