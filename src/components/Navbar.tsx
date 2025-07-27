
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import logo from '@/assets/logo.png';
import {configCompany} from "@/data/configCompany.ts";
import SocialLinks from "@/components/SocialLinks.tsx";

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-black")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
          >
            <img src={logo} alt="logo company" className={`h-14`} />
            <span className={cn(isScrolled ? "text-xl font-bold" : "text-white text-xl font-bold")} >
              {configCompany.name}
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">

            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <nav className="hidden md:flex items-center space-x-2">
                <a href="#" className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-brand-red" : "text-gray-100 hover:text-white bg-transparent hover:bg-brand-dark-red")}>{t.nav.home}</a>
                <a href="#services" className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-brand-red" : "text-gray-100 hover:text-white bg-transparent hover:bg-brand-dark-red")}>{t.nav.services}</a>
                <a href="#projects" className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-brand-red" : "text-gray-100 hover:text-white bg-transparent hover:bg-brand-dark-red")}>{t.nav.projects}</a>
                <a href="#development" className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-brand-red" : "text-gray-100 hover:text-white bg-transparent hover:bg-brand-dark-red")}>{t.nav.development}</a>
              </nav>

              <SocialLinks isHeader isLight />

              <NavigationMenuList>

                <NavigationMenuItem>
                  <LanguageSwitcher />
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-brand-red text-white hover:bg-brand-bright-red" : "bg-brand-dark-red text-white hover:bg-brand-red")}>
                    {t.nav.contact}
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Reduced height and simplified */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-sm overflow-y-auto max-h-80", isScrolled ? "bg-white" : "bg-brand-black")}>
          <Link to="/" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            {t.nav.home}
          </Link>
          
          <div className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
            {t.nav.services}
          </div>
          
          <Link to="/projects" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            {t.nav.projects}
          </Link>
          
          <div className="px-3 py-1.5">
            <LanguageSwitcher />
          </div>
          
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-white bg-brand-red hover:bg-brand-bright-red" : "text-white bg-brand-dark-red hover:bg-brand-red")}>
            {t.nav.contact}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
