import { Component } from "react";
import styles from "./Counter.module.scss"
import Button from "../../ui-kit/components/Button/Button";
import classNames from "classnames/bind";
import Dialog from "../../ui-kit/components/Dialogs/Dialogs";
const cx = classNames.bind(styles)
class Counter extends Component {
    render() {
        const { increment, decrement, counter } = this.props
        return (
            <div className={styles.container}>
                <Dialog isOpen={true}>
                    <h1>Counter</h1>
                    <div>
                        <Button click={increment} text={"Increment"}></Button>
                        <Button click={decrement} text={"Decrement"}></Button>
                    </div>
                    <h2>{counter}</h2>
                </Dialog>
            </div>
        )
    }
}
export default Counter