import ModalStyle from './Modal.module.css'

const Modal = ({headline, content, setShowModal, homeStyle}) => {
    
    
    window.onclick = function(event) {
        const modal = document.getElementById("myModal");
        if (event.target === modal) {
          setShowModal(0);
        }
    }
    const _style = homeStyle ? {fontSize: '39px'} : null;
    return (
        <div id="myModal" className={ModalStyle.modal}>

            <div className={ModalStyle.modalContent} style={homeStyle}>
                <span onClick={() => setShowModal(0)} className={ModalStyle.close}>&times;</span>
                <h1 style={_style}>{headline}</h1>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Modal;
