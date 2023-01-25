import Image from "next/image"
import { Carousel } from "flowbite-react"
import Link from "next/link"
import Layout from "../components/Layout"
import { canton, data } from "./../services/canton"

export default function Home() {
  return (
    <Layout>
      <div className="bg-slate-50">
        <div className="h-36 md:h-38 sm:h-30 xl:h-80 pl-10 md:pl-1 sm:pl-1 pr-10 ">
          <div className="bg-slate-100 flex justify-between py-2 hover:py-2 px-auto text-sm lg:px-36 lx:px-48">
            <Link href="#historia">
              <div className="font-medium hover:text-yellow-700 hover:border  rounded-md  ">
                Historia
              </div>
            </Link>
            <Link href="#limite">
              <div className="font-medium hover:text-yellow-700 hover:border  rounded-md ">
                Limites
              </div>
            </Link>
            <Link href="#division">
              <div className="font-medium hover:text-yellow-700 hover:border  rounded-md ">
                División política
              </div>
            </Link>
            <Link href="#produccion">
              <div className="font-medium hover:text-yellow-700 hover:border  rounded-md ">
                Producción
              </div>
            </Link>
          </div>

          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-2 py-3 ">
            <Carousel slideInterval={2000}>
              {data.map((info) => (
                <Link
                  className=" snap-x grid place-items-center"
                  key={info.id}
                  href={info.direccion}
                >
                  <Image
                    className="flex justify-center mt-5 brightness-125 contrast-100"
                    src={info.url}
                    height={1920}
                    width={1080}
                    alt={info.direccion}
                  />
                  <span className="opacity-75 absolute text-center font-bold tracking-tight leading-none text-white text-5xl hover:text-yellow-300 ">
                    {info.nombre}
                  </span>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>

        <div
          id="historia"
          className="py-10 mt-24 sm:mt-24 lg:mt-24 xl:mt-24 md:mt-24 font-sans font-extrabold text-lg antialiased md:subpixel-antialiased italic	tracking-wide leading-loose text-center text-gray-900 dark:text-gray-400 "
        >
          Historia del Cantón La Mana
        </div>
        {canton?.map((info) => (
          <div key={info.id} className="flex justify-center ">
            <div className="prose-xl">
              <div className=" px-3 md:px-5 sm:px-3 lg:prose-xl my-3 leading-relaxed	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400 text-justify">
                {info.historia}
              </div>
              <br />
            </div>
          </div>
        ))}

        <ul className="list-disc list-inside px-20 py-5 font-sans text-lg antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400">
          <div
            id="limite"
            className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400"
          >
            Límites del cantón La Mana
          </div>
          <div className="px-1">
            <li>Norte: Con la parroquia Alluriquín, cantón Santo Domingo.</li>
            <li>
              Sur: El río Calope es el accidente geográfico que la separa de la
              parroquia Moraspungo, cantón Pangua.
            </li>
            <li>Este: Parroquia El Tingo del cantón Pujilí y Sigchos.</li>
            <li>
              Oeste: con el cantón Valencia y Quinsaloma de la provincia de Los
              Ríos.
            </li>
          </div>
        </ul>

        <ul className="list-disc list-inside px-16 py-5 font-sans text-lg antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400">
          <div
            id="division"
            className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400"
          >
            División política
          </div>
          <div className="px-2">
            <li>
              3 urbanas (
              <Link href="/mana" target="_blank" legacyBehavior>
                <a className="text-sky-400 after:content-['_↗'] ...">
                  La Maná{" "}
                </a>
              </Link>
              ,
              <Link href="/carmen" target="_blank" legacyBehavior>
                <a className="text-sky-400 after:content-['_↗'] ...">
                  {" "}
                  El Carmen{" "}
                </a>
              </Link>
              y
              <Link href="/triunfo" target="_blank" legacyBehavior>
                <a className="text-sky-400 after:content-['_↗'] ...">
                  {" "}
                  El Triunfo{" "}
                </a>
              </Link>
              ) y
            </li>
            <li>
              2 rurales (
              <Link href="/guasaganda" target="_blank" legacyBehavior>
                <a className="text-sky-400 after:content-['_↗'] ...">
                  {" "}
                  Guasaganda{" "}
                </a>
              </Link>
              y
              <Link href="/pucayacu" target="_blank" legacyBehavior>
                <a className="text-sky-400 after:content-['_↗'] ...">
                  {" "}
                  Pucayacu{" "}
                </a>
              </Link>
              )
            </li>
          </div>
        </ul>

        <ul className="list-disc list-inside px-10 py-5 font-sans text-lg antialiased hover:subpixel-antialiased text-gray-500  dark:text-gray-400">
          <div
            id="produccion"
            className="text-center my-3 leading-relaxed font-bold text-xl	normal-case align-middle whitespace-pre-wrap tracking-tight  italic antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-400"
          >
            Producción
          </div>
          <div className="px-2 text-justify">
            <li>Agricultura y ganadería</li>
            <div className="px-2 py-2">
              La Maná es un lugar caracterizado por su actividad agrícola y
              pecuaria, lo que le da sustento a su creciente población y atrae a
              inmigrantes. Esto ha llevado al desarrollo de un fuerte sector
              terciario, especialmente en la trama social urbana con el
              crecimiento del comercio. En las zonas rurales, la ganadería es la
              actividad principal y se produce excelente leche y carne,
              abasteciendo principalmente al cantón y a provincias cercanas como
              Guayas y Los Ríos.
            </div>
            <li>Minería</li>
            <div className="px-2 py-2">
              La minería, especialmente del oro, fue importante en la
              microrregión y le dio nombre y prestigio, pero actualmente es de
              menor importancia y solo unas pocas personas se dedican a ella de
              manera artesanal en condiciones precarias. La extracción de mármol
              también fue importante en las áreas altas andinas del cantón, pero
              ha disminuido debido a la falta de tecnología adecuada para
              competir en el mercado.
            </div>
            <div className="px-2 py-2">
              En la parroquia Guasaganda hay minas de mármol no explotadas, y en
              el sector de Estero Hondo hay minas de oro que son explotadas de
              manera artesanal con graves efectos sobre el medio ambiente. La
              ciudad de La Maná es un centro comercial que proporciona bienes y
              servicios a través de almacenes, tiendas y negocios privados.
            </div>
          </div>
        </ul>
      </div>
    </Layout>
  )
}
