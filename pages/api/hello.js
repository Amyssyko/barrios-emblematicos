// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool } from "../../config/db"

export default async function handler(req, res) {
  try {
    const [result] = await pool.query("SELECT NOW()")
    res.status(200).json("Servidor Conectado con exito, " + result[0]["NOW()"])
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
