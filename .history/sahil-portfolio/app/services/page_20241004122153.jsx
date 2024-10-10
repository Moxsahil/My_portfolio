"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: ''
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: ''
  },
  {
    num: '03',
    title: 'AI Engine',
    description: ''
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">service page</div>
  </section>;
};

export default Services;