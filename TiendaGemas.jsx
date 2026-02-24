import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const gemsData = [
  {
    id: 1,
    name: "Rubí Real",
    price: 120,
    image: "https://images.unsplash.com/photo-1616627981839-2e6f9f9c6b69"
  },
  {
    id: 2,
    name: "Zafiro Azul",
    price: 95,
    image: "https://images.unsplash.com/photo-1605106702734-205df224ecce"
  },
  {
    id: 3,
    name: "Esmeralda Premium",
    price: 150,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
  }
];

export default function TiendaGemas() {
  const [search, setSearch] = useState("");

  const filteredGems = gemsData.filter((gem) =>
    gem.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-8"
      >
        💎 Tienda de Gemas Exclusivas
      </motion.h1>

      <div className="max-w-md mx-auto mb-10">
        <Input
          placeholder="Buscar gema..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-black"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGems.map((gem) => (
          <motion.div
            key={gem.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-none rounded-2xl shadow-xl overflow-hidden">
              <img
                src={gem.image}
                alt={gem.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{gem.name}</h2>
                <p className="text-lg mb-4">${gem.price} USD</p>
                <Button className="w-full rounded-2xl" onClick={() => alert('Comprar: ' + gem.name)}>
                  Comprar
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <footer className="text-center mt-16 text-sm opacity-70">
        © {new Date().getFullYear()} Tienda de Gemas. Todos los derechos reservados.
      </footer>
    </div>
  );
}
