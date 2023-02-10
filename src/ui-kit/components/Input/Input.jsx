import { Component } from "react";
import styles from "./Input.module.scss"

class Input extends Component {
    render() {
        const {...rest } = this.props
        return (
            <input  {...rest} className={styles.input} />
        )
    }
}
export default Input;