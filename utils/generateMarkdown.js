function renderLicenseBadge(license) {
  if(license == "...no license"){
    return "";
  } else {
    return `![badge] (https://img.shields.io/badge/license-${license}-brightgreen)`}
}

function renderLicenseLink(license) {
  if(license == "...no license"){
    return "";
  } else {
    return "* [License](#license)";
  }
}

function renderLicenseSection(license) {
  if(license == "...no license"){
    return "";
  } else {
    return `## License    
    Notice: this application is covered under ${license} `
  }
}

function generateMarkdown(answers) {
  return answers = 
  `${answers.projectTitle}
${renderLicenseBadge(answers.license)}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation-instructions)
  * [Usage](#usage-instructions)
  * [Contributing](#contributors)
  * [Tests](#test-instructions)
  * [Questions](#questions)
  ${renderLicenseLink(answers.license)}
  
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
  Github username: ${answers.questions}
  
    My email:
    ${answers.email}

  ${renderLicenseSection(answers.license)}
  
  `;
}

module.exports = generateMarkdown;
