import { Component } from "react";
import Button from "../../components/Button/Button";
import styles from "./CounterP.module.scss"
import Modal from "../../components/Modal/Modal"

class CounterPage extends Component {
    state = {
        isOpenModal: false,
    }

    handleToggleModal = () => {
        const { isOpenModal } = this.state
        this.setState({ isOpenModal: !isOpenModal })
    }
    closeModal = () => {
        const { isOpenModal } = this.state
        this.setState({ isOpenModal: false })
    }
    render() {
        const { isOpenModal } = this.state
        return (
            <div
                className={styles.container}>
                <div className={styles.headerCont}>
                </div>
                <div className={styles.buttonPlacement}>
                    <Button click={this.handleToggleModal}
                        text={isOpenModal ? "Close Modal" : "Open Modal"} />
                </div>
                <Modal isOpenModal={isOpenModal}
                    stopFn={(event) => {
                        event.stopPropagation()}}
                    closeModal={this.closeModal} >
                </Modal>
            </div>
        )
    }
}

export default CounterPage;