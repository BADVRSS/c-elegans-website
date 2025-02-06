    "use client"

    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Textarea } from "@/components/ui/textarea"
    import { motion } from "framer-motion"

    export function Contact() {
    return (
        <section id="contact" className="py-20">
        <div className="container mx-auto">
            <motion.h2
            className="text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            >
            Contacto
            </motion.h2>
            <motion.form
            className="max-w-md mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            >
            <div className="space-y-4">
                <Input type="text" placeholder="Nombre" />
                <Input type="email" placeholder="Correo electrónico" />
                <Textarea placeholder="Mensaje" />
                <Button type="submit" className="w-full">
                Enviar mensaje
                </Button>
            </div>
            </motion.form>
        </div>
        </section>
    )
    }

