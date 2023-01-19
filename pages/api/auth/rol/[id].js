import { pool } from "../../../../config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getAuthbyId(req, res)
    case "PUT":
      return await updateAuthById(req, res)
    case "DELETE":
      return await deleteAuthById(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getAuthbyId = async (req, res) => {
  try {
    const { id } = req.query
    const [result] = await pool.query(
      "SELECT * , CONVERT(pass USING utf8) pass FROM USUARIO WHERE id_usuario=? ",
      [id]
    )
    return res.status(201).json(result[0])
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateAuthById = async (req, res) => {
  const { id_usuario } = req.body
  try {
    const result = await pool.query("UPDATE USUARIO SET ? WHERE id_usuario=?", [
      req.body,
      id_usuario,
    ])
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteAuthById = async (req, res) => {
  try {
    const { id } = req.query
    await pool.query("DELETE FROM USUARIO WHERE id_usuario=?", [id])
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
