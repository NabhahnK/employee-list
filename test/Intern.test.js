const fs = require("fs");
const Engineer = require("../lib/Engineer");
jest.mock("fs");


describe("Engineer", () => {
    describe("buildEngineer", () => {
        it("Should build an Engineer with four keys", () => {
            const name = "Bob";
            const id = 7;
            const email = "Test@email.com";
            const github = "test";
            let count = 0;

            const testE = new Engineer(name, id, email, github);
            for(let properties in testE) {
                count = count + 1;
            }

            expect(testE.name).toEqual("Bob");
            expect(count).toEqual(4);
            expect(testE.name).toEqual(testE.getName());
        })
    })

    describe("EngineerRole", () => {
        it("Should return the role Engineer", () => {
            const args = ["bob", 7, "blah",];

            const testE = new Engineer(...args);

            expect(testE.getRole()).toEqual("Engineer");
        })
    });
})
