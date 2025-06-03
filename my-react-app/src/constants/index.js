import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    // meta,
    // starbucks,
    tesla,
    shopify,
    // carrent,
    // jobit,
    // tripguide,
    threejs,
  } from "../assets";
  import starbucks from "../assets/company/pj.png";
  import meta from "../assets/company/chatwave.png";
  import logo from "../assets/bff3254df1cf22ed74923aaa65bc2a08.jpg";
  import carrent from "../assets/Screenshot from 2024-02-20 08-44-38.png";
  import jobit from "../assets/Screenshot from 2025-06-03 13-08-54.png";
  import tripguide from "../assets/Screenshot from 2025-06-03 12-48-49.png";
  
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Flask Developer",
      icon: web,
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
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Back-end Developer",
      company_name: "Project Tracker",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Oct 2023 - Nov 2023",
      points: [
        "Developing and maintaining web applications back-end using Flask and mySQL and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
    {
      title: "React JS Developer",
      company_name: "Project Tracker",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Nov 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack developer",
      company_name: "ChatWave",
      icon: meta,
      iconBg: "#383E56",
      date: "Sept 2022 - Oct 2023",
      points: [
        "Developing and maintaining web applications using React.js, mySQL and flask.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality chat app.",
        "This was bulit from scratch my team and I to enhace communication within our classroom"
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Portfolio",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "This is meant to bring my clients and poeple who are interested in my services closer to me and get a feel of what I do.",
        "ALso shows a wide range of services I can offer.",
        "Hvaing a contact page enables the clients to easily contact me via email.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Project Tracker",
      description:
        "Web-based platform that allows programmers to keep track of their projects and different cohorts in order to make it easier for them.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mySQL",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "flask",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/arnold-aswan/project-tracker-frontend",
    },
    {
      name: "Team Task Manager",
      description:
        "Web application that enables teams to collaborate efficiently in a centralized system.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "vanilla css",
          color: "pink-text-gradient",
        },
        {
          name: "psotgresql",
          color: "pink-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
      ],

      image: jobit,
      source_code_link: "https://github.com/EphrahimLaanyu123/project.git",
    },
    {
      name: "Ndoto Forest",
      description:
        "A comprehensive look on my services and how my clients to easily contact.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "supabase",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://ndotoforestcco.org/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };