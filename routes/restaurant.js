const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');

router.get('/', function(req, res) {
	let sort = 0;
	switch(req.query['sortBy']) {
		case 'ASC':
			sort = 1;
			break;
		case 'DESC':
			sort = -1;
		default:
			break;
	}
	if(sort != 0) {
		Restaurant.find().sort({restaurant_id: sort})
			.then(result => res.json(result));
	}
	Restaurant.find()
		.then(result => {
			res.json(result)
		})
		.catch(err => console.log(err));
});

router.get('/cuisine/:country', function(req, res) {
	let country = req.params;
	Restaurant.find({cuisine: country})
		.then(result => {
			res.json(result)
		})
		.catch(err => console.log(err))
});

router.get('Delicatessen', async function(req, res) {
	const restaurants = await Restaurant.find();
	const results = restaurants.filter(r => r['city'] !== 'Brooklyn');
	res.json(results);
});
module.exports = router;

