import { Link } from 'react-router-dom';
import { Coffee, Leaf, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-beige/50 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80" 
            alt="Cafe Interior" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pt-16">
          <span className="font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-brand-text mb-6 font-medium">Welcome to Bloom</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-text mb-6">A little bloom in every moment.</h1>
          <p className="font-sans text-base md:text-lg text-brand-text-beige max-w-3xl mx-auto mb-10 leading-relaxed">
            Experience the harmony of artisanal coffee and botanical beauty in our cozy sanctuary. 
            A place to pause, reflect, and enjoy the sweeter things in life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/menu" className="px-8 py-4 bg-red-500 text-white font-sans uppercase tracking-wider text-xs hover:bg-brand-text hover:text-brand-beige transition-colors duration-300">
              Explore Menu
            </Link>
            <Link to="/menu" className="px-8 py-4 bg-red-500 text-white font-sans uppercase tracking-wider text-xs hover:bg-brand-text hover:text-brand-beige transition-colors duration-300">
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="flex flex-col items-center">
              <Coffee className="w-10 h-10 text-brand-gold mb-6" strokeWidth={1} />
              <h3 className="font-serif text-2xl text-brand-text mb-4">Artisanal Coffee</h3>
              <p className="text-brand-text-light leading-relaxed text-sm">Carefully sourced beans, roasted to perfection and brewed with precision for the perfect cup.</p>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="w-10 h-10 text-brand-green mb-6" strokeWidth={1} />
              <h3 className="font-serif text-2xl text-brand-text mb-4">Botanical Setting</h3>
              <p className="text-brand-text-light leading-relaxed text-sm">Surround yourself with our curated selection of indoor plants and subtle floral aesthetics.</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-10 h-10 text-brand-pink mb-6" strokeWidth={1} />
              <h3 className="font-serif text-2xl text-brand-text mb-4">Made with Love</h3>
              <p className="text-brand-text-light leading-relaxed text-sm">Freshly baked pastries and heartfelt service to make every visit truly memorable.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Short Story */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 w-full relative">
               <div className="absolute -inset-4 border border-brand-gold/30 z-0 hidden md:block"></div>
               <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80" alt="Pouring coffee" className="w-full h-[500px] object-cover relative z-10 shadow-lg" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-serif text-4xl text-brand-text mb-6">Our Story</h2>
              <h3 className="font-script text-3xl text-brand-pink mb-6">coffee & more</h3>
              <p className="text-brand-text-light leading-relaxed mb-8">
                Bloom Café started with a simple idea: to create a space that feels like a warm embrace. 
                Inspired by the delicate beauty of roses and the comforting aroma of fresh coffee, we've 
                designed a haven where you can escape the rush of everyday life.
              </p>
              <Link to="/about" className="inline-block border-b border-brand-gold text-brand-text pb-1 font-sans uppercase tracking-widest text-xs hover:text-brand-pink hover:border-brand-pink transition-colors">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
