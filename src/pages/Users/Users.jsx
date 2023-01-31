import { Component } from "react";
import { API } from "../../api";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header"
import Table from "../../components/Table/Table";
import styles from "./Users.module.scss"


class Users extends Component {
    state = {
        isOpenAside: false,
        users: [],
        posts: [],
    }
    async componentDidMount() {
        this.getUsers()
    }
    getUsers = async () => {
        const users = await API.user.getUsers()
        this.setState({ users })
    }
    postUsers = async () => {
        const posts = await API.post.postUsers()
        this.setState({ posts })
    }
    userColumns = [
        {
            Header: "Id",
            accessor: "col1"
        },
        {
            Header: "Email",
            accessor: "col2"
        },
        {
            Header: "Name",
            accessor: "col3"
        },
        {
            Header: "User Name",
            accessor: "col4"
        },
        {
            Header: "WebSite",
            accessor: "col5"
        },
        {
            Header: "Phone",
            accessor: "col6"
        },
    ]
    postsColumns = [
        {
            Header: "Id",
            accessor: "col1",
        },
        {
            Header: "User Id",
            accessor: "col2",
        },
        {
            Header: "Body",
            accessor: "col3",
        },
        {
            Header: "Title",
            accessor: "col4",
        },

    ]
    handleToggleAside = () => {
        const { isOpenAside } = this.state
        this.setState({ isOpenAside: !isOpenAside })
    }
    render() {
        const { isOpenAside, users, posts} = this.state
        const usersData = users.map(({id, email, name, username, website, phone}) => ({
            col1: id,
            col2: email,
            col3: name,
            col4: username,
            col5: website,
            col6: phone
        }))

        const postsData = posts.map(({id, userId, body, title}) => ({
           col1: id,
           col2: userId,
           col3: body,
           col4: title 
        }))
        console.log(usersData)
        return (
            <div className={styles.container}>
                <div className={styles.headerCont}>
                    <Aside
                        isOpenAside={isOpenAside}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    />
                    <Header click={this.handleToggleAside} />
                </div>
                <div className={styles.tableCont}>
                    <Table columns={this.userColumns} data={usersData}/>
                    <Table columns={this.postsColumns} data={postsData} />
                </div>

            </div>

        )
    }
}
export default Users;