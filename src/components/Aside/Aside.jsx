import { Component } from "react";
import styles from "./Aside.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

class Aside extends Component {
    render() {
        const { isOpenAside, stopFn, placement = "left" } = this.props
        return (
                <aside
                    role={"button"}
                    onClick={stopFn}
                    className={cx("aside",
                        {
                            openAside: isOpenAside,
                            top: placement === "top",
                            right: placement === "right",
                            bottom: placement === "bottom"
                        })}>              
                </aside>
        )
    }
}
export default Aside;