// Calls in parent class Employee
const Employee = require("./Employee");
// Calls in a node that can do fetch
const fetch = require('node-fetch');

// Makes Engineer class which extends Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    async getGithub() {
        // Fetches githun profile url
        let url = `https://api.github.com/users/${this.github}`
        const response = await fetch(url);
        const data = await response.json();
        const html = data.html_url
        console.log(data.html_url);
        return html;
    };
    getRole() {return "Engineer"}
}

// Exports Engineer
module.exports = Engineer;