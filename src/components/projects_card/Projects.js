import ProjectsCard from "./ProjectsCard";
import Pro from "./Projects.module.css";
import ProjectsFooter from "./ProjectsFooter";
import { Fragment } from "react/cjs/react.production.min";
import {Linking} from 'react-native';

const Projects = () => {

  const calcHandler = () => {
    Linking.openURL("https://github.com/saharc576/Assembly_calc");
  }

  const courseRegHandler = () => {
    Linking.openURL("https://github.com/saharc576/SPL/tree/main/assignemnt3");
  }

  const shezUpHandler = () => {
    Linking.openURL("https://github.com/saharc576/Shez-up");
  }



  return (
    <Fragment>
      <div className={Pro.headlineContainer}>
        <div className={Pro.headlineText}> Favourites Projects</div>
        <div className={Pro.headlineUnderline} />
      </div>
      <div className={Pro.projectsContainer}>
        <ul className={Pro.ulCards}>
          <li className={Pro.liCards}>
            <ProjectsCard
              HeaderP1="Assembly Calculator"
              subject="Octal Assembly Calculator"
              content={
                <div> 
                  Supporting unary (bits operations) and binary operations.<br/> Written in assembly, using C library functions.
                </div>
              }
              message="Hey"
              imgFront={
                <i className="fas fa-calculator fa-7x"></i>
              }
              func={calcHandler}
            />
          </li>
          <li className={Pro.liCards}>
            <ProjectsCard
              HeaderP1="Course Registartion"
              subject="Course Registartion System"
              content={
                <div>
                  Includes both- client (C++) and server (Java). <br/>
                  Server can handle multiple clients. <br/>
                  UTF-8 encoding.
                </div>
              }
              message="Hey"
              imgFront={
                <i className="fas fa-user-graduate fa-7x"></i>
              }
              func={courseRegHandler}
            />
          </li>
          <li className={Pro.liCards}>
            <ProjectsCard
              HeaderP1="Personal Trainer Website"
              subject="React website - Shezup"
              content= {
                <div>
                  A project that was made as a practice for a friend. <br/>
                  Includes firebase authentication and private zone for customers. 
                </div>
              }
              imgFront={
                <i className="fas fa-dumbbell fa-7x"></i>
              }
              func={shezUpHandler}
            />
          </li>
        </ul>
      </div>
      <ProjectsFooter />
    </Fragment>
  );
};

export default Projects;
