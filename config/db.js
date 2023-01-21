import { createPool } from "mysql2/promise"
//const dotenv = require("dotenv")

const pool = createPool({
  host: "sql10.freemysqlhosting.net",
  user: "sql10592184",
  password: "RdXSV5yZmc",
  port: "3306",
  database: "sql10592184",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export { pool }

{
  /**const pool = createPool({
  host: "sql10.freemysqlhosting.net",
  user: "sql10592184",
  password: "RdXSV5yZmc",
  port: "3306",
  database: "sql10592184",
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
