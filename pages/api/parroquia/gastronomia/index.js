import { pool } from "../../../../config/db"

export default async function handler(req, res) {
  /*res.json({ id: req.query.id, message: "Historia History" })*/

  switch (req.method) {
    case "GET":
      return await getGastronomia(req, res)
    case "POST":
      return await createGastronomia(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getGastronomia = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM GASTRONOMIA")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function createGastronomia(req, res) {
  try {
    const { id_gastronomia, nombre_plato, descripcion_plato, id_parroquia } =
      req.body
    const [result] = await pool.query(
      "INSERT INTO GASTRONOMIA (id_gastronomia, nombre_plato, descripcion_plato,id_parroquia ) VALUES (?,?,?,?)",
      [id_gastronomia, nombre_plato, descripcion_plato, id_parroquia]
    )
    return res
      .status(201)
      .json({ id_gastronomia, nombre_plato, descripcion_plato, id_parroquia })
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }
}
