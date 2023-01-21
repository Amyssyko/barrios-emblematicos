import { pool } from "../../../config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getParroquia(req, res)
    case "POST":
      return await createParroquia(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getParroquia = async (req, res) => {
  try {
    const [result] = await pool.query("select * from parroquia")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function createParroquia(req, res) {
  try {
    const { id_parroquia, nombre_parroquia, unidad_educativa } = req.body
    const [result] = await pool.query(
      "insert into parroquia (id_parroquia, nombre_parroquia, unidad_educativa ) values (?,?,?)",
      [id_parroquia, nombre_parroquia, unidad_educativa]
    )
    return res
      .status(201)
      .json({ id_parroquia, nombre_parroquia, unidad_educativa })
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }
}
