import { pool } from "../../../../config/db"

export default async function handlerAllParro(req, res) {
  /*res.json({ id: req.query.id, message: "RECINTO History" })*/

  switch (req.method) {
    case "GET":
      return await getRecinto(req, res)
    case "POST":
      return await createRecinto(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getRecinto = async (req, res) => {
  try {
    const [result] = await pool.query("select * from recinto")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function createRecinto(req, res) {
  try {
    const { id_recinto, nombre_recinto, id_parroquia } = req.body
    await pool.query(
      "insert into recinto (id_recinto, nombre_recinto, id_parroquia ) values (?,?,?)",
      [id_recinto, nombre_recinto, id_parroquia]
    )
    return res.status(201).json()
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }
}
