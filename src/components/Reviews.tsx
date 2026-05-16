import { motion } from 'motion/react';
import { REVIEWS } from '../constants';

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-brand-paper">
      <div className="max-width">
        <div className="mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-leaf mb-6 block">Voices</span>
          <h3 className="text-6xl md:text-8xl leading-none text-brand-forest">
            Community <br /><span className="italic text-brand-sage">Journal.</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              className="group p-8 md:p-10 bg-white border border-brand-earth rounded-[32px] h-full flex flex-col hover:border-brand-sage/50 transition-all duration-700 shadow-sm hover:shadow-xl hover:shadow-brand-forest/5"
            >
              <p className="text-lg md:text-xl italic leading-relaxed text-brand-forest/90">
                "{review.content}"
              </p>
              <div className="mt-8 w-12 h-px bg-brand-earth group-hover:w-16 transition-all duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
