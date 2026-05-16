import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';

export default function Products() {
  return (
    <section id="products" className="section-padding bg-brand-paper">
      <div className="max-width">
        <div className="mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-leaf mb-6 block">The Catalog</span>
          <h2 className="text-5xl md:text-7xl mb-8">Earth <span className="italic">Essentials.</span></h2>
          <p className="text-brand-dirt/60 text-lg max-w-sm leading-relaxed font-light">
            Each product is a result of meticulous natural processes designed to enrich your land.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className="flex flex-col group"
            >
              <div className="aspect-[4/5] bg-brand-earth overflow-hidden rounded-[80px] mb-8 relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover grayscale-[0.4] group-hover:scale-110 transition-all duration-700"
                />
              </div>
              
              <div className="px-2">
                <h4 className="text-3xl mb-8">{product.title}</h4>
                <div className="w-12 h-px bg-brand-earth group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
