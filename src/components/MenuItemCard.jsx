import { motion } from 'framer-motion';

export default function MenuItemCard({ item }) {
  return (
    <motion.div
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
  );
}
