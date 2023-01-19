import { pool } from "../../../../../config/db"



export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getRolUsuariobyId(req, res)
    case "PUT":
      return await updateRolUsuarioById(req, res)
    case "DELETE":
      return await deleteRolUsuarioById(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getRolUsuariobyId = async (req, res) => {
  try {
    const { id } = req.query
    const [result] = await pool.query(
      "SELECT * FROM ROL_USUARIO WHERE id_soc_rol=? ",
      [id]
    )
    return res.status(201).json(result[0])
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateRolUsuarioById = async (req, res) => {
  const { id_soc_rol } = req.body
  try {
    const result = await pool.query(
      "UPDATE ROL_USUARIO SET ? WHERE id_soc_rol=?",
      [req.body, id_soc_rol]
    )
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteRolUsuarioById = async (req, res) => {
  try {
    const { id } = req.query
    await pool.query("DELETE FROM ROL_USUARIO WHERE id_soc_rol=?", [id])
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
