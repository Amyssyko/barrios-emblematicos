import { Carousel } from "flowbite-react"
import Image from "next/image"

export function Fotos({ fotos }, titulo) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-2 py-3 ">
      <div className="text-center leading-relaxed	normal-case align-middle text-xl whitespace-pre-wrap tracking-tight antialiased hover:subpixel-antialiased text-gray-900  dark:text-gray-900 font-bold">
        Fotografias de {titulo}
      </div>
      <Carousel slideInterval={5000}>
        {fotos.map((foto) => (
          <div key={foto.id} className="flex justify-center mt-5 ">
            <Image
              className="brightness-125 contrast-125 "
              alt="Imagen de la parroquia"
              height={1920}
              width={1080}
              src={foto.url}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
