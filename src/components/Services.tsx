
import { Car, Building, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Vehicle Tinting",
      description: "Professional automotive window tinting for cars, trucks, and commercial vehicles. UV protection and privacy combined.",
      features: ["UV Protection", "Heat Reduction", "Privacy Enhancement", "Glare Reduction"]
    },
    {
      icon: Building,
      title: "Building Tinting", 
      description: "Commercial and residential window film installation. Energy efficiency and comfort for your property.",
      features: ["Energy Savings", "Climate Control", "Professional Finish", "Custom Solutions"]
    },
    {
      icon: Shield,
      title: "Paint Protection",
      description: "Premium paint protection film to keep your vehicle looking pristine. Invisible armor against the elements.",
      features: ["Self-Healing Film", "Rock Chip Protection", "Scratch Resistance", "Maintains Value"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide stencil-text">
            Services
          </h2>
          <div className="w-16 h-0.5 bg-white mx-auto street-divider"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="animate-fade-in group hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gray-900/50 p-8 h-full border border-gray-800 hover:border-gray-600 transition-colors">
                <service.icon className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform" />
                
                <h3 className="font-oswald text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-gray-500 text-sm flex items-center">
                      <span className="w-1 h-1 bg-white mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
