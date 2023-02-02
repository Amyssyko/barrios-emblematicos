import axios from "axios"
import Image from "next/image"
import Layout from "../components/Layout"

const Gastronomia = ({ gastronomias }) => {
  return (
    <Layout title={"Gastronomía"}>
      <div className="w-full md:w-full lg:w-full px-7 bg-white">
        <h1 className="font-sans font-extrabold text-lg antialiased md:subpixel-antialiased italic	tracking-wide leading-loose text-center text-gray-900 dark:text-gray-400 ">
          Gastronomia
        </h1>

        {gastronomias?.map((info, index) => (
          <div key={index}>
            <div className="flex justify-center  ">
              <div className="prose md:prose-2xl my-2">
                <div className="text-center leading-relaxed font-semibold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
                  {info?.nombre_plato}
                </div>
                <div className=" leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify">
                  {info?.descripcion_plato}
                </div>
              </div>
            </div>

            <div className="grid w-full h-96 sm:h-96  xl:h-96 2xl:h-96 mx-2 mb-6 ">
              {info.url_gastronomia ? (
                <div className=" px-2  pt-1 grid justify-items-center justify-self-center ">
                  <Image
                    className="ring-sky-600  pb-2 ring-2 shadow w-full sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-full ring-offset-2 rounded-2xl	"
                    alt={info?.nombre_plato}
                    src={info.url_gastronomia}
                    width={1920}
                    height={1080}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
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
