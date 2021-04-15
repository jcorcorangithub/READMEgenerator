const generateMarkdown = require('../utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// TODO: Create an array of questions for user input
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
        message: 'What will this project be used for',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributors of this project?',
        //check to see if this is correct
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any test instructions',
        //check this one too
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the appropriate license for this project',
        choices: [  "Apache","Academic","GNU","ISC","MIT","Mozilla","Open"],
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address: ',
    },
    {
        //not sure about this one: table of contents
        type: 'input',
        name: 'tableOfContents',
        message:'message',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        // Use user feedback for... whatever!!
      })
}

// Function call to initialize app
init();

generateMarkdown();