import { Component } from "react";
import { NavLink } from "react-router-dom";
import { Consumer } from "../../../context/AuthContext";
import styles from "./Navigation.module.scss"


class Navigation extends Component {
    activeStyle = (isActive) => {
        return {
            textDecoration: isActive ? "bold" : "none"
        }
    }
    render() {
        return (
           <Consumer>
            {({ handleLogout }) => (
                 <nav className={styles.container}>
                 <NavLink to="/" className={styles.navLink}>
                     Home</NavLink>
                 <NavLink to="/counter" className={styles.navLink}>
                     Counter</NavLink>
                 <NavLink to="/users" className={styles.navLink}>
                     Users</NavLink>
                 <NavLink
                     onClick={handleLogout}
                     to="/login"
                     className={styles.navLink}>
                     Log Out
                 </NavLink>
 
             </nav>
            )}
           </Consumer>
        )
    }
}
export default Navigation;