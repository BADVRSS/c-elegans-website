"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Anatomy() {
  const anatomyFeatures = [
    { title: "Cutícula", description: "Capa externa protectora que se muda durante el crecimiento" },
    { title: "Faringe", description: "Órgano muscular para la alimentación y trituración de bacterias" },
    { title: "Intestino", description: "Tubo simple que recorre todo el cuerpo para la digestión y absorción" },
    { title: "Gónadas", description: "En forma de U en hermafroditas, producen tanto óvulos como esperma" },
    { title: "Sistema nervioso", description: "302 neuronas en hermafroditas, con conexiones bien mapeadas" },
    { title: "Pseudoceloma", description: "Cavidad corporal llena de líquido que actúa como esqueleto hidrostático" },
    { title: "Músculos", description: "Cuatro bandas longitudinales para el movimiento ondulatorio" },
    { title: "Vulva", description: "Abertura en hermafroditas para la puesta de huevos y la cópula" },
  ]

  return (
    <section id="anatomy" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Anatomía de C. elegans
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/images/c-elegans-anatomy.jpg"
              alt="Anatomía de C. elegans"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg opacity-50"></div>
            <p className="absolute bottom-4 left-4 right-4 text-white text-sm">
              Imagen generada por IA: Diagrama detallado de la anatomía de C. elegans, mostrando sus principales
              estructuras internas y externas.
            </p>
          </motion.div>
          <div className="space-y-4">
            {anatomyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

