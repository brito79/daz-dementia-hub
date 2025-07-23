
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/symptoms", label: "Symptoms" },
    { path: "/young-onset-dementia", label: "Drug Abuse & Dementia" },
    // { path: "/causes", label: "Risk Factors" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/membership", label: "Membership" },
    // { path: "/sponsorship", label: "Support Us" },
    { path: "/contact", label: "Contact" },
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/263783761575`, '_blank');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white shadow-lg fixed w-full z-40 top-0"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="flex items-center">
                <div className="flex items-center space-x-3">
                  <Globe className="h-10 w-10 text-daz-green" />
                  <span className="text-xl font-semibold text-daz-green">DAZ Dementia</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center h-20">
              <div className="flex items-center space-x-2 bg-gray-50 rounded-xl p-2 shadow-inner">
                {links.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.path}
                      className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? "bg-daz-green text-white shadow-md transform scale-105"
                          : "text-gray-700 hover:bg-white hover:text-daz-blue hover:shadow-sm"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="ml-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleMobileMenu}
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  className="relative"
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-6 w-6 text-gray-600" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-6 w-6 text-gray-600" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white border-t border-gray-200 overflow-hidden shadow-lg"
            >
              <div className="px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
                {/* Main Links */}
                {links.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive(link.path)
                          ? "bg-daz-green text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-50 hover:text-daz-blue"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* WhatsApp Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Button
                    onClick={() => {
                      handleWhatsAppClick();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white mt-4 shadow-md"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
