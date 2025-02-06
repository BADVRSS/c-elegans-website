"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

const substances = [
  { name: "Control", effect: "Movimiento normal del nematodo" },
  { name: "Etanol", effect: "Reduce la actividad y la velocidad de movimiento" },
  { name: "Cafeína", effect: "Aumenta la actividad y la frecuencia de contracción del cuerpo" },
  { name: "Serotonina", effect: "Disminuye la locomoción y aumenta la puesta de huevos" },
  { name: "Dopamina", effect: "Modula el comportamiento de búsqueda de alimentos" },
  { name: "Acetilcolina", effect: "Aumenta las contracciones musculares" },
  { name: "GABA", effect: "Relaja los músculos y reduce el movimiento" },
  { name: "Levamisol", effect: "Causa parálisis espástica" },
  { name: "Ivermectina", effect: "Paraliza al nematodo" },
  { name: "Aldicarb", effect: "Causa hipercontracción y parálisis" },
  { name: "Nicotina", effect: "Estimula inicialmente, luego paraliza" },
  { name: "Glutamato", effect: "Modula el comportamiento de alimentación" },
  { name: "Octopamina", effect: "Aumenta la actividad locomotora" },
  { name: "Tiramina", effect: "Suprime la puesta de huevos y la locomoción" },
  { name: "Histamina", effect: "Modula la respuesta inmune innata" },
  { name: "Melatonina", effect: "Afecta los ritmos circadianos y la longevidad" },
  { name: "Insulina", effect: "Regula el metabolismo y la longevidad" },
  { name: "Oxitocina/Vasopresina", effect: "Modula el comportamiento social" },
  { name: "Ácido retinoico", effect: "Afecta el desarrollo y la diferenciación celular" },
  { name: "Colesterol", effect: "Esencial para el crecimiento y la reproducción" },
  { name: "Pregnenolona", effect: "Afecta la memoria y el aprendizaje" },
  { name: "Progesterona", effect: "Modula el comportamiento sexual" },
  { name: "Testosterona", effect: "Afecta el dimorfismo sexual" },
  { name: "Estradiol", effect: "Influye en la reproducción y el desarrollo" },
  { name: "Cortisol", effect: "Modula la respuesta al estrés" },
  { name: "Tiroxina", effect: "Regula el metabolismo y el desarrollo" },
  { name: "Ácido fólico", effect: "Esencial para la síntesis de ADN y división celular" },
  { name: "Vitamina B12", effect: "Importante para el desarrollo y la función nerviosa" },
  { name: "Vitamina C", effect: "Antioxidante, afecta la longevidad" },
  { name: "Vitamina D", effect: "Modula la inmunidad innata" },
  { name: "Vitamina E", effect: "Antioxidante, protege contra el estrés oxidativo" },
  { name: "Zinc", effect: "Esencial para el crecimiento y desarrollo" },
  { name: "Cobre", effect: "Importante para el metabolismo y la formación de la cutícula" },
  { name: "Selenio", effect: "Antioxidante, afecta la longevidad" },
  { name: "Magnesio", effect: "Regula la excitabilidad neuronal" },
  { name: "Calcio", effect: "Esencial para la señalización celular y la contracción muscular" },
  { name: "Potasio", effect: "Regula la excitabilidad neuronal y muscular" },
  { name: "Sodio", effect: "Importante para la transmisión nerviosa" },
  { name: "Litio", effect: "Afecta el comportamiento y la longevidad" },
  { name: "Manganeso", effect: "Importante para el metabolismo y la función inmune" },
  { name: "Hierro", effect: "Esencial para el transporte de oxígeno y el metabolismo" },
  { name: "Yodo", effect: "Afecta el desarrollo y la función tiroidea" },
  { name: "Fluoruro", effect: "Afecta la formación de la cutícula" },
  { name: "Ácido valproico", effect: "Afecta el desarrollo neuronal y la longevidad" },
  { name: "Metformina", effect: "Afecta el metabolismo y la longevidad" },
  { name: "Rapamicina", effect: "Aumenta la longevidad" },
  { name: "Resveratrol", effect: "Antioxidante, afecta la longevidad" },
  { name: "Curcumina", effect: "Antiinflamatorio, afecta la longevidad" },
  { name: "Quercetina", effect: "Antioxidante, modula la respuesta al estrés" },
  { name: "Ácido alfa-lipoico", effect: "Antioxidante, afecta el metabolismo energético" },
]

export function InteractiveNematode() {
  const [selectedSubstance, setSelectedSubstance] = useState("Control")
  const [concentration, setConcentration] = useState(50)

  const handleSubstanceChange = (value: string) => {
    setSelectedSubstance(value)
  }

  const getAnimationProps = () => {
    let duration = 2
    let amplitude = 30

    switch (selectedSubstance) {
      case "Etanol":
        duration = 4
        amplitude = 20
        break
      case "Cafeína":
        duration = 1
        amplitude = 40
        break
      case "Serotonina":
        duration = 3
        amplitude = 10
        break
      case "Levamisol":
      case "Ivermectina":
      case "Aldicarb":
        duration = 10
        amplitude = 5
        break
      default:
        break
    }

    // Adjust based on concentration
    duration = duration * (100 / concentration)
    amplitude = amplitude * (concentration / 100)

    return {
      animate: {
        d: [
          `M 10 100 Q 90 ${100 - amplitude} 200 100 Q 310 ${100 + amplitude} 390 100`,
          `M 10 100 Q 90 ${100 + amplitude} 200 100 Q 310 ${100 - amplitude} 390 100`,
        ],
      },
      transition: {
        duration: duration,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    }
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Nematodo Interactivo</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>C. elegans en movimiento</CardTitle>
              <CardDescription>Observa cómo se mueve el nematodo bajo diferentes sustancias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <svg width="400" height="200" viewBox="0 0 400 200">
                  <motion.path
                    d="M 10 100 Q 90 70 200 100 Q 310 130 390 100"
                    fill="transparent"
                    stroke="#1d4ed8"
                    strokeWidth="8"
                    strokeLinecap="round"
                    {...getAnimationProps()}
                  />
                  <motion.circle cx="10" cy="100" r="5" fill="#1d4ed8" {...getAnimationProps()} />
                </svg>
              </div>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Control de sustancias</CardTitle>
              <CardDescription>Selecciona una sustancia y su concentración</CardDescription>
            </CardHeader>
            <CardContent>
              <Select onValueChange={handleSubstanceChange} value={selectedSubstance}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una sustancia" />
                </SelectTrigger>
                <SelectContent>
                  {substances.map((substance) => (
                    <SelectItem key={substance.name} value={substance.name}>
                      {substance.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Concentración</label>
                <Slider
                  value={[concentration]}
                  onValueChange={(value) => setConcentration(value[0])}
                  max={100}
                  step={1}
                />
                <span className="text-sm text-gray-500">{concentration}%</span>
              </div>
              {selectedSubstance && (
                <p className="mt-4">Efecto: {substances.find((s) => s.name === selectedSubstance)?.effect}</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

