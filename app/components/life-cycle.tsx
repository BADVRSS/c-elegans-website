"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LifeCycle() {
  const stages = [
    {
      name: "Huevo",
      description:
        "El desarrollo embrionario dura aproximadamente 14 horas a 22°C. Durante esta etapa, se forman los tejidos y órganos básicos del nematodo. La embriogénesis incluye la gastrulación, organogénesis y morfogénesis.",
      duration: "0-14 horas",
    },
    {
      name: "L1",
      description:
        "Primera etapa larval que dura alrededor de 16 horas. El nematodo eclosiona y comienza a moverse y alimentarse de bacterias. En esta etapa, se desarrollan las neuronas postembriónicas.",
      duration: "14-30 horas",
    },
    {
      name: "L2",
      description:
        "Segunda etapa larval que dura unas 12 horas. El nematodo continúa creciendo y desarrollando sus sistemas internos. Se forman las células precursoras de la vulva.",
      duration: "30-42 horas",
    },
    {
      name: "L3",
      description:
        "Tercera etapa larval que dura aproximadamente 8 horas. Los órganos reproductivos comienzan a desarrollarse más notablemente. La gónada se alarga y las células germinales proliferan.",
      duration: "42-50 horas",
    },
    {
      name: "L4",
      description:
        "Cuarta etapa larval que dura unas 10 horas. Los órganos reproductivos maduran y se forma la vulva en los hermafroditas. La espermatogénesis ocurre en esta etapa en hermafroditas.",
      duration: "50-60 horas",
    },
    {
      name: "Adulto joven",
      description:
        "El nematodo alcanza la madurez sexual. Los hermafroditas comienzan a producir ovocitos y pueden autofecundarse. Esta etapa dura aproximadamente 8 horas antes de que comience la puesta de huevos.",
      duration: "60-68 horas",
    },
    {
      name: "Adulto",
      description:
        "Etapa reproductiva que dura aproximadamente 4-5 días. Los hermafroditas pueden producir hasta 300 huevos por autofecundación. La producción de huevos disminuye con la edad.",
      duration: "68 horas en adelante",
    },
  ]

  return (
    <section id="lifecycle" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ciclo de Vida de C. elegans
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/images/c-elegans-lifecycle.jpg"
              alt="Ciclo de vida de C. elegans"
              width={600}
              height={600}
              className="rounded-lg shadow-lg mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg opacity-50"></div>
            <p className="absolute bottom-4 left-4 right-4 text-center text-white text-sm">
              Imagen generada por IA: Representación del ciclo de vida completo de C. elegans, desde el huevo hasta el
              adulto, mostrando los cambios morfológicos en cada etapa.
            </p>
          </motion.div>
          <div className="space-y-4">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.name}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{stage.name}</span>
                      <span className="text-sm text-gray-500">{stage.duration}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{stage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.p
          className="mt-8 text-center text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          El ciclo de vida completo de C. elegans, desde huevo hasta adulto reproductor, dura aproximadamente 3 días a
          22°C en condiciones óptimas. La duración del ciclo puede variar según la temperatura y las condiciones
          ambientales.
        </motion.p>
      </div>
    </section>
  )
}

