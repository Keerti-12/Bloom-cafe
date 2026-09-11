import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-text text-brand-beige pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Story */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex flex-col items-center md:items-start leading-none mb-4">
              <span className="font-serif text-3xl text-brand-pink font-semibold tracking-wide">
                Bloom
              </span>
              <span className="font-sans text-xs tracking-[0.3em] text-brand-green font-medium uppercase mt-1">
                Café
              </span>
            </Link>
            <p className="font-script text-2xl text-brand-gold mb-4">coffee & more</p>
            <p className="text-brand-beige/70 text-sm max-w-xs leading-relaxed">
              A cozy sanctuary where every cup is crafted with love, and every moment blooms into a beautiful memory.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-xl text-brand-pink-light mb-6">Visit Us</h4>
            <ul className="space-y-4 text-sm text-brand-beige/80">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-gold flex-shrink-0" />
                <span>123 Floral Avenue, Blossom District</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-gold flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-gold flex-shrink-0" />
                <span>hello@bloomcafe.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-xl text-brand-pink-light mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-brand-beige/80">
              <li className="flex justify-between w-48 border-b border-brand-beige/10 pb-2">
                <span>Mon - Fri</span>
                <span>7:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between w-48 border-b border-brand-beige/10 pb-2">
                <span>Saturday</span>
                <span>8:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between w-48 border-b border-brand-beige/10 pb-2">
                <span>Sunday</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
            </ul>
            <div className="flex gap-6 mt-6 text-sm font-sans tracking-widest text-brand-beige/60">
              <a href="#" className="hover:text-brand-pink transition-colors">IG</a>
              <a href="#" className="hover:text-brand-pink transition-colors">FB</a>
              <a href="#" className="hover:text-brand-pink transition-colors">X</a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-beige/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-beige/50">
          <p>&copy; {new Date().getFullYear()} Bloom Café. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-beige transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-beige transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
