import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Sponsorship = () => {
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
            Support Our Cause
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-daz-green mb-4">
                Donations
              </h3>
              <p className="text-gray-600 mb-6">
                Your donation helps us continue our mission of supporting those affected by dementia
                and their families. Every contribution makes a difference.
              </p>
              <Button className="w-full bg-daz-green hover:bg-daz-green/90">
                Make a Donation
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-daz-green mb-4">
                Partnership
              </h3>
              <p className="text-gray-600 mb-6">
                Partner with us to create a greater impact in dementia awareness and support.
                Together we can make a difference in our community.
              </p>
              <Button className="w-full bg-daz-green hover:bg-daz-green/90">
                Become a Partner
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};