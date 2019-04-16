
// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/Vampire');
require('./populateVampires');

// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/vampires';

// 4. Open your mongoose connection
mongoose.connect(connectionString, {useNewUrlParser: true, useCreateIndex: true});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connect to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose disconnected to ${connectionString}`);
});

mongoose.connection.on('error', () => {
  console.log(`Mongoose err: ${err}`);
});


/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
const vamps = require('./populateVampires');

Vampire.collection.insertMany(vamps,(err, vamps) => {
  console.log("added provided vampire data")
  mongoose.connection.close();
});


// ### Add some new vampire data


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
