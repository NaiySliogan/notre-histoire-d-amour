
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <div className="hidden md:flex space-x-8">
            {[
              { to: "home", label: "Accueil" },
              { to: "theme", label: "Thème & Dress Code" },
              { to: "schedule", label: "Le jour J" },
              { to: "story", label: "Notre Histoire" },
              { to: "accommodation", label: "Votre Séjour" },
              { to: "photos", label: "Vos Photos" },
              { to: "contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                className={`cursor-pointer text-sm font-medium transition-colors hover:text-wedding-purple ${isScrolled ? "text-wedding-purple" : "text-white"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
