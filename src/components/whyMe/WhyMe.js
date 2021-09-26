import { useState } from 'react';
import WhyMeStyle from "./WhyMe.module.css";
import QualityModal from '../modal/Modal';

const WhyMe = () => {

    const numOfQualities = 4;
    const [pressedNum, setPressedNum] = useState(0);
    const [showModal, setShowModal] = useState(0);

    const modal_content = [
        {
            id: "constantly learning",
            content: "During my degree I have learned many languages (detailed below)."+
                    "I have also used my free time to learn web development and improve my coding skills."
        },
        {
            id: "coding is life",
            content: "I enjoy coding. I enjoy solving problems and I am not afraid of challenges."
        }, 
        {
            id: "open minded",
            content: "I am always willing to hear another opinion, and never afraid of criticism." + 
            "I'm not afraid to admit in a mistake and go with another person's idea."
        },
        {
            id: "self discipline",
            content: "Since always I have been trying MY BEST to be the hardest worker never mind where I am at." + 
            "When I accept a challenge, it becomes a priority."
        }
    ]
        
            
        
    

    const pressHandler = () => {
       if (pressedNum === numOfQualities) {
           setPressedNum(0);
       }
       else {
           setPressedNum(pressedNum+1);
       }
    }
    return (
    <div>

        <div className={WhyMeStyle.headlineContainer}>
            <div className={WhyMeStyle.headlineText}> what sets me apart</div>
            <div className={WhyMeStyle.headlineUnderline}/>
        </div>
            {(showModal === 1) && <QualityModal setShowModal={setShowModal} headline="Constantly learning" content={modal_content[0].content}/>}
            {(showModal === 4) && <QualityModal setShowModal={setShowModal} headline="Coding is life" content={modal_content[1].content}/>}
            {(showModal === 3) && <QualityModal setShowModal={setShowModal} headline="Open minded" content={modal_content[2].content}/>}
            {(showModal === 2) && <QualityModal setShowModal={setShowModal} headline="Self disciplined" content={modal_content[3].content}/>}
        <span className={WhyMeStyle.colLeft}>
            <span className={WhyMeStyle.leftContainer}>
                {pressedNum>=1 && <button onClick={() => setShowModal(1)} className={WhyMeStyle.btnUp}>
                <i className="fas fa-file-alt fa-4x"></i>
                    </button>}
                {pressedNum>=4 && <button onClick={() => setShowModal(4)} className={WhyMeStyle.btnDown}>
                    <i className="fas fa-code fa-4x"></i>
                    </button>}
            </span>
        </span>
        <span >
            <button onClick={pressHandler} className={WhyMeStyle.btn}>PRESS TO FIND OUT</button>
        </span>
        <span className={WhyMeStyle.colRight}>
            <span className={WhyMeStyle.rightContainer}>
                {pressedNum>=3 && <button onClick={() => setShowModal(3)}  className={WhyMeStyle.btnUp}>
                <i class="fas fa-door-open fa-4x"></i>
                    </button>}
                {pressedNum>=2 && <button onClick={() => setShowModal(2)} className={WhyMeStyle.btnDown}>
                <i class="fas fa-user-ninja fa-4x"></i>
                    </button>}

            </span>
        </span>

        
    </div>);
}

export default WhyMe;
