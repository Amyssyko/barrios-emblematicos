import axios from "axios"
import Image from "next/image"
import Layout from "../components/Layout"

export default function Home({ informacion, fotos, barrios, videos }) {
  const auto = 500
  const dinfo = informacion
  const dfoto = fotos
  return (
    <div>
      <Layout title={"El Triunfo"}>
        <div className=" bg-white ">
          <h1 className=" py-10  font-sans font-extrabold text-lg antialiased md:subpixel-antialiased italic	tracking-wide leading-loose text-center text-gray-900 dark:text-gray-400 ">
            Historia
          </h1>

          <div>
            {informacion?.map((info, index) => (
              <div key={info.id} className="flex justify-center ">
                <div className="prose-xl">
                  <div className="px-24 lg:prose-xl my-3 leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight hover:tracking-wide italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify">
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
          </div>

          <ul className="list-disc list-inside px-20 py-5 font-sans text-lg antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400">
            <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
              Límites de la parroquia El Triunfo
            </div>
            <div className="pl-28">
              <li>Norte: Rio San Pablo</li>
              <li>Sur: Rio Chipe</li>
              <li>Oeste: Cheguevara</li>
              <li>Este: Sargento Villacis</li>
            </div>
          </ul>

          <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
            Barrios
          </div>
          {barrios.map((barrio, id) => (
            <div
              key={id}
              className=" first-letter:prose lg:prose-xl list-disc list-inside px-20 py-5 my-3 leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify"
            >
              <div className=" text-center pt-2 pb-2 ">
                {barrio.nombre_barrio}
              </div>
              <div className="leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight hover:tracking-wide italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify">
                {barrio.descripcion_barrio}
              </div>
            </div>
          ))}

          <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
            Mapa El Triunfo
          </div>

          <div className=" flex justify-center py-2 ">
            <Image
              className=" ring-sky-800  ring-8 shadow w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-full  ring-offset-4 rounded-full"
              alt="Mapa Parroquia El Triunfo"
              width={1080}
              height={1920}
              allowfullscreen
              src={
                "https://lh3.googleusercontent.com/u/1/drive-viewer/AFDK6gOcGKzUyD3tYid7QxbFYgKCmgQZwDl9S9m2lo7QMWVazvrsDntSF3IGDQ6pmva1pxpbkiTg_ATL-UtTEzZ_e-jxtFOU"
              }
            />
          </div>

          {videos?.map((video, id) => (
            <div key={id} className="py-5">
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
      </Layout>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const { data: videos } = await axios.get(
    "http://localhost:3000/api/media/video/P002"
  )

  const { data: barrios } = await axios.get(
    "http://localhost:3000/api/data/barrio/P002"
  )

  const { data: fotos } = await axios.get(
    "http://localhost:3000/api/media/images/P002"
  )

  const { data: informacion } = await axios.get(
    "http://localhost:3000/api/data/historia-parroquia/P002"
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

{
  /** <ul className="pr-12 pl-12  list-disc list-inside">
            <li>26 de Octubre</li>
            <li>1 de Mayo </li>
            <li>El triunfo </li>
            <li>Playita mía</li>
            <li>Santa Rosa </li>
            <li>Los laureles </li>
          </ul>*/
}
