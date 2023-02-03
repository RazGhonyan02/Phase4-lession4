import { Component } from "react";
import styles from "./Header.module.scss"

class Header extends Component {
    render() {
        const { click } = this.props
        return (
            <header className={styles.header}>
                <div onClick={click} role="button" className={styles.burger}>
                    <span />
                </div>
            </header>
        )
    }
}
export default Header;