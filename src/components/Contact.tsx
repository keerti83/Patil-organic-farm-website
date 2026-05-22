import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import MapComponent from './MapComponent';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-brand-paper">
      <div className="max-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="w-full flex justify-center lg:justify-start">
            <div className="max-w-xl w-full text-center lg:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-leaf mb-8 block">Reach Out</span>
              <h3 className="text-5xl md:text-6xl lg:text-7xl mb-12 leading-[0.9]">Start a <br /><span className="italic text-brand-sage">Conversation.</span></h3>
              
              <div className="space-y-10">
                  <div className="flex flex-col items-center lg:items-start">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-leaf mb-2">Connect</h4>
                      <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-2xl sm:text-3xl font-serif italic hover:text-brand-sage transition-colors">{BUSINESS_INFO.phone}</a>
                    </div>
                 </div>
                 
                 <div className="flex flex-col items-center lg:items-start">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-leaf mb-2">Location</h4>
                      <p className="text-lg sm:text-xl font-serif italic text-brand-dirt/70 leading-relaxed max-w-xs">{BUSINESS_INFO.address}</p>
                    </div>
                 </div>

                 <div className="flex flex-col items-center lg:items-start">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-leaf mb-2">Hours</h4>
                      <p className="text-lg sm:text-xl font-serif italic text-brand-dirt/70">{BUSINESS_INFO.timings}</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="w-full h-[400px] sm:h-[450px] lg:h-[550px]"
          >
            <MapComponent />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
