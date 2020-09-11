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
			viewAllEmployee();
			break;
		case 'View all employees by department':
			// execute (server function 4)
			viewEmployeeByDept();
			break;
		case 'View all employees by roles':
			// execute (server function 5)
			viewEmployeeByRole();
			break;
		case 'Add a new employee':
			// execute (server function 6)
			addANewEmployee();
			break;
		case 'View all departments':
			// execute (server function 1)
			viewAllDept();
			break;
		case 'Add a new department':
			// execute (server function 7)
			addANewDept();
			break;
		case 'View all roles':
			// execute (server function 2)
			viewAllRoles();
			break;
		case 'Add a new role':
			// execute (server function 8)
			addANewRole();
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
