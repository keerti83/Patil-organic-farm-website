import { motion } from "motion/react";

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-brand-paper py-24">
      <div className="max-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand-sage font-medium tracking-widest uppercase text-sm mb-4 block">Visual Journey</span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-forest">Farm Gallery</h2>
          <div className="h-1 w-20 bg-brand-earth mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Gallery Content Area - Waiting for instructions */}
        <div className="min-h-[400px] flex items-center justify-center border-2 border-dashed border-brand-earth/20 rounded-[40px]">
          <p className="text-brand-earth/60 font-serif italic text-lg">Images coming soon...</p>
        </div>
      </div>
    </section>
  );
}
