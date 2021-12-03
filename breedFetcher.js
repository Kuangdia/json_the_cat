const request = require('request');
// const fetchBreedDescription = require('./index');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // original code is async => we need to wrap in async fx
  // so our fBD fx doesn't finish running before we get to request
  request(URL, (err, response, body) => {

    if (err) {
      // this error from URL request will be passed to index js if (error)
      return callback(err, null);
    }

    // converts JSON body text ("string") into object
    const data = JSON.parse(body);
  
    // the wrong breedName will return [] in webbrowser (we can't compare objects)
    if (data.length === 0) {
      // this string is passed into first parameter in index.js
      callback('Breed not found', null);
    } else {
      // the description is passed into second parameter in index.js
      callback(null, data[0].description);
    }

  });
};

module.exports = { fetchBreedDescription };