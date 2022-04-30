// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'githubName',
            message: 'Please enter your GitHub username. (Requried)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHubLink',
            message: 'Please add a link to your GitHub account. (Required)',
            validate: (gitHubLinkInput) => {
                if (gitHubLinkInput) {
                    return true;
                } else ;
                console.log('Please enter a valid GitHub link!');
                return false;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your E-mail Address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: "Would you like to add some information about yourself for an 'About' section?",
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Please provide some information about yourself:',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Please enter a name for your project.',
            validate: projectTitle => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log('Please enter a valid project title');
                    return false;
                }
            }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description for your project and include what problem you are trying to solve.',
          validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                  console.log('Please provide some information about your project!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide instructions on how to properly install your project. (Requried)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Pleas provide instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'use',
            message: 'Include instructions and some examples on how to use your project. (Required)',
            validate: useInput => {
                if (useInput) {
                    return true;
                } else {
                    console.log('Please provide some information about how to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please provide license information',
            choices: ['GNU', 'Apache', 'MIT', 'no license']
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Please check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS','Node.js', 'ES6']
        },
        {
            type: 'confirm',
            name: 'includeContributors',
            message: 'Would you like to allow other contributors to your project?',
            default: true
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Provide guidlines for contributing to the project.',
            when: ({ includeContributors }) => {
                if (includeContributors) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: (contributersInput) => {
                if (contributersInput) {
                    return true;
                } else {
                    console.log('Please include some guidelines for your contributors.');
                    return false;
                }
            }
        }]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init();
