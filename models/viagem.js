var mongoose = require("mongoose");

var viagemSchema = new mongoose.Schema({
	name: String,
	phone: String,
	dateFrom: Date,
	dateTo: Date,
	origin: String,
	destination: String,
	people: Number
});

module.exports = mongoose.model("Viagem", viagemSchema);