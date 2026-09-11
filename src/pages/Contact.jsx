import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { contactInfo } from '../data/contactInfo';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-brand-text mb-6">Get in Touch</h1>
          <p className="font-sans text-brand-text-light max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our menu, 
            want to host a small event, or just want to say hello.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-5xl mx-auto">
          
          <div className="flex-1">
            <ContactForm />
          </div>

          <div className="flex-1 space-y-10 lg:pt-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center flex-shrink-0 text-brand-gold">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-brand-text mb-2">Location</h4>
                <p className="text-brand-text-light leading-relaxed">{contactInfo.address.street}<br />{contactInfo.address.city}</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center flex-shrink-0 text-brand-gold">
                <Clock size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-brand-text mb-2">Opening Hours</h4>
                <ul className="text-brand-text-light space-y-1">
                  {contactInfo.hours.map((hour, index) => (
                    <li key={index}>{hour.day}: {hour.time}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center flex-shrink-0 text-brand-gold">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-brand-text mb-2">Phone</h4>
                <p className="text-brand-text-light">{contactInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center flex-shrink-0 text-brand-gold">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-brand-text mb-2">Email</h4>
                <p className="text-brand-text-light">{contactInfo.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
