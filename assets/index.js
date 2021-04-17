const generateMarkdown = require('../utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide any installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions how to use this application',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide instructions on how people can contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions on how to test this application', 
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the appropriate license for this project',
        choices: ["Apache","MIT","...no license"],
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address along with any instructions on how you can be reached: ',
    },
  ];

function writeToFile(answers) {
    return generateMarkdown(answers);
}

function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            fs.writeFile("readme.md", writeToFile(answers), (err) =>
                err ? console.error(err) : console.log("Success!")); 
        });
}

init();
