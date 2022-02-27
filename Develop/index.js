// Packages for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Function that uses inquirer to obtain information from user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the title of your project?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter a project name!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'description2',
            message: "Why did you build this project?",
            validate: description2Input => {
                if (description2Input) {
                    return true;
                } else {
                    console.log('Oh come on, please tell me why built this project?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description3',
            message: "What problem does your project solve?",
            validate: description3Input => {
                if (description3Input) {
                    return true;
                } else {
                    console.log('You must tell me what problem does your project solve?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description4',
            message: "What did you learn by doing this project?",
            validate: description4Input => {
                if (description4Input) {
                    return true;
                } else {
                    console.log('You have to, in fact you must, let me know now what you learned by doing this project.  No other way about it!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: "What are the instruction to install your project?",
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('You need to enter installation instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'use',
            message: "What are the instructions to use your project?",
            validate: useInput => {
                if (useInput) {
                    return true;
                } else {
                    console.log('You need to enter instructions for how to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: "What are the contributing guidelines for your project?",
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('You need to enter guidelines for contributions to your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testInst',
            message: "What are the test instructions for your project?",
            validate: testInstInput => {
                if (testInstInput) {
                    return true;
                } else {
                    console.log('You need to enter test instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'What is the liense for your project?',
            choices: ['No License', 'Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPL v3', 'GNU GPL v3', 'GNU LGPL v3', 'Mozilla Public License 2.0', 'MIT License', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }

    ])
};

// Calls the function to obtain user input
questions()
    // sends the data obtained from the user to function to create markdown file
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    // writes the markdown file to a file in the root directory
    .then(markDownPg => {
        fs.writeFile('./README.md', markDownPg, err => {
            if (err) {
                return;
            } else {
                console.log("File created!")
            }
        });;
    })
    // catches any error from above
    .catch(err => {
        console.log(err);
    });

