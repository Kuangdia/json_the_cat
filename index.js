const { fetchBreedDescription } = require('./breedFetcher');

// think about what is passed through each file
const breedName = process.argv[2];

// breedFetcher.js is calling this function and passing it's var into this
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
