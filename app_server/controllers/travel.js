const fs = require('fs');

// Read the trips data from the JSON file
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel page */
const travel = (req, res) => {
  res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = {
  travel,
};