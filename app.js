var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Viagem = require("./models/viagem");

const host = 'localhost';
const port = 3000;

mongoose.Promise = global.Promise;


//mongoose.connect("mongodb://localhost:27017/travelA", {

mongoose.connect("mongodb+srv://lhgoulart:864162@cluster0.skcjt.mongodb.net/viagems", {
	
//mongoose.connect("mongodb://lhgoulart:864162hfB%21@cluster0-skcjt.mongodb.net/travelA?retryWrites=true&w=majority", {
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
	 		console.log(viagem);
	 	}
	 });
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});