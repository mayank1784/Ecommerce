import mysql from 'mysql2'
import * as dotenv from 'dotenv' 
dotenv.config();
const pool = mysql.createPool(process.env.DATABASE_URL).promise();
console.log('Connected to PlanetScale!');
// connection.end();
// const pool = mysql.createConnection(process.env.DATABASE_URL).promise();
// const pool = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'abc123',
//     database: 'ecommerce',
//     waitForConnections: true,
//     connectionLimit: 10,
//     maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
//     idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
//     queueLimit: 0,
//     enableKeepAlive: true,
//     keepAliveInitialDelay: 0
//   }).promise();

export async function getTables() {
    const [rows] = await pool.query('SHOW TABLES');
        return rows;
};
