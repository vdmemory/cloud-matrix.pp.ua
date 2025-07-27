import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {  BarChart, AlertTriangle, Clock4, Rocket, Zap, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, {
    once: true,
    margin: "-100px"
  });
  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let animationFrame: number;
    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };
    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(startAnimation);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);
  return <span ref={countRef} className="font-bold tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>;
};

const WhyWrlds = () => {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="why-wrlds" className="relative py-16 md:py-4 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            {t.whyUs.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t.whyUs.subtitle}
          </motion.p>
        </motion.div>
        

        
        <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={containerVariants}>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-100px"
          }} variants={containerVariants}>
            <motion.div variants={itemVariants} className="bg-gray-100 p-6 rounded-xl border border-brand-red text-center hover:bg-gray-200 transition-all">
              <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
                <AnimatedCounter end={500} suffix="+" />
              </h3>
              <p className="text-gray-700"> {t.whyUs.first}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-100 p-6 rounded-xl border border-brand-red text-center hover:bg-gray-200 transition-all">
              <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
                <AnimatedCounter end={98} suffix="%" />
              </h3>
              <p className="text-gray-700">
                {t.whyUs.second}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-100 p-6 rounded-xl border border-brand-red text-center hover:bg-gray-200 transition-all">
              <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center mx-auto mb-4">
                <Clock4 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
                <AnimatedCounter end={24} suffix="/7" />
              </h3>
              <p className="text-gray-700">
                {t.whyUs.next}
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-brand-red hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-brand-red rounded-full p-3 mr-4">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t.whyUs.expertise.title}</h4>
                  <p className="text-gray-700">{t.whyUs.expertise.description}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-brand-red hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-brand-red rounded-full p-3 mr-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t.whyUs.innovation.title}</h4>
                  <p className="text-gray-700">{t.whyUs.innovation.description}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-brand-red hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-brand-red rounded-full p-3 mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t.whyUs.support.title}</h4>
                  <p className="text-gray-700">{t.whyUs.support.description}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-brand-red hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-brand-red rounded-full p-3 mr-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{t.whyUs.delivery.title}</h4>
                  <p className="text-gray-700">{t.whyUs.delivery.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>;
};

export default WhyWrlds;
