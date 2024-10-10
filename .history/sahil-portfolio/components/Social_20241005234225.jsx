import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
    { icon: <FaGithub />, path: ''},
    { icon: <FaLinkedin />, path: ''},
    { icon: <FaYoutube />, path: ''},
    { icon: <FaTwitter />, path: ''},
    { icon: <FaTwitter />, path: ''},
]

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Social is a component that displays social media links
 * @param {string} containerStyles - The style of the container for the social media links
 * @param {string} iconStyles - The style of each social media icon
 * @returns {ReactElement} A React element representing the social media links
 */
/******  53f06741-3deb-4d65-a290-aa8beac92d75  *******/
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