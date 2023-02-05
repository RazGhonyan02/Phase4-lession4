import { Component } from "react";
import styles from "./Modal.module.scss"
import classNames from "classnames/bind";
import Counter from "../Modal-Counter/Counter";
const cx = classNames.bind(styles)
class Modal extends Component {
    state = {
        counter: 0,
    }
    incrementClick = () => {
        const { counter } = this.state
        this.setState({ counter: counter + 1 })

    }
    decrementClick = () => {
        const { counter } = this.state
        this.setState({ counter: counter - 1 })
    }
    render() {
        const { isOpenModal, stopFn, closeModal } = this.props
        const { counter } = this.state
        return (
            <div role="button" onClick={closeModal} className={cx("container", { openModal: isOpenModal })}>
                <div role="button" onClick={stopFn} className={styles.modal}>
                    <Counter counter={counter}
                        increment={this.incrementClick}
                        decrement={this.decrementClick}
                    />
                </div>
            </div>
        )

    }
}
export default Modal;