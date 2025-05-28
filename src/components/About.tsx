
const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-oswald text-3xl md:text-5xl font-bold text-white mb-8 uppercase tracking-wide stencil-text">
            About Hidden Tints
          </h2>
          
          <div className="w-16 h-0.5 bg-white mx-auto mb-12 street-divider"></div>
          
          <div className="space-y-8 text-left">
            <div className="animate-slide-in">
              <p className="text-gray-300 text-lg leading-relaxed">
                Based in <span className="font-oswald uppercase tracking-wider text-white">Whakatane, New Zealand</span>, 
                Hidden Tints brings premium window tinting services to the Bay of Plenty region.
              </p>
            </div>
            
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-gray-400 leading-relaxed">
                We specialize in high-end automotive and architectural window films, delivering 
                professional results that enhance privacy, comfort, and protection. Our work speaks 
                for itself – subtle, sophisticated, and built to last.
              </p>
            </div>
            
            <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-gray-400 leading-relaxed">
                Quality installation, premium materials, and attention to detail define our approach. 
                Every project is handled with the precision and care your investment deserves.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="font-oswald text-2xl font-bold text-white mb-2">Premium</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Materials</div>
              </div>
              <div className="text-center">
                <div className="font-oswald text-2xl font-bold text-white mb-2">Expert</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Installation</div>
              </div>
              <div className="text-center">
                <div className="font-oswald text-2xl font-bold text-white mb-2">Local</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Whakatane</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
