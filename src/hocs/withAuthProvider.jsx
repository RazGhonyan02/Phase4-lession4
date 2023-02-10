import React from "react";
import { Consumer } from "../context/AuthContext";

export const withAuthProvider = (Component) => class Wrapper extends Component {
    render() {
        return (
            <Consumer>
                {(value) => <Component {...value} />}
            </Consumer>
        )
    }
}