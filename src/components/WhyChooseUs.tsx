import { motion } from 'motion/react';

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
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="max-width">
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-leaf mb-6 block">The Advantage</span>
          <h2 className="text-5xl md:text-7xl">Nature's <span className="italic">Contract.</span></h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {REASONS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="px-6 py-12 border-l border-brand-earth hover:border-brand-leaf transition-colors duration-500"
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
