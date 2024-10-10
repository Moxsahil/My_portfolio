import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
    { icon: <FaGithub />, path: ''},
    { icon: <FaLinkedin />, path: ''},
    { icon: <SiLeetcode />, path: ''},
    { icon: <FaTwitter />, path: ''},
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