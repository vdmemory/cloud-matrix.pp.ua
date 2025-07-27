
import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { useLanguage } from '@/contexts/LanguageContext';
import {configCompany} from "@/data/configCompany.ts";
import SocialLinks from "@/components/SocialLinks.tsx";

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer id="contact" className="bg-brand-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-6 text-brand-red">
              {configCompany.name}
            </div>
            <p className="text-gray-300 mb-6">
                {language === 'en' ? configCompany.infoEng : configCompany.info}
            </p>
            <p className="text-gray-300 mb-6">
                <a href={`mailto:${configCompany.email}`} className="hover:text-brand-red transition-colors">
                    {configCompany.email}
                </a>
            </p>
            <p className="text-gray-300 mb-6">
              {language === 'en' ? configCompany.addressEng : configCompany.address}
            </p>
            <SocialLinks />
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {configCompany.name}. {t.footer.rights}
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
