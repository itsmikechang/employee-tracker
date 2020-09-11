//dependency
const connection = require('./connection');

//constructors to hold queries for database
class DB {
    constructor(connection) {
        this.connection = connection;
    }

