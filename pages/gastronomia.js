import axios from "axios"
import Image from "next/image"
import Layout from "../components/Layout"

const Gastronomia = ({ gastronomias }) => {
  return (
    <Layout title={"Gastronomía"}>
      <div className="w-full md:w-full lg:w-full bg-white">
        <h1 className="font-sans font-extrabold text-lg antialiased md:subpixel-antialiased italic	tracking-wide leading-loose text-center text-gray-900 dark:text-gray-400 ">
          Gastronomia
        </h1>

        {gastronomias?.map((info, index) => (
          <div key={index}>
            <div className="flex justify-center py-3">
              <div className="prose lg:prose-xl">
                <div className="text-center my-3 leading-relaxed font-semibold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
                  {info?.nombre_plato}
                </div>
                <div className="leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify">
                  {info?.descripcion_plato}
                </div>
              </div>
            </div>

            {info.url_gastronomia ? (
              <div className=" flex justify-center py-2">
                <Image
                  className="ring-sky-600  ring-4 shadow w-1/2 sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-1/2 ring-offset-4 rounded-3xl	"
                  alt={info?.nombre_plato}
                  src={info.url_gastronomia}
                  width="1000"
                  height="1000"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Gastronomia

export const getServerSideProps = async (ctx) => {
  const { data: gastronomias } = await axios.get(
    "http://localhost:3000/api/data/gastronomia"
  )

  return {
    props: {
      gastronomias,
    },
  }
}
