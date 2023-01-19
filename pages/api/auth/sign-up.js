import { pool } from "../../../../config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getAuth(req, res)
    case "POST":
      return await createAuth(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getAuth = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * , CONVERT(pass USING utf8) pass FROM USUARIO"
    )
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const createAuth = async (req, res) => {
  try {
    const { nombre, apellido, username, pass } = req.body

    const [result] = await pool.query(
      "INSERT INTO USUARIO (nombre, apellido, username, pass) VALUES (?,?,?,?)",
      [nombre, apellido, username, pass]
    )
    return res.status(201).json({
      nombre,
      apellido,
      username,
      pass,
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
