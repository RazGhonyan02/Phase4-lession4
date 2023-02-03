import { Component } from "react";
import classNames from "classnames/bind";
import Navigation from "./Navigation/Navigation";
import styles from "./Aside.module.scss"

const cx = classNames.bind(styles)

class Aside extends Component {
    render() {
        const { isOpenAside } = this.props
        return (
            <aside
                className={cx("aside", { openAside: isOpenAside })}>
                <Navigation />
            </aside>
        )
    }
}
export default Aside;