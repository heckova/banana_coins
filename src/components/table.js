import React from "react";


const Table = (props) => {

    console.log(props.coinsToAdd);

    const tableItems = (allDetails) => {
        if (allDetails.length) {
            return allDetails.map((item) => {

                return <tr key={item.id}>
                    <td>{item.coin}</td>
                    <td>{item.amount}</td>
                    <td>{item.details.price_usd + " USD"}</td>
                    <td>{item.buyPrice}</td>
                    <td>{(item.details.price_usd / item.buyPrice ) * 100 + "%"}</td>
                </tr>

            })
        }
    };

    return <table>
        <tbody>
        <tr>
            <th>Coin</th>
            <th>Amount</th>
            <th>Current Price</th>
            <th>Entry Price</th>
            <th>ROI</th>
        </tr>
        {tableItems(props.coinsToAdd)}
        </tbody>
    </table>

};


export default Table;