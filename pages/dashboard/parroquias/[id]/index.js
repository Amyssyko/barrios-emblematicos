import axios from "axios"
import { useRouter } from "next/router"
import Swal from "sweetalert2"

function ParroquiaView({ parroquia }) {
  const router = useRouter()

  const handlerDelete = async (id_parroquia) => {
    try {
      await axios.delete("/api/parroquia/" + id_parroquia)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Eliminado",
        showConfirmButton: false,
        timer: 1500,
      })
      router.push("/dashboard/parroquias")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error",
        text: "No se puede eliminar, existe datos actualmente.",
        showConfirmButton: false,
        timer: 2500,
      })
      router.push("/dashboard/parroquias")
    }
  }

  return (
    <div className="grid place-items-center p-10">
      <div className="bg-white w-full max-w-xs p-10">
        <div className="p-10 text-center ">
          Información: {parroquia.nombre_parroquia}
        </div>
        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">id parroquia </div>
          <div className=" text-center shadow-md ">
            {parroquia.id_parroquia}
          </div>
        </div>

        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">Nombre:</div>
          <div className=" text-center shadow-md ">
            {parroquia.nombre_parroquia}
          </div>
        </div>

        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">unidad educativa</div>
          <div className=" text-center shadow-md ">
            {parroquia.unidad_educativa}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white ml-5 py-2 px-4 rounded focus:outline-non "
            onClick={() => handlerDelete(parroquia.id_parroquia)}
          >
            Eliminar
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white ml-6 py-2 px-4 rounded focus:outline-non"
            onClick={() =>
              router.push("/dashboard/parroquia/edit/" + parroquia.id_parroquia)
            }
          >
            Actualizar
          </button>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { data: parroquia } = await axios.get(
    "http://localhost:3000/api/parroquia/" + context.query.id
  )

  return {
    props: {
      parroquia,
    },
  }
}

export default ParroquiaView
