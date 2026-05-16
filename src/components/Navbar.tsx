import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf } from 'lucide-react';
import { NAVIGATION } from '../constants';
import { cn } from '../lib/utils';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-brand-paper/80 backdrop-blur-md py-3 border-b border-brand-earth/50" : "bg-transparent py-6"
      )}
    >
      <div className="max-width">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-3">
              <Logo className="origin-left transition-transform" />
            </a>
            <div className="hidden md:flex h-6 w-px bg-brand-earth/20" />
            <a 
              href="#" 
              className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-brand-forest text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-brand-leaf transition-all shadow-sm"
            >
              Home
            </a>
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-8">
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAVIGATION.slice(1).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-forest/60 hover:text-brand-forest transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Menu Trigger (3-lined) */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-brand-forest p-1 hover:bg-brand-sage/10 rounded-full transition-colors flex items-center gap-2 group"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest hidden sm:block opacity-60 group-hover:opacity-100 transition-opacity">Menu</span>
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Compact Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for closing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[55] bg-black/5"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="fixed top-20 right-6 z-[60] w-64 bg-brand-paper shadow-2xl rounded-2xl border border-brand-earth/30 overflow-hidden"
            >
              <div className="p-2">
                <div className="flex justify-between items-center px-4 py-3 border-b border-brand-earth/10 mb-2">
                  <div className="flex items-center gap-2">
                    <Leaf size={14} className="text-brand-leaf" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-forest/40">Menu</span>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-brand-forest/40 hover:text-brand-forest transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="flex flex-col">
                  {NAVIGATION.map((item, idx) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-sm font-medium text-brand-forest hover:bg-brand-sage/10 rounded-xl transition-colors flex items-center justify-between group"
                    >
                      <span>{item.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-leaf opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
