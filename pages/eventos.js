import axios from "axios"
import Image from "next/image"
import Layout from "../components/Layout"

const Eventos = ({ actividades }) => {
  return (
    <Layout title={"Eventos"}>
      <div className="w-auto  bg-white">
        <h1 className="font-sans font-extrabold text-lg antialiased md:subpixel-antialiased italic	tracking-wide leading-loose text-center text-gray-900 dark:text-gray-400 ">
          Eventos
        </h1>

        {actividades?.map((info, index) => (
          <div
            key={index}
            className="px-3 md:px-5 sm:px-3 lg:px-7 lx:px-7 2xl:px-8 pb-2 sm:pb-2 md:pb-2 lg:pb-2 lx:pb-2"
          >
            <div className="flex justify-center  sm:mx-3 md:mx-2 mx-2">
              <div className="prose lg:prose-xl py-2">
                <div className=" text-center leading-relaxed font-semibold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
                  {info?.nombre_actividad}
                </div>
                <div className=" leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify">
                  {info?.descripcion_actividad}
                </div>
              </div>
            </div>
            <div className="pb-3 sm:pb-3 md:pb-3 lg:pb-3 2xl:mb-3 lg:mb-2 sm:mb-2 2xl:pb-2 ">
              <div className="grid w-auto h-96 sm:h-96 md:h-96 xl:h-96 2xl:h-96  ">
                {info.url_actividad ? (
                  <div className="grid justify-items-center justify-self-center ">
                    <Image
                      className="ring-sky-600  pb-0 ring-2 shadow  sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 ring-offset-2 rounded-md	"
                      alt={info?.nombre_actividad}
                      src={info.url_actividad}
                      width="1000"
                      height="1000"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" grid w-full py-3 sm:py-12 md:py-12 lg:py-12 xl:py-3 2xl:py-3 px-1 sm:px-10 md:px-12 lg:px-20 xl:px-24 2xl:px-52 ">
        <div className="aspect-w-16 w-full aspect-h-9  grid justify-items-center justify-self-center">
          <iframe
            src="https://drive.google.com/file/d/1dlIUtJxPE6aSy4QqL_reBXIQVyTcfVBT/preview"
            loading="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default Eventos

export const getServerSideProps = async (ctx) => {
  const { data: actividades } = await axios.get(
    "http://localhost:3000/api/data/actividad"
  )

  return {
    props: {
      actividades,
    },
  }
}
