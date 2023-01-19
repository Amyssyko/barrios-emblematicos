import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { Layoutv2 } from "../../../../components/Layoutv2"

export default function Barrios({ barrios }) {
  const router = useRouter()
  return (
    <Layoutv2>
      <div className="grid place-items-center p-20">
        <div className="bg-white w-full h-screen ">
          <div className=" grid place-items-center">
            <button
              className="mt-4 mb-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600  "
              onClick={() => router.push("/dashboard/parroquia/barrio/")}
            >
              Nuevo
            </button>
          </div>
          <div className="">
            {barrios.map((barrio, id) => (
              <Link
                legacyBehavior
                href={`/dashboard/parroquia/barrios/${barrio.id_barrio}`}
                key={id}
              >
                <a>
                  <div className="border table-col border-gray-200 shadow-md p-7">
                    <div className="text-red-500">{barrio.id_barrio}</div>
                    <div className="flex flex-row ml-10 mt-1">
                      {barrio.nombre_barrio}
                    </div>
                    <div className="flex flex-row ml-10 mt-1">
                      {barrio.descripcion_barrio}
                    </div>
                    <div className="flex absolute ml-10">
                      {barrio.id_parroquia}
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
  const { data: barrios } = await axios.get(
    "http://localhost:3000/api/parroquia/barrio"
  )
  return {
    props: {
      barrios,
    },
  }
}
