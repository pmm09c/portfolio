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
    title: 'Tensor2Tensor Translation for Computer Vision Applications',
    info:
      "Here are some samples from computer vision and medical imaging projects i've done. The first project is an image to image translation project used for image enchancement, specifically dehazing. The idea is to have a small network which can help improve image quality before being passed into a secondary network for say object detection. This could help the input data look more like the training data and potentially improve reliability for things like self driving cars.",
    info2:
      'The second project uses self-supervision, a technique which trains a network on a surrogate task without the need for labels, to improve neuron segmentation performance in a 3D volume. The auxilary task was to reorder the slices of the 3D scan volume and predict the true ordering of the slices. Ultimately, doing this auxilary task first leads to better performance when fine tuning on the actual segmenation task.',
    url:
      'http://openaccess.thecvf.com/content_CVPRW_2019/html/NTIRE/Morales_Feature_Forwarding_for_Efficient_Single_Image_Dehazing_CVPRW_2019_paper.html',
    repo: 'https://github.com/pmm09c/ntire-dehazing', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Coordination Graphs for Multi-Agent Reinforcement Learning and Planning',
    info:
      'These projects came from some work trying to do better planning in independent multi-agent settings. The first project used something known as monte-carlo tree search to optimize several agents in a fully cooperative task. The idea here was to use something known as a coordination graph to know which agents to compute the joint optimal action for. In other words, the coordination graph says which agents need to coordinate at the current moment in time. Without the coordination graph, it would be too costly to try and optimize over all agents jointly. The coordination graph is dynamic and driven by heuristics like distance and the joint action optimization is done dynamically as the graph changes.',
    info2:
      "The second project looked at the setting where maybe we don't know what the best coordination graph looks like. In that case, we want learn the coordination graph that works best given the state of the environment. For this project, we came up with something known as Deep Implicit Coordination Graphs, which introduces a fully differentiable module which can be incorporated in multi-agent reinforcement learning methods to implicitly reason about joint-actions. DICG essentially learns how to build up a dynamic coordination graph from experience.",
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Airforce Accelerator',
    info:
      "For these projects, we were asked to work with MIT and propose cutting edge AI projects. The first project I'm working on is the earth intelligence engine. Here we're trying to utilize climate and weather data to foreward predict future earth conditions and visualize the effects. This will help decision makers not only make near term safety decisions based on weather data, but also hopefully motivate more proactive measures to address climate change.",
    info2:
      'The second project is using something known as Scientific Machine Learning, a form of machine learning which attempts to maintain as much structure from the physics of a problem in the learning through fully differentiable code, to try and navigate the earth using only the magnetic field generated from the earths crust.',
    url: 'https://ai-accelerator.csail.mit.edu/projects/',
    repo: 'https://github.com/orgs/MIT-AI-Accelerator/teams', // if no repo, the button will not show up
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
