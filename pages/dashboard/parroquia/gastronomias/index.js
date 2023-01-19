import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { Layoutv2 } from "../../../../components/Layoutv2"

export default function Gastronomia({ gastronomias }) {
  const router = useRouter()
  return (
    <Layoutv2>
      <div className="grid place-items-center p-20">
        <div className="bg-white w-full h-screen ">
          <div className=" grid place-items-center">
            <button
              className="mt-4 mb-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600  "
              onClick={() => router.push("/dashboard/parroquia/gastronomia")}
            >
              Nuevo
            </button>
          </div>
          <div className="">
            {gastronomias.map((gastronomia, id) => (
              <Link
                legacyBehavior
                href={`/dashboard/parroquia/gastronomias/${gastronomia.id_gastronomia}`}
                key={id}
              >
                <a>
                  <div className="border table-col border-gray-200 shadow-md p-7">
                    <div className="text-red-500">
                      {gastronomia.id_gastronomia}
                    </div>
                    <div className="flex text-blue-500">
                      {gastronomia.id_parroquia}
                    </div>

                    <div className="flex ml-10 ">
                      {gastronomia.nombre_plato}
                    </div>

                    <div className="flex ml-10 ">
                      {gastronomia.descripcion_plato}
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
  const { data: gastronomias } = await axios.get(
    "http://localhost:3000/api/parroquia/gastronomia"
  )
  return {
    props: {
      gastronomias,
    },
  }
}
