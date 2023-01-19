import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

export function FormRecinto() {
  const [recinto, setRecinto] = useState({
    id_recinto: "",
    nombre_recinto: "",
    id_parroquia: "",
  })

  const router = useRouter()

  useEffect(() => {
    const getRecinto = async () => {
      const { data } = await axios.get(
        "/api/parroquia/recinto/" + router.query.id
      )
      //console.log(data)
      setRecinto({
        id_recinto: data.id_recinto,
        nombre_recinto: data.nombre_recinto,
        id_parroquia: data.id_parroquia,
      })
    }

    if (router.query.id) {
      //console.log(router.query.id)
      getRecinto(router.query.id)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (router.query.id) {
        await axios.put("/api/parroquia/recinto/" + router.query.id, recinto)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Editado",
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        await axios.post("/api/parroquia/recinto", recinto)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Guardado",
          showConfirmButton: false,
          timer: 1500,
        })
      }
      router.push("/dashboard/parroquia/recintos")
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
    setRecinto({ ...recinto, [name]: value })

  return (
    <div className="w-full max-w-md ">
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
              htmlFor="id_recinto"
            >
              id recinto
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="id_recinto"
              name="id_recinto"
              type="text"
              placeholder="RXXX"
              required
              maxLength="4"
              minLength="4"
              pattern="[a-zA-Z0-9\s]+"
              value={recinto.id_recinto}
            />
          </div>

          <div className="w-full px-3 mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="nombre_recinto"
            >
              nombre recinto
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="nombre_recinto"
              name="nombre_recinto"
              type="text"
              required
              placeholder=""
              pattern="[a-zA-Z0-9\s]+"
              title="Verifique los datos"
              maxLength="100"
              minLength="5"
              value={recinto.nombre_recinto}
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
              value={recinto.id_parroquia}
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
