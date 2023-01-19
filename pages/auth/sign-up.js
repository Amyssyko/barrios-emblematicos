import Image from "next/image"

//import logo from "../../images/logo.jpg"
export default function Home() {
  return (
    <>
      <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
        <a
          href={"/."}
          className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10"
        >
          {/*<Image
            src={logo}
            className="h-10 mr-4"
            alt="logo"
            width={100}
            height={100}
          /> */}
          <span className="self-center text-2xl font-bold whitespace-nowrap">
            Registro
          </span>
        </a>
        <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
          <div className="p-6 sm:p-8 lg:p-16 space-y-8">
            <h2 className="text-center text-2xl lg:text-3xl font-bold text-gray-900">
              Crear Nueva cuenta
            </h2>
            <form className="mt-8 space-y-6">
              <div className="w-full md:w-1/2 px-3">
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Usuario
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="usuario"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Usuario
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="usuario"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Usuario
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="usuario"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required
                />
              </div>

              <button
                type="submit"
                className=" text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
              >
                Crear Cuenta
              </button>
              <div className="text-sm font-medium text-gray-500">
                ¿Ya has creado una cuenta?{" "}
                <a
                  href={"/auth/sign-in"}
                  className="text-teal-500 hover:underline"
                >
                  Iniciar Sesión
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
