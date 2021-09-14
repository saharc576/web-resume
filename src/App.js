import AppStyle from './App.module.css';
import Navbar from './components/navbar/Navbar';
import {useRef} from "react";
import { SocialIcon } from 'react-social-icons';

function App() {

  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const whyMeRef = useRef(null);

  const scrolToView = (sectionName) => {
    const myRef = (sectionName === 'about') 
                  ? aboutRef
                  : (sectionName === 'projects')
                  ? projectsRef
                  : whyMeRef;
                                 
    window.scrollTo({
      top: myRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div>
      <Navbar scrolTo={scrolToView}/> 
      <div ref={aboutRef} className={AppStyle.container} style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/web-resume-a9953.appspot.com/o/introBackground.jpg?alt=media&token=5ec81f2f-4add-476c-a524-b11d99245c12)',
                                                  zIndex: '-1'}}>
        <div className={AppStyle.content}>
        </div>
      </div>
      <div className={AppStyle.border}></div>
      <div ref={projectsRef} className={AppStyle.container} style={{backgroundColor: 'green'}}>
        <div className={AppStyle.content}>
        sdfsdfasdf edf gsdfg dfg

        </div>
        
      </div>
      <div className={AppStyle.border}></div>

      <div ref={whyMeRef} className={AppStyle.container} style={{backgroundColor: 'red'}}>
        <div className={AppStyle.content}>

        </div>
        
      </div>
      <footer className={AppStyle.footer}>
        <div className={AppStyle.footerContent}>
          Copyright © 2021. All Rights Reserved
        </div>
        <ul className={AppStyle.ul}>
          <li className={AppStyle.li} title="to github">
              <SocialIcon url="https://github.com/saharc576?tab=repositories"
                          style={{float: 'right'}}/>
          </li>
          <li className={AppStyle.li} title="to linkdin">
              <SocialIcon url="https://www.linkedin.com/in/sahar-cohen-307020207/"
                          style={{float: 'right'}}/>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
