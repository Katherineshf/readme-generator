// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "none") {
    return "";
  } else if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if (license == "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
  } else if (license == "GNU AGPLv3") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-red.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "none") {
    return "";
  } else if (license == "MIT") {
    return `https://opensource.org/licenses/MIT`
  } else if (license == "Apache 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license == "GNU AGPLv3") {
    return `https://www.gnu.org/licenses/agpl-3.0`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none") {
    return "";
  } else {
    return `this project is protected by a ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    ## Project Title
    ${data.title}

    ## Description
    ${data.description}
    ## Table of Contents (Optional)

    If your README is long, add a table of contents to make it easy for users to find what they need.

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}


    ## Contribution
    ${data.contribution}


    ## License
    ${renderLicenseSection(data.license)}
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}


    ## Tests
    ${data.tests}

    # Contact Information 
     -GitHub Username: ${data.userName}
     -Contact Email: ${data.userEmail}

  `;
}

module.exports = generateMarkdown;
