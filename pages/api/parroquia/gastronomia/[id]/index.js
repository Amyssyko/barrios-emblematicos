import { pool } from "../../../../../config/db"

export default async function handlerParroById(req, res) {
  /*res.json({ ById: req.query.ById, message: "Parroquia" })*/

  switch (req.method) {
    case "GET":
      return await getGastronomiaById(req, res)
    case "PUT":
      return await updateGastronomiaById(req, res)
    case "DELETE":
      return await deleteGastronomiaById(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

async function getGastronomiaById(req, res) {
  try {
    const { id } = req.query
    const [result] = await pool.query(
      "SELECT * FROM Gastronomia WHERE id_gastronomia=? ",
      [id]
    )
    return res.status(201).json(result[0])
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteGastronomiaById = async (req, res) => {
  try {
    const { id } = req.query
    await pool.query("DELETE FROM Gastronomia WHERE id_gastronomia=?", [
      id,
    ])
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateGastronomiaById = async (req, res) => {
  const { id_gastronomia } = req.body
  try {
    const result = await pool.query(
      "UPDATE Gastronomia SET ? WHERE id_gastronomia=?",
      [req.body, id_gastronomia]
    )
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
