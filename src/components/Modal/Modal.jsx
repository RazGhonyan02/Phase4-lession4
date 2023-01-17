import { Component } from "react";
import styles from "./Modal.module.scss"
import classNames from "classnames/bind";
const cx = classNames.bind(styles)
class Modal extends Component {
    render() {
        const {isOpenModal, stopFn, closeModal} = this.props
        return (
            <div role="button" onClick={closeModal} className={cx("container", {openModal: isOpenModal})}>
                <div role="button" onClick={stopFn} className={styles.modal}>
                </div>
            </div>
        )
        
    }
}
export default Modal;