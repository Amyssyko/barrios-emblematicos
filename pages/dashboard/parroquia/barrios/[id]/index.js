import axios from "axios"
import { useRouter } from "next/router"
import Swal from "sweetalert2"

function BarrioView({ barrio }) {
  const router = useRouter()

  const handlerDelete = async (id_barrio) => {
    try {
      await axios.delete("/api/parroquia/barrio/" + id_barrio)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Eliminado",
        showConfirmButton: false,
        timer: 1500,
      })
      router.push("/dashboard/parroquia/barrios")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error",
        text: "No se puede eliminar, existe datos actualmente.",
        showConfirmButton: false,
        timer: 2500,
      })
      router.push("/dashboard/parroquia/barrios")
    }
  }

  return (
    <div className="grid place-items-center p-10">
      <div className="bg-white w-full md:w-1/3 p-10">
        <h1 className="p-10 text-center">
          Información: {barrio.nombre_barrio}
        </h1>
        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">id parroquia </div>
          <div className=" text-center shadow-md ">{barrio.id_barrio}</div>
        </div>

        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">Nombre:</div>
          <div className=" text-center shadow-md ">{barrio.nombre_barrio}</div>
        </div>

        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">Historia:</div>
          <div className=" text-center shadow-md ">
            {barrio.descripcion_barrio}
          </div>
        </div>
        <div className="w-full  px-3 mb-5 ">
          <div className="uppercase font-bold">unidad educativa</div>
          <div className=" text-center shadow-md ">
            {barrio.descripcion_barrio}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white ml-5  py-2 px-4 rounded focus:outline-non "
            onClick={() => handlerDelete(barrio.id_barrio)}
          >
            Eliminar
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white ml-5  py-2 px-4 rounded focus:outline-non"
            onClick={() =>
              router.push(
                "/dashboard/parroquia/barrio/edit/" + barrio.id_barrio
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
  const { data: barrio } = await axios.get(
    "http://localhost:3000/api/parroquia/barrio/" + context.query.id
  )

  return {
    props: {
      barrio,
    },
  }
}

export default BarrioView
