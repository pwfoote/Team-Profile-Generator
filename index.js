const inquirer = require("inquirer");
const fs = require("fs");

//Import Classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { validate } = require("jest-validate");

//Team Member Arrays
const team = [];

//manager prompts
const promptManager = [
    {
        name: 'role',
        type: 'confirm',
        message: "Hello, and welcome to Team Profile Generator. "
    },

    {
        name:'name',
        type:'input',
        message: "Enter Team Manager Name:",
        validate: isValidString
    },

    {
        name: 'id',
        type:'input',
        message:"Enter Employee ID:",
        validate: isValidString
    },

    {
        name: 'email',
        type:'input',
        message: "Please provide your email address:",
        validate: isValidString
    },

    {
        name:'officeNumber',
        type:'input',
        message:"Enter Office Number:",
        validate: isValidString
    },

];

//engineer prompts
const promptEngineer = [
    {
        name: 'name',
        type: 'input',
        message: "Enter Engineer Name:",
        validate: isValidString
      },

      {
        name: 'id',
        type: 'input',
        message: "Enter Engineer ID number:",
        validate: isValidString
      },

      {
        name: 'email',
        type: 'input',
        message: "Please Provide Engineer ID Number:",
        validate: isValidEmail
      },

      {
        name: 'github',
        type: 'input',
        message: "Please Provide Engineer's Github UserName:",
        validate: isValidString
      },
];

//intern prompts
const promptIntern = [
    {
        name: 'name',
        type: 'input',
        message: "Enter Intern Name:",
        validate: isValidString
    },

    {
      name: 'id',
      type: 'input',
      message: "Enter Intern ID Number:",
      validate: isValidString
    },

    {
      name: 'email',
      type: 'input',
      message: "Enter Intern Email Address:",
      validate: isValidEmail
    },

    {
      name: 'school',
      type: 'input',
      message: "Enter Intern's Educational Institute:",
      validate: isValidString
    },
];

