"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sobre C. elegans
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/images/c-elegans-microscope.jpg"
              alt="C. elegans bajo microscopio"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg opacity-50"></div>
            <p className="absolute bottom-4 left-4 right-4 text-white text-sm">
              Imagen generada por IA: C. elegans visto a través de un microscopio, mostrando su cuerpo transparente y
              sus órganos internos.
            </p>
          </motion.div>
          <Card>
            <CardHeader>
              <CardTitle>¿Qué es C. elegans?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Caenorhabditis elegans es un nematodo de vida libre que se ha convertido en un organismo modelo
                fundamental en biología. Descubierto por Émile Maupas en 1900, este pequeño gusano ha revolucionado
                nuestra comprensión de la genética, el desarrollo y la neurobiología.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Longitud: Aproximadamente 1 mm en edad adulta</li>
                <li>Hábitat: Suelos ricos en microorganismos en regiones templadas</li>
                <li>Dieta: Principalmente bacterias, como Escherichia coli en laboratorio</li>
                <li>Tiempo de generación: 3-4 días a 20°C</li>
                <li>Genoma: Completamente secuenciado en 1998, primer organismo multicelular en lograrlo</li>
                <li>Neuronas: 302 en hermafroditas, 383 en machos</li>
                <li>Transparencia: Permite la observación de procesos celulares in vivo</li>
                <li>Reproducción: Principalmente hermafrodita, con machos ocasionales</li>
              </ul>
              <p className="mt-4">
                Fuentes:
                <a
                  href="https://www.ncbi.nlm.nih.gov/books/NBK19649/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WormBook: The C. elegans Research Community
                </a>
                ,
                <a
                  href="https://www.nature.com/articles/nature10440"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nature: The genome sequence of C. elegans
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

