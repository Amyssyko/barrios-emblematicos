import axios from "axios"
import Image from "next/image"
import Layout from "../components/Layout"
export default function Home({ informacion, fotos, barrios }) {
  const auto = 500
  const dinfo = informacion
  const dfoto = fotos
  return (
    <>
      <Layout title={"El Carmen"}>
        <div className=" bg-white">
          <div>
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
                  className={
                    barrio.nombre_barrio ? "pb-0  text-center pt-0" : "mb-0"
                  }
                >
                  {barrio.nombre_barrio}
                </div>
                <div>{barrio.descripcion_barrio}</div>
              </div>
            ))}

            <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
              Mapa El Carmen
            </div>
            <div className=" flex justify-center py-2 ">
              <Image
                className=" ring-sky-800  ring-8 shadow w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-full  ring-offset-4 rounded-full"
                alt="Mapa Parroquia El Carmen"
                width={1080}
                height={1920}
                allowfullscreen
                src={
                  "https://lh3.googleusercontent.com/u/1/drive-viewer/AFDK6gPPJQqgScrvD8FuxeEeLjwHKHgEiqs9_DcZPceiH3N8J3XZKF2Z16lho6pCekfCiHVE_lQsMEiAP8azrBahuzhgCY5j"
                }
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
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
    props: {
      informacion,
      fotos,
      barrios,
    },
  }
}