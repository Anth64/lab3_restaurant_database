const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema ({
	building: {
		type: String
	},
	street: {
		type: String
	},
	zipcode: {
		type: String
	}
});

const restaurantSchema = new Schema({
	address: {
		type: addressSchema
	},
	city: {
		type: String
	},
	cuisine: {
		type: String
	},
	name: {
		type: String
	},
	restaurant_id: {
		unique: true,
		type: String
	}
});

module.exports = mongoose.model('Restaurant', restaurantSchema);

