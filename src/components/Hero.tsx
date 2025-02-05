import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/02deffc1-6e2d-410a-a833-086ad2be5792.png')] opacity-5 bg-center bg-cover bg-no-repeat" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <img
              src="/lovable-uploads/2cc117a5-2e72-4a68-9375-6243c2b5e6fb.png"
              alt="DAZ Logo"
              className="w-32 h-32 mx-auto mb-6"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-daz-blue mb-6">
            Dementia Association of Zimbabwe
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Creating awareness and advocating for prevention, diagnosis, treatment,
            and management of dementia through advancements of research.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <button
              onClick={() => navigate("/about")}
              className="inline-block bg-daz-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};