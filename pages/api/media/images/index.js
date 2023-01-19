import { pool } from "../../../../config/db"

export default async function handlerAllParro(req, res) {
  /*res.json({ id: req.query.id, message: "Parroquia History" })*/

  switch (req.method) {
    case "GET":
      return await getFoto(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getFoto = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM FOTO")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
