// Lab 03 - 101259556
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/restaurant');
const port = 3000;

// express app
const app = express();

app.set('json spaces', 2);


// dbURI
const dbURI = 'mongodb+srv://admin:admin@cluster0.xz8cj.mongodb.net/Restaurants?retryWrites=true&w=majority';

// Connect to database
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => console.log('connection successful'))
	.catch((err) => console.log(err));

// Listen on port 3000
app.listen(port);
console.log('app listening on port:', port);

// Apply routes.
app.use('/restaurants', router);
