import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    scss,
    reactjs,
    redux,
    tailwind,
    daisyui,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    euronet,
    teleperformance,
    wordpress,
    sql,
    firebase,
    imgSweatHardcore,
    imgVikiPortfolio,
    imgBrainwave,
    imgModern,
    imgComfyStore,
    imgCarHub,
    imgOkoNaPokoj,
    imgSatinPhoto,
    imgContactForm,
    imgFirebaseNotes
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "stack",
      title: "Stack",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "User Support",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Scss",
      icon: scss,
    },
    {
      name: "WordPress",
      icon: wordpress
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Daisy UI",
      icon: daisyui,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Customer Service Consultant",
      company_name: "Teleperformance",
      icon: teleperformance,
      iconBg: "#ffffff",
      date: "Dec 2011 - Aug 2012",
      points: [
        "Providing telephone Customer Service.",
        "Handling email correspondence",
        "Registering complaints in the system.",
        "Providing substantive support to other Consultants."
      ],
    },
    {
      title: "Customer Service Quality Assurance",
      company_name: "Teleperformance",
      icon: teleperformance,
      iconBg: "#ffffff",
      date: "Jan 2012 - Oct 2013",
      points: [
        "Preparing reports.",
        "KPI indicators monitoring.",
        "Call monitoring and Consultant coaching.",
        "Training new Consultants in hard and soft skills.",
      ],
    },
    {
      title: "Customer Service Support and Development Specialist",
      company_name: "Euronet",
      icon: euronet,
      iconBg: "#ffffff",
      date: "Nov 2013 - Aug 2018",
      points: [
        "Developing and maintaining web applications using HTML, CSS and other related technologies.",
        "Supporting technical solutions for the Customer Service and Customer Service Support department.",
        "Training users in the use of the application.",
      ],
    },
    {
      title: "Customer Service Knowledge Base Developer",
      company_name: "Euronet",
      icon: euronet,
      iconBg: "#ffffff",
      date: "Sep 2018 - Dec 2020",
      points: [
        "Developing and maintaining Knowledge Base web application using WordPress.",
        "Managing user accounts and user classes.",
        "Content and process management.",
        "Supporting Knowledge Base users - Call Center Agents.",
      ],
    },
    {
      title: "Operations Knowledge Base Developer",
      company_name: "Euronet",
      icon: euronet,
      iconBg: "#ffffff",
      date: "Jan 2021 - Present",
      points: [
        "Developing and maintaining Knowledge Base web application using WordPress",
        "Supporting Knowledge Base users - Call Center Agents and Local Operations employees",
        "Supporting Cashman WPF desktop application users using SQL.",
        "Supporting technical solutions for the Cash Supply department.",
      ],
    },
  ];

  const projects = [
    {
      name: "Sweat Hardcore",
      description:
        "Online platform presenting a YouTube channel - providing an engaging digital experience for users passionate about powerful guitar music.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: imgSweatHardcore,
      source_code_link: "https://github.com/Kamilhc1125/app-sweat-hardcore",
      link: "https://app-sweat-hardcore.netlify.app/"
    },
    {
      name: "Viki Portfolio",
      description:
        "A portfolio showcasing the work of a passionate and self-motivated UI/UX Designer. Highlighting creativity, adaptability and passion",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: imgVikiPortfolio,
      source_code_link: "https://github.com/Kamilhc1125/react-viki-portfolio",
      link: "https://react-viki-portfolio.netlify.app/"
    },
    {
      name: "Brainwave",
      description:
        "Unleash the full potential of artificial intelligence with Brainwave — your intelligent assistant designed to supercharge productivity.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: imgBrainwave,
      source_code_link: "https://github.com/Kamilhc1125/app-brainwave",
      link: "https://app-vite-brainwave.netlify.app/"
    },
    {
      name: "Bank Modern",
      description:
        "This platform simplifies the process, helping you compare, choose, and apply for the best credit card tailored to your needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: imgModern,
      source_code_link: "https://github.com/Kamilhc1125/app-vite-modern",
      link: "https://app-vite-modern.netlify.app/"
    },
    {
      name: "Comfy Store",
      description:
        "We're redefining how people shop — making the experience smarter, faster, and more personalized than ever before.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "router",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "daisy ui",
          color: "pink-text-gradient",
        },
      ],
      image: imgComfyStore,
      source_code_link: "https://github.com/Kamilhc1125/app-vite-store",
      link: "https://app-vite-store.netlify.app/"
    },
    {
      name: "Car Hub",
      description:
        "Streamline your car rental experience with our user-friendly booking process, designed to save you time.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: imgCarHub,
      source_code_link: "https://github.com/Kamilhc1125/app-car-hub",
      link: "https://app-car-hub.netlify.app/"
    },
    {
      name: "Eye on the Room",
      description:
        "A modern portfolio website for a professional real estate photographer specializing in capturing stunning photos of flats and apartments for rent.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: imgOkoNaPokoj,
      link: "https://okonapokoj.pl/"
    },
    {
      name: "Firebase Notes",
      description:
        "A lightweight microservice for storing and managing user notes in a Firebase database, enabling seamless real-time data synchronization and secure access.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: imgFirebaseNotes,
      source_code_link: "https://github.com/Kamilhc1125/app-vite-firebase-notes",
      link: "https://okonapokoj.pl/"
    },
    {
      name: "Satin Photo",
      description:
        "A beautifully designed website for a professional photographer capturing unforgettable moments at weddings and other special ceremonies.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: imgSatinPhoto,
      link: "https://www.satinphoto.com/"
    },
    {
      name: "Contact Form",
      description:
        "This website is designed to make it easy for customers to contact us. Simply fill out the form, and we'll respond quickly to help with your questions, feedback, or support needs.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: imgContactForm,
      link: "https://contacteuronetworldwide.com/"
    },
  ];
  
  export { services, technologies, experiences, projects };