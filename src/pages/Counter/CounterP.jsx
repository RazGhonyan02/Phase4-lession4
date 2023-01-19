import { Component } from "react";
import Button from "../../components/Button/Button";
import styles from "./CounterP.module.scss"
import Modal from "../../components/Modal/Modal"
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";

class CounterPage extends Component {
    state = {
        isOpenModal: false,
        isOpenAside: false,
        placement: "left"

    }
    handleToggleAside = () => {
        const { isOpenAside } = this.state
        this.setState({ isOpenAside: !isOpenAside })
    }

    handleToggleModal = () => {
        const { isOpenModal } = this.state
        this.setState({ isOpenModal: !isOpenModal })
    }

    stopClick = (e) => {
        e.stopPropagation()
    }
    closeModal = () => {
        const { isOpenModal } = this.state
        this.setState({isOpenModal: false })

    }
    render() {
        const { isOpenModal, isOpenAside, placement } = this.state

        return (
            <div
                className={styles.container}>
                <div className={styles.headerCont}>
                    <Aside isOpenAside={isOpenAside}
                        stopFn={this.stopClick}
                        placement={placement}>

                    </Aside>
                    <Header click={this.handleToggleAside} />
                </div>
                <div className={styles.buttonPlacement}>
                    <Button click={this.handleToggleModal}
                        text={isOpenModal ? "Close Modal" : "Open Modal"} />
                </div>
                <Modal isOpenAside={isOpenAside} isOpenModal={isOpenModal}
                    stopFn={this.stopClick}
                    closeModal={this.closeModal} >
                </Modal>
            </div>
        )
    }
}

export default CounterPage;