// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'No License':
      return "";
      break;
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      break;
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return `
    ## License

    ${license}
    `;
  } else {
    return "";
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.name}

  ${renderLicenseBadge(data.licenses)}

  ## Description

  - I built this project because: ${data.description2}

  - My project solves: ${data.description3}

  - I learned: ${data.description4}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)

  ## Installation

  ${data.install}

  ## Usage

  ${data.use}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.testInst}

  ${renderLicenseSection(data.licenses)}
`;
}

module.exports = generateMarkdown;
