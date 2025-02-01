import { motion } from "framer-motion";

const images = [
  {
    src: "/lovable-uploads/0892b7cb-169d-4d6a-bc69-572533c9496d.png",
    alt: "Workshop session",
  },
  {
    src: "/lovable-uploads/0af229f9-e7b2-4b54-ad78-d5d68213d65c.png",
    alt: "Community gathering",
  },
  {
    src: "/lovable-uploads/4a923a44-8031-4356-bb62-bf32b6b8cd76.png",
    alt: "Support group meeting",
  },
];

export const Gallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-daz-blue mb-12">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};