import { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import styles from "./Login.module.scss"
import { withRouter } from "../../../hocs/withRouter";
import { Consumer } from "../../../context/AuthContext";
const users = JSON.parse(localStorage.getItem("user"))
class Login extends Component {
    state = {
        login: "",
        password: "",
    }
    onChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    onSubmit = (event, handleLogin) => {
        event.preventDefault()
        const { navigate } = this.props
        const { login, password } = this.state
        const foundUser = users.find(item => item.name === login && item.password === password)
        if (foundUser) {
            handleLogin(true)
            return navigate("/")
        }
        return navigate("/login")
    }
    render() {
        const { login, password } = this.state
        return (
            <Consumer>
                {({ handleLogin }) => (
                    <div className={styles.container}>
                    <h1>LogIn</h1>
                    <form onSubmit={(event) => {
                        this.onSubmit(event , handleLogin)
                    }}>
                        <Input
                            type="text"
                            value={login}
                            onChange={this.onChange}
                            name="login"
                            placeholder="LogIn" />
                        <Input
                            type="password"
                            value={password}
                            onChange={this.onChange}
                            name="password"
                            placeholder="Password" />
                        <Button
                            disabled={!login || !password}
                            type="submit"
                            text="LogIn" />
                        <Link
                            className={styles.link}
                            to="/sign-up">
                            Regiser
                        </Link>
                    </form>
                </div>
                )}
            </Consumer>
        )
    }
}
export default withRouter(Login)