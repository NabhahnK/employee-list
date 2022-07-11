const fs = require("fs");
const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
let team = [];
let continueBuilding = true;

function checkBuildStatus() {
    inquirer
        .prompt([
            {
                name: "moreE",
                type: "confirm",
                message: "Do you have another employee?"
            }
        ])
        .then((answer) => {
            if (answer) {
                checkType();
            } else {
                // generateHTML();
            }
        })
}

function buildManager() {
    inquirer
        .prompt([
            {
                name: "managerName",
                type: "input",
                message: "What is your managers name?",
            },
            {
                name: "managerID",
                type: "number",
                message: "What is their ID number?"
            },
            {
                name: "managerEmail",
                type: "input",
                message: "What is their Email?"
            },
            {
                name: "managerOfficeNumber",
                type: "number",
                message: "What is their office number?"
            }
        ])
        .then((...answers) => {
            team.push(answers);
            checkBuildStatus();
        });
}

function checkType() {
    inquirer
        .prompt([
            {
                name: "type",
                type: "checkbox",
                message: "What role do you want to add?",
                choices: ["Engineer", "Intern", "Manager"]
            }
        ])
        .then((answer) => {
            if (answer.type[0] == "Manager") {
                buildManager();
            } else if (answer.type[0] == "Engineer") {
                // buildEngineer();
            } else {
                // buildIntern();
            }
        })
}

inquirer
    .prompt([
        {
            name: "managerName",
            type: "input",
            message: "What is your managers name?",
        },
        {
            name: "managerID",
            type: "number",
            message: "What is their ID number?"
        },
        {
            name: "managerEmail",
            type: "input",
            message: "What is their Email?"
        },
        {
            name: "managerOfficeNumber",
            type: "number",
            message: "What is their office number?"
        }
    ])
    .then((...answers) => {
        team.push(answers);
        checkBuildStatus();
    });

