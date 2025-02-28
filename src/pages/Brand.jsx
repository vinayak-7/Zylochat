import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

function Brand() {
  const clients = [
    { name: "Google", logo: "/clients/google.png" },
    { name: "Microsoft", logo: "/clients/microsoft.png" },
    { name: "Slack", logo: "/clients/slack.png" },
    { name: "Spotify", logo: "/clients/spotify.png" },
    { name: "Netflix", logo: "/clients/netflix.png" },
    { name: "Amazon", logo: "/clients/amazon.webp" },
  ];

  const firstRow = clients.slice(0, Math.ceil(clients.length / 2));
  const secondRow = clients.slice(Math.ceil(clients.length / 2));

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <section className="relative py-16 bg-[#430f58] text-center px-4 md:px-0">
        <Parallax translateY={[-20, 20]} className="absolute inset-0">
          <div className="absolute inset-0 bg-[#6643b5] opacity-40" />
        </Parallax>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our Trusted Partners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            We collaborate with industry leaders to bring the best automation experience.
          </motion.p>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-[#d5def5] flex flex-col items-center">
        <div className="w-full max-w-6xl px-4 md:px-0">
          {/* Static Grid for Mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-6 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={client.logo} alt={client.name} className="h-10 sm:h-12 w-auto mb-2" />
                <span className="text-gray-800 text-xs sm:text-sm font-medium">{client.name}</span>
              </div>
            ))}
          </div>

          {/* Marquee effect only on md+ screens */}
          <div className="hidden md:block space-y-6">
            {/* First Row (LTR) */}
            <div className="w-full overflow-hidden">
              <motion.div
                className="flex space-x-6 md:space-x-12"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {[...firstRow, ...firstRow].map((client, index) => (
                  <div key={index} className="flex flex-col items-center min-w-[150px]">
                    <img src={client.logo} alt={client.name} className="h-12 md:h-16 w-auto mb-2 object-contain" />
                    <span className="text-gray-800 text-xs md:text-sm font-medium">{client.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Second Row (RTL) */}
            <div className="w-full pt-4 md:pt-8 overflow-hidden">
              <motion.div
                className="flex space-x-6 md:space-x-12"
                animate={{ x: ["-100%", "0%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {[...secondRow, ...secondRow].map((client, index) => (
                  <div key={index} className="flex flex-col items-center min-w-[150px]">
                    <img src={client.logo} alt={client.name} className="h-12 md:h-16 w-auto mb-2 object-contain" />
                    <span className="text-gray-800 text-xs md:text-sm font-medium">{client.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Brand;
