import { pool } from "../../../../../config/db"

export default async function handlerParroById(req, res) {
  switch (req.method) {
    case "GET":
      return await getHistoriaById(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

async function getHistoriaById(req, res) {
  try {
    const { id } = req.query
    const [result] = await pool.query(
      "select * from historia_barrio where id_barrio=? ",
      [id]
    )
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
