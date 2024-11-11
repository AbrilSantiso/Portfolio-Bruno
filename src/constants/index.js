import {
  sharenting,
  unicef,
  brahma,
  devoto,
  belgrano,
  airport,
  lluvia,
  premiere,
  photoshop,
  illustrator,
filmEdition,
filmacion,
productPic,
script,

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
    id: 'reviews',
    title: 'Reseñas',
  },
  {
    id: 'contact',
    title: 'Contacto',
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


const projects = [
  {
    id: 'project-1',
    name: 'Sharenting',
    description: 'Videocaso para campaña de sharenting para UNICEF. Materia: Dirección de arte. Licenciatura en Publicidad.',
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
      'Spot sobre para campaña sobre sharenting para UNICEF. Materia Direccion de Arte, licenciatura en Publicidad.',
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
    description: 'Spot para Brahma - Cantidad justa de malta. Materia: Direccion de Arte - Lic. en Publicidad.',
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
      'Filmado en Belgrano - 07/10/2023',
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
  {
    id: 'project-6',
    name: 'Aeropuerto',
    description:
      'Vuelta a casa. Filmado en el Aeropuerto de Bariloche.',
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
    image: airport,
    video: "https://www.youtube.com/embed/X-auKi-IhqY?si=HMA7C8RrSfF1DAf5"
  },
  {
    id: 'project-7',
    name: 'Lluvia en la capital',
    description:
      'Filmado en el barrio de Recoleta - 03/11/2023 ',
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
    image: lluvia,
    video: "https://www.youtube.com/embed/VxSWKPU7eMY?si=7PGD3vWhjJBmlj64"
  },

];

export { technologies, projects };
