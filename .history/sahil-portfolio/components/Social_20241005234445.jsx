import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram , FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
    { icon: <FaGithub />, path: ''},
    { icon: <FaLinkedin />, path: ''},
    { icon: <SiLeetcode />, path: ''},
    { icon: <FaInstagram />, path: ''},
]


const Social = ({containerStyles, iconStyles}) => {
  return <div className = {containerStyles}>
    {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
    })}
  </div>;
};

export default Social