import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-daz-blue mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-daz-green" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+263 292 482431</p>
              <p className="text-gray-600">+263 783 146 211</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-daz-green" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@daz.org.zw</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-daz-green" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                65067 Tshabalala Extension,
                <br />
                Bulawayo, Zimbabwe
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};