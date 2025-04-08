import { motion } from "framer-motion";
import background_first from "/assets/background_first.jpg";

export const Causes = () => {
  const causes = [
    {
      title: "Age",
      description: "The risk increases significantly with age, especially after 65. As people age, the brain undergoes changes that may contribute to the development of dementia.",
    },
    {
      title: "Family History",
      description: "Genetic factors can increase the likelihood of developing dementia. Having a parent or sibling with dementia may raise your risk, though lifestyle and environment also play a role.",
    },
    {
      title: "Cardiovascular Health",
      description: "High blood pressure, heart disease, and stroke can contribute to dementia. Poor cardiovascular health reduces blood flow to the brain, which can lead to cognitive decline over time.",
    },
    {
      title: "Lifestyle Factors",
      description: "Smoking, excessive alcohol use, and lack of physical activity are linked to an increased risk of dementia. Maintaining a healthy lifestyle can help protect brain health and reduce risk.",
    },
  ];

  return (
    <section
      className="py-20 bg-white rounded-lg shadow-lg filter backdrop-blur-sm"
      style={{
      backgroundImage: `url(${background_first})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-daz-blue mb-12 mt-6">
        Understanding the Risk Factors
        </h2>
        <div className="space-y-8">
        {causes.map((cause, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg"
          >
          <div className="w-2 h-2 mt-2 rounded-full bg-daz-green" />
          <div>
            <h3 className="text-xl font-semibold text-daz-green mb-2">
            {cause.title}
            </h3>
            <p className="text-gray-600">{cause.description}</p>
          </div>
          </motion.div>
        ))}
        </div>
      </motion.div>
      </div>
    </section>
  );
};