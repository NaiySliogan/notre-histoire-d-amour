import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Navigation from "../components/Navigation";
import { useIsMobile } from "@/hooks/use-mobile";

const locations = {
  eglise: {
    name: "Église Saint-Etienne",
    address: "Place de l'Église, 24330 Bassillac et Auberoche",
    mapsUrl: "https://maps.app.goo.gl/F5nubDWzE6qTck8y6"
  },
  chateau: {
    name: "Château de Château-l'Evêque",
    address: "14 Rue du Château, 24460 Château-l'Évêque",
    mapsUrl: "https://maps.app.goo.gl/UocvxkEcteWjVj9n6"
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
  { date: "Septembre 2019", title: "Notre rencontre", description: "à l'école d'Angers", picture: "camping_angers.jpg" },
  { date: "8 septembre 2020", title: "Déclaration d'amour", description: "Le début de notre belle histoire", picture: "prairies.jpeg" },
  { date: "Mai 2021", title: "Premier voyage ensemble", description: "Stage de plongée à Minorque", picture: "minorque_plongée.jpg" },
  { date: "Avril 2023", title: "Notre départ", description: "On s'installe à Tahiti", picture: "moorea_chapeau.jpeg" },
  { date: "16 janvier 2024", title: "Nos fiançailles", description: "Demande en Mariage sur l'île de Rangiroa sous les étoiles", picture: "mains.jpg" },
  { date: "Juin 2024", title: "Notre plus beau cadeau", description: "Arrivée surprise du chaton Tia dans notre vie", picture: "tia.jpg" },
  { date: "23 Août 2025", title: "Notre mariage", description: "Notre grand jour avec vous ❤️", picture: "minorque_plage.jpg" }
];

const accommodations = [
  { name: "Camping Au Fil de l'Eau", distance: "à 5km de Bassillac et 22km du château", url: "https://maps.app.goo.gl/bKzwZHpw7rTd4CxD9" },
  { name: "La Forêt Enchantée", distance: "à 8km de Bassillac et 13km du château", url: "https://maps.app.goo.gl/fbX32no7omWEffR76" },
  { name: "Village Huttopia Lanmary", distance: "à 10km de Bassillac et 16km du château", url: "https://maps.app.goo.gl/b76umQXVuRboJS87A" },
  { name: "Hôtel Ibis Budget", distance: "Périgueux Centre", url: "https://maps.app.goo.gl/swiyRMpEzKiHbD3J7" },
  { name: "Hôtel Ibis Budget", distance: "Périgueux Boulazac", url: "https://maps.app.goo.gl/MkqRmDq6ugc8HLzS7" },
  { name: "Hôtel Bristol", distance: "Périgueux", url: "https://maps.app.goo.gl/8xGv9sqFX2P2rwXq9" }
];

const activities = {
  mustSee: [
    { name: "Grottes de Lascaux", url: "https://maps.app.goo.gl/js6k2KrHZL24FAci6" },
    { name: "Château de Castelnaud", url: "https://maps.app.goo.gl/tmkd2rJA4JKmgwqh7" },
    { name: "Rocher des Aigles et Parc Durandal à Rocamadour", url: "https://maps.app.goo.gl/VFzkJy68qCGwCBGH6" },
    { name: "Gouffre de Proumeyssac", url: "https://maps.app.goo.gl/TCPnLcYSbLfGL5NN9" },
    { name: "Le château escape-game de Marzac", url: "https://maps.app.goo.gl/qzbUhmbXhk8uhVA47" }
  ],
  others: [
    { name: "Randonnées en VTT ou à pieds" },
    { name: "Promenade en canoë sur la Dordogne et la Vézère" }
  ]
};

const Index = () => {
  const isMobile = useIsMobile()

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
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh"
          }}
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className={`relative z-20 ${isMobile ? '' : 'w-1/3'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/90 text-lg mb-2 block">Bienvenue sur notre site de mariage</span>
            <div className="flex flex-col gap-2 mb-4">
              <h1 className="font-playfair text-5xl md:text-7xl text-left text-white">Juliette &amp;</h1>
              <h1 className="font-playfair text-5xl md:text-7xl text-right text-white">Florian</h1>
            </div>
            <div className="flex flex-col items-center mt-8">
              <p className="text-xl md:text-2xl mb-6 font-light text-white">23 Août 2025</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfa3n8mV89eRFEX9XKDAhPDwDNdIvZK1ziLzSG7W1bCqRefOA/viewform?usp=dialog"
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

      {/* Schedule Section avec les émojis violets */}
      <section id="schedule" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center font-playfair mb-12">
            Nous sommes impatients de célébrer notre amour avec vous
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="chateau_2.jpg"
                alt="Célébration"
                className="w-full h-auto object-contain"
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
                  <span className="text-wedding-purple font-medium font-playfair">
                    <span style={{ color: '#6E2D91' }}>{item.icon}</span> {item.time}
                  </span>
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

      {/* Theme Section avec les émojis violets */}
      <section id="theme" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair text-wedding-purple font-bold mb-8">
            <span style={{ color: '#6E2D91' }}>✨</span> Dress code – Magie en forêt <span style={{ color: '#6E2D91' }}>✨</span>
          </h2>
          <div className="text-[#BE01AE] space-y-4 mb-8">
            <p>Plongez avec nous dans un univers enchanté, où la nature danse avec les étoiles. 🌿✨</p>
            <p>Osez les couleurs vibrantes et les étoffes féeriques : des teintes de violet profond, de vert mystique et des touches de dorées scintillantes. Laissez-vous inspirer par les fleurs sauvages et les feuillages.
Que vos tenues soient une ode à la magie de la nature : robes fluides, costumes élégants, accessoires étoilés ou floraux… Exprimez votre éclat, sans crainte d'apporter une touche d'émerveillement à cette célébration !
✨</p>
<p>Simple élégance, magie enchantée ou féerie assumée, soyez qui vous voulez mais le blanc est déjà réservé ! ✨</p>

            {/* Mood Board */}
            <div className="my-12 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-wedding-purple/20 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Feature Image - Large and centered */}
                <div className="col-span-1 md:col-span-3 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-lg shadow-xl"
                  >
                    <img 
                      src="moodboard/salle.png" 
                      alt="Salle enchantée avec éclairage violet" 
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </motion.div>
                </div>
                
                {/* First row of 3 images */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-lg shadow-md"
                >
                  <img 
                    src="moodboard/deco_champi_2.jpg" 
                    alt="Décoration champignons enchantés" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-lg shadow-md"
                >
                  <img 
                    src="moodboard/lanternes_2.jpg" 
                    alt="Lanternes décoratives" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-lg shadow-md"
                >
                  <img 
                    src="moodboard/table_arbre.png" 
                    alt="Tree centerpiece with purple lighting" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
                
                {/* Second row of 3 images */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-lg shadow-md"
                >
                  <img 
                    src="moodboard/cristaux_cheveux_2.jpg" 
                    alt="Accessoire de cheveux avec cristaux violets" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-lg shadow-md"
                >
                  <img 
                    src="moodboard/cristaux_cheveux_22.jpg" 
                    alt="Accessoire de cheveux doré avec cristal" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-lg shadow-md"
                >
                  <img 
                    src="moodboard/cristaux_poche_2.jpg" 
                    alt="Cristaux décoratifs" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
                
                {/* Third row of 3 images */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-lg shadow-md"
                >
                  <img 
                    src="moodboard/homme_costume_simple_2.jpg" 
                    alt="Boutonnière naturelle" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-lg shadow-md"
                >
                  <img 
                    src="moodboard/theme_2.jpg" 
                    alt="Décoration bois avec papillon doré" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-lg shadow-md"
                >
                  <img 
                    src="moodboard/papiers.jpg" 
                    alt="Parchemins vintage" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
              </div>
            </div>          
          </div>
          <p className="text-wedding-purple font-bold">
            <span style={{ color: '#6E2D91' }}>✨</span> Élégance enchantée et féerie assumée, sans déguisement. <span style={{ color: '#6E2D91' }}>✨</span>
          </p>
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
                initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
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
                <div className="flex justify-center w-1/2 px-4">
                  <div className={`w-fit rounded-lg overflow-hidden shadow-lg ${
                    index % 2 === 0 ? "ml-8" : "mr-8"
                  }`}>
                    <img
                      src={item.picture}
                      alt={item.title}
                      className="w-auto h-auto max-h-[485px] object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center font-playfair mb-16">Votre Séjour</h2>
 
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair text-2xl mb-4">Les Gîtes</h3>
                <p className="text-gray-600">
                  Trois gîtes juste à côté du château dans un esprit mini village, meublé ancien charmant.
                  <br /><br />
                 Les gites ont des chambres pour deux personnes ou plus. Les chambres pour 2 personnes utilisent un lit double et celles pour 3 un lit double et un lit simple. 
                 La plupart des chambres sont pour 2 ou 3 et la plus grande pour 5. 
                 Il y a aussi la possibilité de mettre un lit bébé.
                  <br /><br />
                  La plupart des chambres ont leur propre salle de bain (certaines sont partagées). Cuisines partagées.
                  <br /><br />
                  La nuit coûte 40€ par personne.
                </p>
              </div>
              <div>
              <img
                src="chateau_panorama.jpg"
                alt="Gîte"
                className="rounded-lg shadow-lg w-full h-auto max-h-[400px] object-contain"
              />
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
                      {activities.others.map((activity, index) => (
                        <div
                          key={index}
                          rel="noopener noreferrer"
                          className="p-4 bg-white rounded-lg shadow-sm transition-shadow"
                        >
                          <span className="text-gray-700">{activity.name}</span>
                        </div>
                      ))}
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
            href=""
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
            <h4 className="font-playfair">Juliette</h4>
            <p>06 99 38 53 82</p>
            <p>juliet.lacroix@gmail.com</p>
            <h4 className="font-playfair">Florian</h4>
            <p>florian.haritonoff@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
