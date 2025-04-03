
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/symptoms", label: "Symptoms" },
    { path: "/causes", label: "Risk Factors" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/membership", label: "Membership" },
    { path: "/sponsorship", label: "Support Us" },
    { path: "/contact", label: "Contact" },
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/263783761575`, '_blank');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-daz-green" />
              <span className="text-lg font-semibold text-daz-green">DAZ Dementia</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
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
              <Globe className="mr-2 h-4 w-4" />
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "bg-daz-green text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                handleWhatsAppClick();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-green-500 hover:bg-green-600 text-white mt-2"
            >
              <Globe className="mr-2 h-4 w-4" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
