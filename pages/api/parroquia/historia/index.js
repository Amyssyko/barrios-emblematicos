import { pool } from "../../../../config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getHistoria(req, res)
    case "POST":
      return await createHistoria(req, res)
    default:
  }
}

const getHistoria = async (req, res) => {
  try {
    const [result] = await pool.query("select * from historia_parroquia")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function createHistoria(req, res) {
  try {
    const { id_historia_parroquia, descripcion_parroquia, id_parroquia } =
      req.body
    const [result] = await pool.query(
      "insert into historia_parroquia (id_historia_parroquia, descripcion_parroquia, id_parroquia ) values (?,?,?)",
      [id_historia_parroquia, descripcion_parroquia, id_parroquia]
    )
    return res
      .status(201)
      .json({ id_historia_parroquia, descripcion_parroquia, id_parroquia })
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }
}
