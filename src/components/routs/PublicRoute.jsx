import { Component } from "react";
import { Navigate } from "react-router-dom";

class PublicRoute extends Component {
    render() {
        const { children } = this.props
        const token = localStorage.getItem("token")
        if (token) {
            return <Navigate  to="/"/>
        }
        return children;
            
        
    }
}
export default PublicRoute;