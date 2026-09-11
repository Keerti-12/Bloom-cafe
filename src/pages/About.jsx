export default function About() {
  return (
    <div className="py-24 bg-brand-beige min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <img src="/logo.png" alt="Bloom Cafe" className="h-32 w-32 md:h-40 md:w-40 object-cover rounded-full mb-8 shadow-md" />
          <h1 className="font-serif text-5xl text-brand-text mb-4">About Bloom Café</h1>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-pink"></div>
          <h2 className="font-serif text-3xl text-brand-text mb-6 text-center">Our Philosophy</h2>
          <div className="space-y-6 text-brand-text-light leading-relaxed text-lg">
            <p>
              At Bloom Café, we believe that life’s most beautiful moments are often the simplest ones. 
              The warmth of a perfectly crafted latte on a crisp morning. The delicate scent of fresh 
              roses. The comfort of a familiar smile.
            </p>
            <p>
              Founded in 2024, our mission was to create more than just a place to grab a quick coffee. 
              We envisioned a sanctuary—a soft, feminine, and welcoming space where time slows down just 
              enough for you to appreciate the 'now'.
            </p>
            <p>
              Every detail in our café, from the muted sage-green accents to our carefully curated botanical 
              arrangements, has been chosen to evoke a sense of peace and elegance. Our menu is an extension 
              of this philosophy, featuring high-quality, artisanal ingredients prepared with love and intention.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80" 
            alt="Coffee preparation" 
            className="w-full h-96 object-cover rounded-xl"
          />
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80" 
            alt="Cafe interior" 
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
