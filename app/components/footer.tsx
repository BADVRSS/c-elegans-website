"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-6 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <p className="mb-4">&copy; {new Date().getFullYear()} Dr. C. elegans. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-primary">
              <Facebook />
            </a>
            <a href="#" className="hover:text-primary">
              <Twitter />
            </a>
            <a href="#" className="hover:text-primary">
              <Linkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

