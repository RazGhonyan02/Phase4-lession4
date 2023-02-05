import { Component } from "react";
import { Provider } from "./index"
class AuthProvider extends Component {
    state = {
        token: null
    }
    componentDidMount() {
       this.setState({token: localStorage.getItem("token")})
    }
    handleLogout = () => {
        localStorage.removeItem("token");
        this.setState({token: false})

    }
    handleLogin = (token) => {
        localStorage.setItem("token", token)
        this.setState({ token })
    }
    render() {
        const { children } = this.props
        const { token } = this.state
        return <Provider value={{
            token,
            handleLogin: this.handleLogin,
            handleLogout: this.handleLogout
        }}>
            {children}
        </Provider>

    }
}
export default AuthProvider;