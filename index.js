const inquirer = require('inquirer');
const genReadme = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const promptQuestions = readmeData => {
    console.log(`
    ================
    Add A New Readme
    ================
    `);
  
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'projectTitle',
                message: 'What is the name your project? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project name.');
                        return false;
                    }
                }            
            },
            {
                type: 'input',
                name: 'description',
                message: 'Describe your project. (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project description.');
                        return false;
                    }
                }            
            },
            {
                type: 'input',
                name: 'install',
                message: 'Describe how to install your code. (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project description.');
                        return false;
                    }
                }            
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Describe how to install your code. (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project description.');
                        return false;
                    }
                }            
            },
            {
                type: 'input',
                name: 'testInstruct',
                message: 'Describe how test your code. (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project description.');
                        return false;
                    }
                }            
            },

        ])
}


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

promptQuestions()
  //.then(promptQuestions)

