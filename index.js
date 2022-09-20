const inquirer = require('inquirer');
const genReadme = require('./utils/generateMarkdown.js');
const { writeFile, copyFile } = require('./utils/generateMarkdown.js');


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
                message: 'What are steps to install your project? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a install steps.');
                        return false;
                    }
                }            
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide examples for use. (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter examples of usage.');
                        return false;
                    }
                }            
            },
            {
                type: 'input',
                name: 'contribute',
                message: 'List any contributors or other credits. (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project credits.');
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
};


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

promptQuestions()
  .then(readmeData => {
    return genReadme(readmeData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });  //.then(promptQuestions)

