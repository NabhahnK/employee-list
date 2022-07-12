const fs = require("fs");
const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
let team = [];
const baseF = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/reset.css" />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>My Team</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main>

        <div class="card">
            <div class="container">
                <section>
                    <h4>John Doe</h4>
                    <h5>Architect & Engineer</h5>
                </section>
              <table>
                <tr>
                    <th>bob</th>
                </tr>
                <tr>
                    <th>bob</th>
                </tr>
            </table>
            </div>
          </div>
`
const baseS =`
    </main>

    <script src="./assets/scripts/index.js"></script>
</body>

</html>`


function makeCards() {
    team.forEach((element) => console.log("works"))
}

function generateHTML() {
    // return "hello"
    fs.writeFile("./dist/index.html", baseF, err => {
        if (err) {
            console.log("Did not write baseF");
        }
    })
    makeCards();
}


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
                generateHTML();
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
        // if (team[0].constructor.name === "Manager")
        checkBuildStatus();
    });

