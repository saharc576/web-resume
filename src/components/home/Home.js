import HomeStyle from "./Home.module.css";
import DownloadBtn from "./DownloadBtn";
import Modal from "../modal/Modal";
import {useState} from "react";
import {SocialIcon} from "react-social-icons";
import {Linking} from 'react-native';

const Home = () => {

    const [showModal, setShowModal] = useState(0);

    const whatsapp = () => {
      Linking.openURL("https://api.whatsapp.com/send?phone=972537171929");
    }
    const linkdin = () => {
      Linking.openURL("https://www.linkedin.com/in/sahar-cohen-307020207/");
    }
    return (
        <div>
            <div className={
                HomeStyle.allContainer
            }>
                <div className={
                    HomeStyle.headlineContainer
                }>Hi, I'm Sahar</div>
                <div className={
                    HomeStyle.subHeadlineContainer
                }>
                    I am third year student at BGU
                    <br/>
                    &&
                    <br/>A softwear developer
                </div>
                <div className={
                    HomeStyle.btns
                }>
                    <ul className={
                        HomeStyle.ul
                    }>
                        <li className={
                            HomeStyle.li
                        }>
                            {
                            < DownloadBtn />
                        }</li>
                        <li className={
                            HomeStyle.li
                        }>
                            <button className={
                                    HomeStyle.btn
                                }
                                onClick={
                                    () => setShowModal(1)
                            }>Get in touch</button>
                        </li>
                    </ul>
                </div>

            </div>
            <div className={
                HomeStyle.modal
            }>
                {
                (showModal === 1) && <Modal setShowModal={setShowModal}
                    headline="CONNECT WITH ME"
                    homeStyle={{width: '50%', backgroundColor: 'rgb(196, 196, 0)'}}
                    content={
                      <div>
                        <ul className={HomeStyle.ul} style={{position: 'absolute', marginTop: '3rem',left: '50%',transform: 'translate(-50%, -50%)', float:'left'}}>
                          <li >
                            <button onClick={whatsapp} className={HomeStyle.modalBtn}>
                            < SocialIcon
                              fgColor = "snow" url = "https://api.whatsapp.com/send?phone=972537171929" style = {{zIndex:"-10"}}/>
                            </button>
                          </li>
                          <li>
                            <button onClick={linkdin} className={HomeStyle.modalBtn}>
                              <SocialIcon fgColor="snow" url="https://www.linkedin.com/in/sahar-cohen-307020207/" style = {{zIndex:"-10"}}/>
                            </button>
                          </li>
                          <li>
                            <button className={HomeStyle.modalBtn}>
                              <a href="mailto:sahar576cohen@gmail.com">
                                <SocialIcon fgColor="snow" network="mailto"/>
                              </a>
                            </button>
                          </li>
                        </ul>
                      </div>
                    }/>
                }
             </div>
        </div>
    );
};

export default Home;
