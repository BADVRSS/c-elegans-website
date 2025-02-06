"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FunFacts() {
  const facts = [
    {
      title: "Premio Nobel",
      content: "Las investigaciones con C. elegans han sido galardonadas con tres Premios Nobel (2002, 2006 y 2008).",
    },
    {
      title: "Viaje espacial",
      content: "C. elegans fue el primer organismo multicelular en completar un ciclo de vida en el espacio.",
    },
    {
      title: "Supervivencia extrema",
      content:
        "Puede sobrevivir al congelamiento y descongelamiento, e incluso a la desecación en ciertas etapas larvarias.",
    },
  ]

  return (
    <section id="fun-facts" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Datos Curiosos sobre C. elegans
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{fact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{fact.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

