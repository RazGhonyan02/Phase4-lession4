import { Component } from "react";
import styles from "./Button.module.scss"
import classNames from "classnames/bind";
const cx = classNames.bind(styles)
class Button extends Component {
    
    render() {
        const {click, text, type, disabled} = this.props
        return (
            <button disabled={disabled} type={type} onClick={click} className={styles.button}>{text}</button>
        )
    }
}
export default Button;