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
        message: 'Provide instructions how to use this application',
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
  ];

// TODO: Create a function to write README file
function writeToFile(readme, answers) {
    readme = `project name: ${answers.projectTitle.toLowerCase().split(" ").join("")}.README.md`;
    answers = `
    ${answers.projectTitle}

    ## License    //add badge here
    Notice: this application is covered under ${answers.license} 

    ## Table of Contents
    [Description](#description)
    [Installation](#installation instructions)
    [Usage](#usage instructions)
    [License](#license)
    [Contributing](#contributors)
    [Tests](#test instructions)
    [Questions](#questions)

    ## Description
    ${answers.description}

    ## Installation Instructions
    ${answers.installation}

    ## Usage Instructions
    ${answers.usage}

    ## Contributors
    ${answers.contributing}

    ## Test Instructions
    ${answers.tests}

    ## Questions
    Github Profile: ${answers.questions}

    Please email with any questions
    ${answers.email}
    `
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {

        fs.writeFile(readme, writeToFile(questions, answers));
        //correct this format 
      
      })
}

// Function call to initialize app
init();

generateMarkdown();