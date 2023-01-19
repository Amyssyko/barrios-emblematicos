import axios from "axios"
import { useRouter } from "next/router"
import Swal from "sweetalert2"

function HistoriaBiew({ historia }) {
  const router = useRouter()

  const handlerDelete = async (id_historia_parroquia) => {
    try {
      await axios.delete("/api/parroquia/historia/" + id_historia_parroquia)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Eliminado",
        showConfirmButton: false,
        timer: 1500,
      })
      router.push("/dashboard/parroquia/historias")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error",
        text: "No se puede eliminar, existe datos actualmente.",
        showConfirmButton: false,
        timer: 2500,
      })
      router.push("/dashboard/parroquia/historias")
    }
  }

  return (
    <div className="grid place-items-center p-10">
      <div className="bg-white w-full  p-10">
        <h1 className="p-10 text-center ">
          Información: {historia.id_historia_parroquia}
        </h1>
        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">id historia </div>
          <div className=" shadow-md ">{historia.id_historia_parroquia}</div>
        </div>

        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">id parroquia</div>
          <div className=" shadow-md ">{historia.id_parroquia}</div>
        </div>

        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">Descripcion:</div>
          <div className=" shadow-md p-2">{historia.descripcion_parroquia}</div>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white ml-5 py-2 px-4 rounded focus:outline-non "
            onClick={() => handlerDelete(historia.id_historia_parroquia)}
          >
            Eliminar
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white ml-6 py-2 px-4 rounded focus:outline-non"
            onClick={() =>
              router.push(
                "/dashboard/parroquia/historia/edit/" +
                  historia.id_historia_parroquia
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
  const { data: historia } = await axios.get(
    "http://localhost:3000/api/parroquia/historia/" + context.query.id
  )

  return {
    props: {
      historia,
    },
  }
}

export default HistoriaBiew
