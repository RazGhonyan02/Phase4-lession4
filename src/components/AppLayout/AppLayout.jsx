import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Consumer } from "../../context/AuthContext";
import NotFound404 from "../../pages/404/404";
import Login from "../../pages/auth/Login/Login";
import SignUp from "../../pages/auth/SignUp/SignUp";
import CounterPage from "../dialogs/Counter/CounterP";
import Home from "../../pages/Home/Home";
import TodoList from "../../pages/TodoList/TodoList";
import User from "../../pages/User/User";
import Users from "../../pages/Users/Users";
import Aside from "../Aside/Aside"
import Header from "../Header/Header"
import PrivateRoute from "../routs/PrivateRoute";
import PublicRoute from "../routs/PublicRoute"
import styles from "./AppLayout.module.scss"
import { withAuthProvider } from "../../hocs/withAuthProvider";
import { withDialog } from "../../hocs/withDialog";
import { renderDialog } from "../../utils";

class AppLayout extends Component {
    state = {
        isOpenAside: false
    }
    handleToggleAside = () => {
        const { isOpenAside } = this.state
        this.setState({ isOpenAside: !isOpenAside })
    }
    render() {
        const { isOpenAside } = this.state
        return (
            <Consumer>
                {({ token, isOpenDialog }) => {
                    return (
                        <>
                            <BrowserRouter>
                                <div className={styles.container}>

                                    {token && <div className={styles.headerCont}>
                                        <Header click={this.handleToggleAside} />
                                        <Aside isOpenAside={isOpenAside} />
                                    </div>}
                                    <main className={styles.main}>
                                        <Routes>
                                            <Route
                                                path="/"
                                                element={<PrivateRoute>
                                                    <Home />
                                                </PrivateRoute>} />
                                            <Route
                                                path="/counter"
                                                element={<PrivateRoute>
                                                    <CounterPage />
                                                </PrivateRoute>} />
                                            <Route
                                                path="/login"
                                                element={<PublicRoute>
                                                    <Login />
                                                </PublicRoute>} />
                                            <Route
                                                path="/sign-up"
                                                element={<PublicRoute>
                                                    <SignUp />
                                                </PublicRoute>} />
                                            <Route
                                                path="/users"
                                                element={<PrivateRoute>
                                                    <Users />
                                                </PrivateRoute>} />
                                            <Route
                                                path="/user/:id"
                                                element={<PrivateRoute>
                                                    <User />
                                                </PrivateRoute>} />
                                            <Route
                                                path="todo"
                                                element={<PrivateRoute>
                                                    <TodoList />
                                                </PrivateRoute>} />
                                            <Route
                                                path="*"
                                                element={<NotFound404 />} />
                                        </Routes>
                                    </main>
                                </div>

                            </BrowserRouter>
                        </>
                    );
                }}
            </Consumer>
        )
    }
}

export default withAuthProvider(withDialog(AppLayout))