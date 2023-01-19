import axios from "axios"
import { useRouter } from "next/router"
import Swal from "sweetalert2"

function GastronomiaBiew({ gastronomia }) {
  const router = useRouter()

  const handlerDelete = async (id_gastronomia) => {
    try {
      await axios.delete("/api/parroquia/gastronomia/" + id_gastronomia)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Eliminado",
        showConfirmButton: false,
        timer: 1500,
      })
      router.push("/dashboard/parroquia/gastronomias")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error",
        text: "No se puede eliminar, existe datos actualmente.",
        showConfirmButton: false,
        timer: 2500,
      })
      router.push("/dashboard/parroquia/gastronomias")
    }
  }

  return (
    <div className="grid place-items-center p-10">
      <div className="bg-white w-full  p-10">
        <h1 className="p-10 text-center ">
          Información: {gastronomia.id_gastronomia}
        </h1>
        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">id gastronomia </div>
          <div className=" shadow-md ">{gastronomia.id_gastronomia}</div>
        </div>

        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">id parroquia</div>
          <div className=" shadow-md ">{gastronomia.id_parroquia}</div>
        </div>
        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">nombre plato</div>
          <div className=" shadow-md ">{gastronomia.nombre_plato}</div>
        </div>

        <div className="w-full px-3 mb-5 ">
          <div className="uppercase font-bold">Descripcion:</div>
          <div className=" shadow-md p-2">{gastronomia.descripcion_plato}</div>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white ml-5 py-2 px-4 rounded focus:outline-non "
            onClick={() => handlerDelete(gastronomia.id_gastronomia)}
          >
            Eliminar
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white ml-6 py-2 px-4 rounded focus:outline-non"
            onClick={() =>
              router.push(
                "/dashboard/parroquia/gastronomia/edit/" +
                  gastronomia.id_gastronomia
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
  const { data: gastronomia } = await axios.get(
    "http://localhost:3000/api/parroquia/gastronomia/" + context.query.id
  )

  return {
    props: {
      gastronomia,
    },
  }
}

export default GastronomiaBiew
