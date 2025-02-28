import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Users, Target, Award, Rocket } from "lucide-react";

function About() {
  const teamMembers = [
    { name: "Alice Johnson", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Mark Smith", role: "CTO & Lead Developer", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Sarah Lee", role: "Product Designer", img: "https://randomuser.me/api/portraits/women/60.jpg" },
  ];

  return (
    <div className="pt-16">
      {/* === Top Hero Section === */}
      <section className="relative py-20 bg-[#430f58]">
        <Parallax translateY={[-20, 20]} className="absolute inset-0">
          <div className="absolute inset-0 bg-[#6643b5] opacity-40" />
        </Parallax>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fuel Your Growth with Smart Instagram Automation
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto">
            Automate your DMs, turn comments into conversations, and drive your reels to viral success effortlessly.
          </motion.p>
        </div>
      </section>

      {/* === Mission Section === */}
      <section className="py-20 bg-[#d5def5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-[#430f58] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At ZyloChat, we empower creators, businesses, and brands to engage smarter, faster, and more efficiently.
                Our AI-driven automation helps you maximize reach and build meaningful connections—without manual effort.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative h-96">
              <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Instagram automation" className="rounded-lg shadow-xl object-cover w-full h-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* === Values Section (Restored) === */}
      <section className="py-20 bg-[#d5def5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#430f58] mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users className="h-6 w-6 text-[#430f58]" />, title: "Engagement First", description: "Transform every interaction into an opportunity." },
              { icon: <Target className="h-6 w-6 text-[#430f58]" />, title: "Automation with Impact", description: "Smart messaging that feels personal." },
              { icon: <Award className="h-6 w-6 text-[#430f58]" />, title: "Seamless Growth", description: "Drive visibility and scale effortlessly." },
              { icon: <Rocket className="h-6 w-6 text-[#430f58]" />, title: "Innovation", description: "Always evolving to help you stay ahead of trends." },
            ].map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.9 }} viewport={{ once: true }}
                className="bg-[#8594e4] rounded-lg p-8 text-center shadow-lg">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#430f58] mb-2">{value.title}</h3>
                <p className="text-gray-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Bottom Hero Section (Same as Top) === */}
      <section className="relative py-20 bg-[#430f58]">
        <Parallax translateY={[-20, 20]} className="absolute inset-0">
          <div className="absolute inset-0 bg-[#6643b5] opacity-40" />
        </Parallax>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate & Grow?
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto">
            ZyloChat helps you save time and boost engagement. Start today!
          </motion.p>
        </div>
      </section>
    </div>
  );
}

export default About;
