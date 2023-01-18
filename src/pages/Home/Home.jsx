import { Component } from "react";
import { NavLink } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import styles from "./Home.module.scss"

class Home extends Component {
    state = {
        isOpenAside: false,
        placement: "left"
    }

    handleToggleAside = () => {
        const { isOpenAside } = this.state
        this.setState({ isOpenAside: !isOpenAside })
    }
    stopClick = (e) => {
        e.stopPropagation()
    }
    closeAside = (event) => {
        this.setState({ isOpenAside: false })
    }
    render() {
        const { isOpenAside, placement } = this.state
        return (
            <div className={styles.container}>
                <Aside
                    isOpenAside={isOpenAside}
                    stopFn={this.stopClick}
                    placement={placement}
                    closeAside={this.closeAside} />
                <Header click={this.handleToggleAside}></Header>
            </div>

        )
    }
}
export default Home;