import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const REASONS = [
  {
    title: "Honest Pricing",
    description: "Premium quality shouldn't come at a premium price.",
  },
  {
    title: "Pure Integrity",
    description: "Nutrient-dense compost free from chemical additives.",
  },
  {
    title: "Deep Expertise",
    description: "Personalized advice for your specific soil conditions.",
  },
  {
    title: "Local Trust",
    description: "Supported by over 500+ local farming partners.",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="why-us" ref={containerRef} className="section-padding bg-white relative overflow-hidden">
      {/* Subtle Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-[120%] z-0 opacity-[0.03] pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000" 
          alt="Nature Texture"
          className="w-full h-full object-cover grayscale"
        />
      </motion.div>

      <div className="max-width relative z-10">
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-leaf mb-6 block">The Advantage</span>
          <h2 className="text-5xl md:text-7xl">Nature's <span className="italic">Contract.</span></h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {REASONS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 py-12 border-l border-brand-earth hover:border-brand-leaf transition-colors duration-500 bg-white/40 backdrop-blur-[2px]"
            >
              <h4 className="text-2xl mb-4 text-brand-forest">{item.title}</h4>
              <p className="text-brand-dirt/60 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
