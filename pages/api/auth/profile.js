import { verify } from "jsonwebtoken"

export default async function handler(req, res) {
  try {
    const { Token } = req.cookies
    const userData = verify(Token, "secret")
    console.log(userData)
    return res.json({ nombre: userData.nombre, apellido: userData.apellido })
  } catch (error) {
    return res.status(401).json({ error: "Token Invalido" })
  }
}
