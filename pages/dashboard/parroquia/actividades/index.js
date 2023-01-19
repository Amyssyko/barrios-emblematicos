import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { Layoutv2 } from "../../../../components/Layoutv2"

export default function Actividad({ actividades }) {
  const router = useRouter()
  return (
    <Layoutv2>
      <div className="grid place-items-center p-20">
        <div className="bg-white w-full h-screen ">
          <div className=" grid place-items-center">
            <button
              className="mt-4 mb-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600  "
              onClick={() => router.push("/dashboard/parroquia/actividad")}
            >
              Nuevo
            </button>
          </div>
          <div className="">
            {actividades.map((actividad, id) => (
              <Link
                legacyBehavior
                href={`/dashboard/parroquia/actividades/${actividad.id_actividad}`}
                key={id}
              >
                <a>
                  <div className="border table-col border-gray-200 shadow-md p-7">
                    <div className="text-red-500">{actividad.id_actividad}</div>
                    <div className="flex ml-10 ">{actividad.id_parroquia}</div>
                    <div className="flex ml-10 ">
                      {actividad.descripcion_actividad}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layoutv2>
  )
}

export const getServerSideProps = async (context) => {
  const { data: actividades } = await axios.get(
    "http://localhost:3000/api/parroquia/actividad"
  )
  return {
    props: {
      actividades,
    },
  }
}
