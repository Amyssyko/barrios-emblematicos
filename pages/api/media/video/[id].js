import { pool } from "../../../../config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getVideoById(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getVideoById = async (req, res) => {
  const { id } = req.query
  try {
    const [result] = await pool.query("SELECT * FROM VIDEO where cod=?", [id])
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
