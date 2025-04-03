import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  "Counselling for affected family members and caregivers",
  "Home visits and assessment",
  "Linkage to care for dementia patients",
  "Support and resources for caregivers",
  "Awareness campaigns",
  "Research and advocacy",
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 bg-[url('/assets/af99ef30-a2e1-4803-befd-edeea4a14451.png')] opacity-5 bg-center bg-cover bg-no-repeat" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-daz-blue mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm"
              >
                <Check className="w-6 h-6 text-daz-green flex-shrink-0 mt-1" />
                <p className="text-gray-600">{service}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};