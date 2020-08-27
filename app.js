var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Viagem = require("./models/viagem");

//const host = 'localhost';
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost:27017/travelA", {
mongoose.connect("mongodb+srv://lhgoulart:LvxPwuvx1KZwTgzm@cluster0.skcjt.mongodb.net/viagems", {
	useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }).then(() => console.log('Database connection successful'),
  ).catch(err => console.error('Database connection error', err));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
	res.render('home.ejs');
});

app.post("/success", function(req, res){
	Viagem.create({
		name: req.body.name,
		phone: req.body.phone,
		dateFrom: req.body.dateFrom,
		dateTo: req.body.dateTo,
		origin: req.body.origin,
		destination: req.body.destination,
		people: req.body.people
	}, function(err, viagem){
		if(err){
	 		console.log(err);
	 	}else{
	 		res.render('success.ejs',{ viagem: viagem });
	 		//console.log(viagem);
	 	}
	 });
});

app.get("/data", function(req, res){
	Viagem.find({}, function(err, viagems) { 
	    if (err) {
	    	console.log(err);
	    } else {
	        res.render('data.ejs',{ viagems: viagems});
	    }
	});
});

app.listen(port, () => {
  //console.log(`Server running at http://${host}:${port}/`);
});