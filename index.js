const express = require('express');
const app = express();
const hbs = require('express-hbs');

var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


app.get('/', function (req, res) {
	res.send('<a href="https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_name">Type pokemon name at the end of path to fetch for stats and abilities.</a>');
})


app.get('/:type', function (req, res) {
	P.getPokemonByName(req.params.type)
		.then(function(response){
			console.log(response.stats[0]);
  			res.render('index', response);
  			res.status(200);
		})
		.catch(function(err){
			res.status(404);
		})
})

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})
