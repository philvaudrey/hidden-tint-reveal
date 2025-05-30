
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-slide-in">
            <h3 className="font-oswald text-2xl font-bold text-white mb-8 uppercase tracking-wide">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-gray-400">Bay of Plenty, New Zealand</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-400">info@hiddentints.co.nz</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-gray-400">Available on request</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Why Choose */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="p-6 bg-gray-900/50 border border-gray-800">
              <h4 className="font-oswald text-lg font-bold text-white mb-4 uppercase tracking-wide">
                Why Choose Hidden Tints?
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-white mt-2 mr-3 flex-shrink-0"></span>
                  Premium quality films and materials
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-white mt-2 mr-3 flex-shrink-0"></span>
                  Professional installation and finish
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-white mt-2 mr-3 flex-shrink-0"></span>
                  Local business with proven experience
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-white mt-2 mr-3 flex-shrink-0"></span>
                  Competitive pricing for high-end results
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
