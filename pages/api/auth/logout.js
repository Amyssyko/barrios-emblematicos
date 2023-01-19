import { verify } from "jsonwebtoken"
import { serialize } from "cookie"

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return await logout(req, res)
    default:
      return res.status(400).json({ message: "Bad Request.." })
  }
}

function logout(req, res) {
  const { Token } = req.cookies

  if (!Token) {
    return res.status(401).json({ error: "No existe token" })
  }

  try {
    verify(Token, "secret")

    const serialized = serialize("Token", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0,
      path: "/",
    })
    res.setHeader("Set-Cookie", serialized)
    return res.status(200).json({
      message: "Logout successfully",
    })
  } catch (error) {
    return res.status(401).json({ error: "Token Invalido lg" })
  }
}
