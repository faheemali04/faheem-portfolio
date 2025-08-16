
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  globaljet,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  typescript,
  postgresql,
  python,
  docker,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import arrow from "../assets/company/arrow.png";


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
    title: "Full Stack Developer ",
    icon: web,
  },
  {
    title: "Frontend  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Shopify",
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
    name: "JavaScript",
    icon: javascript,
  },
   {
    name: "python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },
   {
    name: "typescript",
    icon: typescript,
  },
   {
    name: "docker",
    icon: docker,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Digital Planet",
    icon: arrow, 
    iconBg: "#383E56",
    date: "June 2022 - Jan 2025",
    points: ["Designing, developing, and maintaining full-stack web applications using React.js, Next.js, Node.js, Express.js, PostgreSQL, and MongoDB.",
"Working closely with designers, product managers, and stakeholders to deliver high-quality, end-to-end solutions.",
"Implementing responsive, user-friendly interfaces and ensuring optimal performance across all devices and browsers.",
"Overseeing the full development lifecycle, including code reviews, CI/CD integration, testing, and cloud deployment on AWS, Azure, and Vercel."

    ],
  },
  
  {
    title: "Senior Full-Stack  Developer",
    company_name: "Zolixi",
    icon: arrow,
    iconBg: "#383E56",
    date: "Feb 2025 - present",
    points: ["Leading the development of custom web applications for diverse clients, from initial concept to final deployment.",
"Architecting scalable backend systems and integrating APIs to support complex business logic and high-traffic environments.",
"Setting up cloud infrastructure and automated deployment pipelines using AWS, Azure, and Vercel for efficient release cycles.",
"Mentoring junior developers, conducting code reviews, and ensuring adherence to best practices in coding standards and security."
 ],
  },
];

const testimonials = [
  {
    testimonial:
      "I didn’t believe it was possible to create a website that truly reflects the beauty of our product, but Ayesha made it happen.",
name: "John Anderson",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like she does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Ayesha optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: " BeHappyGoLeafy",
    description:
      "BeHappyGoLeafy is a sleek, user-friendly website promoting a healthy, plant-based lifestyle. It features plant-based products, recipes, and wellness tips, offering a simple and engaging experience for those looking to live sustainably.",
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://behappygoleafy.com/",
  },
  {
    name: "Global Jet",
    description:
      "Global Jet is a luxury aviation company website that showcases premium private jet charter services, aircraft sales, and management solutions. The site reflects a high-end aesthetic with elegant design, smooth transitions, and an intuitive user experience tailored for elite clientele.",
   tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe (forPayment)",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: globaljet,
    source_code_link: "https://globaljet.aero/en",
  },
  {
    name: " Greenlight",
    description:
      "Greenlight is a cutting-edge platform designed to help parents and kids manage finances together. Offering a secure, intuitive way to manage allowances, track spending, and set financial goals, it empowers families to develop financial literacy. The website is built using Node.js, ensuring fast and scalable performance, with seamless integration for real-time updates and secure transactions.",
      tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "Git/Github",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://greenlight.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
