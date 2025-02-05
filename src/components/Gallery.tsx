import { motion } from "framer-motion";

const images = [
  {
    src: "/lovable-uploads/057d21f0-852d-42c9-b63b-2f68553686de.png",
    alt: "Community engagement session",
  },
  {
    src: "/lovable-uploads/2426c938-a12e-437a-9499-7ce7ad12c78f.png",
    alt: "Training and development workshop",
  },
  {
    src: "/lovable-uploads/4a923a44-8031-4356-bb62-bf32b6b8cd76.png",
    alt: "Support group meeting",
  },
  {
    src: "/lovable-uploads/335dc46b-a315-4fea-89f2-a3fe11e40580.png",
    alt: "Workshop presentation",
  },
  {
    src: "/lovable-uploads/7ec38b72-3d14-4e4a-9cd2-d97757f7812e.png",
    alt: "Training session",
  },
  {
    src: "/lovable-uploads/8794d119-351e-4874-bbb7-e74674c999a4.png",
    alt: "Community education program",
  },
  {
    src: "/lovable-uploads/89db5d46-687f-446e-891d-09275399017f.png",
    alt: "Community members attending workshop",
  },
  {
    src: "/lovable-uploads/fcbfaf84-acab-4a2d-8d5f-34291b35f96c.png",
    alt: "Training and education session",
  },
  {
    src: "/lovable-uploads/0437153c-a3d5-481c-b3c2-fb46be3a3377.png",
    alt: "DAZ outreach event",
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};