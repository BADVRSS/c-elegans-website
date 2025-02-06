    "use client"

    import Link from "next/link"
    import { Button } from "@/components/ui/button"
    import { motion } from "framer-motion"

    export function Header() {
    return (
        <motion.header
        className="py-4 px-6 bg-white shadow-sm sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        >
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
            Dr. C. Elegans
            </Link>
            <nav>
            <ul className="flex space-x-4">
                <li>
                <Link href="#about" className="text-gray-600 hover:text-primary transition-colors">
                    Sobre C. elegans
                </Link>
                </li>
                <li>
                <Link href="#anatomy" className="text-gray-600 hover:text-primary transition-colors">
                    Anatomía
                </Link>
                </li>
                <li>
                <Link href="#lifecycle" className="text-gray-600 hover:text-primary transition-colors">
                    Ciclo de Vida
                </Link>
                </li>
                <li>
                <Link href="#research" className="text-gray-600 hover:text-primary transition-colors">
                    Investigación
                </Link>
                </li>
                <li>
                <Link href="#gallery" className="text-gray-600 hover:text-primary transition-colors">
                    Galería
                </Link>
                </li>
                <li>
                <Button variant="outline">Contacto</Button>
                </li>
            </ul>
            </nav>
        </div>
        </motion.header>
    )
    }

