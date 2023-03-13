const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'Enter a title for your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter what installations are necessary:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Enter the license that your project uses:',
        choices: ['', 'Apache', 'BSD3', 'Creative Commons Attribution 4.0 International', 'Eclipse', 'IBM', 'MIT', 'Mozilla', 'Open Data Commons Attribution License (BY)', 'Open Data Commons Open Database License (ODbL)', 'Open Data Commons Public Domain Dedication and License (PDDL)', 'Perl The Perl License', 'Perl The Artistic License 2.0', 'Zlib'],
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Enter in any contributions to the project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter in the steps to operate the project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any tests that were ran on the project and their outcome:',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your Github user name:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    }
];

function writeToFile(fileName, data) {}

function init() {
    questions()
    .then((data) => {
        console.log(data);
        return fs.writeFileSync("./README.md", generateMarkdown(data));
    })
    .catch((err) => {
        if (err) {
            throw err;
        }
    });
}

init();