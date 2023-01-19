import { pool } from "../../../../config/db"

export default async function handlerAllParro(req, res) {
  /*res.json({ id: req.query.id, message: "Parroquia History" })*/

  switch (req.method) {
    case "GET":
      return await getFotoById(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getFotoById = async (req, res) => {
  const { id } = req.query
  try {
    const [result] = await pool.query("SELECT * FROM FOTO where cod=?", [id])
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
