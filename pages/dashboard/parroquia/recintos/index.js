import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { Layoutv2 } from "../../../../components/Layoutv2"

export default function Recintos({ recintos }) {
  const router = useRouter()
  return (
    <Layoutv2>
      <div className="grid place-items-center p-20">
        <div className="bg-white w-full h-screen ">
          <div className=" grid place-items-center">
            <button
              className="mt-4 mb-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600  "
              onClick={() => router.push("/dashboard/parroquia/recinto/")}
            >
              Nuevo
            </button>
          </div>
          <div className="">
            {recintos.map((recinto, id) => (
              <Link
                legacyBehavior
                href={`/dashboard/parroquia/recintos/${recinto.id_recinto}`}
                key={id}
              >
                <a>
                  <div className="border table-col border-gray-200 shadow-md p-7">
                    <div className="text-red-500">{recinto.id_recinto}</div>
                    <div className="flex flex-row ml-10 mt-1">
                      {recinto.nombre_recinto}
                    </div>
                    <div className="flex absolute ml-10">
                      {recinto.id_parroquia}
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
  const { data: recintos } = await axios.get(
    "http://localhost:3000/api/parroquia/recinto"
  )
  return {
    props: {
      recintos,
    },
  }
}
