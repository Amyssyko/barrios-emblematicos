import { pool } from "../../../../config/db"

export default async function handler(req, res) {
  /*res.json({ id: req.query.id, message: "Historia History" })*/

  switch (req.method) {
    case "GET":
      return await getActividad(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getActividad = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM ACTIVIDAD")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
