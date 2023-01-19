import Head from "next/head"
import style from "../styles/Layout.module.css"
import { Navbar } from "./Navbar"
export default function Layout({ children, title }) {
  const Titulo = "Parroquia"
  return (
    <>
      <Head>
        <title> {title ? ` ${title}` : "Inicio"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="mx-72">{children}</div>
    </>
  )
}
