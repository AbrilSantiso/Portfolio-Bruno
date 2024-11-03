import {
  frontend,
  backend,
  ux,
  prototyping,
  sharenting,
  unicef,
  brahma,
  devoto,
  belgrano,
  about,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  premiere,
  photoshop,
  illustrator,
filmEdition,
filmacion,
productPic,
script,
publicidad

} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre mi',
  },
  {
    id: 'projects',
    title: 'Proyectos',
  },
  {
    id: 'contact',
    title: 'Contacto',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [

  {name:"Guión",
    icon: script
  }  ,
  {name:"Edición de videos",
    icon: filmEdition
  },
  {
    name: 'Premiere',
    icon: premiere,
  },
  
  {name:"Filmación",
    icon: filmacion
  }
  ,
  {name:"Foto producto",
    icon: productPic
  },
  {
    name: 'Photoshop',
    icon: photoshop,
  },
  {
    name: 'Illustrator',
    icon: illustrator,
  }
 
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Sharenting',
    description: 'Videocaso para campaña de sharenting para UNICEF. Materia: Dirección de arte. Licenciatura en Publicidad',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: sharenting,
    video: 'https://www.youtube.com/embed/AcQjD1Oxzec?si=iabGRdqDOPxZxSaa',
  },
  {
    id: 'project-2',
    name: 'Spot - Sharenting',
    description:
      'Spot sobre para campaña sobre sharenting para UNICEF. Materia Direccion de Arte, licenciatura en Publicidad',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: unicef,
    video: "https://www.youtube.com/embed/KdjOSfgmqMA?si=_4O6Ox5m4_Sry_Ty"
  },
  {
    id: 'project-3',
    name: 'Brahma',
    description: 'Spot para Brahma - Cantidad justa de malta. Materia: Direccion de Arte - Lic. en Publicidad',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: brahma,
    video: "https://www.youtube.com/embed/ZeGhOz5IkW4?si=Ltx64t1Wz44VTCtg"
  },
  {
    id: 'project-4',
    name: 'Villa Devoto',
    description: `Filmado en Villa Devoto y alrededores - 04/05/2024`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: devoto,
    video: "https://www.youtube.com/embed/4Un-YkX3to8?si=QZUhPKvTa1jYgRcQ"
  },
  {
    id: 'project-5',
    name: 'Barrancas de Belgrano',
    description:
      'Filmado en Belgrano - 07/10/2023 ',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: belgrano,
    video: "https://www.youtube.com/embed/9LsOFG3SIcA?si=E3krreebMYHPDEZs"
  },

];

export { services, technologies, experiences, projects };
