import { pool } from "../../../../../config/db"

export default async function handlerParroById(req, res) {
  /*res.json({ ById: req.query.ById, message: "Parroquia" })*/

  switch (req.method) {
    case "GET":
      return await getActividadById(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

async function getActividadById(req, res) {
  try {
    const { id } = req.query
    const [result] = await pool.query(
      "SELECT * FROM ACTIVIDAD WHERE id_parroquia=? ",
      [id]
    )
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
