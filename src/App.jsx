import { Component } from "react";
import AppLayout from "./components/AppLayout/AppLayout";
import AuthProvider from "./context/AuthContext/AuthProvider";
import DialogProvider from "./context/DialogsContext/DialogProvider";

const token = localStorage.getItem("token")

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <DialogProvider>
          <AppLayout />
        </DialogProvider>
      </AuthProvider>
    )
  }
}

export default App;
