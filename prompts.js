const db = require('./db');


module.exports = {
    mainPrompt: [
        {
        name: 'choice',
        message: 'What would you like to do?',
        type: 'list',
        choices: 
            [
            'View all employees',
            'View all employees by team',
            'View all employees by role',
            'Add team',
            'Add role',
            'Add employee',
            'Update employee role',
            'Quit'
            ]
        }
    ],
    newTeamPrompt: [
        {
        type: 'input',
        message: 'Input name of new team.',
        name: 'newTeamName'
        },
    ],
    newRolePrompt: [
        {
        type: 'input',
        message: 'Input a new role title.',
        name: 'newRoleTitle',
        },
        {
        type: 'input',
        message: 'Input id of new team id.',
        name: 'newTeamID'
        }
    ],
    newEmployeePrompt: [
        {
        type: 'input',
        message: 'Input first name of new employee.',
        name: 'newFirstName'
        },
        {
        type: 'input',
        message: 'Input last name of new employee.',
        name: 'newLastName'
        },
        {
            type: 'list',
            message: 'What is the new employees team?',
            name: 'newTeam',
            choice: [
                 
            ]
        },
        {
        type: 'list',
        message: 'What is the new employees role?',
        name: 'newRole',
        choices: [
            
        ]
        },
        {
        type: 'input',
        message: 'What is the new employees role id?',
        name: 'newRoleID'
        },
        {
        type: 'input',
        message: 'Input new employee salary.',
        name: 'newSalary'
        }
    ],
    updateRolePrompt: [
        {
        type: 'list',
        message: 'Input the employees ID whose role ID you wish to edit.',
        name: 'chosenID',
        choices: [

        ]
        }, 
        {
        type: 'list',
        message: 'Input the employees new role ID.',
        name: 'updatedRoleID',
        choices: [

        ]
        } 
    ]
};