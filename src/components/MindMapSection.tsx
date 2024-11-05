import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const MindMapSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const steps = [
    {
      emoji: "https://em-content.zobj.net/thumbs/320/apple/354/light-bulb_1f4a1.png",
      title: "Identificaiton",
      description: "Identify your unique skills and expertise"
    },
    {
      emoji: "https://em-content.zobj.net/thumbs/320/apple/354/brain_1f9e0.png",
      title: "Strategy",
      description: "Create your personal brand roadmap"
    },
    {
      emoji: "https://em-content.zobj.net/thumbs/320/apple/354/rocket_1f680.png",
      title: "Launch",
      description: "Build your online presence"
    },
    {
      emoji: "https://em-content.zobj.net/thumbs/320/apple/354/chart-increasing_1f4c8.png",
      title: "Growth",
      description: "Scale your audience and impact"
    },
    {
      emoji: "https://em-content.zobj.net/thumbs/320/apple/354/money-bag_1f4b0.png",
      title: "Monetization",
      description: "Transform your brand into income"
    },
    {
      emoji: "https://em-content.zobj.net/thumbs/320/apple/354/trophy_1f3c6.png",
      title: "Success",
      description: "Achieve financial freedom"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900/20 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.15),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          {...fadeIn}
        >
          How It Works
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/20 via-blue-400 to-blue-600/20 transform -translate-y-1/2 hidden md:block" />

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-blue-500 to-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg shadow-blue-500/20 border-2 border-blue-400/20">
                    {index + 1}
                  </div>

                  {/* Emoji Card */}
                  <div className="bg-blue-900/20 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all w-full group hover:-translate-y-1 duration-300 mt-4">
                    <div className="flex flex-col items-center gap-4">
                      <img 
                        src={step.emoji} 
                        alt={step.title}
                        className="w-20 h-20 md:w-24 md:h-24 object-contain"
                      />
                      <div className="text-center">
                        <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-4 md:hidden">
                      <ArrowRight className="w-6 h-6 text-blue-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="text-center mt-16"
            {...fadeIn}
          >
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Follow our proven system to transform your expertise into a Money-Printing personal brand.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};