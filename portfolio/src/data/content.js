// All site copy lives here. Edit this file to update the portfolio.
// Source: Nguyen Ngoc Quynh Mai's CV. Nothing here should go beyond what the CV states.

export const profile = {
  name: 'Nguyen Ngoc Quynh Mai',
  shortName: 'Quynh Mai',
  identity: ['International Business Economics Student', 'Community Leader', 'Creative Thinker'],
  headline: ['Turning curiosity', 'into things that', 'bring people together.'],
  intro:
    'I’m an International Business Economics student at Foreign Trade University with a strong interest in people, ideas, and meaningful projects.',
  tagline: ['Curious by nature.', 'Creative by heart.', 'Driven by impact.'],
  photo: '/mai.jpg',
  photoAlt: 'Portrait of Nguyen Ngoc Quynh Mai in a deep burgundy dress on an ornate staircase',
}

export const contact = {
  phone: '0827211006',
  // NOTE: this is exactly as written in the CV. "gmaill.com" (double "l") looks like a typo —
  // confirm and change to "gmail.com" if so.
  email: 'nguyenngocquynhmai2110@gmaill.com',
  // The CV lists no social/profile links. Add them here and they will appear automatically:
  // socials: [{ label: 'LinkedIn', href: 'https://...' }],
  socials: [],
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'project', label: 'Project' },
  { id: 'skills', label: 'Skills' },
  { id: 'beyond', label: 'Beyond' },
]

export const about = {
  title: ['A curious,', 'people-oriented', 'person.'],
  story: [
    'I enjoy learning, creating, and connecting with others. My studies in International Business Economics have built my analytical and business mindset, while my experiences outside the classroom have taught me how to work with people, take responsibility, and turn ideas into meaningful experiences.',
    'I’m drawn to environments where I can learn, collaborate, create, and make an impact.',
  ],
  facts: [
    { label: 'I study', value: 'International Business Economics' },
    { label: 'At', value: 'Foreign Trade University · High-Quality Program' },
    { label: 'I care about', value: 'People, ideas, growth, impact' },
  ],
  values: [
    {
      title: 'People',
      text: 'Meaningful connections, and spaces where people feel heard, supported, and involved.',
    },
    {
      title: 'Ideas',
      text: 'Turning simple observations into new ideas, then exploring how they become something tangible.',
    },
    {
      title: 'Growth',
      text: 'Stepping outside my comfort zone, trying new things, learning from every experience.',
    },
    {
      title: 'Impact',
      text: 'Creating value beyond myself, through leadership, creativity, or community involvement.',
    },
  ],
}

export const journey = [
  {
    n: '01',
    title: 'Learning to Lead',
    text: 'University gave me the chance to work with different people, take responsibility, and gradually develop my own leadership style.',
  },
  {
    n: '02',
    title: 'Creating with Purpose',
    text: 'With creative projects like INKAT, I explored how one idea can combine creativity, self-expression, and social value.',
  },
  {
    n: '03',
    title: 'Giving Back',
    text: 'As a volunteer for the DB Global Leader Scholarship, I contributed to a wider community and learned through meaningful interactions.',
  },
  {
    n: '04',
    title: 'Exploring What’s Next',
    text: 'I’m still exploring the intersection of business, creativity, people, and impact, looking for opportunities that challenge me to grow.',
  },
]

export const leadership = {
  role: 'President',
  org: 'High-Quality International Economics Student Community',
  school: 'Foreign Trade University',
  // The CV gives no dates for this role. Add e.g. period: '2024 — Present' to show it.
  period: null,
  quote:
    'Leadership is not simply about being the person in charge. It is about creating direction, bringing people together, listening to different perspectives, and helping others grow alongside you.',
  story:
    'One of the experiences that has shaped me most at university. The role pushed me beyond simply taking part in activities, toward taking responsibility, coordinating people, communicating ideas, and turning plans into action.',
  does: [
    'Lead and coordinate the student community',
    'Plan and organize community activities',
    'Coordinate with different teams and members',
    'Communicate ideas and information effectively',
    'Support collaboration within the community',
    'Handle challenges and make decisions',
    'Help build a positive, engaging student environment',
  ],
  strengthened: ['Leadership', 'Communication', 'Teamwork', 'Organization', 'Problem-Solving', 'Decision-Making'],
}

