import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/symptoms", label: "Symptoms" },
    { path: "/causes", label: "Causes" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/membership", label: "Membership" },
    { path: "/sponsorship", label: "Support Us" },
    { path: "/contact", label: "Contact" },
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/263783761575`, '_blank');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/2cc117a5-2e72-4a68-9375-6243c2b5e6fb.png"
              alt="DAZ Logo"
              className="h-10 w-10"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-daz-green text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};