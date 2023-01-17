import { Component } from "react";
import Aside from "./components/Aside/Aside";
import Button from "./components/Button/Button";
import styles from "./App.module.scss"
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    isOpenAside: false,
    isOpenModal: false,
    placement: "right"
  };

  handleToggleAside = () => {
    const { isOpenAside } = this.state
    this.setState({ isOpenAside: !isOpenAside })
  }
  handleToggleModal = () => {
    const { isOpenModal } = this.state
    this.setState({ isOpenModal: !isOpenModal })
  }
  stopClick = (e) => {
    e.stopPropagation()
  }
  closeAside = (event) => {
    this.setState({ isOpenAside: false })
  }
  closeModal = () => {
    const { isOpenModal } = this.state
    this.setState({ isOpenModal: false })
  }

  render() {
    const { isOpenAside, isOpenModal, placement } = this.state
    return (
      <div className={styles.container}>
        <Aside isOpenAside={isOpenAside}
          stopFn={this.stopClick}
          placement={placement}
          closeAside={this.closeAside} />
        <Button click={this.handleToggleAside}
          text={isOpenAside ? "Close Aside" : "Open Aside"} />
        <Button click={this.handleToggleModal}
          text={isOpenModal ? "Close Modal" : "Open Modal"} />
        <Modal isOpenModal={isOpenModal}
          stopFn={this.stopClick}
          closeModal={this.closeModal} />
      </div>
    )

  }
}

export default App;
