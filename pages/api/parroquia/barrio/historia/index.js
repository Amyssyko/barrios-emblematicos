import { pool } from "../../../../../config/db"

export default async function handler(req, res) {
  /*res.json({ id: req.query.id, message: "Historia History" })*/

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
    const [result] = await pool.query("SELECT * FROM HISTORIA_BARRIO")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function createHistoria(req, res) {
  try {
    const { id_historia_barrio, descripcion_barrio, id_barrio } = req.body
    const [result] = await pool.query(
      "INSERT INTO HISTORIA_BARRIO (id_historia_barrio, descripcion_barrio, id_barrio ) VALUES (?,?,?)",
      [id_historia_barrio, descripcion_barrio, id_barrio]
    )
    return res
      .status(201)
      .json({ id_historia_barrio, descripcion_barrio, id_barrio })
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }
}
