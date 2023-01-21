import { pool } from "../../../../config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getGastronomia(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getGastronomia = async (req, res) => {
  try {
    const [result] = await pool.query("select * from gastronomia")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
