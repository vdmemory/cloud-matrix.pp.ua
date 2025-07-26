
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactInfo = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-brand-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-brand-black rounded-full text-sm font-medium">
            {t.contact.title}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-black">
            {t.contact.title}
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CEO Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="CEO"
                className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
              />
              <h3 className="text-xl font-bold text-gray-900">Alex Johnson</h3>
              <p className="text-gray-600 mb-4">CEO & Founder</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:alex@devcorp.com" className="flex items-center text-gray-700 hover:text-brand-red">
                  <Mail className="w-5 h-5 mr-2" />
                  alex@devcorp.com
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-brand-red"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* CTO Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="CTO"
                className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
              />
              <h3 className="text-xl font-bold text-gray-900">Sarah Chen</h3>
              <p className="text-gray-600 mb-4">CTO</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:sarah@devcorp.com" className="flex items-center text-gray-700 hover:text-brand-red">
                  <Mail className="w-5 h-5 mr-2" />
                  sarah@devcorp.com
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-brand-red"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
                <a href="tel:+1234567890" className="flex items-center text-gray-700 hover:text-brand-red">
                  <Phone className="w-5 h-5 mr-2" />
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
