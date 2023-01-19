import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import Swal from "sweetalert2"
//import logo from "../../images/logo.jpg"

export default function Home() {
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    username: "",
    pass: "",
  })

  const handleChange = ({ target: { name, value } }) =>
    setCredentials({ ...credentials, [name]: value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/auth/sign-in", credentials)
      if (response.status === 200) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Credenciales validas",
          showConfirmButton: false,
          timer: 1500,
        })
        router.push("/dashboard")
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error",
        text: "Verifique las credenciales",
        showConfirmButton: false,
        timer: 2500,
      })
      console.error(error)
      router.push("/auth/sign-in")
    }
  }

  return (
    <>
      <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
        <a
          href={"/dashboard"}
          className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10"
        >
          {/*  <Image
            src={""}
            className="h-10 mr-4"
            alt="logo"
            width={100}
            height={100}
          /> */}
          <span className="self-center text-2xl whitespace-nowrap uppercase font-bold">
            Administracion de la Página
          </span>
        </a>
        <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
          <div className="p-6 sm:p-8 lg:p-16 space-y-8">
            <h2 className=" text-center text-2xl lg:text-3xl font-bold text-gray-900">
              Inicio de Sesión
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Usuario
                </label>
                <input
                  onChange={handleChange}
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="usuario"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="pass"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Contraseña
                </label>
                <input
                  onChange={handleChange}
                  type="pass"
                  name="pass"
                  id="pass"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required
                />
              </div>
              <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center">
                Entrar
              </button>
              <div className="text-sm font-medium text-gray-500">
                ¿No te has registrado?{" "}
                <a
                  href={"/auth/sign-up"}
                  className="text-teal-500 hover:underline"
                >
                  Crear Cuenta
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
