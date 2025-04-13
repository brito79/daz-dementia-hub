import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import daily_routines from "/assets/daily_routines.jpg";
import memory_loss from "/assets/memory_loss.jpg";
import communication from "/assets/communication.jpg";
import confusion from "/assets/confusion.jpg";
import mood_changes from "/assets/mood_changes.jpg";
import poor_judgment from "/assets/poor_judgment.jpg";
import { Footer } from "@/components/Footer";

export const Symptoms = () => {
  const symptoms = [
    {
      title: "Memory Loss",
      description: "Difficulty remembering recent events or conversations, often leading to repetitive questions or misplaced items.",
      imgUrl :  memory_loss
    },
    {
      title: "Communication Problems",
      description: "Struggling to find the right words, follow conversations, or express thoughts clearly, which can lead to frustration.",
      imgUrl : communication
    },
    {
      title: "Difficulty with Daily Tasks",
      description: "Challenges with familiar activities like cooking, managing finances, or remembering the steps of a routine task.",
      imgUrl : daily_routines
    },
    {
      title: "Confusion",
      description: "Getting lost in familiar places, losing track of time, or forgetting the purpose of an activity or object.",
      imgUrl : confusion
    },
    {
      title: "Mood Changes",
      description: "Experiencing depression, anxiety, irritability, or personality changes, often accompanied by withdrawal from social interactions.",
      imgUrl : mood_changes
    },
    {
      title: "Poor Judgment",
      description: "Making decisions that seem out of character, such as giving away large sums of money or neglecting personal hygiene.",
      imgUrl : poor_judgment
    },
  ];

  return (
    <>
    
    <section className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 bg-[url('/assets/bg_again')] opacity-5 bg-center bg-cover bg-no-repeat" />
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
            <h3 className="text-2xl font-semibold text-center text-daz-green mb-6">
            Introduction
            </h3>
            <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed mb-8">
            Dementia is not a specific disease but rather a term used to describe a group of symptoms that affect memory,
            thinking, and social abilities, often interfering with daily life. 
            It is characterized by a progressive decline in cognitive functions such as memory loss,
            difficulty in communicating, confusion about time or place, and reduced problem-solving skills.
            Early symptoms might seem subtle, like forgetting appointments or losing track of conversations,
            but they gradually become more pronounced. Behavioral changes, such as mood swings,
            irritability, or withdrawal from social activities, are also common. 
            Recognizing these signs early can play a crucial role in seeking medical
            advice and planning supportive care. Dementia awareness empowers individuals,
            caregivers, and communities to address its challenges with empathy and informed action.
            </p>
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
                    <img
                      src={symptom.imgUrl}
                      alt={symptom.title}
                      className="w-full h-32 object-cover rounded-lg mb-4" />
                    <p className="text-gray-600">{symptom.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};