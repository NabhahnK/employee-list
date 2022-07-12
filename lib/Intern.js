// Calls Employee parent class
const Employee = require("./Employee");

// Makes Intern class which extends Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {return this.school}
    getRole() {return "Intern"}
}

// Exports Intern Class
module.exports = Intern;