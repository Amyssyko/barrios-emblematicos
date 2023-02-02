import axios from "axios"
import Image from "next/image"
import { Fotos } from "../components/Fotos"
import Layout from "../components/Layout"

export default function Home({
  parroquia,
  informacion,
  fotos,
  barrios,
  videos,
}) {
  const auto = 500
  const dinfo = informacion
  const dfoto = fotos
  return (
    <>
      <Layout title={"El Carmen"}>
        <div className=" bg-white">
          <h1 className=" py-10  font-sans font-extrabold text-lg antialiased md:subpixel-antialiased italic	tracking-wide leading-loose text-center text-gray-900 dark:text-gray-400 ">
            Historia
          </h1>

          <div>
            {informacion?.map((info) => (
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

          {Fotos({ fotos }, "El Carmen")}

          <ul className="list-disc list-inside px-2 md:px-12 lg:px-24 py-5 font-sans text-lg antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400">
            <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
              Límites de la parroquia El Carmen
            </div>
            <div className="px-3">
              <li>Norte: Parroquia Guasaganda.</li>
              <li>Sur: Parroquia El Triunfo.</li>
              <li>Este: Parroquia La Maná.</li>
              <li>Oeste: Cantón Valencia.</li>
            </div>
          </ul>

          <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
            Centros Educativos de la Parroquia {parroquia.nombre_parroquia}
          </div>
          <div className=" lg:prose-xl list-disc list-inside px-3 py-5 leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-center">
            {parroquia.unidad_educativa}
          </div>

          <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
            Barrios
          </div>
          {barrios?.map((barrio, id) => (
            <div
              key={id}
              className=" first-letter:prose lg:prose-xl list-disc list-inside px-20 py-1 my-3 leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify"
            >
              <div
                className={barrio.nombre_barrio ? "text-center pb-2" : "mb-0"}
              >
                {barrio?.nombre_barrio}
              </div>
              <div
                className={
                  barrio.descripcion_parroquia
                    ? "leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify"
                    : ""
                }
              >
                {barrio.descripcion_barrio}
              </div>
            </div>
          ))}

          <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
            Mapa El Carmen
          </div>
          <div className=" flex justify-center sm:justify-center py-6">
            <div className="w-3/4 sm:w-1/2 md:w-full lg:w-1/2 xl:w-1/2 flex sm:justify-center">
              <Image
                className=" ring-sky-800  ring-8 shadow w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-full  ring-offset-4 rounded-full"
                alt="Mapa Parroquia El Carmen"
                width={1080}
                height={1920}
                allowFullScreen
                src={
                  "https://lh3.googleusercontent.com/u/1/drive-viewer/AFDK6gPPJQqgScrvD8FuxeEeLjwHKHgEiqs9_DcZPceiH3N8J3XZKF2Z16lho6pCekfCiHVE_lQsMEiAP8azrBahuzhgCY5j"
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
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { data: parroquia } = await axios.get(
    "http://localhost:3000/api/parroquia/P003"
  )
  const { data: videos } = await axios.get(
    "http://localhost:3000/api/media/video/P003"
  )
  const { data: barrios } = await axios.get(
    "http://localhost:3000/api/data/barrio/P003"
  )
  const { data: fotos } = await axios.get(
    "http://localhost:3000/api/media/images/P003"
  )

  const { data: informacion } = await axios.get(
    "http://localhost:3000/api/data/historia-parroquia/P003"
  )

  return {
    props: { parroquia, informacion, fotos, barrios, videos },
  }
}
