import React, { useRef, useState, useLayoutEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ChevronDown, ChevronUp } from "lucide-react";
import AnimatedWords from "../components/AnimatedWords";
import { Typewriter } from "react-simple-typewriter";

// Helper function for asset URLs
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function Home() {
  const parallax = useRef(null);
  useLayoutEffect(() => {
    if (parallax.current) {
      console.log("Updating Parallax Layout...");
      parallax.current.update();
    }
  }, []);
  
  
  
  
  const [openIndex, setOpenIndex] = useState(null);

  const influencers = [
    {
      name: "Matt Par",
      title: "1B+ Social Media Views",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote:
        "Short form content is blowing up and VidAI is the BEST way to generate 100 great shorts per month that actually get views.",
    },
    {
      name: "Priyam Raj",
      title: "7-Figure Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote:
        "We've made the easiest way for you to generate amazing shorts instantly.",
    },
  ];

  const faqs = [
    {
      question: "What is ZyloChat?",
      answer:
        "ZyloChat is an Instagram automation tool designed to boost engagement by automating DMs, replying to comments, and increasing reel virality.",
    },
    {
      question: "How does ZyloChat work?",
      answer:
        "ZyloChat connects to your Instagram account and automates responses based on triggers like DMs, comments, and mentions.",
    },
    {
      question: "Can I customize my responses?",
      answer:
        "Absolutely! ZyloChat lets you create personalized DM templates, automated comment replies, and smart workflows.",
    },
    {
      question: "Does ZyloChat support multiple Instagram accounts?",
      answer:
        "Yes, our platform supports multi-account management, making it ideal for agencies and businesses.",
    },
    {
      question: "What pricing plans do you offer?",
      answer:
        "We offer flexible pricing, including a free trial. Paid plans unlock advanced automation features and increased usage limits.",
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={4} style={{ minHeight: "100vh" }}>
        {/* Background Colors */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{ backgroundColor: "#d5def5" }}
        />
        <ParallaxLayer
          offset={1}
          speed={0}
          factor={1}
          style={{ backgroundColor: "#6643b5" }}
        />
        <ParallaxLayer
          offset={2}
          speed={0}
          factor={1}
          style={{ backgroundColor: "#8594e4" }}
        />
        <ParallaxLayer
          offset={3}
          speed={0}
          factor={1}
          style={{ backgroundColor: "#430f58" }}
        />

        {/* Stars Background */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        {/* Hero Section */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current?.scrollTo(1)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimatedWords />
          <h1 className="text-4xl md:text-7xl justify-center font-extrabold text-white mb-8">
            Welcome to <span className="text-[#430f58]">ZyloChat</span>
          </h1>
          <p className="text-lg md:text-2xl text-[#8594e4] mt-2 max-w-2xl mx-auto text-center mb-12">
            <Typewriter
              words={[
                "Automate your Instagram engagement.",
                "Boost reel virality with AI.",
                "Increase reach and engagement easily.",
              ]}
              loop={Infinity}
            />
          </p>
        </ParallaxLayer>

        {/* Cloud Layers for Section 1 */}
        <ParallaxLayer offset={0.95} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        {/* How It Works Section */}
        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current?.scrollTo(2)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl md:text-7xl font-bold mb-12 text-white text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {["Connect", "Set up", "Monitor", "Optimize"].map(
                (step, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-xl text-white text-center transform hover:scale-105 transition-transform duration-200"
                  >
                    <p className="text-lg font-semibold">✅ {step}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </ParallaxLayer>

        {/* Satellite Layer */}
        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={url("satellite4")}
            style={{ width: "15%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        {/* Cloud Layers for Section 2 */}
        <ParallaxLayer offset={1.95} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        {/* Influencers Section */}
        <ParallaxLayer
          offset={2}
          speed={0.1}
          onClick={() => parallax.current?.scrollTo(3)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="max-w-5xl w-full">
            <h2 className="text-5xl font-bold mb-8 text-white text-center">
              Trusted By Top Influencers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {influencers.map((influencer, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-[#430f58] p-6 rounded-lg shadow-lg text-white transform hover:scale-105 transition"
                >
                  <img
                    src={influencer.image}
                    alt={influencer.name}
                    className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold">{influencer.name}</h3>
                  <p className="text-gray-400 mb-4">{influencer.title}</p>
                  <p className="text-gray-300 italic border-l-4 pl-4 border-gray-600">
                    {influencer.quote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>
        {/* Earth Layer */}
        <ParallaxLayer
          offset={2}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: 0.2,
          }}
        >
          <img src={url("earth")} style={{ width: "40%" }} />
        </ParallaxLayer>

        {/* Cloud Layers for Section 3 */}
        <ParallaxLayer offset={2.9} speed={0.4} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        {/* FAQ Section */}
        <ParallaxLayer
          offset={3}
          speed={0.4}
          onClick={() => parallax.current?.scrollTo(0)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="max-w-3xl w-full">
            <h2 className="text-4xl font-bold mb-8 text-white text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click from bubbling to ParallaxLayer
                      setOpenIndex(openIndex === index ? null : index);
                    }}
                    className="w-full flex items-center justify-between p-4 bg-gray-900 rounded-lg text-white hover:bg-opacity-100"
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </button>

                  {openIndex === index && (
                    <div className="p-4 bg-gray-800 rounded-lg text-white">
                      <p className="text-gray-200">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
