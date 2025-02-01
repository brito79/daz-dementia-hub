import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-daz-blue mb-12">
            About DAZ
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              DAZ is a Community Based-Non Profit Organization formed with an
              understanding of dementia and its related diseases being overlooked in
              the health system in Zimbabwe. It is a brainchild of 2 Co-Founders
              who drew inspiration from the stigma, ignorance and misdiagnosis
              associated with the condition and also a personal experience rendered.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-daz-green mb-4">
                  Vision
                </h3>
                <p className="text-gray-600">
                  To be a body which contributes to the prevention, diagnosis,
                  treatment and management of Dementia.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-daz-green mb-4">
                  Mission
                </h3>
                <p className="text-gray-600">
                  To Create Awareness and Advocate for Prevention, Diagnosis,
                  Treatment and Management of Dementia through advancements of
                  Research.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};