import { pool } from "../../../../..db/config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getRolUsuario(req, res)
    case "POST":
      return await createRolUsuario(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getRolUsuario = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM ROL_USUARIO")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const createRolUsuario = async (req, res) => {
  try {
    const { nombre, apellido, username, pass } = req.body

    const [result] = await pool.query(
      "INSERT INTO ROL_USUARIO (id_RolUsuario, tipo) VALUES (?,?)",
      [id_RolUsuario, tipo]
    )
    return res.status(201).json({
      id_RolUsuario,
      tipo,
      RolUsuario_registro,
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
