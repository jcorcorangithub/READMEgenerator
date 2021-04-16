function renderLicenseBadge(license) {
  if(license == null || license == ""){
    return "";
  } else {
    return `![badge] (https://img.shields.io/badge/license-${license}-brightgreen)`}
}

function renderLicenseLink(license) {
  if(license == null || license == ""){
    return "";
  } else {
    return "* [License](#license)";
  }
}

function renderLicenseSection(license) {
  if(license == null || license == ""){
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
  ${renderLicenseLink(answers.license)}
  * [Contributing](#contributors)
  * [Tests](#test-instructions)
  * [Questions](#questions)
  
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
  
  ${renderLicenseSection(answers.license)}
  
  ## Questions
  Github Profile: ${answers.questions}
  
  Please email with any questions
  ${answers.email}
  `;
}

module.exports = generateMarkdown;
