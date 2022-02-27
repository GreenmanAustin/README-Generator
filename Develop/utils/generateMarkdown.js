// Function returns license badge.  Returns empty string if no license
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

// Function returns the table of contents.  If not license, then table of contents does not contain a link to the license section because that section will not exist.
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


// Function returns the license section of README.  If there is no license, it will return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return `
  ## License

  ${license}`;
  } else {
    return "";
  }

}

// Function generates markdown for README
function generateMarkdown(data) {

  return `
  # ${data.name}

  ${renderLicenseBadge(data.licenses)}

  ## Description

  - I built this project because ${data.description2}

  - My project ${data.description3}

  - I learned ${data.description4}

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
