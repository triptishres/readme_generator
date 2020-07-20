const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

const questions = [{
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter your project's description."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage."
    },
    {
        type: "list",
        name: "licence",
        choices: ['MIT License', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'GNU Affero General Public License v3.0', 'The Unlicense', 'Apache License 2.0', 'GNU General Public License v3.0']
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests."
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
];

inquirer
    .prompt(questions)
    .then(function(data) {
        console.log(1)

        fs.writeFile("README.md", generate(data), function(err) {
            if (err) {
                throw err;
            };

            console.log("New README file created successfully!");
        });
    });

function init() {

}

init();