
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
        {/* Contact Form - centered */}
        <div className="max-w-2xl mx-auto">
          <div className="animate-fade-in">
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
