const fs = require("fs");
const Employee = require("../lib/Employee");
jest.mock("fs");


describe("Employee", () => {
    describe("buildEmployee", () => {
        it("Should build an Employee with three keys", () => {
            const name = "Bob";
            const id = 7;
            const email = "Test@email.com";
            let count = 0;

            const testE = new Employee(name, id, email);
            for(let properties in testE) {
                count = count + 1;
            }

            expect(testE.name).toEqual("Bob");
            expect(count).toEqual(3);
            expect(testE.name).toEqual(testE.getName());
        })
    })

    describe("EmployeeRole", () => {
        it("Should return the role Employee", () => {
            const args = ["bob", 7, "blah",];

            const testE = new Employee(...args);

            expect(testE.getRole()).toEqual("Employee");
        })
    });
})
