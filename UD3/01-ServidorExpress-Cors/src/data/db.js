import mysql from "mysql2/promise";

import * as X from "../config.js";

export const pool = mysql.createPool({
    host: X.DB_HOST,
    user: X.DB_USER,
    password: X.DB_PASSWORD,
    database: X.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000
})

const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log("Conexión con mysql establecida correctamente.");
        connection.release();
    } catch (error) {
        console.log(error);
    }
}

testConnection();