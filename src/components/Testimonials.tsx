import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      image: "https://i.ibb.co/GCKtXtc/1-Niall.png",
      name: "Niall (VIP)",
      title: "From $0 to $10k/Month",
      description: "Started with just an idea, now running a successful coaching business"
    },
    {
      image: "https://i.ibb.co/BNvy6pB/Leo.jpg",
      name: "Leo (VIP)",
      title: "$20K/Month after 4 months",
      description: "He started with just 1000$ to invest"
    },
    {
      image: "https://i.ibb.co/0M6M7Bj/Kian.jpg",
      name: "Kian (VIP)",
      title: "$6K/month after 2 months",
      description: "Generates a solid income with a community of 100k+ followers in 2 months"
    },
    {
      image: "https://i.ibb.co/ChvhthX/Max.jpg",
      name: "Max (VIP)",
      title: "179,000 Views in 7 Days",
      description: "Scaled his Tiktok to 179,000 Views in Just 7 Days"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-blue-900/20 to-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Success Stories from Our Best Students
        </h2>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="space-y-4"
            >
              <div className="aspect-[3/4] relative rounded-xl overflow-hidden">
                <img
                  src={testimonials[currentSlide].image}
                  alt={`Success Story ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-400">
                {testimonials[currentSlide].name} - {testimonials[currentSlide].title}
              </h3>
              <p className="text-gray-300 text-sm">
                {testimonials[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2">
            <button
              onClick={prevSlide}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-blue-500 w-4' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="space-y-4 group">
              <div className="aspect-[3/4] relative rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={`Success Story ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-400">
                {item.name} - {item.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Quote */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-2xl p-8 md:p-12">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-blue-400/30" />
            <Quote className="absolute bottom-4 right-4 w-8 h-8 text-blue-400/30 rotate-180" />
            
            <div className="text-center px-8">
              <p className="text-xl md:text-2xl text-gray-200 font-light italic leading-relaxed">
                "Your personal brand is not what you say it is, it's what others say about you when you're not in the room."
              </p>
              <div className="mt-6">
                <p className="font-bold text-blue-400">Gary Vaynerchuk</p>
                <p className="text-sm text-gray-400">CEO of VaynerMedia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};