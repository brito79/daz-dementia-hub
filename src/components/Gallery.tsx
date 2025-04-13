import { motion } from "framer-motion";
import { Footer } from "./Footer";
import background_first from "/assets/background_first.jpg";

const images = [
  {
    src: "/assets/30a098eb-a044-44da-b3d9-2b88554c3d6a.png",
    alt: "Certificate presentation ceremony",
    description: "A proud moment as certificates are presented to participants who completed the dementia awareness program.",
  },
  {
    src: "/assets/adf49173-eae2-45db-abff-7182dfeced9a.png",
    alt: "Training workshop session",
    description: "An engaging training workshop session aimed at educating attendees about dementia care.",
  },
  {
    src: "/assets/4a923a44-8031-4356-bb62-bf32b6b8cd76.png",
    alt: "Support group meeting",
    description: "A support group meeting where members share experiences and provide mutual encouragement.",
  },
  {
    src: "/assets/335dc46b-a315-4fea-89f2-a3fe11e40580.png",
    alt: "Workshop presentation",
    description: "A workshop presentation highlighting key strategies for dementia awareness and care.",
  },
  {
    src: "/assets/7ec38b72-3d14-4e4a-9cd2-d97757f7812e.png",
    alt: "Training session",
    description: "A focused training session designed to equip participants with practical skills for dementia care.",
  },
  {
    src: "/assets/8794d119-351e-4874-bbb7-e74674c999a4.png",
    alt: "Community education program",
    description: "A community education program aimed at spreading awareness and understanding of dementia.",
  },
  {
    src: "/assets/89db5d46-687f-446e-891d-09275399017f.png",
    alt: "Community members attending workshop",
    description: "Community members actively participating in a workshop to learn about dementia care and support.",
  },
  {
    src: "/assets/fcbfaf84-acab-4a2d-8d5f-34291b35f96c.png",
    alt: "Training and education session",
    description: "An interactive training and education session focused on dementia awareness and caregiving techniques.",
  },
  {
    src: "/assets/0437153c-a3d5-481c-b3c2-fb46be3a3377.png",
    alt: "DAZ outreach event",
    description: "A DAZ outreach event bringing the community together to promote dementia awareness and support.",
  },
];

export const Gallery = () => {
  return (
    <>
      <section className="py-20 bg-white bg-[url('/assets/background_first.jpg')] bg-cover bg-center rounded-lg shadow-lg filter backdrop-blur-sm relative">
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
            <h3 className="font-bold text-gray-500 text-center mb-12">
            Welcome to the "Our Impact" page, where we proudly showcase the milestones and achievements of our organization in raising awareness, providing education, and fostering support for dementia care within our community.
            </h3>
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
              <div className="p-4 bg-white">
                <p className="text-gray-700 text-sm">{image.description}</p>
              </div>
              </motion.div>
            ))}
            </div>
        </motion.div>
      </div>
      
    </section>
    </>

  );
};