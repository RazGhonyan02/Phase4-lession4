import { Component } from "react";
import Aside from "../../components/Aside/Aside";
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

    closeAside = () => {
        this.setState({ isOpenAside: false })
    }
    render() {
        const { isOpenAside, placement } = this.state
        return (
            <div className={styles.container}>
                <Aside
                    isOpenAside={isOpenAside}
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                    placement={placement}
                    closeAside={this.closeAside} />
                <Header click={this.handleToggleAside}></Header>
            </div>

        )
    }
}
export default Home;