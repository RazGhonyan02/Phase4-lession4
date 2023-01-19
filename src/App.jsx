import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterPage from "./pages/Counter/CounterP"
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login/Login";
import SignUp from "./pages/auth/SignUp/SignUp";
import PrivateRoute from "./components/routs/PrivateRoute"
import PublicRoute from "./components/routs/PublicRoute";
const token = localStorage.getItem("token")

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route
            path="/counter"
            element={<PrivateRoute><CounterPage /></PrivateRoute>} />
          <Route
            path="/login"
            element={<PublicRoute><Login /></PublicRoute>} />
          <Route
            path="/sign-up" 
            element={<PublicRoute><SignUp /></PublicRoute>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
