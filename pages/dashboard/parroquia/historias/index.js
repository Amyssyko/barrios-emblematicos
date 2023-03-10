import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { Layoutv2 } from "../../../../components/Layoutv2"

export default function Historias({ historias }) {
  const router = useRouter()
  return (
    <Layoutv2>
      <div className="grid place-items-center p-20">
        <div className="bg-white w-full h-screen ">
          <div className=" grid place-items-center">
            <button
              className="mt-4 mb-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600  "
              onClick={() => router.push("/dashboard/parroquia/historia")}
            >
              Nuevo
            </button>
          </div>
          <div className="">
            {historias.map((historia, id) => (
              <Link
                legacyBehavior
                href={`/dashboard/parroquia/historias/${historia.id_historia_parroquia}`}
                key={id}
              >
                <a>
                  <div className="border table-col border-gray-200 shadow-md p-7">
                    <div className="text-red-500">
                      {historia.id_historia_parroquia}
                    </div>
                    <div className="flex ml-10 ">{historia.id_parroquia}</div>
                    <div className="flex ml-10 ">
                      {historia.descripcion_parroquia}
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
  const { data: historias } = await axios.get(
    "http://localhost:3000/api/parroquia/historia"
  )
  return {
    props: {
      historias,
    },
  }
}
