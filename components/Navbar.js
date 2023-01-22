import Image from "next/image"
import Link from "next/link"
import logo from "../images/logo.jpg"

import { useState } from "react"

export function Navbar() {
  const [state, setState] = useState(false)

  const navigation = [
    { nombre: "Inicio", url: "/" },
    { nombre: "La Mana", url: "/mana" },
    { nombre: "El Triunfo", url: "/triunfo" },
    { nombre: "El Carmen", url: "/carmen" },
    { nombre: "Guasaganda", url: "/guasaganda" },
    { nombre: "Pucayacu", url: "/pucayacu" },
  ]

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-teal-200 to-lime-200 ">
      <div className="items-center item px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link legacyBehavior href="/">
            <a className="inline-flex items-center p-2 mr-4 ">
              <Image
                className="rounded-full "
                src={logo}
                height={100}
                alt="Logo"
              />
              <div className="pl-5 text-xl dark:text-white hover:text-slate-100 shadow-sm font-bold font-sans uppercase tracking-wide">
                Barrios Emblematicos
              </div>
            </a>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className=" justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={item.id}
                  className="text-gray-600 hover:text-indigo-400"
                >
                  <a
                    className="lg:inline-flex lg:w-auto w-full px-3 py-1 rounded text-black  font-bold items-center justify-center"
                    href={item.url}
                  >
                    {item.nombre}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
