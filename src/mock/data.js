import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Peter Morales | Machine Learning Engineer', // e.g: 'Name | Developer'
  lang: 'en, es', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Peter Morales',
  subtitle: "I'm a machine learning researcher",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    "I started out my career studying the fundamental units of all life by doing stastical analysis on particle accelerator data. During that time, I took a scientific computing course and fell in love with the power of computers to simulate or even reconstruct reality. It wasn't long after that I began working on using GPUs and code to form images from radio frequency data (Synthetic Aperture RADAR) and other sorts of neat things with data all along the electromagnetic spectrum. Eventually, while working at BAE Systems, I got the opportunity to work on a project with MIT on scene understanding with video data. While on this project, I started to look more and more at neural networks and their ability to learn complex non-linear filters through example; filters that performed better than the ones I had previously spent a lot of careful time designing by hand. Again, I felt the same excitment I'd felt back during my scientific computing course at the power of computers to not just simulate life, but now 'learn' things I had reserved for human intelligence.",
  paragraphTwo:
    "Since then, I've spent a lot of time throwing myself into different applications of data driven learning methods. First, I did a lot of work in computer vision; checkout the below for some smaple projects I was allowed to publicly release. But most recently, a lot of my time has been dedicated to autonomy. Specifically, programming machines to learn to make decisions that usually humans script or do themselves. All of this, I've had the great opportunity to do at MIT Lincoln Laboratory, where currently I sit in the AI Technology group.",
  paragraphThree:
    'Outside of my research passions, I fish, travel, and play video-games. Though it seems that my research has slowly creeped into video-games as well.',
  resume: 'https://github.com/pmm09c/portfolio/raw/master/PeterMoralesCV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'petermor@mit.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/PeterMo14463116',
    },
    {
      id: uuidv1(),
      name: 'google scholar',
      url:
        'https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AJsN-F7r6E1AWusiynafMR5pX6tlCLHN-NSQzJXQxvHFkf00tM1zMFya3IpOeJLbRrie371clobjjBdleEXY6LDePG08ps1oFQ&user=N7_SLAEAAAAJ',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/io-peter-morales/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'http://github.com/pmm09c',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
