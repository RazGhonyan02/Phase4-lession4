import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss"

class Navigation extends Component {
    activeStyle = (isActive) => {
        return {
            textDecoration: isActive ? "bold" : "none"
        }
    }
    removeItem = () => {
        localStorage.removeItem("token")
    }
    render() {
        return (
            <nav className={styles.container}>
                <NavLink to="/" className={styles.navLink}>
                    Home</NavLink>
                <NavLink to="/counter" className={styles.navLink}>
                    Counter</NavLink>
                <NavLink
                    onClick={this.removeItem}
                    to="/login"
                    className={styles.navLink}>
                    Log Out
                </NavLink>
                <NavLink to="/users" className={styles.navLink}>
                    Users</NavLink>
            </nav>
        )
    }
}
export default Navigation;