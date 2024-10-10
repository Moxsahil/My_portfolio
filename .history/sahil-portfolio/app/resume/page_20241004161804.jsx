"use client";

import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs, 
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

//about data  
const about = {
  title: 'About me',
  description: "Enthusiastic and diligent B.Tech Computer Science student with a strong foundation in Java programming, database management, and algorithm development. Adept at problem-solving and committed to continuous learning. Looking to leverage my skills and knowledge in a dynamic and challenging environment to contribute to innovative projects and advance my career in the tech industry.",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Sahil Barak"
    },
    {
      fieldName: "Phone No",
      fieldValue: "(+91) 7404927198"
    },
    {
      fieldName: "Experience",
      fieldValue: "3 years of experience in contributing towards many projects and seeking for opportunities to work in the tech industry."   
    },
    {
      fieldName: "Linkedin",
      fieldValue: "Sahil Barak"
    },
    {
      fieldName: "Email",
      fieldValue: "Sahilmk01@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
  ]
};

//experience
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
   "Enthusiastic and diligent B.Tech Computer Science student with a strong foundation in Java programming, database management, and algorithm development. Adept at problem-solving and committed to continuous learning. Looking to leverage my skills and knowledge in a dynamic and challenging environment to contribute to innovative projects and advance my career in the tech industry.",
   items: [
    {
      company: "Wipro",
      position: "Intern",
      duration: "Aug 2022 - Nov 2022",
    },
   ]
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description:
   "Qualifications I have",
   items: [
    {
      Institution: "PDM University",
      Degree : "B.Tech Computer Science",
      Grade: "7.31 CGPA",
      duration: "Aug 2019 - July 2023",
    },
    {
      Institution: "DAV Centenary Public School",
      Degree : "12th standard",
      Grade: "7.0 CGPA",
      duration: "Apr 2018 - Mar 2019",
    },
    {
      Institution: "DAV Centenary Public School",
      Degree : "10th standard",
      Grade: "8.6 CGPA",
      duration: "Apr 2016 - Mar 2017",
    },
   ]
};

//skills data 
const skills = {
  title: 'My Skills',
  description: "Skills i learnt throughout my journey",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact/>,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'; 

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
     }} 
     className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
     >
      resume page
      </motion.div>
  )
}

export default Resume;
