const Employee = require("./Employee");
const fetch = require('node-fetch');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    async getGithub() {
        // return this.github
        let url = `https://api.github.com/users/${this.github}`
        // fetch(url)
        // .then(response => response.json())
		//     .then(data => data.html_url)
		//     .catch(error => console.log(error));
        const response = await fetch(url);
        const data = await response.json();
        const html = data.html_url
        console.log(data.html_url);
        return html;
    };
    getRole() {return "Engineer"}
}

module.exports = Engineer;