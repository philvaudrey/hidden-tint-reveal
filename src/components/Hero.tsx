
import Contact from './Contact';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-white/20 rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-white/20 -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <img 
            src="/lovable-uploads/41d6b94b-6349-496f-a7cc-9220b2898036.png" 
            alt="Hidden Tints" 
            className="mx-auto mb-12 h-48 md:h-64 lg:h-72 w-auto"
          />
          
          <div className="space-y-4 mb-12">
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Stay Hidden, Stay Cool, Stay Protected
            </p>
          </div>
          
          <button 
            onClick={scrollToContact}
            className="bg-white text-black px-8 py-3 font-oswald uppercase tracking-wider font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 mb-16"
          >
            Enquire
          </button>
        </div>
      </div>

      {/* Contact Form directly below */}
      <div className="w-full">
        <Contact />
      </div>
    </section>
  );
};

export default Hero;
