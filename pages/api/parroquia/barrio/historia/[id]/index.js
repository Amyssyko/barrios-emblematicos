import { pool } from "../../../../../../config/db"

export default async function handlerParroById(req, res) {
  /*res.json({ ById: req.query.ById, message: "Parroquia" })*/

  switch (req.method) {
    case "GET":
      return await getHistoriaById(req, res)
    case "PUT":
      return await updateHistoriaById(req, res)
    case "DELETE":
      return await deleteHistoriaById(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

async function getHistoriaById(req, res) {
  try {
    const { id } = req.query
    const [result] = await pool.query(
      "SELECT * FROM HISTORIA_BARRIO WHERE id_historia_barrio=? ",
      [id]
    )
    return res.status(201).json(result[0])
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteHistoriaById = async (req, res) => {
  try {
    const { id } = req.query
    await pool.query("DELETE FROM HISTORIA_BARRIO WHERE id_historia_barrio=?", [
      id,
    ])
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateHistoriaById = async (req, res) => {
  const { id_historia_barrio } = req.body
  try {
    const result = await pool.query(
      "UPDATE HISTORIA_BARRIO SET ? WHERE id_historia_barrio=?",
      [req.body, id_historia_barrio]
    )
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
