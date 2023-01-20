import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

//import { verificarCedula } from "udv-ec"

export function FormBarrio() {
  //ingresa los datos obtenidos de input
  const [barrio, setBarrio] = useState({
    id_barrio: "",
    nombre_barrio: "",
    descripcion_barrio: "",
    id_parroquia: "",
  })

  const router = useRouter()

  useEffect(() => {
    const getBarrio = async () => {
      const { data } = await axios.get(
        "/api/parroquia/barrio/" + router.query.id
      )
      //console.log(data)
      setBarrio({
        id_barrio: data.id_barrio,
        nombre_barrio: data.nombre_barrio,
        id_parroquia: data.id_parroquia,
        descripcion_barrio: data.descripcion_barrio,
      })
    }

    if (router.query.id) {
      //console.log(router.query.id)
      getBarrio(router.query.id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (router.query.id) {
        await axios.put("/api/parroquia/barrio/" + router.query.id, barrio)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Editado",
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        await axios.post("/api/parroquia/barrio", barrio)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Guardado",
          showConfirmButton: false,
          timer: 1500,
        })
      }
      router.push("/dashboard/parroquia/barrios")
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
    setBarrio({ ...barrio, [name]: value })

  return (
    <div className="w-full max-w-md ">
      <form
        className="bg-white shadow-md rounded px-2 pt-7 pb-7 mb-4 w-full "
        onSubmit={handleSubmit}
        id="validationForm"
        name="validationForm"
      >
        <div className="flex flex-wrap -mx- mb-2">
          <div className="w-full px-3 mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="id_barrio"
            >
              id barrio
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="id_barrio"
              name="id_barrio"
              type="text"
              placeholder="BXXX"
              required
              maxLength="4"
              minLength="4"
              pattern="[a-zA-Z0-9\s]+"
              value={barrio.id_barrio}
            />
          </div>

          <div className="w-full px-3 mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="nombre_barrio"
            >
              nombre barrio
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="nombre_barrio"
              name="nombre_barrio"
              type="text"
              required
              placeholder=""
              pattern="[a-zA-Z0-9\s]+"
              title="Verifique los datos"
              maxLength="100"
              minLength="5"
              value={barrio.nombre_barrio}
            />
          </div>

          <div className="w-full px-3 mb-4 grid place-items-center">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="descripcion_barrio"
            >
              historia de la parroquia
            </label>
            <textarea
              onChange={handleChange}
              className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="descripcion_barrio"
              name="descripcion_barrio"
              type="text"
              required
              minLength="10"
              maxLength="1000"
              rows="2"
              pattern="[a-zA-Z0-9\s]+"
              value={barrio.descripcion_barrio}
            />
          </div>

          <div className="w-full px-3 mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="id_parroquia"
            >
              id parroquia
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="id_parroquia"
              name="id_parroquia"
              type="text"
              placeholder="PXXX"
              maxLength="4"
              minLength="4"
              required
              pattern="[a-zA-Z0-9\s]+"
              value={barrio.id_parroquia}
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
