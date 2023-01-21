import { pool } from "../../../../config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getBarrio(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getBarrio = async (req, res) => {
  try {
    const [result] = await pool.query("select * from barrio")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
