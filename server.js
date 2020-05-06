var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

server.listen(8081,function(){
    console.log('Listening on '+server.address().port);
});
