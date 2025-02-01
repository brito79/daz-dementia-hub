import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "./ui/avatar";

export const About = () => {
  const founders = [
    {
      name: "Emelia Guba",
      role: "Co-Founder and Programs Manager",
      image: "/lovable-uploads/6e1ac777-304d-4c58-a76f-0134b3a72156.png",
      qualifications: "Certificate in Monitoring and Evaluation (Zimbabwe Institute of HIV and AIDS Trust), Diploma in LCCI Marketing (Speciss College)",
    },
    {
      name: "Heather Phiri",
      role: "Co-Founder and Public Relations Manager",
      image: "/lovable-uploads/35e7fc3d-1265-4fdd-8599-fdf2a05990d1.png",
      qualifications: "Diploma in Food Science and Technology (Bulawayo Polytechnic College)",
    },
    {
      name: "Hilary Garikayi",
      role: "Co-Founder, Finance & Administration Manager",
      image: "/lovable-uploads/5eb0d34d-010f-4cde-b76a-cdac603d1b4f.png",
      qualifications: "Diploma in Business and Industrial Administration (London Chambers of Commerce), Diploma in Information Technology & Certificate in Graphic Designing (CITMA Grp of Colleges)",
    },
    {
      name: "Co-Founder",
      role: "Co-Founder",
      image: "/lovable-uploads/f21c3315-28d7-47a1-85b0-06bd3e8722b6.png",
      qualifications: "",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/b890f635-3137-4d7b-b5b6-dbd96e941d77.png')] opacity-5 bg-center bg-no-repeat bg-contain" />
      <div className="container mx-auto px-4 relative z-10">
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

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-daz-blue mb-8 text-center">
                Our Founders
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {founders.map((founder, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-daz-green">
                      {founder.name}
                    </h4>
                    <p className="text-gray-600 font-medium mb-2">{founder.role}</p>
                    <p className="text-sm text-gray-500">{founder.qualifications}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-daz-blue mb-4">
                Our Partnership
              </h3>
              <div className="flex items-center justify-center gap-4">
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