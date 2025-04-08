
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChatAssistant } from "./ChatAssistant";
import bg_home from "/assets/bg_hero.jpg";
import AboutUs from "@/pages/AboutUs";
import { Footer } from "./Footer";
import { Causes } from "./Causes";
import { MembershipForm } from "./MembershipForm";
import MembershipPage from "@/pages/MembershipPage";
import FaQ from "./FaQ";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <section className="bg-gradient-to-br from-purple-500 to-blue-500 bg-center bg-cover h-screen relative min-h-screen flex items-center justify-center overflow-hidden bg-daz-blue/5 rounded-lg shadow-lg">
    {/*
    style={{
      backgroundImage: `url(${bg_home})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      }}
    */}
    {/* Arc SVG */}
    <svg
        className="absolute bottom-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,160L48,144C96,128,192,96,288,80C384,64,480,64,576,80C672,96,768,128,864,144C960,160,1056,160,1152,128C1248,96,1344,48,1392,24L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="container mx-auto px-4 py-2 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-8">
        <img
          src="/assets/2cc117a5-2e72-4a68-9375-6243c2b5e6fb.png"
          alt="DAZ Logo"
          className="w-32 h-32 mx-auto mb-6 drop-shadow-lg"
        />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-daz-blue mb-6">
        Dementia Association of Zimbabwe
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10">
        Creating awareness and advocating for prevention, diagnosis, treatment,
        and management of dementia through advancements of research.
          </p>
          <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
          >
        <button
          onClick={() => navigate("/about")}
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold bg-daz-green text-white shadow-lg hover:bg-daz-green/90 transition-all duration-300"
        >
          Learn More
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold bg-daz-blue/10 text-daz-blue border border-daz-blue/30 shadow-lg hover:bg-daz-blue/20 transition-all duration-300"
        >
          Get Support
        </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
        key={i}
        className="absolute rounded-full bg-daz-blue/10"
        style={{
          width: Math.random() * 100 + 50,
          height: Math.random() * 100 + 50,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 40 - 20],
          y: [0, Math.random() * 40 - 20],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
          />
        ))}
      </div>

      {/* Chat Assistant */}
      <div className="absolute bottom-8 right-8 z-20">
        <ChatAssistant />
      </div>
      {/* */}
        </section>
        <Causes />
        <AboutUs />
        <MembershipPage />
        <FaQ />
        <Footer />

        </>
  );
};
