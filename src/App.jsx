import { Component } from "react";
import AppLayout from "./components/AppLayout/AppLayout";
import AuthProvider from "./context/AuthContext/AuthProvider";

const token = localStorage.getItem("token")

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    )
  }
}

export default App;
