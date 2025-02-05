import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Thomas Karskens`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Data Analyst</strong>, <strong className="text-stone-100">Power Bi Expert </strong> 
        and <strong className="text-stone-100">tech enthousiast</strong> currently working
        at <strong className="text-stone-100">a very well known postal operator in Belgium</strong>,  delivering data-driven insights and reports.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      In my free time, you can catch me exploring the latest news on 
      <strong className="text-stone-100"> AI</strong>, going on <strong className="text-stone-100">
        nature hikes</strong>, or <strong className="text-stone-100"> producing music</strong>.

      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Data Analyst with two years of experience in data visualization and business intelligence, 
  specializing in Power BI, Python, and automation. Passionate about AI, tech exploration, and data-driven solutions. 
  Multilingual and adaptable, I enjoy hiking in nature and immersing myself in music when I'm not experimenting with the latest technologies.
`,
  aboutItems: [
    {label: 'Location', text: 'Tournai (Doornik), Hainaut', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Belgian', Icon: FlagIcon},
    {label: 'Interests', text: 'Music, Nature, AI', Icon: SparklesIcon},
    {label: 'Study', text: 'UCLouvain (2022)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Bpost Group', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'French',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Dutch',
        level: 4,
      },
    ],
  },
  {
    name: 'Data Analytic tools',
    skills: [
      {
        name: 'Power BI',
        level: 8,
      },
      {
        name: 'Streamlit',
        level: 7,
      },
      {
        name: 'Dash',
        level: 5,
      },
    ],
  },
  {
    name: 'Data Manipulation',
    skills: [
      {
        name: 'Pandas / NumPy',
        level: 6,
      },
      {
        name: 'Knime',
        level: 5,
      },
      {
        name: 'SQL',
        level: 5,
      },
    ],
  },
  {
    name: 'Others',
    skills: [
      {
        name: 'Python',
        level: 5,
      },
      {
        name: 'HTML/CSS/JS',
        level: 3,
      },
      {
        name: 'Teamwork (Trello/Jira/Slack',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Real-time Asset Availability Dashboard',
    description: 'Designed and implemented a Power BI dashboard to automate data retrieval from databases, enabling real-time calculations and insights into key asset availability. This project streamlined decision-making processes and improved operational efficiency.',
    url: 'https://www.microsoft.com/en-us/power-platform/products/power-bi',
    image: porfolioImage1,
  },
  {
    title: 'AI Chatbot with RAG Technology',
    description: 'Developed a proof of concept for a chatbot leveraging Retrieval-Augmented Generation (RAG) technology, designed to utilize the company\'s internal documentation as a knowledge base. This solution provided accurate, context-driven responses to users\' queries.',
    url: 'https://streamlit.io/',
    image: porfolioImage2,
  },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage3,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2022',
    location: 'Uclouvain',
    title: 'Master in Corporate Finance',
    content: <p>    During my Master’s in Corporate Finance, I developed a strong foundation in financial analysis, 
    investment strategies, and risk management. I gained expertise in corporate valuation, 
    financial modeling, and capital structure optimization. Through hands-on projects and case studies, 
    I honed my analytical and problem-solving skills, learning to make data-driven financial decisions. 
    Additionally, I became proficient in financial tools and technologies, reinforcing my ability to provide 
    strategic insights in a business environment.</p>,
  },
  {
    date: '2022',
    location: 'Online',
    title: 'Data Science Certification',
    content: <p>    Through this certification, I built a solid foundation in data science, covering key concepts such as 
    machine learning, statistical analysis, and data preprocessing. I gained hands-on experience working 
    with Python, Pandas, and Scikit-Learn to analyze and visualize data, develop predictive models, 
    and automate workflows. The program strengthened my ability to extract insights from complex datasets, 
    optimize business decisions, and apply AI-driven solutions in real-world scenarios.</p>,
  },
  // {
  //   location: 'Collège Saint-Hubert',
  //   title: 'High School',
  //   content: <p></p>,
  // }
  
];

export const experience: TimelineItem[] = [
  {
    date: '2023 - Present',
    location: 'Bpost Group',
    title: 'Power Bi Expert',
    content: (
      <p>
      I initially joined Bpost Group through a traineeship, but I quickly transitioned into a data analysis 
      role, focusing on Power BI and business intelligence. I work on transforming raw data into actionable 
      insights, developing interactive dashboards, and optimizing reporting processes to support decision-making. 
      My role involves working with various datasets, automating workflows, and continuously improving data 
      visualization strategies to enhance operational efficiency.
      </p>
    ),
  },
  {
    date: 'March 2022 - February 2023',
    location: 'AXA',
    title: 'Project Analyst',
    content: (
      <p>
        As a Project Analyst at AXA, I contributed to internal audit initiatives by optimizing and automating key processes, 
        enhancing efficiency and accuracy in data management and reporting. My role involved developing Excel and VBA-based 
        tools to streamline workflows, significantly reducing manual effort and minimizing errors. I improved data analysis 
        and reporting capabilities, enabling faster and more informed decision-making. Additionally, I collaborated with 
        internal teams to identify inefficiencies and implement tailored automation solutions, driving operational improvements.
      </p>
    ),
  }
];

/**
 * Testimonial section
 */


export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Arthur Dorzee',
      text: 'Thomas is a fantastic colleague to work with—proactive, insightful, and always ready to tackle challenges with a problem-solving mindset. His expertise in data analysis and automation makes him a valuable asset to any team.',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQHIussiTVBWwA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715604029449?e=1744243200&v=beta&t=lb8LH7BCFGIyjBb7jAyctJ9owqirJAbIOPySWKA-DdE'
    },
    {
      name: 'Maxime Bogaert',
      text: 'Working with Thomas is a pleasure! His positive attitude and curiosity make every project more engaging and dynamic. He constantly brings fresh perspectives, thinking outside the box to find creative solutions. A great colleague who knows how to balance professionalism with a friendly and motivating presence in the team.',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQHIussiTVBWwA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715604029449?e=1744243200&v=beta&t=lb8LH7BCFGIyjBb7jAyctJ9owqirJAbIOPySWKA-DdE',
    },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Let me a message on my social media or send me an email.',
  items: [
    {
      type: ContactType.Email,
      text: 'thomaskarskens@hotmail.com',
      href: 'mailto:thomaskarskens@hotmail.com',
    },
        {
      type: ContactType.LinkedIn,
      text: 'Lindkn',
      href: 'https://www.linkedin.com/in/thomas-karskens/',
    },
    // {
    //   type: ContactType.Location,
    //   text: 'Tournai Hainaut, Belgium',
    //   href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    // },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    // {
    //   type: ContactType.Github,
    //   text: 'tbakerx',
    //   href: 'https://github.com/tbakerx',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/thomas-karskens/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
