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
  link?: string;
  useCarousel?: boolean;
  carouselImages?: string[];
}

export const PORTFOLIO_DATA: {
  name: string;
  title: string;
  university: string;
  contact: {
    email: string;
    linkedin: string;
    resumeUrl: string;
  };
  about: string;
  skills: string[];
  interests: string[];
  projects: Project[];
} = {
  name: 'Pierre Kostantine',
  title: 'Electrical Engineering Student',
  university: 'Toronto Metropolitan University',
  contact: {
    email: 'pierrek3419@gmail.com',
    linkedin: 'https://linkedin.com/in/pierre-kostantine',
    resumeUrl: '/resume',
  },
  about: "I am a dedicated and curious second-year student at Toronto Metropolitan University with a passion for electrical engineering. I thrive working alone within a team, solving complex problems and troubleshooting, while working on projects among groups of capable engineers. I love being able to turn theoretical concepts into fully functional and useful projects.",
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
        'I developed a complete processor in VHDL and built it on the Altera Cyclone II DE2 FPGA, showing a complete digital system implementation from architecture to hardware. The processor has storage components, a microcode-controlled control unit, and an 8-bit Arithmetic Logic Unit supporting arithmetic, Booleans, bitwise manipulations, comparisons, as well as user-defined operations. The processor further includes a Mealy finite state machine and a 4-to-16 decoder, handling operation selection, as well as input storage via gated D latches. I used Quartus II waveform simulations, and real-time verification on the FPGA, with the resulting outputs displayed on a seven-segment display through a decoder. This project shows my ability to design and implement a functional digital system while also demonstrating how such a processor can be applied to everyday applications, such as basic computing or calculator style operations. At the same time, it serves as a strong foundation for further exploration and more advanced development in FPGA based processor and digital system design.',
      tags: ['VHDL', 'FPGA', 'Computer Architecture', 'Digital Logic'],
      icon: 'Cpu',
      link: '/processor-project',
      useCarousel: true,
      carouselImages: [
        '/imgs/ALU1WVF.png',
        '/imgs/GPU.png',
        '/imgs/P1.3.jpeg',
        '/imgs/P1.png',
        '/imgs/P2.6.jpeg',
        '/imgs/P3.3.jpeg',
      ],
    },
    {
      title: 'Self-Driving Toy Car',
      description:
        'I designed and built a line following self driving toy car using C Language on an Arduino Mini, demonstrating a complete embedded systems project from control logic to physical hardware behavior. The system uses two analog sensors to detect a black line on a contrasting surface and dynamically control two DC motors to maintain accurate path tracking through forward motion and tank turn corrections. Threshold based decision logic determines directional adjustments, while additional control features handle real world track conditions, including ignoring the start marker, stopping at intersections, and executing a 180 degree turn after completing one full lap. This project shows my ability to translate sensor data into real time motor control, integrate software with hardware components, and design reliable autonomous behavior, while also serving as a strong foundation for more advanced robotics and embedded systems development.',
      tags: ['C', 'Arduino', 'Embedded Systems', 'Robotics'],
      icon: 'Car',
      link: '/car-project',
      useCarousel: true,
      carouselImages: ['/imgs/Car 1.jpeg', '/imgs/Car 2.jpeg'],
    },
  ],
};
