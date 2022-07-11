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
            if (answer.moreE === true) {
                checkType();
            } else {
                // generateHTML();
                return
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
        .then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
            team.push(manager);
            console.log(team);
            checkBuildStatus();
        });
}

function buildEngineer() {
    inquirer
        .prompt([
            {
                name: "engineerName",
                type: "input",
                message: "What is your engineers name?",
            },
            {
                name: "engineerID",
                type: "number",
                message: "What is their ID number?"
            },
            {
                name: "engineerEmail",
                type: "input",
                message: "What is their Email?"
            },
            {
                name: "engineerGithub",
                type: "input",
                message: "What is their GitHub username?"
            }
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            team.push(engineer);
            console.log(team);
            checkBuildStatus();
        });
}

function buildIntern() {
    inquirer
        .prompt([
            {
                name: "internName",
                type: "input",
                message: "What is your intern name?",
            },
            {
                name: "internID",
                type: "number",
                message: "What is their ID number?"
            },
            {
                name: "internEmail",
                type: "input",
                message: "What is their Email?"
            },
            {
                name: "internSchool",
                type: "input",
                message: "What is their school?"
            }
        ])
        .then((answers) => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            team.push(intern);
            console.log(team);
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
                buildEngineer();
            } else {
                buildIntern();
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
    .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
        team.push(manager);
        console.log(team);
        checkBuildStatus();
    });

