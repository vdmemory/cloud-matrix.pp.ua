import { ArrowLeft, CheckCircle, Clock, FileSearch, Settings, Cpu, Code, Truck, BarChart, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils.ts';
import PageLayout from '@/components/PageLayout.tsx';
import {useLanguage} from "@/contexts/LanguageContext.tsx";
const DevelopmentProcess = () => {
  const { t, language } = useLanguage();

  const [activeProcess, setActiveProcess] = useState(1);
  const processRef = useRef<HTMLDivElement>(null);
  const processSectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Process component logic
  const processesEng = [{
    id: 1,
    title: "Textile Sensor Design",
    description: "We begin by designing custom textile sensors specifically for your industry and use case, selecting appropriate conductive materials and sensor types.",
    steps: ["Industry-specific requirement analysis", "Sensor type and material selection", "Prototype sensor development", "Initial testing and calibration"]
  }, {
    id: 2,
    title: "Garment Integration",
    description: "Our engineering team seamlessly integrates sensors into clothing and footwear while maintaining comfort, durability, and washability.",
    steps: ["Ergonomic placement optimization", "Non-intrusive integration techniques", "Durability and washability testing", "Comfort and user experience validation"]
  }, {
    id: 3,
    title: "AI & Data Analytics",
    description: "We develop specialized algorithms that transform textile sensor data into actionable insights unique to your industry requirements.",
    steps: ["Industry-specific algorithm development", "ML model training with domain data", "Real-time analytics implementation", "Insight delivery optimization"]
  }, {
    id: 4,
    title: "Production & Certification",
    description: "We handle manufacturing, quality control, and ensure all textile sensor products meet relevant industry standards and certifications.",
    steps: ["Textile manufacturing partner selection", "Quality assurance processes", "Industry-specific certification procurement", "Initial production supervision"]
  }, {
    id: 5,
    title: "Deployment & Support",
    description: "We provide comprehensive training, implementation assistance, and ongoing support to ensure successful adoption and continuous improvement.",
    steps: ["User training and onboarding", "Data interpretation guidance", "Performance monitoring", "Continuous improvement iterations"]
  }];

  const processesUa = [{
    id: 1,
    title: "Проєктування текстильних сенсорів",
    description: "Ми починаємо з розробки індивідуальних текстильних сенсорів спеціально для вашої галузі та сценарію використання, обираючи відповідні провідні матеріали та типи сенсорів.",
    steps: [
      "Аналіз вимог для конкретної галузі",
      "Вибір типу сенсора та матеріалу",
      "Розробка прототипу сенсора",
      "Початкове тестування та калібрування"
    ]
  }, {
    id: 2,
    title: "Інтеграція в одяг",
    description: "Наша інженерна команда безперешкодно інтегрує сенсори в одяг і взуття, зберігаючи комфорт, довговічність та можливість прання.",
    steps: [
      "Оптимізація ергономічного розміщення",
      "Неінвазивні методи інтеграції",
      "Тестування на довговічність і стійкість до прання",
      "Перевірка комфорту та користувацького досвіду"
    ]
  }, {
    id: 3,
    title: "ШІ та аналітика даних",
    description: "Ми розробляємо спеціалізовані алгоритми, які перетворюють дані з текстильних сенсорів на практичну аналітику відповідно до вимог вашої галузі.",
    steps: [
      "Розробка алгоритмів під специфіку галузі",
      "Навчання моделей машинного навчання на доменних даних",
      "Реалізація аналітики в реальному часі",
      "Оптимізація подачі аналітичних висновків"
    ]
  }, {
    id: 4,
    title: "Виробництво та сертифікація",
    description: "Ми забезпечуємо виробництво, контроль якості та відповідність усіх текстильних сенсорів галузевим стандартам і сертифікатам.",
    steps: [
      "Вибір виробничого партнера з текстилю",
      "Процеси забезпечення якості",
      "Отримання сертифікації для відповідної галузі",
      "Контроль за початковим виробництвом"
    ]
  }, {
    id: 5,
    title: "Впровадження та підтримка",
    description: "Ми надаємо повноцінне навчання, допомогу при впровадженні та постійну підтримку для успішного використання й подальшого вдосконалення.",
    steps: [
      "Навчання користувачів і введення в експлуатацію",
      "Пояснення принципів інтерпретації даних",
      "Моніторинг ефективності",
      "Постійні ітерації вдосконалення"
    ]
  }];

  const processes = language === "en" ? processesEng : processesUa;

  useEffect(() => {
    processSectionsRef.current = processes.map((_, i) => processSectionsRef.current[i] || null);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('animate-fade-in');
        (entries[0].target as HTMLElement).style.opacity = '1';
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      let closestSection = null;
      let closestDistance = Infinity;
      processSectionsRef.current.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });
      if (closestSection !== null) {
        setActiveProcess(closestSection + 1);
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <section id={"development"} className="pt-8 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">{t.development.title}</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-12">
                {t.development.description}
              </p>
              
              {/* From Textile to Intelligence Process Section */}
              <div className="relative mt-12" ref={processRef} style={{
              opacity: 0
            }}>
                <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2"></div>
                
                <div className="space-y-10 relative">
                  {processes.map((process, index) => <div key={process.id} ref={el => processSectionsRef.current[index] = el} className={cn("relative flex flex-col md:flex-row md:items-center gap-6", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right")}>
                      <div className="md:w-1/2">
                        <div className={cn("md:absolute top-0 left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300", activeProcess === process.id ? "bg-gray-700 text-white scale-110" : "bg-white text-gray-700 border border-gray-300")} onClick={() => setActiveProcess(process.id)}>
                          <span className="font-bold">{process.id}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 mt-3 md:mt-0">{process.title}</h3>
                        <p className="text-gray-600 mb-3 text-sm">{process.description}</p>
                        
                        <button onClick={() => setActiveProcess(process.id)} className={cn("text-sm font-medium transition-colors", activeProcess === process.id ? "text-gray-700" : "text-gray-500 hover:text-gray-700")}>
                          {activeProcess === process.id ? "Currently Viewing" : "View Details"}
                        </button>
                      </div>
                      
                      <div className={cn("md:w-1/2 bg-white rounded-xl p-5 shadow-sm border border-gray-100 transition-all duration-300", activeProcess === process.id ? "opacity-100 translate-y-0 shadow-md border-gray-200" : "opacity-50 md:opacity-30 hover:opacity-70 cursor-pointer")} onClick={() => setActiveProcess(process.id)}>
                        <h4 className="font-semibold mb-3 text-gray-700">Key Activities:</h4>
                        <ul className="space-y-2">
                          {process.steps.map((step, stepIndex) => <li key={stepIndex} className="flex items-start">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-2">
                                <Check className="w-3 h-3 text-gray-700" />
                              </span>
                              <span className="text-gray-700 text-sm text-left">{step}</span>
                            </li>)}
                        </ul>
                      </div>
                    </div>)}
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg my-12 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">{t.development.principles.title}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>{t.development.principles.one}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>{t.development.principles.two}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>{t.development.principles.tree}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>{t.development.principles.four}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>{t.development.principles.five}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
};
export default DevelopmentProcess;

// Helper icon component for later
const ArrowRight = ({
  className = "w-4 h-4"
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>;