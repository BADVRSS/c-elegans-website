"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Gallery() {
  const images = [
    {
      src: "/images/c-elegans-fluorescence.jpg",
      alt: "C. elegans con fluorescencia",
      description:
        "Imagen generada por IA: C. elegans con proteínas fluorescentes expresadas en diferentes tejidos, mostrando estructuras internas en colores vibrantes.",
    },
    {
      src: "/images/c-elegans-eggs.jpg",
      alt: "Huevos de C. elegans",
      description:
        "Imagen generada por IA: Grupo de huevos de C. elegans en diferentes etapas de desarrollo, algunos mostrando las primeras divisiones celulares.",
    },
    {
      src: "/images/c-elegans-neurons.jpg",
      alt: "Neuronas de C. elegans",
      description:
        "Imagen generada por IA: Visualización de la red neuronal de C. elegans, mostrando las conexiones entre las 302 neuronas del hermafrodita.",
    },
    {
      src: "/images/c-elegans-petri.jpg",
      alt: "C. elegans en placa de Petri",
      description:
        "Imagen generada por IA: Colonia de C. elegans en una placa de Petri con medio de cultivo, mostrando rastros de su movimiento.",
    },
    {
      src: "/images/c-elegans-microscope.jpg",
      alt: "C. elegans bajo microscopio",
      description:
        "Imagen generada por IA: Vista detallada de C. elegans bajo un microscopio de alta potencia, mostrando su anatomía interna.",
    },
    {
      src: "/images/c-elegans-lifecycle.jpg",
      alt: "Ciclo de vida de C. elegans",
      description:
        "Imagen generada por IA: Representación del ciclo de vida completo de C. elegans, desde el huevo hasta el adulto, con todas las etapas larvarias.",
    },
    {
      src: "/images/c-elegans-anatomy.jpg",
      alt: "Anatomía de C. elegans",
      description:
        "Imagen generada por IA: Diagrama detallado de la anatomía de C. elegans, etiquetando sus principales estructuras y órganos.",
    },
    {
      src: "/images/c-elegans-development.jpg",
      alt: "Desarrollo de C. elegans",
      description:
        "Imagen generada por IA: Serie de imágenes mostrando el desarrollo embrionario de C. elegans, desde la primera división celular hasta la eclosión.",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Galería de Imágenes
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={img.alt}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                width={300}
                height={300}
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-center p-4 text-sm">{img.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

