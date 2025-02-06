"use client"

import { motion } from "framer-motion"

export function Publications() {
  const publications = [
    {
      title: "Genetic regulation of C. elegans lifespan",
      authors: "Smith J., Johnson M., et al.",
      journal: "Nature Genetics",
      year: 2023,
    },
    {
      title: "Neuronal circuits controlling locomotion in C. elegans",
      authors: "Brown A., Davis R., et al.",
      journal: "Cell",
      year: 2022,
    },
  ]

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Publicaciones Recientes
        </motion.h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
              <p className="text-gray-600">{pub.authors}</p>
              <p className="text-gray-500">
                {pub.journal}, {pub.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

