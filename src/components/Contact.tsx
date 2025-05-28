
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `Hidden Tints Enquiry - ${formData.service}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}`;
    
    const mailtoLink = `mailto:info@hiddentints.co.nz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your enquiry is ready to send!",
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide stencil-text">
            Get In Touch
          </h2>
          <div className="w-16 h-0.5 bg-white mx-auto street-divider"></div>
        </div>
        
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
            
            <div className="mt-12 p-6 bg-gray-900/50 border border-gray-800">
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
                  Local Whakatane business with proven experience
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-white mt-2 mr-3 flex-shrink-0"></span>
                  Competitive pricing for high-end results
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-white"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-white"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-white"
                />
              </div>
              
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 text-white rounded-md focus:outline-none focus:border-white"
                >
                  <option value="">Select Service *</option>
                  <option value="Vehicle Tinting">Vehicle Tinting</option>
                  <option value="Building Tinting">Building Tinting</option>
                  <option value="Paint Protection">Paint Protection Film</option>
                  <option value="Multiple Services">Multiple Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-white resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-gray-200 font-oswald uppercase tracking-wider font-semibold py-3"
              >
                Send Enquiry
              </Button>
              
              <p className="text-gray-500 text-sm text-center">
                * Required fields. We'll respond to your enquiry within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
