import { cn } from '../lib/utils';
import { BUSINESS_INFO } from '../constants';

interface LogoProps {
  className?: string;
  iconClassName?: string;
}

export default function Logo({ className, iconClassName }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-4 group", className)}>
      <div className={cn(
        "w-16 h-16 bg-[#FDFDE3] rounded-2xl flex items-center justify-center p-1.5 overflow-hidden border border-brand-earth/20 shadow-md transition-all duration-500 group-hover:scale-110",
        iconClassName
      )}>
        {/* custom SVG version of the brand logo (hand cupping leaves) */}
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Leaves */}
          <path d="M50 15C50 15 42 22 42 40C42 58 50 65 50 65C50 65 58 58 58 40C58 22 50 15 50 15Z" fill="#84A92B" />
          <path d="M30 25C30 25 22 32 22 50C22 68 30 75 30 75C30 75 38 68 38 50C38 32 30 25 30 25Z" fill="#A4C639" />
          <path d="M70 25C70 25 62 32 62 50C62 68 70 75 70 75C70 75 78 68 78 50C78 32 70 25 70 25Z" fill="#6B8E23" />
          
          {/* Accent Buds */}
          <circle cx="28" cy="45" r="5" fill="#1B4332" />
          <circle cx="72" cy="45" r="5" fill="#1B4332" />
          
          {/* Hand/Cradle - Symbolizing care and nature */}
          <path 
            d="M20 60C20 60 25 85 50 85C75 85 80 60 80 60C80 60 70 68 50 68C30 68 20 60 20 60Z" 
            fill="#1B4332" 
          />
          {/* Fingers / Stylized Hand Accents */}
          <path d="M22 62L12 45L18 40L28 55" fill="#1B4332" opacity="0.8" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-display font-medium text-lg md:text-xl text-brand-forest leading-tight tracking-tight">
          Patil Organic Manure,
        </span>
        <div className="flex items-center gap-2.5 mt-0.5">
          <span className="font-display font-light text-base md:text-lg text-brand-leaf leading-none">
            Earthworms And Dairy Farm
          </span>
          <span className="h-px flex-1 bg-brand-sage/20 min-w-4 hidden md:block" />
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-sage whitespace-nowrap">
            Belagavi
          </span>
        </div>
      </div>
    </div>
  );
}
