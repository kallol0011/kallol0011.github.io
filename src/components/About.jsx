import React from "react";
import ReactTooltip from "react-tooltip"
import GitHubCalender from "react-github-calendar"
const About = () => {
  return (
    <div
      name="about"
      
      className="w-full h-887px bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 gap-7 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-7 text-gray-400">
        Motivated and innovative aspiring full-stack developer
        with hands-on experience building websites with MERN
        stack and various web technologies including HTML,
        CSS, JAVASCRIPT, and REACT JS. Curious to learn about
        emerging web technologies and looking forward to
        making a significant contribution to an organization
        through dedicated effort.
        </p>

        <br />
         <div>
           <GitHubCalender
             username="kallol0011"
             blockSize={18}
             color={"green"}
             blockMargin={7}            
             fontSize={18}
           >

            <ReactTooltip delayShow={11} html />
           </GitHubCalender>
         </div>

        <div className="lg:flex sm:grid gap-y-7   " >
          <img src="https://github-readme-stats.vercel.app/api?username=kallol0011&show_icons=true&theme=radical" alt="" />
          <img className=" sm:ml-2 sm:pl-2 lg:ml-11 lg:pl-14 " src="https://github-readme-stats.vercel.app/api/top-langs/?username=kallol0011&layout=compact)](https://github.com/anuraghazra/github-readme-stats)" alt="" />
       
       
        </div>
      </div>
      
    </div>
  );
};

export default About;
