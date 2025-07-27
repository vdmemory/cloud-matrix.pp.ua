export interface Translation {
  // Navigation
  nav: {
    home: string;
    services: string;
    projects: string;
    development: string;
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
    first: string;
    second: string,
    next: string;
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
    phone: string;
    first_name: string;
    last_name: string;
    message1: string;
    email_us: string;
    general_inquiries: string;
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

  // Develop
  development: {
    title: string;
    description: string;
    principles: {
      title: string;
      one: string;
      two: string;
      tree: string;
      four: string;
      five: string;
    }
  }
}

export const translations: Record<'en' | 'ua', Translation> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
     development: 'Development',
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
      first: 'Successful projects delivered worldwide',
      second: 'Client satisfaction rate with our development services',
      next: 'Support and maintenance for all our clients'
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
      phone: 'Phone',
      first_name: 'First Name',
      last_name: 'Last Name',
      message1: 'Tell us about your project...',
      email_us: 'Email Us',
      general_inquiries: 'For general inquiries:',
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
    development: {
      title: 'Our Structured Development Process',
      description: ' We\'ve refined our development methodology to minimize risk and maximize innovation, \n' +
          '                ensuring your textile sensor project moves efficiently from concept to reality.',
      principles: {
        title: 'Our Development Principles',
        one: 'Rapid iteration cycles for continuous improvement',
        two: 'Transparent communication throughout the development process',
        tree: 'Modular architecture allowing for flexible and scalable solutions',
        four: 'Risk mitigation strategies built into every phase',
        five: 'Focus on user experience and practical functionality'
      }
    }
  },
  ua: {
    nav: {
      home: 'Головна',
      services: 'Послуги',
      projects: 'Проекти',
      development: 'Розробка',
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
      first: 'Успішні проєкти, реалізовані по всьому світу',
      second: 'Рівень задоволеності клієнтів нашими послугами розробки',
      next: 'Підтримка та обслуговування для всіх наших клієнтів',
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
      phone: 'Телефон',
      first_name: 'Ім\'я',
      last_name: 'Прізвище',
      message1: 'Розкажіть нам про ваш проект...',
      email_us: 'Напишіть нам',
      general_inquiries: 'Загальні запитання:'
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
    development: {
      title: 'Наша структурована модель розробки',
      description: 'Ми вдосконалили нашу методологію розробки, щоб мінімізувати ризики та максимально розкрити інноваційний потенціал,\n' +
          'забезпечуючи ефективний шлях вашого проєкту текстильного сенсора — від ідеї до реалізації.',
      principles: {
        title: 'Наші принципи розробки',
        one: 'Швидкі ітераційні цикли для постійного вдосконалення',
        two: 'Прозора комунікація протягом усього процесу розробки',
        tree: 'Модульна архітектура для гнучких і масштабованих рішень',
        four: 'Стратегії мінімізації ризиків на кожному етапі',
        five: 'Фокус на зручності користування та практичній функціональності'
      }
    }
  },
};