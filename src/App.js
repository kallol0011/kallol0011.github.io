import Clock from "./clock/Clock";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Cursor from "./cursor/Cursor";


function App() {
  return (
    <div>
       <Cursor/>
      <NavBar />   
      <Home />
      <About />
      <Experience />
      <Portfolio />

      <Contact />
      
       
      <SocialLinks />
      
    </div>
  );
}

export default App;



// import AOS from "aos";
// import "aos/dist/aos.css";
// function App() {
  // AOS.init({
  //   offset: 100,
  //   duration: 1000,
  // });



