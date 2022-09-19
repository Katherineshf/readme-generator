// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./generateMarkdown.js')


// TODO: Create an array of questions for user input

function validateInput(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question.";
    }
}


const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the title?",
        validate: validateInput,
    },

    {
        type: "input",
        name: "description",
        message: "Provide a short description",
        validate: validateInput,
    },

    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
        validate: validateInput,
    },

    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
        validate: validateInput,
    },

    {
        type: "input",
        name: "contribution",
        message: "Provide instructions for user conttributions",
        validate: validateInput,
    },

    {
        type: "list",
        name: "license",
        message: "What's the license?",
        choices: [
            "MIT",
            "Apache 2.0",
            "GNU AGPLv3",
            "none"
        ]
    },

    {
        type: "input",
        name: "tests",
        message: "Go the extra mile and write tests for your application.",
        validate: validateInput,
    },

    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        validate: validateInput,
    },

    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email?",
        validate: function (value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
            } else {
                return "Not a valid email address. Please enter a valid email address.";
            }
        },
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response)
            writeToFile('generateReadme.md', generateMarkdown(response))
        })
}

// Function call to initialize app
init();
