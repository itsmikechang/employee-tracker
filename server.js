const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const prompts = require('./prompts');
const db = require('./db');
require('console.table');

async function main() {
    const {action} = await inquirer.prompt(prompts.mainPrompt); 
    
    switch (action) {
        case 'View all employees':
			// execute (server function 3)
			viewAllEmployees();
            break;
            case 'View all teams':
			// execute (server function 3)
			viewAllTeams();
			break;
		case 'View all employees by department':
			// execute (server function 4)
			viewEmployeesDept();
			break;
		case 'View all employees by roles':
			// execute (server function 5)
			viewEmployeesRole();
			break;
		case 'Add a new employee':
			// execute (server function 6)
			addNewEmployee();
			break;
		case 'View all departments':
			// execute (server function 1)
			viewAllDepartments();
            break;
        case 'Add a new team':
			// execute (server function 7)
			addNewTeam();
			break;
		case 'View all roles':
			// execute (server function 2)
			viewAllRoles();
			break;
		case 'Add a new role':
			// execute (server function 8)
			addNewRole();
			break;
		case 'Update employee role':
			// execute (server function 9)
			updateEmployeeRole();
			break;
		case "Update employee's manager":
			// excute (server function 10)
			updateEmployeeManager();
			break;
		case "Update employee's First name":
			// excute (server function 11)
			updateEmployeeFirstName();
			break;
		case "Update employee's Last name":
			// excute (server function 12)
			updateEmployeeLastName();
			break;
		case 'View all Manager':
			// excute (server function 13)
			viewAllManager();
			break;
		case 'View all employees by Manager':
			// excute (server function 14)
			viewEmployeeByManager();
			break;
		case 'View Total Salary Spending':
			// excute (server function 16)
			viewTotalSalarySpending();
			break;
		case 'View Salary Spending by Department':
			// excute (server function 17)
			viewDeptSalarySpending();
			break;
		default:
			// excute (server function 15)
			exit();
    }

}

async function viewAllTables() {
    const titles = await db.viewAllTables().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    mainPrompt();  
}  

async function viewAllEmployees() {
    const titles = await db.viewAllEmployees().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    mainPrompt();
};

async function viewAllTeams() {
    const titles = await db.viewAllByTeams().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    mainPrompt();
};

async function viewAllRoles() {
    const titles = await db.viewAllByRoles().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    mainPrompt();
};
async function viewOnlyTeams() {
    const titles = await db.viewOnlyTeams().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    return titles
};

async function viewOnlyRoles() {
    const titles = await db.viewOnlyRoles().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    return titles 
};

async function updateEmployeeRole() {
    const employees = await db.viewAllEmployees();
    console.log(employees);
    const employeeChoices = employees.map(({ First_Name, Last_Name, id }) => ({ 
        name: `${First_Name} ${Last_Name}`,
        value: id
        })
    );
    const { employeeID } = await inquirer.prompt([
        {
        type: 'list',
        name: 'employeeID',
        message: 'Which employee would you like to update?',
        choices: employeeChoices
        }
    ]);

    const roles = await db.viewOnlyRoles();
    const roleChoice = roles.map(({ title, id }) => ({ 
        name: title,
        value: id
        })
    );
    const answer = await inquirer.prompt([
        {
        type: 'list',
        name: 'roleID',
        message: 'Which role would you like to update?',
        choices: roleChoice
        }
    ]);
    await db.updateEmployeeRole(employeeID, answer.roleID);
        console.log('\n');
        console.log("Updated role successfully.");
        console.log('\n');  
        return mainPrompt();
};

async function addNewTeam() { 
    inquirer.prompt(prompts.newTeamPrompt).then((response) => {
        connection.query(
        `
        INSERT INTO team
            (name)
        VALUES
            ('${response.newTeamName}');
        `
        );
        console.log('\n');
        console.log("New team added successfully.");
        console.log('\n');  
        return mainPrompt();
    });
};


async function addNewRole() { 
    inquirer.prompt(prompts.newRolePrompt).then((response) => {
        connection.query(
        `
        INSERT INTO role
            (title, team_id)
        VALUES 
            ('${response.newRoleTitle}', ${response.newTeamID});
        `
        );
        console.log('\n');
        console.log("New role added successfully.");
        console.log('\n');  

        return mainPrompt();
    });
};

async function addNewEmployee() {
    const teams = await viewOnlyTeams();
    const roles = await viewOnlyRoles();
    prompts.newEmployeePrompt[2].choices = teams.map(team => ({ 
        name: team.name, 
        value: team.id 
        })
    );
    prompts.newEmployeePrompt[3].choices = roles.map(role => ({ 
        name: role.title, 
        value: role.id
        })
    );
    inquirer.prompt(prompts.newEmployeePrompt).then((response) => {
        connection.query(
            ` 
            INSERT INTO employee
                (first_name, last_name, salary, role_id, manager_id)
            VALUES
                ('${response.newFirstName}', '${response.newLastName}',  ${response.newSalary}, ${response.newRoleID}, 1);
            `

            );            
        connection.query(
            ` 
            INSERT INTO role
                (title, team_id)
            VALUES 
                ('${response.newRole}', ${response.newTeam});
            `
        ); 
        console.log('\n');
        console.log("New employee added successfully.");
        console.log('\n');  
        return mainPrompt();
    });
};

function init() {
    console.log(logo(config).render());
    viewAllTables();
}

init();