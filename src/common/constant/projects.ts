import { ProjectsProps, ProjectItemProps } from '../types/projects';

export const PROJECTSLIST: ProjectsProps = {
  projects: [
    {
      title: 'Buk - a - Buk',
      slug: 'Buk-a-Buk',
      description:
        'Empowering students by turning used books into a currency for knowledge exchange through a community-driven e-commerce platform.',
      image: '/images/projects/greenie.jpg',
      link_demo: 'https://github.com/iamdevhk/buk-a-buk',
      link_github: '#',
      stacks: [
        'AndroidStudio',
        'SpringBoot',
        'AWS',
        'MySQL',

      ],
      content: '',
      is_show: true,
      is_featured: false,
      updated_at: new Date(),
    },
    {
      title: 'Audio Guide for Patients',
      slug: 'Audio Guide for Patientsr',
      description:'"Never forget your doctors advice - a simple QR code links your unique audio prescription to your profile for easy access anytime, anywhere',
      image: '/images/projects/towerbuilder.jpg',
      link_demo: 'https://github.com/iamdevhk/AudioGuide',
      link_github: 'https://github.com/iamdevhk/AudioGuide',
      stacks: ['AndroidStudio', 'Node.js','MySQL','AWS','Firebase'],
      content: '',
      is_show: true,
      is_featured: false,
      updated_at: new Date(),
    },
    {
      title: 'CourseF',
      slug: 'Course Feedback Application',
      description:
        'Course Feedback app: Engage students in discussion forums, capture feedback with emoji-enhanced MCQs, and provide faculty insights for an interactive learning experience',
      image: '/images/projects/shotboundarysystem.jpg',
      link_demo: 'https://github.com/iamdevhk/CourseF',
      link_github: 'https://github.com/iamdevhk/CourseF',
      stacks: ['AndroidStudio', 'JavaScript', 'MongoDB','HTML5', 'Node.js'],
      content: '',
      is_show: true,
      is_featured: false,
      updated_at: new Date(),
    },
    {
      title: 'Queue Management system',
      slug: 'Smart Banking',
      description:
        'Smart Banking: Skip the queues with our app - pre-book your visit, scan your QR code at the door, and enjoy real-time updates on live queues, making banking faster and hassle-free!',
      image: '/images/projects/cbir.jpg',
      link_demo: 'https://github.com/iamdevhk/SyndicateHackathon',
      link_github: 'https://github.com/iamdevhk/SyndicateHackathon',
      stacks: ['React.js', 'JavaScript','HTML5','AndroidStudio','Java','MySQL','AWS','SpringBoot'],
      content: '',
      is_show: true,
      is_featured: false,
      updated_at: new Date(),
    },
    {
      title: 'Mepository',
      slug: 'Mepository',
      description:
        'Features secure Mepcard QR codes for patient privacy. Includes an EI test using machine learning to predict student depression. Centralized patient records via Mepository notebook.',
      image: '/images/projects/cbir.jpg',
      link_demo: 'https://github.com/iamdevhk/Mepositry',
      link_github: 'https://github.com/iamdevhk/Mepositry',
      stacks: ['React.js', 'JavaScript','HTML5','AndroidStudio','Java','MySQL','AWS','SpringBoot'],
      content: '',
      is_show: true,
      is_featured: false,
      updated_at: new Date(),
    },
    {
      title: 'Covid 19 Tracker',
      slug: 'Covid 19 Tracker',
      description:
        'Flutter COVID-19 Tracker App - Developed a Flutter application to monitor global COVID-19 statistics. Employed web scraping from diverse sources to gather real-time data.',
      image: '/images/projects/cbir.jpg',
      link_demo: 'https://github.com/iamdevhk/covid19',
      link_github: 'https://github.com/iamdevhk/covid19',
      stacks: ['Flutter', 'JavaScript','HTML5','AndroidStudio','Java','MySQL','AWS','SpringBoot'],
      content: '',
      is_show: true,
      is_featured: false,
      updated_at: new Date(),
    },
   
  ],
};
