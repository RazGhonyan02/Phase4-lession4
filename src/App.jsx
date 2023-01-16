import { Component } from "react";
import Aside from "./components/Aside/Aside";
import Button from "./components/Button/Button";
import styles from "./App.module.scss"
import classNames from "classnames/bind";
import "./index.scss"
const cx = classNames.bind(styles)
class App extends Component {
  state = {
    isOpen: false,
    changeSize: false

  };

  handleToggleAside = (event) => {
    
    this.setState({isOpen: true})
    this.setState({changeSize: true})
   
  }
  closeAside = (event) => {
    this.setState({changeSize: false})
    this.setState({isOpen: false})
  }
  render() {
    const { isOpen, changeSize } = this.state
    return (
      <div className={styles.container}>
        <div onClick={this.closeAside} className={cx("aside__container", {changeSize: changeSize})}>
        <Aside isOpen={isOpen} />
        </div>
        <Button click={this.handleToggleAside}  placement="left" />
      </div>
    )
  
  }
}

export default App;
