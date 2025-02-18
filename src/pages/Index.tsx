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
  { time: "14h30", event: "Cérémonie religieuse", location: "eglise", icon: "⛪" },
  { time: "16h00", event: "Arrivée au château", location: "chateau", icon: "🏰" },
  { time: "17h30", event: "Vin d'honneur", location: "chateau", icon: "🥂" },
  { time: "20h30", event: "Dîner", location: "chateau", icon: "🍽️" },
  { time: "00h00", event: "Soirée dansante", location: "chateau", icon: "🎉" },
  { time: "Lendemain", event: "Repas détente au château", location: "chateau", icon: "🌿" }
];

const timeline = [
  { date: "Septembre 2019", title: "Notre rencontre", description: "à l'école d'Angers" },
  { date: "8 septembre 2020", title: "Déclaration d'amour", description: "Le début de notre belle histoire" },
  { date: "Mai 2021", title: "Premier voyage ensemble", description: "Stage et découverte de Minorque" },
  { date: "Avril 2023", title: "Notre départ", description: "On s'installe à Tahiti" },
  { date: "16 janvier 2024", title: "Nos fiançailles", description: "Demande en Mariage sur l'île de Rangiroa sous les étoiles" },
  { date: "Juin 2024", title: "Notre plus beau cadeau", description: "Arrivée surprise du bébé Tia dans notre vie" },
  { date: "23 Août 2025", title: "Notre mariage", description: "Notre grand jour avec vous ❤️" }
];

const accommodations = [
  { name: "Couvent Saint Vincent", distance: "à 18km de Bassillac et 600m du Château", url: "https://couventstvincent.fr" },
  { name: "Camping Au Fil de l'Eau", distance: "à 5km de Bassillac et 22km du château", url: "https://campingaufil.fr" },
  { name: "La Forêt Enchantée", distance: "à 8km de Bassillac et 13km du château", url: "https://foretenchantee.fr" },
  { name: "Village Huttopia Lanmary", distance: "à 10km de Bassillac et 16km du château", url: "https://huttopia.fr" },
  { name: "Hôtel Ibis Budget", distance: "Périgueux", url: "https://ibis.fr" },
  { name: "Hôtel Bristol", distance: "Périgueux", url: "https://bristol-hotel.fr" }
];

const activities = {
  mustSee: [
    { name: "Grottes de Lascaux", url: "https://lascaux.fr" },
    { name: "Château de Castelnau", url: "https://chateau-castelnau.fr" },
    { name: "Promenade en canoë sur la Dordogne et la Vézère", url: "#" }
  ],
  others: [
    { name: "Château et jardins des Milandes", url: "https://milandes.fr" },
    { name: "Rocher des Aigles et Parc Durandal à Rocamadour", url: "#" },
    { name: "Gouffre de Proumeyssac", url: "#" },
    { name: "Randonnées en VTT", url: "#" },
    { name: "Le château escape-game de Marzac", url: "#" }
  ]
};

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
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh"
          }}
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 w-1/3 md:w-1/3 sm:w-2/3 sm:ml-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/90 text-lg mb-2 block">Bienvenue sur notre site de mariage</span>
            <div className="flex flex-col gap-2 mb-4">
              <h1 className="font-playfair text-5xl md:text-7xl text-left text-white">Juliette</h1>
              <h1 className="font-playfair text-5xl md:text-7xl text-right text-white">&amp; Florian</h1>
            </div>
            <div className="flex flex-col items-center mt-8">
              <p className="text-xl md:text-2xl mb-6 font-light text-white">23 Août 2025</p>
              <a
                href="https://forms.google.com/..."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-wedding-purple text-white px-8 py-3 rounded-full text-lg inline-block transition-transform hover:scale-105 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-wedding-purple focus:ring-opacity-50"
              >
                Répondre
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Theme and Dress Code Section */}
      <section id="theme" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair text-wedding-purple font-bold mb-8">
            ✨ Dress code – Magie en forêt ✨
          </h2>
          <div className="text-[#BE01AE] space-y-4 mb-8">
            <p>Plongez avec nous dans un univers enchanté, où la nature danse avec les étoiles. 🌿✨</p>
            <p>Osez les couleurs vibrantes et les étoffes féeriques : des teintes de violet profond, de vert mystique et des touches dorées scintillantes. Laissez-vous inspirer par les fleurs sauvages, les feuillages enchantés et la lumière des astres.</p>
            <p>Que vos tenues soient une ode à la magie de la nature : robes fluides, costumes élégants, accessoires étoilés ou floraux… Exprimez votre éclat, sans crainte d'apporter une touche d'émerveillement à cette célébration !</p>
          </div>
          <p className="text-wedding-purple font-bold">
            ✨ Élégance enchantée et féerie assumée, sans déguisement. ✨
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {/* Ajoutez ici vos images d'inspiration */}
          </div>
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

      {/* Schedule Section avec les nouveaux horaires et émojis */}
      <section id="schedule" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center font-playfair mb-12">
            Nous sommes impatients de célébrer notre amour avec vous
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-wedding-purple font-medium font-playfair">{item.icon} {item.time}</span>
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

      {/* Timeline Section */}
      <section id="story" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center font-playfair mb-16">Notre Histoire</h2>
          <div className="relative">
            {/* Stylized Timeline with ZigZag */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full"
              style={{
                width: "1px",
                background: `linear-gradient(to bottom, 
                  #6E2D91 0%,
                  #8BA888 50%,
                  #6E2D91 100%)`,
                clipPath: `path('M2 0 
                  C 15 100, -10 200, 15 300 
                  C -10 400, 15 500, -10 600 
                  C 15 700, -10 800, 15 900')`,
                filter: "blur(0.5px)",
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

      {/* Accommodation Section avec les nouvelles informations */}
      <section id="accommodation" className="py-20 px-4">
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
                <h3 className="font-playfair text-2xl mb-4">Les Gîtes</h3>
                <p className="text-gray-600">
                  Trois gîtes juste à côté du château dans un esprit mini village, meublé ancien charmant.
                  <br /><br />
                  Chambre doubles pour des couples ou chambre de 3 ou 4 pour des familles (lit double + lit simple). Une chambre de 5 dispo aussi.
                  <br /><br />
                  La plupart des chambres ont leur propre salle de bain (certaines sont partagées). Cuisines partagées.
                  <br /><br />
                  La nuit coûte 40€ par personnes (lit bébé non compté)
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-2xl mb-4">Hébergements en Dordogne</h3>
                <p className="text-sm text-gray-500 mb-4">à réserver et contacter par vos soins si vous les préférez au gîte</p>
                <div className="grid grid-cols-2 gap-6">
                  {accommodations.map((acc, index) => (
                    <a
                      key={index}
                      href={acc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-playfair text-lg mb-2 text-wedding-purple">{acc.name}</h4>
                      <p className="text-sm text-gray-600">{acc.distance}</p>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-playfair text-2xl mb-4">Activités</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-playfair text-xl mb-4 text-wedding-purple">Les Incontournables</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {activities.mustSee.map((activity, index) => (
                        <a
                          key={index}
                          href={activity.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <span className="font-medium text-wedding-purple">{activity.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg mb-4">Autres Activités</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {activities.others.map((activity, index) => (
                        <a
                          key={index}
                          href={activity.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <span className="text-gray-700">{activity.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
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
