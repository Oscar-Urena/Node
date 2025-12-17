import mysql from "mysql2/promise";

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ciclostrassierra',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 1000
})

const testConnection = async()=>{
    try{
        const connection = await pool.getConnection();
        console.log("Conexión con mysql establecida correctamente.");
        connection.release();
    }catch(error){
        console.log(error);
    }
}

testConnection();