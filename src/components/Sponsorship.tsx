import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Footer } from "@/components/Footer";

export const Sponsorship = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [partnerInfo, setPartnerInfo] = useState({
    name: "",
    organization: "",
    email: "",
  });

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your donation!",
      description: "We will contact you soon with payment details.",
    });
    setDonationAmount("");
  };

  const handlePartnership = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership request received",
      description: "Our team will reach out to you shortly.",
    });
    setPartnerInfo({ name: "", organization: "", email: "" });
  };

  return (
    <>
      <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
        background: "radial-gradient(circle at top, rgba(0, 123, 255, 0.1), rgba(0, 123, 255, 0) 70%)",
        clipPath: "ellipse(150% 70% at 50% 0%)",
        }}
      ></div>
      <div className="absolute inset-0">
        <img
        src="/assets/background_first.jpg"
        alt="Background"
        className="w-full h-full object-cover opacity-20"
        style={{
          clipPath: "ellipse(150% 70% at 50% 0%)",
        }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
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
        <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed">
          <span className="font-semibold text-daz-blue">Join us</span> in making a meaningful impact. Whether through a 
          <span className="font-semibold text-daz-green"> donation</span> or a 
          <span className="font-semibold text-daz-green"> partnership</span>, your support helps us bring hope and assistance 
          to those affected by dementia. <span className="font-semibold text-daz-blue">Together</span>, we can create a brighter future.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-daz-green mb-4">
            Donations
          </h3>
          <p className="text-gray-600 mb-8">
            Your donation helps us continue our mission of supporting those affected by dementia
            and their families. Every contribution makes a difference.
          </p>
          <form onSubmit={handleDonation} className="space-y-4">
            <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1 py-4">
              Amount (USD)
            </label>
            <Input
              id="amount"
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Enter amount"
              required
            />
            </div>
            <Button type="submit" className="w-full bg-daz-green hover:bg-daz-green/90">
            Make a Donation
            </Button>
          </form>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-daz-green mb-4">
            Partnership
          </h3>
          <p className="text-gray-600 mb-6">
            Partner with us to create a greater impact in dementia awareness and support.
            Together we can make a difference in our community.
          </p>
          <form onSubmit={handlePartnership} className="space-y-4">
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input
              id="name"
              value={partnerInfo.name}
              onChange={(e) => setPartnerInfo({ ...partnerInfo, name: e.target.value })}
              placeholder="Your name"
              required
            />
            </div>
            <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
              Organization
            </label>
            <Input
              id="organization"
              value={partnerInfo.organization}
              onChange={(e) => setPartnerInfo({ ...partnerInfo, organization: e.target.value })}
              placeholder="Your organization"
              required
            />
            </div>
            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={partnerInfo.email}
              onChange={(e) => setPartnerInfo({ ...partnerInfo, email: e.target.value })}
              placeholder="Your email"
              required
            />
            </div>
            <Button type="submit" className="w-full bottom-0 bg-daz-green hover:bg-daz-green/90">
            Become a Partner
            </Button>
          </form>
          </div>
        </div>
        </motion.div>
      </div>
      </section>
      <Footer />
    </>
  );
};