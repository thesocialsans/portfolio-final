import bg01 from '../assets/images/project-bg-01.png'
import bg02 from '../assets/images/project-bg-02.png'
import bg03 from '../assets/images/project-bg-03.png'
import bg04 from '../assets/images/project-bg-04.png'
import bg05 from '../assets/images/project-bg-05.png'
import bg06 from '../assets/images/project-bg-06.png'

export const projects = [
  {
    id: 'prompts-arent-enough',
    number: '01',
    title: 'When AI understands what you mean.',
    description: 'Understanding human intent in AI interactions and designing an intent-aware workspace for UX designers.',
    category: 'Conversational UX | 2026',
    image: bg01,
    accent: 'rgba(87, 36, 64, 0.3)',
    route: null,
  },
  {
    id: 'ai-recruitment-screening',
    number: '02',
    title: 'Making payroll work for people.',
    description:
      'Designing a more human way to screen high-volume applications by understanding intent, context, and candidate fit.',
    category: 'AI & Recruitment UX | 2025',
    image: bg02,
    accent: 'rgba(139, 89, 98, 0.3)',
    route: '/projects/ai-recruitment-screening',
  },
  {
    id: 'pet-adoption',
    number: '03',
    title: "Adopt, Don’t shop!",
    description:
      'Creating a more trusted adoption journey that helps people find the right companion and make informed choices.',
    category: 'Product & Service Design | 2024',
    image: bg03,
    accent: 'rgba(126, 144, 180, 0.3)',
    route: '/projects/pet-adoption',
  },
  {
    id: 'who-are-you-when-you-vote',
    number: '04',
    title: 'Who are you, when you vote?',
    description:
      'Using visual storytelling and playful interaction to encourage awareness, reflection, and more conscious choices.',
    category: 'Editorial & Interaction Design | 2025',
    image: bg04,
    accent: 'rgba(142, 91, 60, 0.3)',
    route: '/projects/who-are-you-when-you-vote',
  },
  {
    id: 'covermitra',
    number: '05',
    title: 'Before you need it.',
    description: 'Making insurance easier to understand, evaluate, and navigate before a moment of need.',
    category: 'Insurance & Service Design | 2023',
    image: bg05,
    accent: 'rgba(164, 152, 129, 0.3)',
    route: '/projects/covermitra',
  },
  {
    id: 'tnstc',
    number: '06',
    title: 'Finding your way.',
    description: 'Simplifying public transit through clearer information, easier planning, and more confident journeys.',
    category: 'Public Service UX | 2022',
    image: bg06,
    accent: 'rgba(126, 144, 180, 0.3)',
    route: '/projects/tnstc',
  },
]
