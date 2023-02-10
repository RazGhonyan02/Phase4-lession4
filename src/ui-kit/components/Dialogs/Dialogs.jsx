import React from "react"
import Modal from "react-modal"

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

Modal.setAppElement('#root');


const Dialog = ({isOpen, closeModal, label, children}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

  

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={label}
            >
               {children}
            </Modal>
        </div>
    );
}
export default Dialog