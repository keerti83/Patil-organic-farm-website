import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-brand-paper">
      <div className="max-width">
        <div className="max-w-3xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-leaf mb-8 block">Reach Out</span>
            <h3 className="text-6xl md:text-7xl mb-16 leading-[0.9]">Start a <br /><span className="italic text-brand-sage">Conversation.</span></h3>
            
            <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="w-px h-12 bg-brand-sage/40" />
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-leaf mb-2">Connect</h4>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-3xl font-serif italic hover:text-brand-sage transition-colors">{BUSINESS_INFO.phone}</a>
                  </div>
               </div>
               
               <div className="flex gap-8">
                  <div className="w-px h-12 bg-brand-sage/40" />
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-leaf mb-2">Location</h4>
                    <p className="text-xl font-serif italic text-brand-dirt/70 leading-relaxed max-w-xs">{BUSINESS_INFO.address}</p>
                  </div>
               </div>

               <div className="flex gap-8">
                  <div className="w-px h-12 bg-brand-sage/40" />
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-leaf mb-2">Hours</h4>
                    <p className="text-xl font-serif italic text-brand-dirt/70">{BUSINESS_INFO.timings}</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
