import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Navigation from "../components/Navigation";

const locations = {
  eglise: {
    name: "Église Saint-Pierre",
    address: "1 rue de l'Église, 75001 Paris",
    mapsUrl: "https://maps.google.com/?q=1+rue+de+l'Église+75001+Paris"
  },
  chateau: {
    name: "Château de l'Amour",
    address: "1 rue du Château, 75001 Paris",
    mapsUrl: "https://maps.google.com/?q=1+rue+du+Château+75001+Paris"
  }
};

const schedule = [
  { time: "14h30", event: "Cérémonie religieuse", location: "eglise" },
  { time: "16h00", event: "Arrivée au château", location: "chateau" },
  { time: "16h30", event: "Vin d'honneur", location: "chateau" },
  { time: "19h00", event: "Dîner", location: "chateau" },
  { time: "21h30", event: "Soirée dansante", location: "chateau" }
];

const timeline = [
  { date: "Juin 2020", title: "Notre rencontre", description: "Sur une plage de Tahiti..." },
  { date: "Août 2022", title: "Nos fiançailles", description: "Sous les étoiles..." },
  { date: "23 Août 2025", title: "Notre mariage", description: "Le grand jour !" }
];

const Index = () => {
  useEffect(() => {
    document.body.style.height = "100%";
    return () => {
      document.body.style.height = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section id="home" className="min-h-screen flex flex-col items-start justify-center relative px-8 md:px-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(home_page.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh"
          }}
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/90 text-lg mb-2 block">Bienvenue sur notre site de mariage</span>
            <h1 className="font-playfair text-5xl md:text-7xl mb-4 text-white">Juliette & Florian</h1>
            <p className="text-xl md:text-2xl mb-8 font-light text-white">23 Août 2025</p>
            <a
              href="https://forms.google.com/..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wedding-purple text-white px-8 py-3 rounded-full text-lg inline-block transition-transform hover:scale-105 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-wedding-purple focus:ring-opacity-50"
            >
              Répondre
            </a>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-wedding-beige">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-6"
          >
            <MapPin className="w-12 h-12 mx-auto mb-4 text-wedding-purple" />
            <h3 className="font-playfair text-2xl mb-4">Les Lieux</h3>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {Object.entries(locations).map(([key, loc]) => (
                <div key={key} className="text-center">
                  <h4 className="font-playfair text-xl mb-2">{loc.name}</h4>
                  <p className="mb-4">{loc.address}</p>
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-wedding-purple hover:text-wedding-green transition-colors"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center font-playfair mb-12">
            Nous sommes impatients de célébrer notre amour avec vous
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                alt="Célébration"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-wedding-purple font-medium">{item.time}</span>
                  <div>
                    <h4 className="font-playfair">{item.event}</h4>
                    <p className="text-sm text-gray-600">{locations[item.location].name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section with Enhanced Wave Effect */}
      <section id="story" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center font-playfair mb-16">Notre Histoire</h2>
          <div className="relative">
            {/* Stylized Timeline River with Enhanced Wave Effect */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full"
              style={{
                width: "6px",
                background: `linear-gradient(to bottom, 
                  #6E2D91 0%,
                  #8BA888 50%,
                  #6E2D91 100%)`,
                clipPath: `path('M3 0 
                  C 20 100, -15 200, 3 300
                  C -15 400, 20 500, 3 600
                  C 20 700, -15 800, 3 900
                  C -15 1000, 20 1100, 3 1200')`,
                filter: "blur(0.7px)",
              }}
            />
            
            {/* Points de connexion avec effet brillant */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-12"
              style={{
                background: "radial-gradient(circle at center, rgba(110,45,145,0.1) 0%, transparent 70%)",
                filter: "blur(2px)",
              }}
            />
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2 px-4">
                  <div className={`${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <span className="text-wedding-purple font-medium">{item.date}</span>
                    <h3 className="font-playfair text-xl my-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-wedding-purple rounded-full shadow-lg z-10" />
                <div className="w-1/2 px-4">
                  <div className={`h-48 rounded-lg overflow-hidden shadow-lg ${
                    index % 2 === 0 ? "ml-8" : "mr-8"
                  }`}>
                    <img
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="py-20 px-4 bg-wedding-lightGreen/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center font-playfair mb-16">Votre Séjour</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                alt="Gîte"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair text-2xl mb-4">Le Gîte</h3>
                <p className="text-gray-600">Description du gîte et informations pratiques...</p>
              </div>
              <div>
                <h3 className="font-playfair text-2xl mb-4">Autres Hébergements</h3>
                <p className="text-gray-600">Liste des hôtels et chambres d'hôtes à proximité...</p>
              </div>
              <div>
                <h3 className="font-playfair text-2xl mb-4">Activités</h3>
                <p className="text-gray-600">Découvrez les activités de la région...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section id="photos" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-8">Vos Photos</h2>
          <p className="mb-8">Partagez vos moments préférés de notre journée</p>
          <a
            href="https://photos-site.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-wedding-purple text-white px-8 py-3 rounded-full inline-block transition-transform hover:scale-105 hover:bg-opacity-90"
          >
            Accéder à la galerie
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 bg-wedding-beige">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-playfair mb-8">Contact</h2>
          <div className="space-y-2">
            <p>Juliette: 06 XX XX XX XX</p>
            <p>Florian: 06 XX XX XX XX</p>
            <p>Email: juliette.et.florian@email.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
