import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1495474472207-464a8d4cb7a4?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80"
];

export default function Gallery() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-brand-text mb-6">Gallery</h1>
          <p className="font-sans text-brand-text-light max-w-2xl mx-auto">
            A glimpse into the aesthetic and atmosphere of Bloom Café.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
              className="break-inside-avoid relative overflow-hidden group rounded-xl bg-brand-beige"
            >
              <div className="absolute inset-0 bg-brand-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              <img 
                src={src} 
                alt={`Bloom Cafe aesthetic ${index + 1}`} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
