/* tojson.js */
var https = require('https');

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <number> -m <message>")
 .option("n", { alias: "number", describe: "number to SMS", type: "string", demandOption: true })
 .option("m", { alias: "message", describe: "message to SMS", type: "string", demandOption: true})
 .argv;

const msg = `Number: ${options.number}, Message: ${options.message}`;
/* format body */
$phone = { 'phone' : `${options.number}` };
let numbers = [];
numbers.push($phone);

$body = { 
	'body' : `${options.message}`,
	'recipients' : '123'
};
var bodyStr = "{\"body\" : \"%%MESSAGE%%\", \"recipients\" : [ %%RECIPIENTS%%\ ] }";
console.log(bodyStr);
var phoneStr = "{ \"phone\" : \"%%NUMBER%%\" }";
phone = phoneStr.replace("%%NUMBER%%", `${options.number}`);
body = bodyStr.replace("%%RECIPIENTS%%", phone).replace("%%MESSAGE%%", `${options.message}`);

console.log(phone);
console.log(body);

var api = 
