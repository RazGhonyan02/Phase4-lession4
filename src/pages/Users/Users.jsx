import { Component } from "react";
import { API } from "../../api";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header"
import Table from "../../components/Table/Table";
import { withRouter } from "../../hocs/withRouter";
import { userColumns } from "./constants";
import styles from "./Users.module.scss"
import { getUsersMap } from "./utils";


class Users extends Component {
    state = {
        isOpenAside: false,
        users: [],
    }
    async componentDidMount() {
        this.getUsers()
    }
    getUsers = async () => {
        const users = await API.users.getUsers()
        this.setState({ users })
    }

    handleToggleAside = () => {
        const { isOpenAside } = this.state
        this.setState({ isOpenAside: !isOpenAside })
    }

    onUserRowClick = (userData) => {
        const { navigate } = this.props
        navigate(`/user/${userData.col1}`)
    }
    render() {

        const { isOpenAside, users } = this.state
        return (
            <div className={styles.container}>
                <div
                    className={styles.headerCont}
                >
                    <Aside
                        isOpenAside={isOpenAside}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    />
                    <Header
                        click={this.handleToggleAside}
                    />
                </div>
                <div
                    className={styles.tableCont}
                >
                    <Table
                        columns={userColumns}
                        data={getUsersMap(users)}
                        onRowClick={this.onUserRowClick}
                    />
                </div>
            </div>

        )
    }
}
export default withRouter(Users);