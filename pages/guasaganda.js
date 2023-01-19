import axios from "axios"
import Image from "next/image"
import Layout from "../components/Layout"

export default function Home({ informacion, fotos, recintos, videos }) {
  const auto = 500
  const dinfo = informacion
  const dfoto = fotos
  return (
    <Layout title={"Guasaganda"}>
      <div className="w-full md:w-full lg:w-full bg-white">
        <h1 className=" py-10  font-sans font-extrabold text-lg antialiased md:subpixel-antialiased italic	tracking-wide leading-loose text-center text-gray-900 dark:text-gray-400 ">
          Historia
        </h1>
        <div>
          {informacion?.map((info, index) => (
            <div className="flex justify-center ">
              <div className="prose lg:prose-xl" key={index}>
                <div className="my-3 leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight hover:tracking-wide italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify">
                  {info.descripcion_parroquia}
                </div>
                <br />
              </div>
            </div>
          ))}
        </div>
        <div>
          {dfoto?.map((foto, index) => (
            <div className="flex justify-center mt-5" key={index}>
              <Image
                alt="Imagen de la parroquia"
                height={auto}
                width={auto}
                src={foto.url}
              />
            </div>
          ))}

          <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
            Recintos
          </div>
          {recintos?.map((recinto, id) => (
            <div
              key={id}
              className=" first-letter:prose lg:prose-xl list-disc list-inside px-20 py-1 my-3 leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify"
            >
              <div className="text-center pb-0  pt-0">
                {recinto.nombre_recinto}
              </div>
              <div>{recinto.descripcion_recinto}</div>
            </div>
          ))}

          <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
            Mapa Guasaganda
          </div>
          <div className=" flex justify-center py-2 ">
            <Image
              className=" ring-sky-800  ring-8 shadow w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-full  ring-offset-4 rounded-full"
              alt="Mapa Parroquia Pucayacu"
              width={1080}
              height={1920}
              allowfullscreen
              src={
                "https://lh3.googleusercontent.com/u/1/drive-viewer/AFDK6gMkdbRTiX5sUmI9GDdqFEVzojhzgRVYJir8U_ltST6Ton8ACW-tO7m_MzZ-kyCqswT3rSU7wKFDebAoiV4Ot3lK5FFvww"
              }
            />
          </div>

          {videos?.map((video, id) => (
            <div key={id}>
              <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
                {video.descripcion_video}
              </div>
              <div className="aspect-w-16 aspect-h-9  ">
                <iframe
                  src={video.url}
                  loading
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (ctx) => {
  const { data: videos } = await axios.get(
    "http://localhost:3000/api/media/video/P004"
  )

  const { data: recintos } = await axios.get(
    "http://localhost:3000/api/data/recinto/P004"
  )
  const { data: fotos } = await axios.get(
    "http://localhost:3000/api/media/images/P004"
  )

  const { data: informacion } = await axios.get(
    "http://localhost:3000/api/data/historia-parroquia/P004"
  )

  return {
    props: {
      informacion,
      fotos,
      recintos,
      videos,
    },
  }
}
