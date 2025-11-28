import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import type { ElementType } from 'react';

const processorImage = PlaceHolderImages.find(img => img.id === 'processor-project');
const carImage = PlaceHolderImages.find(img => img.id === 'car-project');

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: ImagePlaceholder;
  icon: string;
}

export const PORTFOLIO_DATA: {
  name: string;
  title: string;
  university: string;
  contact: {
    email: string;
    linkedin: string;
  };
  resumeUrl: string;
  about: string;
  skills: string[];
  interests: string[];
  projects: Project[];
} = {
  name: 'Pierre',
  title: 'Electrical Engineering Student',
  university: 'Toronto Metropolitan University',
  contact: {
    email: 'pierre.engineer@tmu.ca',
    linkedin: 'https://linkedin.com/in/pierre-engineer',
  },
  resumeUrl: '/pierre-resume-placeholder.pdf',
  about: "I am a dedicated and curious second-year Electrical Engineering student at Toronto Metropolitan University with a passion for computer architecture and robotics. I thrive on solving complex problems and turning theoretical concepts into tangible, working projects.",
  skills: [
    'VHDL',
    'SystemVerilog',
    'C++',
    'Python',
    'ROS',
    'PCB Design (Altium)',
    'Circuit Analysis & Simulation',
  ],
  interests: [
    'Embedded Systems',
    'Robotics & Automation',
    'Computer Architecture',
    'AI/ML Hardware',
  ],
  projects: [
    {
      title: 'Simple General-Purpose Processor',
      description:
        'Designed and implemented a 16-bit general-purpose processor from the ground up using VHDL. This project involved creating a custom instruction set architecture (ISA), implementing a 5-stage pipeline, and handling data hazards. The processor was simulated extensively and verified for functionality on an Artix-7 FPGA.',
      tags: ['VHDL', 'FPGA', 'Computer Architecture', 'Digital Logic'],
      image: processorImage,
      icon: 'Cpu',
    },
    {
      title: 'Self-Driving Toy Car',
      description:
        'Built and programmed a miniature autonomous vehicle using a Raspberry Pi and Robot Operating System (ROS). The car uses a camera for lane detection and various sensors for obstacle avoidance. This project provided hands-on experience with sensor integration, control algorithms, and software development in a robotics context.',
      tags: ['Python', 'ROS', 'Raspberry Pi', 'Robotics', 'C++'],
      image: carImage,
      icon: 'Car',
    },
  ],
};
