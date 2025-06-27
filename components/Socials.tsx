import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTiktok, FaTelegram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/abdelazizEbrahim" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/abdelaziz-ebrahim1/",
  },
  { icon: <FaTiktok />, path: "https://www.tiktok.com/@ab_aziz996" },
  { icon: <FaTelegram />, path: "https://t.me/abdelazizEbrahim" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            target="_blank"
            key={index}
            href={item.path}
            className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
