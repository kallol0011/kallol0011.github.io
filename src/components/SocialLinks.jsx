import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {AiOutlinePhone} from "react-icons/ai"
// import resume from  "../assets/Update_Kallol-Sarkar-Resume.pdf"
import resume from "../assets/Kallol_Sarkar_Resume.pdf"


const SocialLinks = () => {
  const links = [

    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href:"mailto:kallolblgsarkar@gmail.com ",
      style: "rounded-tr-md",
    },

    {
      id: 4,
      child: (
        <>
         <h2>ph no - 7063577154</h2><AiOutlinePhone size={30} />
        </>
      ),
      // href:"7063577154 "
    },
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/kallol-sarkar-229000210/",
      
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/kallol0011",
    }
    
    
    // {
    //   id: 5,
    //   child: (
    //     <>
    //       Resume <BsFillPersonLinesFill size={30} id="resume-button-2" />
    //     </>
    //   ),
    //   href: "https://drive.google.com/file/d/1C_6hQG8j1FUgH1JhskxFb_HC9oj8IVJi/view" , //   "/resume.pdf",
    //   style: "rounded-br-md",
    //   download:resume
      
    // },
    
  ];


  const openResume=()=>{
    // window.open("https://drive.google.com/file/d/1qCNGAeixGMObjhT-0LWdvy-j-N5wtbIw/view?usp=share_link");
    window.open("https://drive.google.com/file/d/1C_6hQG8j1FUgH1JhskxFb_HC9oj8IVJi/view?usp=share_link");
    
  }


  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-4px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
        <li id="resume-button-1" 
        className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-4px] hover:rounded-md duration-300 bg-gray-500 rounded-br-md" 
          } onClick={openResume} >
           <a href={resume} download="Kallol_Sarkar_Resume"   >  Resume    </a> <BsFillPersonLinesFill size={30}/> </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
