import AboutStyle from "./About.module.css";
import TypeWriterEffect from 'react-typewriter-effect';
import WhyMeStyle from "../whyMe/WhyMe.module.css";


const About = () => {

    return (
        <div>
        <div className={WhyMeStyle.headlineContainer}>
            <div className={WhyMeStyle.headlineText}>about me</div>
            <div className={WhyMeStyle.headlineUnderline}/>
        </div>
            
            <span id="split-screen-left"
                className={
                    AboutStyle.splitLeft
            }>
                <div id="image-container">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQExR8dHfFd4fg/profile-displayphoto-shrink_400_400/0/1616767253210?e=1637798400&v=beta&t=FylE3KYeGwCOvwpO--OYD8kFHdMWTcpklg2KZvRekaI" alt="Sahar Cohen"
                        className={
                            AboutStyle.image
                        }/>
                </div>
            </span>
            <span id="split-screen-right"
                className={
                    AboutStyle.splitRight
            }>
                <div id="info-container">
                    <p className={
                        AboutStyle.info
                    }>
                        <TypeWriterEffect textStyle={
                                {
                                    fontFamily: "'Dosis', sans-serif",
                                    fontSize: "24px"
                                }
                            }
                            startDelay={300}
                            cursorColor="white"
                            text="I am a third (and last) year student at Ben Gurion Unevirsity.
                            I am looking for a student position as a softwear developer, or a web developer.
                            "
                            typeSpeed={80}
                            hideCursorAfterText={true}/>

                        <TypeWriterEffect textStyle={
                                {
                                    fontFamily: "'Dosis', sans-serif",
                                    fontSize: "24px",
                                    color: "rgb(204, 204, 204)"
                                }
                            }
                            startDelay={14300}
                            cursorColor="white"
                            text="During my studies I gained expirience in many languages, and currently I 
                            am mostly interested in JS and TS.
                            I am eager to learn and willing to put up the work for that."
                            typeSpeed={80}/>


                    </p>
                </div>
            </span>
            <span id="footer-buttons"
                className={
                    AboutStyle.footerContainer
            }>
            </span>
        </div>
    );
}
export default About;
