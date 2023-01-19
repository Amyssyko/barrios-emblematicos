import { pool } from "../../../../config/db"

export default async function handlerAllParro(req, res) {
  switch (req.method) {
    case "GET":
      return await getHistoria(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getHistoria = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM HISTORIA_PARROQUIA")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
