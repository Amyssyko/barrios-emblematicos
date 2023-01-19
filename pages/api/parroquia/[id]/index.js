import { pool } from "../../../../config/db"

export default async function handler(req, res) {
  /*res.json({ id: req.query.id, message: "Parroquia" })*/

  switch (req.method) {
    case "GET":
      return await getParroquiaId(req, res)
    case "PUT":
      return await updateParroquiaId(req, res)
    case "DELETE":
      return await deleteParroquiaId(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

async function getParroquiaId(req, res) {
  try {
    const { id } = req.query
    const [result] = await pool.query(
      "SELECT * FROM PARROQUIA WHERE id_parroquia=? ",
      [id]
    )
    return res.status(201).json(result[0])
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteParroquiaId = async (req, res) => {
  try {
    const { id } = req.query
    await pool.query("DELETE FROM PARROQUIA WHERE id_parroquia=?", [id])
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateParroquiaId = async (req, res) => {
  const { id_parroquia } = req.body
  try {
    const result = await pool.query(
      "UPDATE PARROQUIA SET ? WHERE id_parroquia=?",
      [req.body, id_parroquia]
    )
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
