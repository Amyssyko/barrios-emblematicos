import Image from "next/image"
import Link from "next/link"
import logo from "../images/logo.jpg"

export const Navbar = () => {
  const menu = [
    { nombre: "Inicio", url: "/" },
    { nombre: "La Mana", url: "/mana" },
    { nombre: "El Triunfo", url: "/triunfo" },
    { nombre: "El Carmen", url: "/carmen" },
    { nombre: "Guasaganda", url: "/guasaganda" },
    { nombre: "Pucayacu", url: "/pucayacu" },
  ]

  return (
    <nav className=" flex items-center flex-wrap w-screen h-auto bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-teal-200 to-lime-200 ">
      <Link legacyBehavior href="/">
        <a className="inline-flex items-center p-2 mr-4 ">
          <Image className="rounded-full " src={logo} height={100} alt="Logo" />
          <div className="pl-5 text-xl dark:text-white hover:text-slate-100 shadow-sm font-bold font-sans uppercase tracking-wide">
            Barrios Emblematicos
          </div>
        </a>
      </Link>
      <div className="w-full lg:inline-flex lg:flex-grow lg:w-auto">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center md:justify-center items-center  flex flex-col lg:h-auto pr-10">
          {menu.map((lista, id) => (
            <div key={id}>
              <Link legacyBehavior href={lista.url}>
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-1 rounded text-black  font-bold items-center justify-center hover:bg-green-400 hover:text-white ">
                  {lista.nombre}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
