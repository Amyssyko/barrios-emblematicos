import { createPool } from "mysql2/promise"

const pool = createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "1234",
  database: "project_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export { pool }
