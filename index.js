const inquirer = require("inquirer");
const fs = require("fs");

//Import Classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//import html
const addManagerCard = require('./src/manager-card');
const addEngineerCard = require('./src/engineer-card');
const addInternCard = require('./src/intern-card');
const makeProfileCards = require('./src/card-index');



//Team Member Arrays
const team = [];

//manager prompts
const promptManager = [
    
    {
        name:'name',
        type:'input',
        message: "Enter Team Manager Name:",
        
    },

    {
        name: 'id',
        type:'input',
        message:"Enter Employee ID:",
        
    },

    {
        name: 'email',
        type:'input',
        message: "Please Provide Manger Email Address:",
        
    },

    {
        name:'officeNumber',
        type:'input',
        message:"Enter Office Number:",
        
    },

    {
        name: 'nextMember',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'That is my Team!'],
        message: 'What would you like to do next?',
      },

];

//engineer prompts
const promptEngineer = [
    {
        name: 'name',
        type: 'input',
        message: "Enter Engineer Name:",
        
      },

      {
        name: 'id',
        type: 'input',
        message: "Enter Engineer ID number:",
        
      },

      {
        name: 'email',
        type: 'input',
        message: "Enter Engineer Email Address:"
      },

      {
        name: 'gitHub',
        type: 'input',
        message: "Please Provide Engineer's Github UserName:",
        
      },

      {
        name: 'nextMember',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'That is my Team!'],
        message: 'What would you like to do next?',
      },
];

//intern prompts
const promptIntern = [
    {
        name: 'name',
        type: 'input',
        message: "Enter Intern Name:",
        
    },

    {
      name: 'id',
      type: 'input',
      message: "Enter Intern ID Number:",
      
    },

    {
      name: 'email',
      type: 'input',
      message: "Enter Intern Email Address:",
      
    },

    {
      name: 'school',
      type: 'input',
      message: "Enter Intern's Educational Institute:",
      
    },

    {
        name: 'nextMember',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'That is my Team!'],
        message: 'What would you like to do next?',
      },
];

//Initialize App
ask(promptManager);

function ask(teamArr) {
    inquirer
        .prompt(teamArr)
        .then((teamMember) => {
            team.push(teamMember);

            if(teamMember.nextMember === 'Add Engineer') {
                ask(promptEngineer);
            } else if (teamMember.nextMember === 'Add Intern') {
               ask(promptIntern);
            } else {
                createProfiles(team);
            }
        })
        .catch((err) => console.log(err));
}

//function to create team
function createProfiles(team) {

    const profiles = team.map((teamMember) => {
        const { name, id, email } = teamMember;

        //if manager is being added to profile, give office number 
        if(teamMember.hasOwnProperty('officeNumber')) {
            const { officeNumber } = teamMember;
            return new Manager (name, id, email, officeNumber);
        }

        //if engineer is being added to profile, give github username
        if(teamMember.hasOwnProperty('gitHub')) {
            const { gitHub } = teamMember;
            return new Engineer (name, id, email, gitHub);
        }

        //if intern is being added to to profile, give educational institute
        if(teamMember.hasOwnProperty('school')) {
            const { school } = teamMember;
            return new Intern (name, id, email, school);
        }

    });

   
    generateHtml(profiles);
}
 //generate html
function generateHtml(profiles) {
    let profileCards = '';
    profiles.forEach((profile) => {
        if (profile instanceof Manager) {
            const card = addManagerCard(profile);
            profileCards += card;
        } else if (profile instanceof Engineer) {
            const card = addEngineerCard (profile);
            profileCards += card;
        } else if (profile instanceof Intern) {
            const card = addInternCard(profile);
            profileCards += card;
        }
    })

    const newHtml = makeProfileCards(profileCards);

    writeHtml(newHtml);
};

//write html in dist folder
function writeHtml(newHtml) {
    fs.writeFile('./dist/team-profile.html', newHtml, (err) => {
        if (err) throw err;
        console.log('HTML document has been created and can be viewed in the /dist folder.')
    });
};