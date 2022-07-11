const fs = require("fs");
const Manager = require("../lib/Manager");
jest.mock("fs");


describe("Manager", () => {
    describe("buildManager", () => {
        it("Should build an Manager with four keys", () => {
            const name = "Bob";
            const id = 7;
            const email = "Test@email.com";
            const school = "test";
            let count = 0;

            const testE = new Manager(name, id, email, school);
            for(let properties in testE) {
                count = count + 1;
            }

            expect(testE.name).toEqual("Bob");
            expect(count).toEqual(4);
            expect(testE.name).toEqual(testE.getName());
        })
    })

    describe("ManagerRole", () => {
        it("Should return the role Manager", () => {
            const args = ["bob", 7, "blah",];

            const testE = new Manager(...args);

            expect(testE.getRole()).toEqual("Manager");
        })
    });
})
