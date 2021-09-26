import Navbar from "./components/navbar/Navbar";
import { useRef } from "react";
import Main from "./components/main/Main";
import About from "./components/about/About";
import MainFooter from "./main_footer/MainFooter";
import WhyMe from "./components/whyMe/WhyMe";
import Home from "./components/home/Home";
import Projects from "./components/projects_card/Projects";

function App() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const whyMeRef = useRef(null);
  const homeRef = useRef(null);

  const scrolToView = (sectionName) => {
    const myRef =
      sectionName === "about"
        ? aboutRef
        : sectionName === "projects"
        ? projectsRef
        : sectionName === "home"
        ? homeRef
        : whyMeRef;

    window.scrollTo({ top: myRef.current.offsetTop, behavior: "smooth"});
  };
  

    return (
    <div>
        <Navbar scrolTo={scrolToView}/>
        <Main Ref={homeRef}
            style={
                {
                    background: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(https://firebasestorage.googleapis.com/v0/b/web-resume-a9953.appspot.com/o/Home%20bg.jpg?alt=media&token=8b1d3afd-0b35-41e3-8eec-5f62e0c51220)",
                    backgroundPositionX: "right",
                    backgroundPositionY: "center",
                    backgroundSize: "cover",
                    backgroundRepeatX: "no-repeat",
                    backgroundRepeatY: "no-repeat",
                    backgroundAttachment: "initial",
                    backgroundOrigin: "initial",
                    backgroundClip: "initial",
                    backgroundColor: "initial"
                }
            }
            content={<Home/>}/>
        <Main Ref={aboutRef}
            style={
                {
                    backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/web-resume-a9953.appspot.com/o/introBackground.jpg?alt=media&token=5ec81f2f-4add-476c-a524-b11d99245c12)",
                    backgroundPositionX: "right",
                    backgroundPositionY: "center",
                    backgroundSize: "cover",
                    backgroundRepeatX: "no-repeat",
                    backgroundRepeatY: "no-repeat",
                    backgroundAttachment: "initial",
                    backgroundOrigin: "initial",
                    backgroundClip: "initial",
                    backgroundColor: "initial",
                }
            }
            content={<About/>}/>
        <Main Ref={whyMeRef}
            style={
                {
                    backgroundPositionX: "right",
                    backgroundPositionY: "bottom",
                    backgroundClip: "content-box",
                    backgroundSize: "200px 200px",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "rgba(3,3,3, 0.89)"
                }
            }
            content={<WhyMe/>}/>

      <Main
        Ref={projectsRef}
        style={{
          backgroundImage:
            "url(https://firebasestorage.googleapis.com/v0/b/web-resume-a9953.appspot.com/o/projects%20bg.png?alt=media&token=7183d970-247f-4117-bbca-ddcd48ec22f9)",
          backgroundPositionX: "left",
          backgroundPositionY: "top",
          backgroundClip: "content-box",
          backgroundSize: "180%",
        }}
        content={<Projects/>}
        projects={true}
        />
      
      <MainFooter />
    </div>
  );
}

export default App;
