#!/usr/bin/env node
const yargs = require("yargs");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const digit = "09123456789";
const punct = "!@#$%^&*()-_=+\\|][{};:',.<>?/"

var template = "AAaa9,,A99aaAA9aa"

const options = yargs
 .usage("Usage: -l <length> or -t <template>")
 .option("l", { alias: "length", describe: "Generated length", type: "integer", demandOption: false, default: 15 })
 .option("t", { alias: "template", describe: "Template", type: "string", demandOption: false, default: "AAaa9,,A99aaAA9aa"})
 .argv;

if (options.length != 15) {
	const greeting = 'Length ' + options.length;
	console.log(greeting);
}
if (options.template != "A") {
	const templ = 'Template: '+ options.template;
	// console.log(templ);
}


var passwd = '';
for (var i = 0; i < options.template.length; i++) {
	var ch = options.template.charAt(i);
	
	if ('9' == ch) {
		let r = Math.floor(Math.random() * digit.length);
		passwd = passwd + digit.charAt(r);
	}
	if ('A' == ch) {
		let r = Math.floor(Math.random() * upper.length);
		passwd = passwd + upper.charAt(r);
	}
	if ('a' == ch) {
		let r = Math.floor(Math.random() * lower.length);
		passwd = passwd + lower.charAt(r);
	}
	if (',' == ch) {
		let r = Math.floor(Math.random() * punct.length);
		passwd = passwd + punct.charAt(r);
	}
}
console.log(passwd);
