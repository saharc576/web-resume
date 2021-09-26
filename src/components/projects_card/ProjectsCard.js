import CardStyle from "./ProjectsCard.module.css";
import OldMan from '../pictures/Oldman.png';

const ProjectsCard = ({
    HeaderP1,
    HeaderP2,
    subject,
    content,
    message,
    imgFront,
    imgBack,
    func
}) => {
    return (
        <div className={
            CardStyle.flipCard
        }>
            <div className={
                CardStyle.flipCardInner
            }>
                <div className={
                    CardStyle.flipCardFront
                }>
                    <h2 className={CardStyle.horizontalViewHeader}>{HeaderP1}</h2>
                    <p>{HeaderP2}</p>

                    <div className={CardStyle.imgFront}>
                      {imgFront}
                    </div>
                </div>
                <div className={
                    CardStyle.flipCardBack
                }>
                    <h1 style={{fontSize:'22px'}}>{subject}</h1>
                    <p style={{marginTop:'0', paddingTop:'0'}}>{content}</p>
                    <div className={CardStyle.buttonContainer}>
                        <button onClick={func} className={CardStyle.button}>To Repository</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;
