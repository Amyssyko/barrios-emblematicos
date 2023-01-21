import { pool } from "../../../../../../config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getHistoriaById(req, res)
    case "PUT":
      return await updateHistoriaById(req, res)
    case "DELETE":
      return await deleteHistoriaById(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

async function getHistoriaById(req, res) {
  try {
    const { id } = req.query
    const [result] = await pool.query(
      "select * from historia_recinto where id_historia_recinto=? ",
      [id]
    )
    return res.status(201).json(result[0])
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteHistoriaById = async (req, res) => {
  try {
    const { id } = req.query
    await pool.query(
      "delete from historia_recinto where id_historia_recinto=?",
      [id]
    )
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateHistoriaById = async (req, res) => {
  const { id_historia_recinto } = req.body
  try {
    const result = await pool.query(
      "update historia_recinto set ? where id_historia_recinto=?",
      [req.body, id_historia_recinto]
    )
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
