import { Component } from "react";
import Aside from "./components/Aside/Aside";
import Button from "./components/Button/Button";
import styles from "./App.module.scss"
import classNames from "classnames/bind";
import "./index.scss"
import Modal from "./components/Modal/Modal";
const cx = classNames.bind(styles)
class App extends Component {
  state = {
    isOpen: false,
    isOpenModal: false,
    changeSize: false,
    textAside: "Open Aside",
    textModal: "Open Modal",
  };

  handleToggleAside = (event) => {
    
    this.setState({isOpen: true})
    this.setState({changeSize: true})
    this.setState({textAside: "Close Aside"})
   
  }
  closeAside = (event) => {
    this.setState({changeSize: false})
    this.setState({isOpen: false})
    this.setState({textAside: "Open Aside"})
  }
  handleToggleModal = () => {
    const {isOpenModal} = this.state
    this.setState({isOpenModal: !isOpenModal})
    this.setState({textModal: "Close Modal"})
  }
 
  render() {
    const { isOpen, changeSize, textAside, textModal, isOpenModal} = this.state
    return (
      <div className={styles.container}>
        <div onClick={this.closeAside} className={cx("", {changeSize: changeSize})}>
        <Aside isOpen={isOpen} />
        </div>
        <Button click={this.handleToggleAside}  placement="left" text={textAside} />
        <Button click={this.handleToggleModal} text={textModal} />
          <Modal isOpenModal={isOpenModal}/>
      </div>
    )

  }
}

export default App;
