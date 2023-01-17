import { Component } from "react";
import styles from "./Aside.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

class Aside extends Component {
    render() {
        const {isOpenAside, stopFn, closeAside, placement = "left"} = this.props
        return (
            <div role={"button"}
             onClick={closeAside}
             className={cx("container", {openAside: isOpenAside})}>
            <aside role={"button"} onClick={stopFn} className={cx("aside", {top: placement === "top", right: placement === "right", bottom: placement === "bottom"})} />
            </div>
        )
    }
}
export default Aside;