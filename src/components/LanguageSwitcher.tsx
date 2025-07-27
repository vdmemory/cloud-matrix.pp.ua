import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { motion } from 'framer-motion';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ua', name: 'Українська', flag: '🇺🇦' },
];

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleChangeLanguage = (newLangCode: 'en' | 'ua') => {
    localStorage.setItem('language', newLangCode);
    return window.location.reload();
  };

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
          >
            <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2 text-gray-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 border"
            >
              <Globe size={16} />
              <span className="text-lg">{currentLanguage?.flag}</span>
            </Button>
          </motion.div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {languages.map(lang => (
              <DropdownMenuItem
                  key={lang.code}
                  onClick={() =>
                      handleChangeLanguage(lang.code as 'en' | 'ua')
                  }
                  className={`flex items-center space-x-3 cursor-pointer ${
                      language === lang.code
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : ''
                  }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {language === lang.code && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                    />
                )}
              </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
  );
};

export default LanguageSwitcher;