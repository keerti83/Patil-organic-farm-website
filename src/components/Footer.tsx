import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-brand-paper border-t border-brand-earth">
      <div className="max-width">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <Logo />
          
          <div className="flex flex-col md:items-end text-[10px] font-bold uppercase tracking-widest text-brand-dirt/40 space-y-2">
            <p>© {currentYear} {BUSINESS_INFO.name}</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand-forest transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-forest transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
