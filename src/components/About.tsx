import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export default function About() {
  return (
    <section id="about" className="section-padding bg-brand-earth/20 overflow-hidden">
      <div className="max-width">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-leaf mb-8 block">Our Legacy</span>
            <h3 className="text-6xl md:text-7xl mb-12 leading-[0.95]">
              Harvesting <br /><span className="italic text-brand-sage">Authenticity.</span>
            </h3>
            
            <div className="space-y-8 text-brand-dirt/70 text-lg font-light leading-relaxed mb-16 lg:max-w-md">
              <p>
                {BUSINESS_INFO.name} represents a commitment to the earth in Belagavi. We believe true productivity begins beneath the surface.
              </p>
              <p>
                For over a decade, we have refined the alchemy of soil nourishment, delivering products that breathe life back into the land.
              </p>
            </div>

            <div className="flex flex-wrap gap-12 font-serif italic text-3xl">
               <div className="flex flex-col">
                  <span>10+</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-sage not-italic mt-2">Years Active</span>
               </div>
               <div className="flex flex-col">
                  <span>500+</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-sage not-italic mt-2">Partners</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 relative group"
          >
            <div className="bg-white rounded-3xl overflow-hidden p-2 border border-brand-earth">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipPCQ9ca-ZgpZMVIDbhvAoBY-MVU8HDPyGmZitLw=s1200"
                alt="Working at Farm"
                className="rounded-[1.25rem] w-full h-auto object-contain grayscale-[0.2] transition-transform duration-1000 ease-out group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 border border-brand-sage/20 rounded-[2rem] scale-105 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
