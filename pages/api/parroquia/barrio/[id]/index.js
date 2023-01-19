import { pool } from "../../../../../config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getBarrioId(req, res)
    case "PUT":
      return await updateBarrioId(req, res)
    case "DELETE":
      return await deleteBarrioId(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

async function getBarrioId(req, res) {
  try {
    const { id } = req.query
    const [result] = await pool.query(
      "SELECT * FROM BARRIO WHERE id_barrio=? ",
      [id]
    )
    return res.status(201).json(result[0])
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteBarrioId = async (req, res) => {
  try {
    const { id } = req.query
    await pool.query("DELETE FROM BARRIO WHERE id_barrio=?", [id])
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateBarrioId = async (req, res) => {
  const { id_barrio } = req.body
  try {
    const result = await pool.query("UPDATE BARRIO SET ? WHERE id_barrio=?", [
      req.body,
      id_barrio,
    ])
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
