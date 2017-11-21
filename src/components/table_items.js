import React from "react";

class TableItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    render() {
        return (
            <tr>
                <td>coin</td>
                <td>amount</td>
                <td>current price</td>
                <td>entry price</td>
                <td>ROI</td>
            </tr>
        )
    }
}

export default TableItems;