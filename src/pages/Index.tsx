
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Users } from "lucide-react";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-wedding-beige">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative p-4 bg-gradient-to-b from-wedding-rose/20 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-playfair text-5xl md:text-7xl mb-4">Marie & Thomas</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">23 Août 2025</p>
          <button
            onClick={() => setFormOpen(true)}
            className="bg-wedding-gold text-white px-8 py-3 rounded-full text-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-wedding-gold focus:ring-opacity-50"
          >
            Répondre
          </button>
        </motion.div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-6"
          >
            <Calendar className="w-12 h-12 mx-auto mb-4 text-wedding-gold" />
            <h3 className="font-playfair text-xl mb-2">La Date</h3>
            <p>23 Août 2025</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-6"
          >
            <MapPin className="w-12 h-12 mx-auto mb-4 text-wedding-gold" />
            <h3 className="font-playfair text-xl mb-2">Le Lieu</h3>
            <p>Château de l'Amour</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center p-6"
          >
            <Users className="w-12 h-12 mx-auto mb-4 text-wedding-gold" />
            <h3 className="font-playfair text-xl mb-2">Les Invités</h3>
            <p>Nous attendons votre réponse</p>
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-playfair text-4xl md:text-5xl text-center mb-16"
          >
            Notre Histoire
          </motion.h2>
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-full md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                  alt="Notre rencontre"
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-playfair text-2xl mb-4">Notre Rencontre</h3>
                <p className="text-gray-600 leading-relaxed">
                  C'était un jour comme les autres, jusqu'à ce que nos chemins se croisent...
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row-reverse items-center gap-8"
            >
              <div className="w-full md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                  alt="La demande"
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-playfair text-2xl mb-4">La Demande</h3>
                <p className="text-gray-600 leading-relaxed">
                  Un moment magique que nous n'oublierons jamais...
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RSVP Form Modal */}
      {formOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-md w-full relative"
          >
            <button
              onClick={() => setFormOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <h3 className="font-playfair text-2xl mb-6 text-center">Votre Réponse</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-wedding-gold focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de personnes
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-wedding-gold focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Besoin d'hébergement ?
                </label>
                <select className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-wedding-gold focus:border-transparent">
                  <option value="">Sélectionnez une option</option>
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-wedding-gold text-white py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Index;
