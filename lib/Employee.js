// Creates Parent classs Employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() { return this.name }
    getID() { return this.id }
    getEmail() { return this.email }
    getRole() { return "Employee" }
}

// Exports Class
module.exports = Employee;