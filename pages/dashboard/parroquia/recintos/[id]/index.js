import axios from "axios"
import { useRouter } from "next/router"
import Swal from "sweetalert2"

function RecintoView({ recinto }) {
  const router = useRouter()

  const handlerDelete = async (id_recinto) => {
    try {
      await axios.delete("/api/parroquia/recinto/" + id_recinto)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Eliminado",
        showConfirmButton: false,
        timer: 1500,
      })
      router.push("/dashboard/parroquia/recintos")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error",
        text: "No se puede eliminar, existe datos actualmente.",
        showConfirmButton: false,
        timer: 2500,
      })
      router.push("/dashboard/parroquia/recintos")
    }
  }

  return (
    <div className="grid place-items-center p-10">
      <div className="bg-white w-full md:w-1/3 p-10">
        <h1 className="p-10 text-center">
          Información: {recinto.nombre_recinto}
        </h1>
        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">id parroquia </div>
          <div className=" text-center shadow-md ">{recinto.id_recinto}</div>
        </div>

        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">Nombre:</div>
          <div className=" text-center shadow-md ">
            {recinto.nombre_recinto}
          </div>
        </div>

        <div className="w-full  px-3 mb-5 ">
          <div className="uppercase font-bold">unidad educativa</div>
          <div className=" text-center shadow-md ">{recinto.id_parroquia}</div>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white ml-5  py-2 px-4 rounded focus:outline-non "
            onClick={() => handlerDelete(recinto.id_recinto)}
          >
            Eliminar
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white ml-5  py-2 px-4 rounded focus:outline-non"
            onClick={() =>
              router.push(
                "/dashboard/parroquia/recinto/edit/" + recinto.id_recinto
              )
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
  const { data: recinto } = await axios.get(
    "http://localhost:3000/api/parroquia/recinto/" + context.query.id
  )

  return {
    props: {
      recinto,
    },
  }
}

export default RecintoView
