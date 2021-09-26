import {SocialIcon} from "react-social-icons";
import MainFooterStyle from "./MainFooter.module.css";
import {Linking} from 'react-native';


const socialIconStyle = {
    float: "right",
    width: "40px",
    height: "40px",
    marginTop: "4px",
    margin: "3px",
    zIndex: "-1"
};

const MainFooter = () => {

    const github = () => {
        Linking.openURL("https://github.com/saharc576?tab=repositories");
      };
    const linkdin = () => {
        Linking.openURL("https://www.linkedin.com/in/sahar-cohen-307020207/");
      };

    return (
        <footer className={
            MainFooterStyle.footer
        }>
            <div className={
                MainFooterStyle.footerContent
            }>
                Copyright © 2021. All Rights Reserved
            </div>
            <ul className={
                MainFooterStyle.ul
            }>
                <li onClick={github} className={
                        MainFooterStyle.li
                    }
                    title="to my github">
                    
                    <SocialIcon bgColor="snow" fgColor="black" url="https://github.com/saharc576?tab=repositories"
                        style={socialIconStyle}/>
                </li>
                <li onClick={linkdin} className={
                        MainFooterStyle.li
                    }
                    title="to my linkdin">
                    <SocialIcon fgColor="snow" url="https://www.linkedin.com/in/sahar-cohen-307020207/"
                        style={socialIconStyle}/>
                </li>
                <li className={
                        MainFooterStyle.li
                    }
                    title="send email">
                    <a href="mailto:sahar576cohen@gmail.com">
                        <SocialIcon fgColor="snow" network="mailto"
                            style={{float: "right",
                            width: "40px",
                            height: "40px",
                            marginTop: "4px",
                            margin: "3px"}}/>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default MainFooter;
