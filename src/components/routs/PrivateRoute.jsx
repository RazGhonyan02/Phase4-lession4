import { Component } from "react";
import { Navigate } from "react-router-dom";

class PrivateRoute extends Component {
    render() {
        const { children } = this.props
        const token = localStorage.getItem("token")
        if (!token) {
            return <Navigate to="/login" />
        }
        return children
    }
}

export default PrivateRoute