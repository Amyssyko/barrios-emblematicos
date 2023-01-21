import { pool } from "../../../../../config/db"

export default async function handlerParroById(req, res) {
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
      "select * from actividad where id_actividad=? ",
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
    await pool.query("delete from actividad where id_actividad=?", [id])
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateActividadById = async (req, res) => {
  const { id_actividad } = req.body
  try {
    const result = await pool.query(
      "update actividad set ? where id_actividad=?",
      [req.body, id_actividad]
    )
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
