import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils';

const categories = ['All', 'Coffee', 'Tea', 'Breakfast', 'Snacks', 'Desserts', 'Beverages'];

const menuItems = [
  { id: 1, name: 'Rose Latte', category: 'Coffee', price: '$5.50', desc: 'Our signature espresso with steamed milk and a hint of house-made rose syrup.', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80' },
  { id: 2, name: 'Vanilla Bean Cappuccino', category: 'Coffee', price: '$4.75', desc: 'Classic cappuccino infused with real Madagascar vanilla bean.', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80' },
  { id: 3, name: 'Earl Grey Lavender', category: 'Tea', price: '$4.25', desc: 'A soothing blend of Earl Grey tea steeped with dried lavender flowers.', img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80' },
  { id: 4, name: 'Matcha Blossom', category: 'Tea', price: '$5.00', desc: 'Ceremonial grade matcha whisked with oat milk and honey.', img: 'https://images.unsplash.com/photo-1515823662972-da6a2b4d3002?auto=format&fit=crop&q=80' },
  { id: 5, name: 'Avocado Toast', category: 'Breakfast', price: '$9.50', desc: 'Smashed avocado on sourdough with cherry tomatoes and microgreens.', img: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80' },
  { id: 6, name: 'Berry Smoothie Bowl', category: 'Breakfast', price: '$11.00', desc: 'Acai blend topped with fresh berries, house granola, and coconut flakes.', img: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80' },
  { id: 7, name: 'Truffle Fries', category: 'Snacks', price: '$7.00', desc: 'Crispy shoestring fries tossed in truffle oil and parmesan.', img: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80' },
  { id: 8, name: 'Pistachio Croissant', category: 'Snacks', price: '$4.50', desc: 'Flaky, buttery croissant filled with sweet pistachio cream.', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80' },
  { id: 9, name: 'Raspberry Tart', category: 'Desserts', price: '$6.50', desc: 'Buttery tart shell filled with vanilla custard and fresh raspberries.', img: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80' },
  { id: 10, name: 'Lemon Lavender Cake', category: 'Desserts', price: '$5.50', desc: 'Moist lemon cake with a delicate lavender glaze.', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80' },
  { id: 11, name: 'Hibiscus Cooler', category: 'Beverages', price: '$4.50', desc: 'Refreshing iced hibiscus tea with a splash of lime.', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80' },
  { id: 12, name: 'Sparkling Elderflower', category: 'Beverages', price: '$4.00', desc: 'Elderflower syrup, sparkling water, and fresh mint.', img: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80' },
];

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
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-text/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl text-brand-text">{item.name}</h3>
                    <span className="font-sans font-medium text-brand-gold">{item.price}</span>
                  </div>
                  <p className="text-sm text-brand-text-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
