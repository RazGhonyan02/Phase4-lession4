import { Component } from "react";
import styles from "./Table.module.scss"

class Table extends Component {
    render() {
        const { data, columns } = this.props
        return (
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.border}>
                        {columns.map(item => <th className={styles.border} key={item.accessor}>{item.Header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) =>
                        <tr key={index}>
                            {columns.map((column, index) =>
                                <td
                                    className={styles.border}
                                    key={index}>
                                    {item[`col${index + 1}`]}
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
                <tfoot></tfoot>
            </table>
        )
    }
}
export default Table
