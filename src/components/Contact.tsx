import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";

export const Contact = () => {
  return (
    <>
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-daz-blue mb-6">
        Contact Us
        </h2>
        <p className="text-center text-gray-700 mb-12">
        We’d love to hear from you! Reach out to us via phone, email, or visit our office. 
        Our team is here to assist you with any inquiries or support you may need.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center bg-white shadow-lg rounded-lg p-6">
          <Phone className="w-8 h-8 mx-auto mb-4 text-daz-green" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">
          <a href="tel:+263292482431" className="hover:text-daz-blue">
            +263 292 482431
          </a>
          </p>
          <p className="text-gray-600">
          <a href="tel:+263783146211" className="hover:text-daz-blue">
            +263 783 146 211
          </a>
          </p>
        </div>
        <div className="text-center bg-white shadow-lg rounded-lg p-6">
          <Mail className="w-8 h-8 mx-auto mb-4 text-daz-green" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600">
          <a href="mailto:info@daz.org.zw" className="hover:text-daz-blue">
            info@daz.org.zw
          </a>
          </p>
        </div>
        <div className="text-center bg-white shadow-lg rounded-lg p-6">
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
    </>
  );
};