import Head from "next/head"
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
      <div className="mx-0 md:mx-24 sm:mx-10 lg:mx-24 xl:mx-24 2xl:mx-42">
        {children}
      </div>
    </>
  )
}
