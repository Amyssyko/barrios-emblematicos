import { pool } from "../../../../../config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getRecintoId(req, res)
    case "PUT":
      return await updateRecintoId(req, res)
    case "DELETE":
      return await deleteRecintoId(req, res)
    case "POST":
      return await addRecintoId(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

async function getRecintoId(req, res) {
  try {
    const { id } = req.query
    console.log(req.query)
    const [result] = await pool.query(
      "select * from recinto where id_recinto=? ",
      [id]
    )
    return res.status(201).json(result[0])
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteRecintoId = async (req, res) => {
  try {
    const { id } = req.query
    await pool.query("delete from recinto where id_recinto=?", [id])
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateRecintoId = async (req, res) => {
  const { id_recinto } = req.body
  try {
    await pool.query("update recinto set ? where id_recinto=?", [
      req.body,
      id_recinto,
    ])
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
