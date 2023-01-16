import { Component } from "react";
import styles from "./Button.module.scss"
import classNames from "classnames/bind";
const cx = classNames.bind(styles)
class Button extends Component {
    
    render() {
        const {click, text} = this.props
        return (
            <button onClick={click} className={styles.button}>{text}</button>
        )
    }
}
export default Button;