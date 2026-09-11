export default function ContactForm() {
  return (
    <div className="bg-brand-beige p-8 md:p-10 rounded-xl shadow-sm">
      <h3 className="font-serif text-2xl text-brand-text mb-6">Send us a message</h3>
      <form className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm text-brand-text-light mb-2">Name</label>
          <input type="text" id="name" className="w-full px-4 py-3 bg-white border border-brand-text/10 rounded-md focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-brand-text-light mb-2">Email</label>
          <input type="email" id="email" className="w-full px-4 py-3 bg-white border border-brand-text/10 rounded-md focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all" placeholder="your@email.com" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-brand-text-light mb-2">Message</label>
          <textarea id="message" rows="5" className="w-full px-4 py-3 bg-white border border-brand-text/10 rounded-md focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all resize-none" placeholder="How can we help you?"></textarea>
        </div>
        <button type="button" className="w-full py-4 bg-brand-pink text-white font-sans uppercase tracking-wider text-sm hover:bg-brand-pink-light hover:text-brand-text transition-colors duration-300 rounded-md mt-2">
          Send Message
        </button>
      </form>
    </div>
  );
}
