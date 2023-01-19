import { pool } from "../../../config/db"
import { sign } from "jsonwebtoken"
import { serialize } from "cookies"

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return await Auth(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

const Auth = async (req, res) => {

  try {
    const { username, pass } = req.body
    const [result] = await pool.query(
      "SELECT  username, CONVERT(pass USING utf8) pass FROM USUARIO WHERE username =? and pass=?",
      [username, pass]
    )

   console.log(result)
   // console.log(req.body)

    if (result[0]["username"] === username && result[0]["pass"] === pass) {
      console.log("credenciales correctas")

      const token = sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
          result,
        },
        "secret"
      )

      const serialized = serialize("Token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path: "/",
      })

      res.setHeader("Set-Cookie", serialized)
      return res.status(200).json({
        message: "Login successful",
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(401).json({ error: "Credenciales invalidas" })
  }
}
