const fs = require("fs");
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");

const dude = new Manager("bob", 18, "ablah@gmailk", 1);
console.log(dude.getRole())