export const project = {
  name: 'INKAT',
  tags: ['Creativity', 'Self-Expression', 'Social Impact'],
  summary:
    'A creative project inspired by the words “ink” and “cat”, using henna as a medium for self-expression and individuality.',
  question: 'What if being different was something to celebrate rather than something to hide?',
  why: 'INKAT began with the fear of judgment that can stop people from expressing themselves freely. Through creative expression, it invites people to embrace their individuality and see their differences as meaningful.',
  impact: 'The project includes a social-impact element: profits are directed toward supporting children at a disability center.',
  role: 'I was involved in developing the concept and exploring how a creative idea could become a project with both personal and social value.',
  skills: [
    'Creative ideation',
    'Concept development',
    'Understanding user perspectives',
    'Social-impact thinking',
    'Project development',
    'Connecting creativity with purpose',
  ],
  lesson:
    'A project does not have to be complicated to create an impact. Sometimes it starts with looking at something ordinary from a different perspective.',
}

export const community = {
  role: 'Volunteer',
  org: 'DB Global Leader Scholarship',
  text: 'Volunteering gave me the opportunity to contribute to a community built around learning, development, and shared experiences.',
  closing:
    'More importantly, it reminded me of the value of contributing to a community while learning from the people within it.',
  strengthened: ['Communication', 'Teamwork', 'Organization', 'Community engagement', 'Cross-cultural awareness'],
}

export const skills = [
  {
    group: 'Lead & Collaborate',
    items: [
      { name: 'Leadership', text: 'Leading teams, coordinating people, taking responsibility, and turning plans into action.' },
      { name: 'Teamwork', text: 'Collaborating with people from different backgrounds and contributing toward a common goal.' },
      { name: 'Communication', text: 'Expressing ideas clearly, working with different people, and building meaningful connections.' },
      { name: 'Project Management', text: 'Planning activities, coordinating tasks, managing responsibilities, and working toward shared goals.' },
    ],
  },
  {
    group: 'Think & Create',
    items: [
      { name: 'Business Thinking', text: 'Applying an analytical, business-oriented perspective to understand problems and explore opportunities.' },
      { name: 'Creative Thinking', text: 'Generating ideas, connecting different perspectives, and developing concepts with purpose.' },
      { name: 'Problem-Solving', text: 'Looking beyond the surface of a problem and exploring practical ways to approach it.' },
    ],
  },
  {
    group: 'Keep Growing',
    items: [
      { name: 'Learning Mindset', text: 'Staying curious, embracing new experiences, and continuously developing new skills.' },
    ],
  },
]

export const education = {
  school: 'Foreign Trade University',
  program: 'International Business Economics',
  track: 'High-Quality Program',
  foundation: ['International Business', 'Economics', 'Business Analysis', 'International Trade', 'Research', 'Strategic Thinking'],
  note: 'Beyond academic knowledge, university has been where I developed my communication, teamwork, leadership, and problem-solving through practical experiences and extracurricular activities.',
}

export const beyond = {
  intro: 'There is more to me than my major, projects, and leadership experiences.',
  items: [
    { title: 'Drawing', text: 'A way to explore visual ideas, express creativity, and take a break from structured thinking.' },
    { title: 'Traveling', text: 'New environments, different people, and perspectives outside my own.' },
    { title: 'Learning', text: 'I genuinely enjoy learning new things, even ones completely outside my field.' },
    { title: 'Exploring Ideas', text: 'Brainstorming, asking “what if?”, and turning small observations into ideas.' },
    { title: 'Helping People', text: 'Listening, understanding perspectives, and offering support when I can.' },
  ],
  tarot: {
    kicker: 'A little something unexpected',
    title: 'Tarot Reading',
    text: [
      'One of my little hidden talents. For me, Tarot is less about predicting the future and more about reflection, perspective, and understanding different possibilities.',
      'It reflects something I naturally enjoy: listening to people, asking meaningful questions, and helping them look at a situation from a new angle.',
    ],
    line: 'A little intuition, a lot of curiosity.',
  },
}

export const bring = [
  { verb: 'Think', text: 'Understand problems and explore possibilities.' },
  { verb: 'Create', text: 'Turn ideas into meaningful concepts and experiences.' },
  { verb: 'Connect', text: 'Work with people, exchange perspectives, build communities.' },
  { verb: 'Lead', text: 'Take responsibility and help ideas move forward.' },
  { verb: 'Learn', text: 'Stay curious and keep challenging myself.' },
]

export const next = {
  title: ['The journey', 'is still unfolding.'],
  text: [
    'I’m still exploring the intersection between business, creativity, people, and impact. Rather than having every step mapped out, I’m interested in opportunities that let me learn, take on challenges, work with inspiring people, and create something meaningful along the way.',
    'I see this portfolio not as a final definition of who I am, but as a snapshot of where I am, what I’ve learned, and where I’m heading next.',
  ],
}

export const closing = {
  title: ['Let’s create something', 'meaningful together.'],
  text: 'I’m always open to meeting new people, exchanging ideas, and exploring new opportunities.',
}
