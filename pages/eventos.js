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
          <div key={index} className="py-3">
            <div className="flex justify-center py-3">
              <div className="prose lg:prose-xl">
                <div className="text-center my-3 leading-relaxed font-semibold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
                  {info?.nombre_actividad}
                </div>
                <div className="leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight hover:tracking-wide italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify">
                  {info?.descripcion_actividad}
                </div>
              </div>
            </div>

            {info.url_actividad ? (
              <div className=" flex justify-center py-2">
                <Image
                  className="ring-sky-600  ring-4 shadow w-1/2 sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-1/2 ring-offset-4 rounded-full"
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
        ))}

        <div className="aspect-w-16 aspect-h-9  ">
          <iframe
            src="https://drive.google.com/file/d/1dlIUtJxPE6aSy4QqL_reBXIQVyTcfVBT/preview"
            loading
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
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
