import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
// import { Link } from "react-route";
import Resume from "../assets/Kallol-Sarkar-Resume.pdf"

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "technical_skills",
    },
    {
      id: 5,
      link: "contact",
    },
    // {
    //   id: 6,
    //   link: "Resume",
    // },
  ];

  const openResume=()=>{
    window.open("https://drive.google.com/file/d/1qCNGAeixGMObjhT-0LWdvy-j-N5wtbIw/view?usp=share_link");
    
  }

  return (
    <div className="  flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed ">
      <div>
        <h1 className="  text-5xl font-signature ml-2 hover:scale-125 duration-200 cursor-pointer ">kallol</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-5 cursor-pointer capitalize font-medium text-gray-400 hover:scale-125 hover:text-blue-400 duration-200"
          >
            <Link to={link} smooth duration={600}>
              {link}
            </Link>
          </li>
        ))}
        <li className="text-blue-300 hover:scale-125 duration-200" onClick={openResume} ><a href={Resume} download="Kallol_Sarkar_Resume"  > Resume </a> </li>
      </ul>


      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="  flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
