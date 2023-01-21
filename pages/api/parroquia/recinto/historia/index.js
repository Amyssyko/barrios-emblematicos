import { pool } from "../../../../../config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getHistoria(req, res)
    case "POST":
      return await createHistoria(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getHistoria = async (req, res) => {
  try {
    const [result] = await pool.query("select * from historia_recinto")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function createHistoria(req, res) {
  try {
    const { id_historia_recinto, descripcion_recinto, id_recinto } = req.body
    const [result] = await pool.query(
      "insert into historia_recinto (id_historia_recinto, descripcion_recinto, id_recinto ) values (?,?,?)",
      [id_historia_recinto, descripcion_recinto, id_recinto]
    )
    return res
      .status(201)
      .json({ id_historia_recinto, descripcion_recinto, id_recinto })
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }
}
