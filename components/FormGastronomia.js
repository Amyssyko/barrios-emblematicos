import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

export function FormGastronomia() {
  const [gastronomia, setGastronomia] = useState({
    id_gastronomia: "",
    descripcion_plato: "",
    id_gastronomia: "",
  })

  const router = useRouter()

  useEffect(() => {
    const getGastronomia = async () => {
      const { data } = await axios.get(
        "/api/parroquia/gastronomia/" + router.query.id
      )
      //console.log(data)
      setGastronomia({
        id_gastronomia: data.id_gastronomia,
        nombre_plato: data.nombre_plato,
        descripcion_plato: data.descripcion_plato,
        id_parroquia: data.id_parroquia,
      })
    }

    if (router.query.id) {
      //console.log(router.query.id)
      getGastronomia(router.query.id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (router.query.id) {
        await axios.put(
          "/api/parroquia/gastronomia/" + router.query.id,
          gastronomia
        )
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Editado",
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        await axios.post("/api/parroquia/gastronomia", gastronomia)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Guardado",
          showConfirmButton: false,
          timer: 1500,
        })
      }
      router.push("/dashboard/parroquia/gastronomias")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error, verifique la información",
        text: error.response.data.message,
        showConfirmButton: false,
        timer: 2500,
      })
      //console.error(error.response.data.message)
    }
  }

  //lee los campos ingresados en los inputs
  const handleChange = ({ target: { name, value } }) =>
    setGastronomia({ ...gastronomia, [name]: value })

  return (
    <div className="w-1/8  md:w-1/2">
      <form
        className="bg-white shadow-md rounded px-2 pt-7 pb-8 mb-4"
        onSubmit={handleSubmit}
        id="validationForm"
        name="validationForm"
      >
        <div className="flex flex-wrap -mx- mb-2">
          <div className="w-full px-3 mb-4  grid place-items-center">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="id_gastronomia"
            >
              id gastronomia
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none block w-1/8 md:w-3/2 bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="id_gastronomia"
              name="id_gastronomia"
              type="text"
              placeholder="GXXX"
              required
              maxLength="4"
              minLength="4"
              pattern="[a-zA-Z0-9\s]+"
              title="Ingrese datos validos"
              value={gastronomia.id_gastronomia}
            />
          </div>

          <div className="w-full px-3 mb-4 grid place-items-center">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="id_parroquia"
            >
              id parroquia
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none block w-1/8 md:w-3/2 bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="id_parroquia"
              name="id_parroquia"
              type="text"
              placeholder="PXXX"
              required
              maxLength="4"
              minLength="4"
              pattern="[a-zA-Z0-9\s]+"
              title="Se requiere dirección"
              value={gastronomia.id_parroquia}
            />
          </div>

          <div className="w-full px-3 mb-4 grid place-items-center">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="nombre_plato"
            >
              nombre plato
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none block w-3/4 md:w-1/2 bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="nombre_plato"
              name="nombre_plato"
              type="text"
              placeholder=""
              required
              maxLength="100"
              minLength="4"
              pattern="[a-zA-Z0-9\s]+"
              value={gastronomia.nombre_plato}
            />
          </div>
          <div className="w-full px-3 mb-4 grid place-items-center">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="descripcion_plato"
            >
              gastronomia de la parroquia
            </label>
            <textarea
              onChange={handleChange}
              className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="descripcion_plato"
              name="descripcion_plato"
              type="text"
              required
              minLength="10"
              maxLength="1000"
              rows="2"
              pattern="[a-zA-Z0-9\s]+"
              placeholder="Ingrese la información de plato"
              value={gastronomia.descripcion_plato}
            />
          </div>
        </div>

        <div className="flex justify-center items-baseline">
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 "
          >
            {router.query.id ? "Actualizar" : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  )
}
