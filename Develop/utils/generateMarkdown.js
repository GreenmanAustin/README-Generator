// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'No License':
      return "";
      break;
    case 'Apache License 2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'Boost Software License 1.0':
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
      break;
    case 'GNU AGPL v3':
      return '![License](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
      break;
    case 'GNU GPL v3':
      return '![License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'GNU LGPL v3':
      return '![License](https://img.shields.io/badge/License-LGPL_v3-blue.svg)';
      break;
    case 'Mozilla Public License 2.0':
      return '![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      break;
    case 'MIT License':
      return '![License](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'The Unlicense':
      return '![License](https://img.shields.io/badge/license-Unlicense-blue.svg)';
      break;
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function generateTableofContents(license) {
  if (license !== 'No License') {
    return `
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  `
  } else {
    return `
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  `
  }

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return `
  ## License

  ${license}`;
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

  ${generateTableofContents(data.licenses)}


  ## Installation

  ${data.install}

  ## Usage

  ${data.use}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.testInst}

  ${renderLicenseSection(data.licenses)}

  ## Questions

  My Github page is: https://github.com/${data.github}

  You can reach me with questions at: ${data.email}
`;
}

module.exports = generateMarkdown;
