import { Component } from "react";
import { API } from "../../api";
import Table from "../../components/Table/Table";
import { withRouter } from "../../hocs/withRouter";
import { userColumns } from "./constants";
import { getUsersMap } from "./utils";
import styles from "./Users.module.scss"
import { Consumer } from "../../context/AuthContext/index";

class Users extends Component {
    state = {
        users: [],
    }
    async componentDidMount() {
        this.getUsers()
    }
    getUsers = async () => {
        const users = await API.users.getUsers()
        this.setState({ users })
    }
    onUserRowClick = (userData) => {
        const { navigate } = this.props
        navigate(`/user/${userData.col1}`)
    }
    render() {
        const { users } = this.state
        return (
            <Consumer>
                {() => (
                    <div className={styles.container}>
                        <div
                            className={styles.headerCont}
                        >
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
            </Consumer>
        )
    }
}
export default withRouter(Users);