#!/usr/bin/env node

// var http = require("http");

// var options = {
  // host: 'www.uspto.gov',
  // port: 80,
  // path: '/',
  // method: 'GET'
// };

// var req = http.request(options, function(res) {
  // console.log('STATUS: ' + res.statusCode);
  // console.log('HEADERS: ' + JSON.stringify(res.headers));
  // res.setEncoding('utf8');
  // res.on('data', function (chunk) {
    // console.log('BODY: ' + chunk);
  // });
// });

// req.on('error', function(e) {
  // console.log('problem with request: ' + e.message);
// });

// write data to request body
// req.write('data\n');
// req.write('data\n');
// req.end();

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -u <url>")
 .option("u", { alias: "url", describe: "URL to visit", type: "string", demandOption: true })
 .argv;

var request = require('request');
request(options.url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
  else {
    // console.log("Error "+response.statusCode)
	console.log("Error: ",error)
  }
})
