import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./404.module.scss"

class NotFound404 extends Component {
    render() {
        return (
            <div className={styles.container} >
                <Link to="/">Go To Home</Link>
                <h1>Page Not Found</h1>
            </div>
        )
    }
}
export default NotFound404;