import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

//import { verificarCedula } from "udv-ec"

export function FormParroquia() {
  //ingresa los datos obtenidos de input
  const [parroquia, setParroquia] = useState({
    id_parroquia: "",
    nombre_parroquia: "",
    unidad_educativa: "",
  })

  const router = useRouter()

  useEffect(() => {
    const getParroquia = async () => {
      const { data } = await axios.get("/api/parroquia/" + router.query.id)
      //console.log(data)
      setParroquia({
        id_parroquia: data.id_parroquia,
        nombre_parroquia: data.nombre_parroquia,
        unidad_educativa: data.unidad_educativa,
      })
    }

    if (router.query.id) {
      //console.log(router.query.id)
      getParroquia(router.query.id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (router.query.id) {
        await axios.put("/api/parroquia/" + router.query.id, parroquia)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Editado",
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        await axios.post("/api/parroquia", parroquia)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Guardado",
          showConfirmButton: false,
          timer: 1500,
        })
      }
      router.push("/dashboard/parroquias")
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
    setParroquia({ ...parroquia, [name]: value })

  return (
    <div className="w-full max-w-xs ">
      <form
        className="bg-white shadow-md rounded px-2 pt-7 pb-8 mb-4"
        onSubmit={handleSubmit}
        id="validationForm"
        name="validationForm"
      >
        <div className="flex flex-wrap -mx- mb-2">
          <div className="w-full px-3 mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="id_parroquia"
            >
              ID PARRROQUIA
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="id_parroquia"
              name="id_parroquia"
              type="text"
              placeholder="PXXX"
              required
              maxLength="4"
              minLength="4"
              pattern="[a-zA-Z0-9\s]+"
              title="Ingrese datos validos"
              value={parroquia.id_parroquia}
            />
          </div>

          <div className="w-full px-3 mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="nombre_parroquia"
            >
              NOMBRE PARROQUIA
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="nombre_parroquia"
              name="nombre_parroquia"
              type="text"
              required
              placeholder=""
              pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1\s]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$"
              title="Verifique los datos"
              maxLength="100"
              minLength="5"
              value={parroquia.nombre_parroquia}
            />
          </div>

          <div className="w-full px-3 mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="unidad_educativa"
            >
              UNIDAD EDUCATIVA
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="unidad_educativa"
              name="unidad_educativa"
              type="text"
              placeholder=""
              maxLength="100"
              minLength="5"
              required
              pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1\s]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$"
              title="Se requiere dirección"
              value={parroquia.unidad_educativa}
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
