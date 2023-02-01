import { Component } from "react";
import { API } from "../../api";
import { withRouter } from "../../hocs/withRouter";
// import { getUserMap }  from "./utils" 
import styles from "./User.module.scss"

class User extends Component {
    state = {
        user: []
    }
    async componentDidMount() {
        this.getUser()

    }
    getUser = async () => {
        const { params } = this.props
        const user = await API.user.getUser(params.id)
        this.setState({ user })
        

    }
    render() {
        const { user } = this.state
        return (
            <div className={styles.container}>
                { Object.values(user).map(item => {
                    if(typeof item !== "object") {
                       return <p key={item}>{item}</p>
                    }
                })}  
            </div>
        )
    }
}
export default withRouter(User)