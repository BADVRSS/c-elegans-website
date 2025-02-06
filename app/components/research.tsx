"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

export function Research() {
  const researchAreas = [
    {
      title: "Genética del Desarrollo",
      description:
        "Estudiamos cómo los genes controlan el desarrollo de C. elegans desde el embrión hasta el adulto. Investigamos los mecanismos moleculares detrás de la diferenciación celular, la formación de órganos y la especificación del destino celular.",
      image: "/images/c-elegans-development.jpg",
    },
    {
      title: "Neurobiología",
      description:
        "Utilizamos C. elegans para entender los principios básicos de la función neuronal y el comportamiento. Investigamos la formación de sinapsis, la neurotransmisión y cómo los circuitos neuronales controlan comportamientos complejos.",
      image: "/images/c-elegans-neurons.jpg",
    },
    {
      title: "Envejecimiento",
      description:
        "C. elegans es un modelo excelente para estudiar el envejecimiento debido a su corta vida útil. Investigamos los genes y las vías moleculares que influyen en la longevidad, incluyendo la vía de la insulina/IGF-1 y las vías de respuesta al estrés.",
      image: "/images/c-elegans-aging.jpg",
    },
    {
      title: "Respuesta al Estrés",
      description:
        "Analizamos cómo C. elegans responde a diferentes tipos de estrés ambiental, como el estrés oxidativo, el choque térmico y la exposición a patógenos. Esto nos ayuda a entender los mecanismos de defensa celular y la adaptación al estrés.",
      image: "/images/c-elegans-stress.jpg",
    },
    {
      title: "Metabolismo",
      description:
        "Estudiamos las vías metabólicas en C. elegans para comprender mejor la regulación del metabolismo energético, la homeostasis de lípidos y la señalización metabólica. Esto tiene implicaciones para enfermedades humanas como la diabetes y la obesidad.",
      image: "/images/c-elegans-metabolism.jpg",
    },
    {
      title: "Epigenética",
      description:
        "Investigamos los mecanismos epigenéticos en C. elegans, incluyendo la metilación del ADN, las modificaciones de histonas y los ARN no codificantes. Esto nos ayuda a entender cómo se regula la expresión génica más allá de la secuencia de ADN.",
      image: "/images/c-elegans-epigenetics.jpg",
    },
  ]

  return (
    <section id="research" className="py-20 bg-muted">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nuestra Investigación
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <Image
                  src={area.image || "/placeholder.svg"}
                  alt={area.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

