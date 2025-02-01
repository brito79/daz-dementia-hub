import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Symptoms = () => {
  const symptoms = [
    {
      title: "Memory Loss",
      description: "Difficulty remembering recent events or conversations",
    },
    {
      title: "Communication Problems",
      description: "Struggling to find the right words or follow conversations",
    },
    {
      title: "Difficulty with Daily Tasks",
      description: "Challenges with familiar activities like cooking or paying bills",
    },
    {
      title: "Confusion",
      description: "Getting lost in familiar places or losing track of time",
    },
    {
      title: "Mood Changes",
      description: "Depression, anxiety, or personality changes",
    },
    {
      title: "Poor Judgment",
      description: "Making decisions that seem out of character",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4faf2d19-0a45-4d93-b511-e2578bdd7442.png')] opacity-5 bg-center bg-cover bg-no-repeat" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-daz-blue mb-12">
            Signs & Symptoms
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-daz-green">
                      {symptom.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{symptom.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};