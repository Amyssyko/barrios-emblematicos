import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

export function FormBarrioHistoria() {
  const [historia_barrio, setHistoriaBarrio] = useState({
    id_historia_barrio: "",
    descripcion_barrio: "",
    id_barrio: "",
  })

  const router = useRouter()

  useEffect(() => {
    const getHistoria_Barrio = async () => {
      const { data } = await axios.get(
        "/api/parroquia/barrio/historia/" + router.query.id
      )
      //console.log(data)
      setHistoriaBarrio({
        id_historia_barrio: data.id_historia_barrio,
        descripcion_barrio: data.descripcion_barrio,
        id_barrio: data.id_barrio,
      })
    }

    if (router.query.id) {
      //console.log(router.query.id)
      getHistoria_Barrio(router.query.id)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (router.query.id) {
        await axios.put(
          "/api/parroquia/barrio/historia/" + router.query.id,
          historia_barrio
        )
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Editado",
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        await axios.post("/api/parroquia/barrio/historia", historia_barrio)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Guardado",
          showConfirmButton: false,
          timer: 1500,
        })
      }
      router.push("/dashboard/parroquia/barrio/historias")
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

  const handleChange = ({ target: { name, value } }) =>
    setHistoriaBarrio({ ...historia_barrio, [name]: value })

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
              htmlFor="id_historia_barrio"
            >
              id historia
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none block w-1/8 md:w-3/2 bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="id_historia_barrio"
              name="id_historia_barrio"
              type="text"
              placeholder="HXXX"
              required
              maxLength="4"
              minLength="4"
              pattern="[a-zA-Z0-9\s]+"
              title="Ingrese datos validos"
              value={historia_barrio.id_historia_barrio}
            />
          </div>

          <div className="w-full px-3 mb-4 grid place-items-center">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="id_barrio"
            >
              id barrio
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none block w-1/8 md:w-3/2 bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="id_barrio"
              name="id_barrio"
              type="text"
              placeholder="BXXX"
              required
              maxLength="4"
              minLength="4"
              pattern="[a-zA-Z0-9\s]+"
              value={historia_barrio.id_barrio}
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
              value={historia_barrio.descripcion_barrio}
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
