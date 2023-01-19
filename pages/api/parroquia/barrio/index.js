import { pool } from "../../../../config/db"

export default async function handlerAllParro(req, res) {
  /*res.json({ id: req.query.id, message: "BARRIO History" })*/

  switch (req.method) {
    case "GET":
      return await getBarrio(req, res)
    case "POST":
      return await createBarrio(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const getBarrio = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM BARRIO")
    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function createBarrio(req, res) {
  try {
    const { id_barrio, nombre_barrio, id_parroquia } = req.body
    const [result] = await pool.query(
      "INSERT INTO BARRIO (id_barrio, nombre_barrio, id_parroquia ) VALUES (?,?,?)",
      [id_barrio, nombre_barrio, id_parroquia]
    )
    return res.status(201).json({ id_barrio, nombre_barrio, id_parroquia })
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }
}
