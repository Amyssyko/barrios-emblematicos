import { Html, Head, Main, NextScript } from "next/document"
import Footer from "../components/Footer"

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body className="select-none">
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  )
}
