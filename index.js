// Requires all neccesery modules
const fs = require("fs");
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Creates Variables needed 
let team = [];
// Stores the first part of the html
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
`

// Stores the second part of the html
const baseS = `
    </main>

    <script src="./assets/scripts/index.js"></script>
</body>

</html>`

// Creates the cards
async function makeCards() {
    for (let i = 0; i < team.length; i++) {
        // Decides what html to use per employee and appends the file
        switch (team[i].constructor.name) {
            case "Manager":
                console.log("Manager");
                console.log(team[i]);
                let cardM = `
                <div class="card">
                <div class="container">
                    <section>
                        <h4>${team[i].getName()}</h4>
                        <h5>${team[i].getRole()}</h5>
                    </section>
                  <table>
                    <tr>
                        <th>ID: ${team[i].getID()}</th>
                    </tr>
                    <tr>
                        <th>Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</th>
                    </tr>
                </table>
                </div>
              </div>`
              fs.appendFile("./dist/index.html", cardM, err => {
                if (err) {
                  console.error(err);
                }
              });
              console.log(cardM);
                break;
            case "Engineer":
                const profile = await team[i].getGithub();
                console.log("Engi");
                let cardE = `
                <div class="card">
                <div class="container">
                    <section>
                        <h4>${team[i].getName()}</h4>
                        <h5>${team[i].getRole()}</h5>
                    </section>
                  <table>
                    <tr>
                        <th>ID: ${team[i].getID()}</th>
                    </tr>
                    <tr>
                        <th>Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</th>
                    </tr>
                    <tr>
                        <th>GitHub: <a href="${profile}" target="#">${team[i].github}</a></th>
                    </tr>
                </table>
                </div>
              </div>`
              fs.appendFile("./dist/index.html", cardE, err => {
                if (err) {
                  console.error(err);
                }
              });
              console.log(cardE);
                break;
            default:
                console.log("In");
                let cardI = `
                <div class="card">
                <div class="container">
                    <section>
                        <h4>${team[i].getName()}</h4>
                        <h5>${team[i].getRole()}</h5>
                    </section>
                  <table>
                    <tr>
                        <th>ID: ${team[i].getID()}</th>
                    </tr>
                    <tr>
                        <th>Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</th>
                    </tr>
                    <tr>
                        <th>School: ${team[i].getSchool()}</th>
                    </tr>
                </table>
                </div>
              </div>`
              fs.appendFile("./dist/index.html", cardI, err => {
                if (err) {
                  console.error(err);
                }
              });
              console.log(cardI);
        }
    }
    // Writes the second part to file
    fs.appendFile("./dist/index.html", baseS, err => {
        if (err) {
          console.error(err);
        }
      });
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

// Checks if user has more employees
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

// Builds an Manager class
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

// Builds an engineer class
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

// Builds an intern class
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

// Asks what role the new employee is
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

// First question is askd
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

