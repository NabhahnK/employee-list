const fs = require("fs");
const Intern = require("../lib/Intern");
jest.mock("fs");


describe("Intern", () => {
    describe("buildIntern", () => {
        it("Should build an Intern with four keys", () => {
            const name = "Bob";
            const id = 7;
            const email = "Test@email.com";
            const school = "test";
            let count = 0;

            const testE = new Intern(name, id, email, school);
            for(let properties in testE) {
                count = count + 1;
            }

            expect(testE.name).toEqual("Bob");
            expect(count).toEqual(4);
            expect(testE.name).toEqual(testE.getName());
        })
    })

    describe("InternRole", () => {
        it("Should return the role Intern", () => {
            const args = ["bob", 7, "blah",];

            const testE = new Intern(...args);

            expect(testE.getRole()).toEqual("Intern");
        })
    });
})
