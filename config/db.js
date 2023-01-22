import { createPool } from "mysql2/promise"
const dotenv = require("dotenv")

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  port: "3306",
  database: "project_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export { pool }

{
  /**const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})
 */
}

{
  /**


const pool = createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  port: "3306",
  database: "project_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})


*/
}
