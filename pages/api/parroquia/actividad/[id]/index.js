import { pool } from "../../../../../config/db"

export default async function handlerParroById(req, res) {
  /*res.json({ ById: req.query.ById, message: "Parroquia" })*/

  switch (req.method) {
    case "GET":
      return await getActividadById(req, res)
    case "PUT":
      return await updateActividadById(req, res)
    case "DELETE":
      return await deleteActividadById(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

async function getActividadById(req, res) {
  try {
    const { id } = req.query
    const [result] = await pool.query(
      "SELECT * FROM ACTIVIDAD WHERE id_actividad=? ",
      [id]
    )
    return res.status(201).json(result[0])
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteActividadById = async (req, res) => {
  try {
    const { id } = req.query
    await pool.query("DELETE FROM ACTIVIDAD WHERE id_actividad=?", [
      id,
    ])
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateActividadById = async (req, res) => {
  const { id_actividad } = req.body
  try {
    const result = await pool.query(
      "UPDATE ACTIVIDAD SET ? WHERE id_actividad=?",
      [req.body, id_actividad]
    )
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
