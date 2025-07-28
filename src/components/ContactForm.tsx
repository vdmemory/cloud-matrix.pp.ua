
import {  Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {useLanguage} from "@/contexts/LanguageContext.tsx";
import {configCompany} from "@/data/configCompany.ts";

const ContactForm = () => {
  const { t, language } = useLanguage();

  const actionEmail = `https://formsubmit.co/${configCompany.formEmail}`;

  const titleEng = "Contact Us Today";
    const titleUa = "Зв'яжіться з нами сьогодні";
    const subtitleEng = "Have questions about our AI-powered sensor solutions? Reach out to our team and let's discuss how we can help bring your ideas to life.";
    const subtitleUa = "Маєте запитання щодо наших рішень на основі штучного інтелекту? Зв'яжіться з нашою командою, і ми обговоримо, як ми можемо допомогти втілити ваші ідеї в життя.";

    const title = language === 'ua' ? titleUa : titleEng;
    const subtitle = language === 'ua' ? subtitleUa : subtitleEng;

  return <section id="contact" className="bg-gradient-to-b from-white to-black text-white relative py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            {title}
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-700 text-black">
            <form action={actionEmail} method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                  <Input placeholder={t.contact.first_name} className="border-primary/20 focus:border-primary" />
                </motion.div>
                <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                  <Input placeholder={t.contact.last_name} className="border-primary/20 focus:border-primary" />
                </motion.div>
              </div>
              <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
              >
                <Input placeholder={t.contact.email} type="email" className="border-primary/20 focus:border-primary" />
              </motion.div>
              <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
              >
                <Input placeholder={t.contact.phone} type="tel" className="border-primary/20 focus:border-primary" />
              </motion.div>
              <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
              >
                <Textarea
                    placeholder={t.contact.message}
                    className="min-h-32 border-primary/20 focus:border-primary"
                />
              </motion.div>
              <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
              >
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
                  {t.contact.send}
                </Button>
              </motion.div>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-700 text-black">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.contact.email_us}</h3>
              <p className="text-gray-600 mb-2">{t.contact.general_inquiries}</p>
              <a href="mailto:info@wrlds.com" className="text-blue-500 hover:underline">{configCompany.formEmail}</a>
              <p className="text-gray-600 mt-2 mb-2">
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactForm;
