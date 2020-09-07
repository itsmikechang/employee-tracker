const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllTitles() {
        return this.connection.query(
            `
        SELECT
            title.id,
            title.name AS Title,
            title.salary AS Salary,
            house.name AS House
        FROM
            title
        LEFT
            house ON title.house_id = house.id
        ORDER BY
            title.id;
        `
        );
    }
}