import { pool } from "../../../../config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getRol(req, res)
    case "POST":
      return await createRol(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getRol = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM ROL")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const createRol = async (req, res) => {
  try {
    const { nombre, apellido, username, pass } = req.body

    const [result] = await pool.query(
      "INSERT INTO ROL (id_rol, tipo) VALUES (?,?)",
      [id_rol, tipo]
    )
    return res.status(201).json({
      id_rol,
      tipo,
      rol_registro,
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
