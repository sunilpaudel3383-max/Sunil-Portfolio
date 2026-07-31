export const profile = {
  name: 'Sunil Paudel',
  role: 'Civil Engineer',
  location: 'Tokha-11, Kathmandu',
  email: 'sunil.paudel3383@gmail.com',
  phone: '+977 9862583383',
  linkedin: '#', // TODO: replace with your LinkedIn profile URL
  summary:
    'Motivated and detail-oriented registered Civil Engineer with a strong academic record and practical experience gained through active involvement in professional organizations and student clubs. Highly proficient in engineering and design software, with a strong ability to adapt to new tools and technologies. Known for strong analytical thinking, effective teamwork, and a readiness to contribute to real-world engineering challenges.',
}

export const stats = [
   { value: '3', label: 'Research Publications' },
  { value: '3+', label: 'Years of Involvement' },
  { value: 'IOE', label: 'Thapathali Campus' },
]

export const education = [
  {
    period: '2020 – 2024',
    title: "Bachelor's in Civil Engineering",
    place: 'Institute of Engineering, Thapathali Campus',
    detail: '75.89%',
  },
  {
    period: '2018 – 2020',
    title: '+2 / Science',
    place: 'Fluorescent Secondary School — NEB Board',
    detail: 'Grade: 3.79 / 4',
  },
  {
    period: '2018',
    title: 'SEE',
    place: 'Fluorescent Secondary School — NEB Board',
    detail: 'Grade: 3.90 / 4',
  },
]

export const experience = [
  {
    role: 'Civil Engineer',
    org: 'Impulse Consultants Pvt. Ltd.',
    period: 'May 2025 – July 2025',
    points: [
      'Drafted bridge drawings with precision.',
      'Estimated project costs for budgeting.',
      'Prepared detailed project reports.',
      'Visited sites for culvert design oversight.',
    ],
  },
  {
    role: 'Tutor — Building Analysis & Design Workshop',
    org: 'CESS, Thapathali Campus',
    period: '2024 – 2025',
    points: [
      'Instructed comprehensive building analysis and design using AutoCAD and ETABS for residential projects.',
      'Prepared and taught municipal drawings for residential buildings, ensuring compliance with local standards.',
    ],
  },
  {
    role: 'Surveyor — Municipal Transport Master Plan',
    org: 'Godawari Municipality, Lalitpur',
    period: '2026',
    points: [
      'Conducted field surveys of all municipal road networks, collecting spatial and condition data for transport planning.',
      'Organized and facilitated ward-level stakeholder meetings with residents and professionals to gather planning inputs.',
    ],
  },

]

export const projects = [
  {
    title: 'Prestressed Concrete Box Girder Bridge',
    tag: 'Final Year Project',
    image: '/assets/journal-innovation.png',
    imageAlt: 'JIEE journal paper on the single-span PSC box girder bridge',
    points: [
      'Designed various bridge components and performed hydrological and hydraulic analysis.',
      'Conducted site surveys and contributed to a project funded by the Local Roads Bridge Program (LRBP).',
    ],
  },
  {
    title: 'Model of a Tensegrity Bridge',
    tag: 'Inter-College Model Competition',
    image: '/assets/tensegrity-bridge.jpg',
    imageAlt: 'Scaled tensegrity bridge model built for the competition',
    points: [
      'Built a scaled-down model of an innovative tensegrity bridge.',
      'Secured 1st prize at the intra-college competition and 3rd prize nationally at the “Yathartha” TechFest.',
    ],
  },
]
export const workshops = [
  {
    title: 'Building Analysis & Design Workshop',
    org: 'CESS, Thapathali Campus',
    period: '2024',
    detail: 'Hands-on training in structural analysis and design using AutoCAD and ETABS for residential buildings.',
  },
  {
    title: 'GIS Applications in Civil Engineering',
    org: 'Institute of Engineering, Thapathali Campus',
    period: '2023',
    detail: 'Workshop on spatial data analysis and mapping using Arc-GIS for infrastructure planning.',
  },
  {
    title: 'Seismic Design & Retrofitting',
    org: 'Nepal Engineering Council',
    period: '2023',
    detail: 'Training on seismic vulnerability assessment and retrofitting techniques for existing structures.',
  },
]
export const skills = {
  Technical: [
    'AutoCAD',
    'ETABS',
    'OpenSees',
    'Arc-GIS',
    'Advanced Excel with VBA',
    'Microsoft Office',
  ],
  Interpersonal: [
    'Communication',
    'Teamwork',
    'Time Management',
    'Problem-Solving',
    'Adaptability',
  ],
  Languages: [
    'Nepali — Native',
    'English — Fluent',
    'Hindi — Conversational',
  ],
}

export const publications = [
  {
    title:
      'Limit State Design of a Single-Span PSC Box Girder Bridge for a Seismically Active Hilly River Crossing: Case Study of the Mardi River, Nepal',
    venue: 'Journal of Innovations in Engineering Education, 8(1)',
    href: 'https://doi.org/10.3126/jiee.v8i1.82601',
    year: '2025',
    type: 'Journal Paper',
    image: '/assets/journal-innovation.png',
  },
  {
    title: 'A Refreshers Manual on Concrete Technology',
    venue: 'New Lumbini Stationery',
    href: '',
    year: '2025',
    type: 'Reference Manual',
    image: '/assets/concrete-technology.jpg',
  },
  {
    title: 'A Refreshers Manual on Engineering Hydrology',
    venue: 'New Lumbini Stationery',
    href: '',
    year: '2026',
    type: 'Reference Manual',
    image: '/assets/engineering-hydrology.jpg',
  },
]

export const leadership = [
  {
    role: 'President',
    org: 'Fluorescent Alumni Association',
    period: '2025 – Present',
    detail:
      'Lead operations and strategic initiatives, coordinating programs and strengthening alumni engagement across the Kathmandu Valley.',
  },
  {
    role: 'Secretary',
    org: 'Fluorescent Alumni Association',
    period: '2023 – 2025',
    detail:
      'Coordinated meetings and records, and supported community service projects, networking events, and fundraising initiatives.',
  },
  {
    role: 'Facilitator',
    org: "Civil Engineering Student's Society, Thapathali",
    period: '2024 – 2025',
    detail:
      'Contributed ideas to event planning and designed graphic materials for social media, posters, and event branding.',
  },
  {
    role: 'Editor',
    org: 'Civil Transcend III',
    period: '2024',
    detail:
      'Edited and proofread content for clarity and consistency, collaborating on layout, typography, and magazine design.',
  },
  {
    role: 'Organizer',
    org: 'Yathartha 2.0 — National Tech Fest',
    period: '2024',
    detail:
      'Planned multiple technical and non-technical events and coordinated the first “Samadhan Makerthon: From Ideas to Solutions”.',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
]
