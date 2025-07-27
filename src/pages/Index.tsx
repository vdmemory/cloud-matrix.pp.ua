
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from "@/components/ContactForm.tsx";
import DevelopmentProcess from "@/components/DevelopmentProcess.tsx";

const Index = () => {
  const { t } = useLanguage();
  
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
        <DevelopmentProcess />
        <ContactForm />
    </PageLayout>
  );
};

export default Index;
