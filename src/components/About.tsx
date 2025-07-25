import { motion } from "framer-motion";
import { Footer } from "./Footer";

export const About = () => {
  const teamMembers = [
    {
      name: "Emelia Gubba",
      role: "Co-Founder",
      image: "/assets/emeila_gubba.jpg",
      description: "Is passionate about humanitarian work with special interest in elderly care, has worked in the health sector and other related organisations. Holds qualifications in monitoring & evalution and Marketing.",
    },
    {
      name: "Heather Phiri",
      role: "Co-Founder",
      image: "/assets/35e7fc3d-1265-4fdd-8599-fdf2a05990d1.png",
      description: "An ambitious self-driven team player with humanity at heart. Is a qualified Food Science Technician, passionate in Communication and has vast knowledge in Health and Nutrition factors. Engages in Family Self-care Interventions.",
    },
    {
      name: "Hilary Garikayi",
      role: "Board Chairperson",
      image: "/assets/5eb0d34d-010f-4cde-b76a-cdac603d1b4f.png",
      description: "A legal practitioner with over 20years experience Registered with the High Court of Zimbabwe, Law Society of Zimbabwe and IOBZ. An avid Human Rights Defender. Has a strong experience in various board membership and community engagement programs. Areas of interest include banking law, conveyancing, labour, human rights and juvenile justice. He possesses a Bachelor of Laws (Hons) and Masters in Constitutional and Human Rights Law.",
    },
    {
      name: "Munyaradzi Maponga",
      role: "Board Treasurer",
      image: "/assets/b2ee79b5-8ffc-4cc1-930a-3e0b2eb3abb6.png",
      description: "An enthusiastic Accounting and Finance Manager with drive, determination and 15+ years' experience working in a busy Accounting department providing support to top management. Highly competent in financial management and accounting, financial planning and analysis, budgeting and forecasting. Possessing excellent numerical & data entry skills along with a comprehensive understanding of commercial, administrative and accounting procedures. Well-presented, articulate and diplomatic individual capable of building and nurturing networks at executive and operational level. Has full CIS, SAAA, currently studying MSc Applied Accounting with GZU and is an Associate with CIS (ACIS).",
    },
  ];

  const backgroundImages = [
    "/assets/057d21f0-852d-42c9-b63b-2f68553686de.png",
    "/assets/2426c938-a12e-437a-9499-7ce7ad12c78f.png",
    "/assets/dd0eff45-ceb3-420a-9dcd-4e6fc3e243a7.png"
  ];

  return (
    <>
    <section className="py-20 bg-white relative filter backdrop-blur-sm rounded-lg border border-black/10">
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-20 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            animation: `fade-background ${backgroundImages.length * 5}s infinite`,
            animationDelay: `${index * 5}s`,
            zIndex: 0
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
              <h3 className="text-3xl font-bold text-daz-blue mb-8 text-center">
              Our Team
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                  teamMembers.length % 3 === 1 && index === teamMembers.length - 1 
                  ? "lg:col-start-2" 
                  : (teamMembers.length % 3 === 2 && index === teamMembers.length - 2) 
                    ? "lg:col-start-1" 
                    : ""
                }`}
                >
                <div className="flex flex-col items-center mb-4">
                  <div className="w-48 h-50 rounded-full overflow-hidden mb-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  </div>
                  <h4 className="text-xl font-semibold text-daz-green">
                  {member.name}
                  </h4>
                  <p className="text-gray-600 font-medium mb-4">{member.role}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
                </motion.div>
              ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-3xl font-bold text-daz-blue mb-4">
                Our Partnership
              </h3>
                <div className="flex items-center justify-center gap-6 bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                <img
                  src="/assets/partnership_one.png"
                  alt="Ministry of Health and Childcare Zimbabwe"
                  className="h-24 object-contain rounded-full"
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
    </>
  );
};