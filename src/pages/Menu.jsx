import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils';
import { categories, menuItems } from '../data/menu';
import MenuItemCard from '../components/MenuItemCard';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-24 bg-brand-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-brand-text mb-6">Our Menu</h1>
          <p className="font-sans text-brand-text-light max-w-2xl mx-auto">
            Thoughtfully crafted beverages and bites, made with high-quality ingredients and a touch of botanical inspiration.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full font-sans text-sm tracking-wider uppercase transition-all duration-300",
                activeCategory === cat 
                  ? "bg-brand-pink text-white shadow-md" 
                  : "bg-white text-brand-text-light hover:bg-brand-pink-light hover:text-brand-text"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
