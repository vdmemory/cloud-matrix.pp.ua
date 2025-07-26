export interface Translation {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    blog: string;
    careers: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    exploreServices: string;
    contactUs: string;
  };
  
  // Services Section
  services: {
    title: string;
    subtitle: string;
    webDevelopment: {
      title: string;
      description: string;
    };
    mobileDevelopment: {
      title: string;
      description: string;
    };
    cloudSolutions: {
      title: string;
      description: string;
    };
    aiMl: {
      title: string;
      description: string;
    };
  };
  
  // Why Choose Us
  whyUs: {
    title: string;
    subtitle: string;
    expertise: {
      title: string;
      description: string;
    };
    innovation: {
      title: string;
      description: string;
    };
    support: {
      title: string;
      description: string;
    };
    delivery: {
      title: string;
      description: string;
    };
  };
  
  // Projects
  projects: {
    title: string;
    subtitle: string;
  };
  
  // Contact
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
  };
  
  // Footer
  footer: {
    company: string;
    subscribe: string;
    subscribePlaceholder: string;
    subscribeButton: string;
    rights: string;
  };
  
  // Common
  common: {
    learnMore: string;
    readMore: string;
    backToHome: string;
    loading: string;
  };
}

export const translations: Record<'en' | 'ua', Translation> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      projects: 'Projects',
      blog: 'Blog',
      careers: 'Careers',
      contact: 'Contact',
    },
    hero: {
      title: 'Custom Software Development Solutions',
      subtitle: 'We create innovative software solutions that drive business growth and digital transformation.',
      exploreServices: 'Explore Services',
      contactUs: 'Contact Us',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive software development services tailored to your business needs.',
      webDevelopment: {
        title: 'Web Development',
        description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      },
      mobileDevelopment: {
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      },
      cloudSolutions: {
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and microservices architecture for enterprise applications.',
      },
      aiMl: {
        title: 'AI & Machine Learning',
        description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
      },
    },
    whyUs: {
      title: 'Why Choose Us?',
      subtitle: 'We deliver exceptional software solutions with proven expertise and innovative approaches.',
      expertise: {
        title: 'Technical Expertise',
        description: 'Our team of experienced developers masters the latest technologies and frameworks.',
      },
      innovation: {
        title: 'Innovation Focus',
        description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
      },
      support: {
        title: '24/7 Support',
        description: 'Continuous support and maintenance to ensure your applications run smoothly.',
      },
      delivery: {
        title: 'On-Time Delivery',
        description: 'We follow agile methodologies to deliver projects on time and within budget.',
      },
    },
    projects: {
      title: 'Our Projects',
      subtitle: 'Explore our portfolio of successful software development projects.',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to start your next software project? Contact us today.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
    },
    footer: {
      company: 'Company',
      subscribe: 'Subscribe to our newsletter',
      subscribePlaceholder: 'Your email',
      subscribeButton: 'Subscribe',
      rights: 'All rights reserved.',
    },
    common: {
      learnMore: 'Learn More',
      readMore: 'Read More',
      backToHome: 'Back to Home',
      loading: 'Loading...',
    },
  },
  ua: {
    nav: {
      home: 'Головна',
      about: 'Про нас',
      services: 'Послуги',
      projects: 'Проекти',
      blog: 'Блог',
      careers: 'Кар\'єра',
      contact: 'Контакти',
    },
    hero: {
      title: 'Розробка програмного забезпечення на замовлення',
      subtitle: 'Ми створюємо інноваційні програмні рішення, які сприяють зростанню бізнесу та цифровій трансформації.',
      exploreServices: 'Наші послуги',
      contactUs: 'Зв\'язатися з нами',
    },
    services: {
      title: 'Наші послуги',
      subtitle: 'Комплексні послуги розробки програмного забезпечення, адаптовані до потреб вашого бізнесу.',
      webDevelopment: {
        title: 'Веб-розробка',
        description: 'Сучасні, адаптивні веб-додатки, створені з використанням передових технологій та кращих практик.',
      },
      mobileDevelopment: {
        title: 'Мобільна розробка',
        description: 'Нативні та кросплатформні мобільні додатки для платформ iOS та Android.',
      },
      cloudSolutions: {
        title: 'Хмарні рішення',
        description: 'Масштабована хмарна інфраструктура та архітектура мікросервісів для корпоративних додатків.',
      },
      aiMl: {
        title: 'ШІ та машинне навчання',
        description: 'Інтелектуальні рішення на основі штучного інтелекту та алгоритмів машинного навчання.',
      },
    },
    whyUs: {
      title: 'Чому обирають нас?',
      subtitle: 'Ми надаємо виняткові програмні рішення з доведеною експертизою та інноваційними підходами.',
      expertise: {
        title: 'Технічна експертиза',
        description: 'Наша команда досвідчених розробників володіє найновішими технологіями та фреймворками.',
      },
      innovation: {
        title: 'Фокус на інноваціях',
        description: 'Ми йдемо в ногу з технологічними трендами, щоб надавати передові рішення.',
      },
      support: {
        title: 'Підтримка 24/7',
        description: 'Безперервна підтримка та обслуговування для забезпечення безперебійної роботи ваших додатків.',
      },
      delivery: {
        title: 'Своєчасна доставка',
        description: 'Ми дотримуємося agile-методологій для доставки проектів вчасно та в рамках бюджету.',
      },
    },
    projects: {
      title: 'Наші проекти',
      subtitle: 'Ознайомтеся з нашим портфоліо успішних проектів розробки програмного забезпечення.',
    },
    contact: {
      title: 'Зв\'яжіться з нами',
      subtitle: 'Готові розпочати свій наступний програмний проект? Зв\'яжіться з нами сьогодні.',
      name: 'Ім\'я',
      email: 'Електронна пошта',
      message: 'Повідомлення',
      send: 'Надіслати повідомлення',
      sending: 'Надсилання...',
    },
    footer: {
      company: 'Компанія',
      subscribe: 'Підпишіться на нашу розсилку',
      subscribePlaceholder: 'Ваша електронна пошта',
      subscribeButton: 'Підписатися',
      rights: 'Всі права захищені.',
    },
    common: {
      learnMore: 'Дізнатися більше',
      readMore: 'Читати далі',
      backToHome: 'Повернутися на головну',
      loading: 'Завантаження...',
    },
  },
};