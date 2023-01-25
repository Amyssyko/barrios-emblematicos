import axios from "axios"
import Image from "next/image"
import { Fotos } from "../components/Fotos"
import Layout from "../components/Layout"

//import styles from "../styles/Home.module.css"

export default function Mana({ informacion, fotos, barrios, videos }) {
  const auto = 500
  return (
    <div>
      <Layout title="La Mana">
        <div className=" bg-white ">
          <div>
            <h1 className=" py-10  font-sans font-extrabold text-lg antialiased md:subpixel-antialiased italic	tracking-wide leading-loose text-center text-gray-900 dark:text-gray-400 ">
              Historia
            </h1>
            <div>
              {informacion.map((info) => (
                <div key={info.id} className="flex justify-center ">
                  <div className="prose-xl">
                    <div className=" px-3 md:px-5 sm:px-3 lg:prose-xl my-3 leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify">
                      {info.descripcion_parroquia}
                    </div>
                    <br />
                  </div>
                </div>
              ))}
            </div>

            {Fotos({ fotos }, "El Triunfo")}

            <ul className="list-disc list-inside px-2 md:px-12 lg:px-24 py-5 font-sans text-lg antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400">
              <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
                Límites de la parroquia La Mana
              </div>
              <div className="px-3">
                <li>Norte: Parroquia Guasaganda y Cantón Valencia.</li>
                <li>Sur: Cantón Quinsaloma y Pangua</li>
                <li>Este: Cantón Pujilí.</li>
                <li>Oeste: Cantón Valencia</li>
              </div>
            </ul>

            <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
              Barrios
            </div>
            {barrios.map((barrio) => (
              <div
                key={barrio.id}
                className=" first-letter:prose lg:prose-xl list-disc list-inside px-3 py-5 leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify"
              >
                <div className=" text-center  pb-2 ">
                  {barrio.nombre_barrio}:{" "}
                </div>
                <div className="leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify">
                  {barrio.descripcion_barrio}
                </div>
              </div>
            ))}

            <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
              Mapa La Mana
            </div>
            <div className=" flex justify-center sm:justify-center py-2">
              <div className="w-3/4 sm:w-1/2 md:w-full lg:w-1/2 xl:w-1/2 flex sm:justify-center">
                <Image
                  className=" ring-sky-800  ring-8 shadow w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-full  ring-offset-4 rounded-full"
                  alt="Mapa Parroquia La Maná"
                  width={1080}
                  height={1920}
                  allowFullScreen
                  src={
                    "https://lh3.googleusercontent.com/u/1/drive-viewer/AFDK6gM-IrT-k9d7GX-jeKs-p2zmIF59HDKQSrkOqOreksv1Rw7DABeYGrpD5YeIysKGNhZo3q-YVkn8G_BBxjSfhRM_pP59dA"
                  }
                />
              </div>
            </div>

            <div className=" flex justify-center py-2 ">
              {videos?.map((video) => (
                <div key={video.id} className="py-5 w-3/4 grid ">
                  <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
                    {video.descripcion_video}
                  </div>
                  <div className="aspect-w-16 aspect-h-9  ">
                    <iframe
                      src={video.url}
                      loading="1"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const { data: videos } = await axios.get(
    "http://localhost:3000/api/media/video/P001"
  )

  const { data: barrios } = await axios.get(
    "http://localhost:3000/api/data/barrio/P001"
  )

  const { data: fotos } = await axios.get(
    "http://localhost:3000/api/media/images/P001"
  )

  const { data: informacion } = await axios.get(
    "http://localhost:3000/api/data/historia-parroquia/P001"
  )

  return {
    props: {
      informacion,
      fotos,
      barrios,
      videos,
    },
  }
}
