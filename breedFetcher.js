const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (err, response, body) => {

  if (err) {
    return console.log("This is an error", err);
  }
  // converts JSON body text ("string") into object
  const data = JSON.parse(body);

  // to access first object in an array
  if (data.length === 0) {
    console.log("error message?");
  }
  console.log(data[0].description);


});
