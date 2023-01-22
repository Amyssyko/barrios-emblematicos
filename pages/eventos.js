import axios from "axios"
import Image from "next/image"
import Layout from "../components/Layout"

const Eventos = ({ actividades }) => {
  return (
    <Layout title={"Eventos"}>
      <div className="w-full md:w-full lg:w-full bg-white">
        <h1 className="font-sans font-extrabold text-lg antialiased md:subpixel-antialiased italic	tracking-wide leading-loose text-center text-gray-900 dark:text-gray-400 ">
          Eventos
        </h1>

        {actividades?.map((info, index) => (
          <div key={index}>
            <div className="flex justify-center sm:my-10">
              <div className="prose lg:prose-xl my-2 py-2 sm:py-1">
                <div className=" sm:py-5 text-center leading-relaxed font-semibold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
                  {info?.nombre_actividad}
                </div>
                <div className=" leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify">
                  {info?.descripcion_actividad}
                </div>
              </div>
            </div>

            <div className="grid w-full h-56 sm:h-96  xl:h-80 2xl:h-96 mx-2 ">
              {info.url_actividad ? (
                <div className=" px-2  grid justify-items-center justify-self-center ">
                  <Image
                    className="ring-sky-600  pb-2 ring-2 shadow w-1/2 sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-1/2 ring-offset-2 rounded-2xl	"
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
        ))}

        <div className=" grid w-full py-2 ">
          <div className="aspect-w-12 w-1/2 aspect-h-4  grid justify-items-center justify-self-center">
            <iframe
              className="	"
              src="https://drive.google.com/file/d/1dlIUtJxPE6aSy4QqL_reBXIQVyTcfVBT/preview"
              loading
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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
