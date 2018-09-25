var Twitter = require('twitter');

var spotify = require('spotify');

var request = require('request');

var fs = require('fs');



var keys = require('./keys.js');
var twitters = keys.twitterKeys;
// var spotifys = keys.spotifyKeys;

var liris = process.argv;
var liriCommand = liris[2];

var liriArg = '';

for (var i = 3; i < liris.length; i++) {

       liriArg += liris[i] + ' ';

}

function retrieveTweets() {
	if (err) throw err;

	   });
	   
	   var client = new Twitter(twitters);

	   var params = {screen_name: '@ZW51410823', count: 5};
	   client.get('statuses/user_timeline', params, function(error, tweets, response) {

		if (error) {

			   var errorStr = 'ERROR: Retrieving user tweets -- ' + error;
			   appendfile('./log.txt', errorStr, (err) => {

				if (err) throw err;

				console.log(errorStr);

		  });
		  return;

		} else {

			   // Pretty print user tweets

			   var outputStr = '------------------------\n' +

										  'User Tweets:\n' +

										  '------------------------\n\n';



			   for (var i = 0; i < tweets.length; i++) {

					 outputStr += 'Created on: ' + tweets[i].created_at + '\n' +

										   'Tweet content: ' + tweets[i].text + '\n' +

										  '------------------------\n';

			   }
			   appendfile('./log.txt', 'LIRI Response:\n\n' + outputStr + '\n', (err) => {

				if (err) throw err;

				console.log(outputStr);

		  });

   }

});

}

// function spotifySongs(){
// 	spotify.search({ type: 'track', query: track }, function(err, data) {
// 	 if (err) {
// 	   return console.log('Error occurred: ' + err);
// 	 }
	
// 	console.log(data); 
// 	});
// 	}
	

function retrieveOBDBInfo(movie) {


	appendfile('./log.txt', 'User Command: node liri.js movie-this ' + movie + '\n\n', (err) => {

		   if (err) throw err;

	});


	var search;

	if (movie === '') {

		   search = 'Mr. Nobody';

	} else {

		   search = movie;

	}


	search = search.split(' ').join('+');


	var queryStr = 'http://www.omdbapi.com/?t=' + search + '&plot=full&tomatoes=true';
