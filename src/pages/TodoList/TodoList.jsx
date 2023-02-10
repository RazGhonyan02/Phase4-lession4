import { useState } from "react";
import { Component } from "react";
import Button from "../../ui-kit/components/Button/Button";
import Input from "../../ui-kit/components/Input/Input";
import styles from "./TodoList.module.scss"
class TodoList extends Component {

    state = {
        name: "",
        items: [],
        rerender: true
    }

    componentDidMount() {
        const itemsArr = JSON.parse(localStorage.getItem("items"))
        if (itemsArr) {
            this.setState({ items: itemsArr })
        }
    }
    onChange = (event) => {
        const { value } = event.target
        this.setState({ name: value })
    }

    onSubmit = (event) => {
        const { name, items, rerender } = this.state
        event.preventDefault()
        items.push({ name: name })
        localStorage.setItem("items", JSON.stringify(items))
        this.setState({ rerender: !rerender })

    }
    deleteItem = (index) => {
        const { items, rerender } = this.state
        items.splice(index, 1)
        localStorage.setItem("items", JSON.stringify(items))
        this.setState({ rerender: !rerender })

    }
    render() {
        const { name, items } = this.state
        return (
            <div className={styles.container}>
                <div className={styles.formCont}>
                    <h1>My To-Do List</h1>
                    <form onSubmit={this.onSubmit} className={styles.form}>
                        <Input onChange={this.onChange} type="text" name="name" value={name} />
                        <Button type="submit" text="Add" />
                    </form>
                </div>
                <div className={styles.ul}>
                    <ul>
                        {items?.map((item, index) => (
                            <li onClick={() => { this.deleteItem(index) }} key={Math.random}>
                                {item.name}
                            </li>))}
                    </ul>
                </div>

            </div>
        )

    }
}

export default TodoList