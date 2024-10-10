"use client";

import { Button } from "@/components/ui/button";
import { Input} from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 7404927198",
  },{
    icon: <FaEnvelope />,
    title: "Email",
    description: "Sahilmk01@gmail.com",
  },{
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "1513/34,Sheetal Nagar,Rohtak,Haryana-124001",
  },
];

import { motion } from "framer-motion";



const Contact = () => {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1, 
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="py-6"
    >
      <div className="container mx-auto">
        <div>
          {/* form */}
          <div>
            <form>form</form>
          </div>
          {/* info */}
          <div>info</div>
        </div>
      </div>
      </motion.section>
  );
}

export default Contact;