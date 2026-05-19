import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-brand-paper">
      <div className="max-width relative z-10 w-full text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            >
              <h1 className="text-7xl md:text-[120px] text-brand-forest leading-[0.8] mb-12 relative flex flex-col items-center lg:items-start">
                <span className="font-serif italic block mb-12 relative w-fit">
                  Nature’s
                  <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    className="absolute -bottom-6 left-0 h-4 overflow-hidden"
                  >
                    <svg width="100%" height="12" viewBox="0 0 160 12" fill="none" preserveAspectRatio="none" className="w-full">
                      <path 
                        d="M2 10C25 10 20 2 45 2C70 2 65 10 90 10C115 10 110 2 158 2" 
                        stroke="#3D5A43" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </span>
                <span className="text-brand-sage font-display block tracking-tighter relative w-fit">
                  Gold.
                  <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1, ease: [0.19, 1, 0.22, 1] }}
                    className="absolute -bottom-6 left-0 h-4 overflow-hidden"
                  >
                    <svg width="100%" height="12" viewBox="0 0 180 12" fill="none" preserveAspectRatio="none" className="w-full">
                      <path 
                        d="M2 10C30 10 25 2 55 2C85 2 80 10 110 10C140 10 135 2 178 2" 
                        stroke="#3D5A43" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-brand-dirt/60 max-w-xl leading-relaxed font-light mb-16 mx-auto lg:mx-0">
                Premium organic solutions harvested with regenerative precision in the heart of Belagavi.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                <a
                  href="#products"
                  className="bg-brand-forest text-white px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.3em] transition-all hover:bg-brand-leaf"
                >
                  View Collection
                </a>
                <a
                  href="#about"
                  className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-brand-forest group"
                >
                  Our Philosophy
                  <div className="w-10 h-px bg-brand-sage group-hover:w-16 transition-all duration-500" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="w-[502px] h-[550px] rounded-[200px] overflow-hidden border-[1px] border-brand-earth p-4">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEYVC6Ap44ecUhtaI_LxlGJKF8sVcwKBIGCleRgVLucy87HLr2VT2bEqepGgRrHwJMl-NqCOB_o3OJE1SMMlBrbUeDktpOD9y2x0plXs7wjtruhPuMPCCIS9QnRikkXaVoj31VY=w1200"
                alt="Organic Farming"
                className="w-full h-full object-cover rounded-[180px] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ArrowDown size={24} strokeWidth={1} />
      </div>
    </section>
  );
}
