import { motion } from "framer-motion";

export const About = () => {
  const founders = [
    {
      name: "Emelia Guba",
      role: "Co-Founder and Programs Manager",
      image: "/lovable-uploads/6e1ac777-304d-4c58-a76f-0134b3a72156.png",
      description: "Is passionate about humanitarian work with special interest in elderly care, has worked in the health sector and other related organisations. Holds qualifications in monitoring & evalution and Marketing.",
    },
    {
      name: "Heather Phiri",
      role: "Co-Founder and Public Relations Manager",
      image: "/lovable-uploads/35e7fc3d-1265-4fdd-8599-fdf2a05990d1.png",
      description: "An ambitious self-driven team player with humanity at heart. Is a qualified Food Science Technician, passionate in Communication and has vast knowledge in Health and Nutrition factors. Engages in Family Self-care Interventions.",
    },
    {
      name: "Hilary Garikayi",
      role: "Board Chairperson",
      image: "/lovable-uploads/5eb0d34d-010f-4cde-b76a-cdac603d1b4f.png",
      description: "A legal practitioner with over 20years experience Registered with the High Court of Zimbabwe, Law Society of Zimbabwe and IOBZ. An avid Human Rights Defender. Has a strong experience in various board membership and community engagement programs. Areas of interest include banking law, conveyancing, labour, human rights and juvenile justice. He possesses a Bachelor of Laws (Hons) and Masters in Constitutional and Human Rights Law.",
    },
    {
      name: "Co-Founder",
      role: "Risk Management Specialist",
      image: "/lovable-uploads/f21c3315-28d7-47a1-85b0-06bd3e8722b6.png",
      description: "Possesses a vast banking skillset in risk management capability with presentation and reporting techniques, while maintaining sharp attention to detail. Extensive analysis of data to enhance bank operations, to build prognostic financial models which encompass crucial business process improvement, and innovative solutions. Supports effective utilization of bank systems including reports to prevent and reduce exposure to losses while maintaining cost effectiveness.",
    },
  ];

  const backgroundImages = [
    "/lovable-uploads/057d21f0-852d-42c9-b63b-2f68553686de.png",
    "/lovable-uploads/2426c938-a12e-437a-9499-7ce7ad12c78f.png",
    "/lovable-uploads/dd0eff45-ceb3-420a-9dcd-4e6fc3e243a7.png"
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-10 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            animation: `fade-background ${backgroundImages.length * 5}s infinite`,
            animationDelay: `${index * 5}s`,
          }}
        />
      ))}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-daz-blue mb-12">
            About DAZ
          </h2>
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-gray-600 mb-6">
              DAZ is a Community Based-Non Profit Organization formed with an
              understanding of dementia and its related diseases being overlooked in
              the health system in Zimbabwe. It is a brainchild of Co-Founders who
              drew inspiration from the stigma, ignorance and misdiagnosis
              associated with the condition and also a personal experience rendered.
            </p>
            <p className="text-gray-600 mb-6">
              The Organization in partnership with the Ministry of Health and
              ChildCare is aimed at supporting the National Health Strategy through
              Creating awareness and Advocating for Prevention, Diagnosis,
              Treatment and Management of Dementia. Also, with a focus on
              diminishing the stigma and ignorance that currently exists whilst
              enhancing care and support to all the affected.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-daz-green mb-4">
                  Vision
                </h3>
                <p className="text-gray-600">
                  To be a body which contributes to the prevention, diagnosis,
                  treatment and management of Dementia.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
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

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-daz-blue mb-8 text-center">
                Our Team
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {founders.map((founder, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-semibold text-daz-green">
                        {founder.name}
                      </h4>
                      <p className="text-gray-600 font-medium mb-4">{founder.role}</p>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {founder.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-daz-blue mb-4">
                Our Partnership
              </h3>
              <div className="flex items-center justify-center gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                <img
                  src="/lovable-uploads/cc0af327-5046-4829-b281-d0a95299623b.png"
                  alt="Ministry of Health and Childcare Zimbabwe"
                  className="h-24 object-contain"
                />
                <p className="text-gray-600">
                  In partnership with the Ministry of Health and Childcare Zimbabwe
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};