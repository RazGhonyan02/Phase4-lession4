import { Component } from "react";
import styles from "./Aside.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

class Aside extends Component {
    render() {
        const {isOpen} = this.props
        return (
            <aside className={cx("aside", { open: isOpen})} />
        )
    }
}
export default Aside;