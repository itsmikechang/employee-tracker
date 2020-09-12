const connection = require('./connection');

//class and constructor for DB 
class DB {
    constructor(connection) {
        this.connection = connection;
    }
    viewAllTables() {
        return this.connection.query(
            `
        SELECT
            role.id, 
            employee.first_name AS First_Name, 
            employee.last_name AS Last_Name,
            role.title AS Role,
            employee.salary AS Salary,
            team.name AS Team
        FROM 
            employee
        LEFT JOIN
            role ON employee.id = role.id
		JOIN
			team ON role.team_id = team.id
        ORDER BY 
            role.id;
        `
        );        
    };
    viewAllTeams() {
        return this.connection.query(
            `
        SELECT 
            employee.id AS ID, 
            team.name AS Team_Name,
			employee.first_name AS First_Name, 
            employee.last_name AS Last_Name,
            role.title AS Role
        FROM 
            employee
        LEFT JOIN
            role ON employee.id = role.id
		JOIN
			team ON role.team_id = team.id
        ORDER BY 
            role.id;
        `
        );

    };
    viewAllRoles() {
        return this.connection.query(
            `
            SELECT
            role.id, 
            role.title AS Role,
            employee.first_name AS First_Name, 
            employee.last_name AS Last_Name,
            employee.salary AS Salary,
            team.name AS Team
        FROM 
            employee
        LEFT JOIN
            role ON employee.id = role.id
		LEFT JOIN
			team ON role.team_id = team.id
        ORDER BY 
            employee.role_id;
        `
        );
    };
    viewAllEmployees() {
        return this.connection.query(
            `
        SELECT
            employee.id, 
            employee.first_name AS First_Name, 
            employee.last_name AS Last_Name,
            role.title AS Role
        FROM 
            employee
        LEFT JOIN
            role ON employee.id = role.id
        ORDER BY 
            employee.id;
        `
        );
    };
    viewOnlyTeams() {
        return this.connection.query(
            `SELECT * FROM team ORDER BY team.id`
        );
    };
    viewOnlyRoles() {
        return this.connection.query(
            `SELECT DISTINCT title FROM role`
        );
    };
    updateEmployeeRole(employeeID, roleID) {
        return this.connection.query(
            `
            UPDATE employee
            SET role_id = ? 
            WHERE employee.id = ?;
            `,[employeeID, roleID]
        );
    };
}

const db = new DB (connection)
module.exports = db;