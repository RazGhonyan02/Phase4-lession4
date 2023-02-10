import { Component } from "react";
import { Provider } from "./index";
import { dialogs } from "../../constants/dialogs"
class DialogProvider extends Component {
    state = {
        token: null
    }
  
    render() {
        const { children } = this.props
        return <Provider value={{
           dialogId: dialogs.CounterDialog,
        }}>
            {children}
        </Provider>

    }
}
export default DialogProvider;