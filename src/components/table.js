import React from "react";
import TableItems from "./table_items"

const Table = () => {
    return <table>
        <tbody>
        <tr>
            <th>Coin</th>
            <th>Amount</th>
            <th>Current Price</th>
            <th>Entry Price</th>
            <th>ROI</th>
        </tr>
        <TableItems/>
        </tbody>
    </table>
};

export default Table;