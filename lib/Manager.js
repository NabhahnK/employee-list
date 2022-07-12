// Iports Employee parent class
const Employee = require("./Employee");

// Creastes Manager which extends Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() { return "Manager" }
}

// Exports Manager
module.exports = Manager;