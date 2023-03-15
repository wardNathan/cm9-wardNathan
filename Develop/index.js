const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

const questions = () =>{ 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'Enter your project title',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Enter a description of your project',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Enter any necessary installations for the project',
        },
        {
            type: 'checkbox',
            name: 'License',
            message: 'Enter the license that your project uses',
            choices: ['', 'Apache', 'BSD3', 'Creative Commons Attribution 4.0 International', 'Eclipse', 'IBM', 'MIT', 'Mozilla', 'Open Data Commons Attribution License (BY)', 'Open Data Commons Open Database License (ODbL)', 'Open Data Commons Public Domain Dedication and License (PDDL)', 'Perl The Perl License', 'Perl The Artistic License 2.0', 'Zlib',],
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'Enter in any contributers to the project',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Enter in the steps to operate the project',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Enter in the tests that were run and their results',
        },
        {
            type: 'input',
            name: 'Github',
            message: 'Enter your Github username',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Enter your email',
        },
    ]);
};

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