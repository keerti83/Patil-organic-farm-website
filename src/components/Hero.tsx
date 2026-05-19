import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-40 lg:pt-52 overflow-hidden bg-brand-paper">
      <div className="max-width relative z-10 w-full text-center lg:text-left">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            >
              <h1 className="text-7xl md:text-[120px] text-brand-forest leading-[0.8] mb-12 relative flex flex-col items-center lg:items-start tracking-[-0.05em] [word-spacing:-0.15em]">
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
                <span className="text-brand-sage font-display block relative w-fit mr-[-0.05em]">
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
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-7 relative hidden lg:block group"
          >
            <div className="bg-white rounded-3xl overflow-hidden p-2 sm:p-4 border border-brand-earth">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipPCQ9ca-ZgpZMVIDbhvAoBY-MVU8HDPyGmZitLw=s2048"
                alt="Patil Organic Farm"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-[1.25rem] hover:scale-[1.02] transition-transform duration-[2000ms]"
              />
            </div>
            <div className="absolute inset-0 border border-brand-sage/20 rounded-[2rem] scale-105 pointer-events-none" />
          </motion.div>
        </div>
      </div>

    </section>
  );
}
