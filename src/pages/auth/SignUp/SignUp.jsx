import { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../ui-kit/components/Button/Button";
import Input from "../../../ui-kit/components/Input/Input";
import { withRouter } from "../../../hocs/withRouter";
import styles from "./SignUp.module.scss"
const users = []
class SignUp extends Component {
    state = {
        login: "",
        password: "",
        isLoggedin: false,
    }
    onChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    onSubmit = (event) => {
        const { login, password } = this.state
        const { navigate } = this.props
        event.preventDefault()
        users.push({ name: login, password: password })
        localStorage.setItem("user", JSON.stringify(users))
        navigate("/login")
    }

    render() {
        const { login, password } = this.state

        return (
            <div className={styles.container}>
                <h1>SignUp</h1>
                <form onSubmit={this.onSubmit}>
                    <Input
                        type="text"
                        value={login}
                        onChange={this.onChange}
                        name="login"
                        placeholder="LogIn"
                    />
                    <Input
                        type="password"
                        value={password}
                        onChange={this.onChange}
                        name="password"
                        placeholder="Password"
                    />
                    <Button
                        disabled={!login || !password}
                        type="submit"
                        text="Register"
                    />
                    <NavLink
                        className={styles.link}
                        to="/login">
                        LogIn
                    </NavLink>
                </form>
            </div>
        )
    }
}
export default withRouter(SignUp);