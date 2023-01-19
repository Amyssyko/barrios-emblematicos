import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import Layout from "../components/Layout"

//import styles from "../styles/Home.module.css"

export default function Home({ informacion, fotos, barrios, videos }) {
  const auto = 500
  const dinfo = informacion
  const dfoto = fotos

  return (
    <div>
      <Layout title="La Mana">
        <div className=" bg-white ">
          <div>
            <h1 className=" py-10  font-sans font-extrabold text-lg antialiased md:subpixel-antialiased italic	tracking-wide leading-loose text-center text-gray-900 dark:text-gray-400 ">
              Historia
            </h1>
            <div>
              {informacion.map((info, index) => (
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
              {dfoto.map((foto, index) => (
                <div className="flex justify-center mt-5" key={index}>
                  <Image
                    className="brightness-125 contrast-125"
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
                Límites de la parroquia La Mana
              </div>
              <div className="pl-28">
                <li>Norte: Parroquia Guasaganda y Cantón Valencia.</li>
                <li>Sur: Cantón Quinsaloma y Pangua</li>
                <li>Este: Cantón Pujilí.</li>
                <li>Oeste: Cantón Valencia</li>
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
                  {barrio.nombre_barrio}:{" "}
                </div>
                <div className="leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight hover:tracking-wide italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify">
                  {barrio.descripcion_barrio}
                </div>
              </div>
            ))}

            <div className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400">
              Mapa La Mana
            </div>
            <div className=" flex justify-center py-2 ">
              <Image
                className=" ring-sky-800  ring-8 shadow w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-full  ring-offset-4 rounded-full"
                alt="Mapa Parroquia La Mana"
                width={1080}
                height={1920}
                allowfullscreen
                src={
                  "https://lh3.googleusercontent.com/u/1/drive-viewer/AFDK6gM-IrT-k9d7GX-jeKs-p2zmIF59HDKQSrkOqOreksv1Rw7DABeYGrpD5YeIysKGNhZo3q-YVkn8G_BBxjSfhRM_pP59dA"
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

{
  /*  const Datafotos = ({ size = 1 }) => (
    <div>
      {Array.from({ length: Math.ceil(foto.length / size) }, (_, id) => (
        <div key={id} className="group-of-2">
          <br />
          {mana.map((info, id) => (
            <div key={id}>
              <div>{info.descripcion_parroquia}</div>
            </div>
          ))}
          {foto.slice(id * size, (id + 1) * size).map((foto, id) => (
            <div
              className="flex justify-center mt-10 bg-fixed brightness-125 contrast-125 	 "
              key={id}
            >
              <Image
                className=""
                src={foto.url}
                height={500}
                width={500}
                alt="foto"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  ) */
}
{
  /* const Data = ({ size = 1 }) => (
    <div>
      {Array.from({ length: Math.ceil(data.length / size) }, (_, id) => (
        <div key={id}>
          <br />
          {fotos?.map((foto, id) => (
            <div key={id} className="flex justify-center mb-5">
              <Image src={foto.url} alt="foto" width={500} height={500} />
            </div>
          ))}
          <br />
          {data.slice(id * size, (id + 1) * size).map((item, id) => (
            <span
              className="font-sans text-lg antialiased md:subpixel-antialiased italic	tracking-wide leading-loose text-justify text-gray-500 dark:text-gray-400 normal-case align-text-top whitespace-pre-line	"
              key={id}
            >
              {item.descripcion_parroquia}
            </span>
          ))}
        </div>
      ))}
    </div>
  ) */
}
{
  /*{mana.map((info, id) => (
            <div key={id}>
              <div className="whitespace">
                {info.descripcion_parroquia ==="hola"}
              </div>
            </div>
          ))} */
}

{
  /*<div className="mb-10">
            <span className="text-gray-500 dark:text-gray-400">
              Según la investigadora Beatriz Mora, posiblemente el término LA
              MANÁ viene del kichwa MANA que significa NO (negación) esto se
              debe a que los indígenas tuvieron miedo de ir a estas tierras por
              lo malsano que era el clima.
            </span>
          </div>
          <div>
            <span className="text-gray-500 dark:text-gray-400">
              El origen de la palabra La Maná tiene varias teorías. Según una
              versión proviene de los vocablos “LANG MANA ATTI” que significa
              “Mina del Gran Rey” porque en La Maná existieron grandes
              cantidades de oro.
            </span>
          </div>
          <div id="img">
            <Image
              src={
                "https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gOzKvwKPd-_zTv8eUfqGkQ-KTjYy6GQ25siFSntNzkmO024WXFNjc6dmW1fqYBcQQHUzfIokoincHc8rJXJjlhN0g_-=w1920-h961"
              }
              alt="Foto Iglesia Pucayacu"
              height={541}
              width={541}
              priority="low"
            />
          </div>
          <div className="mb-10">
            <span className="text-gray-500 dark:text-gray-400 ">
              Según el vocablo Tsáchila MANA significa HERMOSO, GRANDE, BELLO al
              referirse a la fertilidad y a la generosidad de su suelo. En el
              diccionario filosófico maná significa poder de atracción que
              tienen las personas, punto de atracción o punto magnético, debido
              a la ubicación de La Maná en el centro del país. Según la Biblia
              Maná simboliza comida, alimento, abundancia de productos, tierra
              fértil regalada por Dios.
            </span>
          </div>

          <div className="mb-10">
            <span className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              tempora dolores quasi laudantium voluptatibus aliquid impedit qui
              earum? Possimus sunt corporis animi laudantium sint nesciunt
              tempore numquam, ut id distinctio! Pariatur, provident sunt
              molestiae minus corporis vel at, dolores amet neque beatae dolorem
              est placeat iste! At ipsum voluptatum necessitatibus! Optio harum
              aut odio consequatur, fuga corporis perferendis eveniet iusto.
              Ipsa officiis rerum iusto error. Itaque maxime esse dolorem illum
              aliquam nostrum, dolores aspernatur quis quae obcaecati quaerat
              eligendi corrupti aut eaque labore doloremque nisi. Natus magni
              tempore veritatis eligendi?
            </span>
          </div> */
}
