// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helpers = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(input) {

    console.log(input);

   return axios({
  method: 'get',
  url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
   params: {
    	'api-key': "7efe971093614bfb9405390f6aa0d31a",
		  'q': input.topic,
		  'begin_date': input.startYrSearch,
		  'end_date': input.endYrSearch,
		  'page': 0
  }
}).then(function(result) {
      // If get get a result, return that result's formatted address property
      if (result) {
        console.log(result);
        result =result.data.response.docs.slice(0,5);
        return result;
      }
      // If we don't get any results, return an empty string
      return "";
    });



    // return axios.get(queryURL).then(function(result) {
    //   // If get get a result, return that result's formatted address property
    //   if (result.response.docs) {
    //     console.log(result);
    //     return result.response.docs.formatted;
    //   }
    //   // If we don't get any results, return an empty string
    //   return "";
    // });
// })
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helpers;
