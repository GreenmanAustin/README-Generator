// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
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
            name: 'description',
            message: "Please describe your project.",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
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
            type: 'checkbox',
            name: 'licenses',
            message: 'What is the liense for your project?',
            choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPL v3', 'GNU GPL v3', 'GNU LGPL v3', 'Mozilla Public License 2.0', 'MIT License', 'The Unlicense']
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


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
questions()
    .then(readmeData => {
        console.log(generateMarkdown(readmeData));
    });
