import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Heart, AlertCircle, Clock, Activity, Shield, BookOpen, Phone, Mail } from 'lucide-react';

const YoungOnsetDementia = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const symptoms = [
    {
      category: "Memory Problems",
      icon: Brain,
      items: [
        "Difficulty remembering recent events",
        "Forgetting important dates or appointments",
        "Trouble learning new information",
        "Needing constant reminders"
      ]
    },
    {
      category: "Thinking & Problem-Solving",
      icon: Activity,
      items: [
        "Difficulty concentrating at work",
        "Problems with planning and organizing",
        "Trouble following familiar recipes",
        "Difficulty managing finances"
      ]
    },
    {
      category: "Language & Communication",
      icon: Users,
      items: [
        "Finding the right words becomes harder",
        "Following conversations becomes difficult",
        "Repeating questions frequently",
        "Writing becomes more challenging"
      ]
    },
    {
      category: "Daily Living Skills",
      icon: Clock,
      items: [
        "Getting lost in familiar places",
        "Trouble completing routine tasks",
        "Difficulty using technology",
        "Problems with driving"
      ]
    }
  ];

  const causes = [
    { name: "Alzheimer's Disease", percentage: "30-60%", description: "Most common cause, affecting memory and thinking" },
    { name: "Frontotemporal Dementia", percentage: "20-50%", description: "Affects personality, behavior, and language" },
    { name: "Vascular Dementia", percentage: "15%", description: "Caused by reduced blood flow to the brain" },
    { name: "Lewy Body Dementia", percentage: "10%", description: "Affects thinking, movement, and sleep" },
    { name: "Other Causes", percentage: "5-10%", description: "Including metabolic, genetic, and autoimmune conditions" }
  ];

  const impactAreas = [
    {
      icon: Users,
      title: "Family & Relationships",
      description: "Changes in family dynamics, relationship strain, and impact on children",
      details: ["Role reversals within families", "Explaining the condition to children", "Maintaining intimate relationships"]
    },
    {
      icon: Activity,
      title: "Employment & Career",
      description: "Job performance issues, career planning challenges, and financial implications",
      details: ["Declining work performance", "Need for workplace accommodations", "Early retirement considerations"]
    },
    {
      icon: Heart,
      title: "Social Life",
      description: "Social isolation, friendship changes, and community participation",
      details: ["Withdrawal from social activities", "Loss of driving privileges", "Reduced independence"]
    },
    {
      icon: Shield,
      title: "Legal & Financial",
      description: "Planning for the future, legal protections, and financial security",
      details: ["Power of attorney decisions", "Advanced directives", "Financial planning needs"]
    }
  ];

  const supportStrategies = [
    {
      title: "Early Diagnosis & Planning",
      description: "Getting an accurate diagnosis and creating comprehensive plans",
      actions: ["Seek specialist evaluation", "Create advance directives", "Plan for future care needs", "Consider genetic counseling"]
    },
    {
      title: "Maintaining Independence",
      description: "Strategies to remain independent for as long as possible",
      actions: ["Use memory aids and technology", "Establish daily routines", "Modify home environment", "Stay physically active"]
    },
    {
      title: "Building Support Networks",
      description: "Creating strong support systems for the journey ahead",
      actions: ["Join support groups", "Connect with other families", "Engage healthcare team", "Utilize community resources"]
    },
    {
      title: "Quality of Life Focus",
      description: "Maintaining meaning and enjoyment in daily life",
      actions: ["Pursue meaningful activities", "Maintain social connections", "Focus on abilities", "Practice stress management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 bg-gradient-to-r from-daz-blue to-daz-green text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <Brain className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Young-Onset Dementia
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Understanding dementia that affects people under 65 years of age
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6">
              <AlertCircle className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Early Detection</h3>
              <p className="text-sm opacity-90">Recognizing symptoms in younger adults</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6">
              <Users className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Family Impact</h3>
              <p className="text-sm opacity-90">Understanding unique challenges</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6">
              <Heart className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Support & Care</h3>
              <p className="text-sm opacity-90">Comprehensive support strategies</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* What is Young-Onset Dementia */}
      <motion.section 
        className="py-16 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What is Young-Onset Dementia?
            </h2>
            <div className="w-20 h-1 bg-daz-green mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-daz-blue mb-4">Definition & Age Range</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Young-onset dementia, also called early-onset dementia, refers to any form of dementia 
                  that develops in people younger than 65 years of age. This condition affects individuals 
                  during their prime working and family years.
                </p>
                <div className="bg-blue-50 border-l-4 border-daz-blue p-4 rounded">
                  <p className="text-daz-blue font-semibold">
                    While less common than late-onset dementia, young-onset dementia presents unique 
                    challenges for individuals, families, and caregivers.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-gradient-to-br from-daz-blue to-daz-green rounded-xl text-white p-8">
                <h3 className="text-2xl font-semibold mb-6">Key Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Global Cases</span>
                    <span className="font-bold text-xl">3.9 million</span>
                  </div>
                  <div className="w-full bg-white bg-opacity-20 h-2 rounded">
                    <div className="bg-white h-2 rounded w-3/4"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Age Range</span>
                    <span className="font-bold text-xl">30-64 years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Average Age at Diagnosis</span>
                    <span className="font-bold text-xl">55 years</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Symptoms Section */}
      <motion.section 
        className="py-16 px-4 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Recognizing the Symptoms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Young-onset dementia symptoms can be subtle at first and are often mistaken for stress or other conditions
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-daz-blue bg-opacity-10 rounded-full p-3 mr-4">
                    <symptom.icon className="h-8 w-8 text-daz-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{symptom.category}</h3>
                </div>
                <ul className="space-y-3">
                  {symptom.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="bg-daz-green rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Causes Section */}
      <motion.section 
        className="py-16 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Common Causes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Young-onset dementia can be caused by various conditions, each with different characteristics
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6">
            {causes.map((cause, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-daz-green"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{cause.name}</h3>
                    <p className="text-gray-600">{cause.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="bg-daz-blue text-white px-4 py-2 rounded-full text-center">
                      <span className="font-bold text-lg">{cause.percentage}</span>
                      <div className="text-xs opacity-80">of cases</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Areas */}
      <motion.section 
        className="py-16 px-4 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Areas of Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Young-onset dementia affects multiple aspects of life, requiring comprehensive support strategies
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-daz-blue to-daz-green rounded-full p-3 mr-4">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{area.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="bg-daz-green rounded-full w-1.5 h-1.5 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Support Strategies */}
      <motion.section 
        className="py-16 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Support Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive approaches to living well with young-onset dementia
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {supportStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-daz-green"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{strategy.title}</h3>
                <p className="text-gray-600 mb-6">{strategy.description}</p>
                <div className="space-y-3">
                  {strategy.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-center">
                      <div className="bg-daz-green rounded-full w-2 h-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{action}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 px-4 bg-gradient-to-r from-daz-blue to-daz-green text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Support & Information
          </h2>
          <p className="text-xl mb-8 opacity-90">
            If you or someone you know is experiencing symptoms, don't wait. Early diagnosis and support can make a significant difference.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6"
            >
              <Phone className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">24/7 Helpline</h3>
              <p className="text-sm opacity-90 mb-3">Speak with our trained specialists</p>
              <a href="tel:+263783761575" className="text-lg font-bold hover:underline">
                +263 783 761 575
              </a>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6"
            >
              <Mail className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-sm opacity-90 mb-3">Get information and resources</p>
              <a href="mailto:info@dementiaassociationzim.org" className="text-lg font-bold hover:underline">
                info@dementiaassociationzim.org
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-white text-daz-blue px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Find Local Resources
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default YoungOnsetDementia;
