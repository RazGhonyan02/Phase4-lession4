import { Component } from "react";
import styles from "./Counter.module.scss"
import Button from "../Button/Button";
import classNames from "classnames/bind";
const cx = classNames.bind(styles)
class Counter extends Component {
    render() {
        const { increment, decrement, counter } = this.props
        return (
            <div className={styles.container}>
                <h1>Counter</h1>
                <div>
                    <Button click={increment} text={"Increment"}></Button>
                    <Button click={decrement} text={"Decrement"}></Button>
                </div>
                <h2>{counter}</h2>
            </div>
        )
    }
}
export default Counter