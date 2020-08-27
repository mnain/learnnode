// readjson.js

var fs = require('fs');
var fname = 'j1.json';
var allLines = fs.readFileSync(fname);
var json = JSON.parse(allLines);
console.log(json.uid,json.user);
var jb = { "name" : "Demo", "last" : "Example",  "email" : "mnain@yahoo.com" };
for (var key in jb) {
	console.log(">",key," = "+jb[key]);
}
var value = { "id" : 5, "name" : "Madan Nain", "email" : "mnain@yahoo.com" };
console.log("id:",value.id);
console.log("name:",value.name);

var db = require('sqlite3');

// (async () => {
	// const db = wait

