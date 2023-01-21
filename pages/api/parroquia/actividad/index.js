import { pool } from "../../../../config/db"

export default async function handler(req, res) {
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
    const [result] = await pool.query("select * from actividad")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function createActividad(req, res) {
  try {
    const { id_actividad, descripcion_actividad, id_parroquia } = req.body
    const [result] = await pool.query(
      "insert into actividad (id_actividad, descripcion_actividad, id_parroquia ) values (?,?,?)",
      [id_actividad, descripcion_actividad, id_parroquia]
    )
    return res
      .status(201)
      .json({ id_actividad, descripcion_actividad, id_parroquia })
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }
}
