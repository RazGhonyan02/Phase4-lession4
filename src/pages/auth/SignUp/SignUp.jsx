import { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import styles from "./SignUp.module.scss"
const users = []
class SignUp extends Component {
    state = {
        login: "",
        password: "",
        isLoggedin: false,
    }
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = (event) => {
        const { login, password } = this.state
        event.preventDefault()
        users.push({ name: login, password: password })
        localStorage.setItem("user", JSON.stringify(users))
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
export default SignUp;