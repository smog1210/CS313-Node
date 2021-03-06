const express = require('express');
//var gameEngine = require('./gameEngine.js');
var processPostage = require('./processPostage.js');
var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static(__dirname + '/public')); // allows public to be public?
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.get('/', function(req, res){
    res.sendFile('mailForm.html', { root:__dirname + "/public" });
});
app.get('/process', processPostage.calculatePostage);
app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
})

// app.get('/game', gameEngine.playGame);
// app.listen(app.get('port'), function() {
//     console.log('Listening on port ' + app.get('port'));
// })