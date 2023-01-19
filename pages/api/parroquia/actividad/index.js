import { pool } from "../../../../config/db"

export default async function handler(req, res) {
  /*res.json({ id: req.query.id, message: "Historia History" })*/

  switch (req.method) {
    case "GET":
      return await getActividad(req, res)
    case "POST":
      return await createActividad(req, res)
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

async function createActividad(req, res) {
  try {
    const { id_actividad, descripcion_actividad, id_parroquia } = req.body
    const [result] = await pool.query(
      "INSERT INTO ACTIVIDAD (id_actividad, descripcion_actividad, id_parroquia ) VALUES (?,?,?)",
      [id_actividad, descripcion_actividad, id_parroquia]
    )
    return res
      .status(201)
      .json({ id_actividad, descripcion_actividad, id_parroquia })
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }
}
