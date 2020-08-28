var mongoose = require("mongoose");

var viagemSchema = new mongoose.Schema({
	name: {type: String, required: [true, 'Name required']},
	phone: {type: String, required: [true, 'Phone required']},
	dateFrom: {type: Date, required: [true, 'Check-in date required']},
	dateTo: {type: Date, required: [true, 'Check-out date required']},
	origin: {type: String, required: [true, 'Origin required']},
	destination: {type: String, required: [true, 'Destination required']},
	people: {type: Number, required: [true, 'Number of travelers required'], min: 1}
});

module.exports = mongoose.model("Viagem", viagemSchema);