import React from "react";

class CoinSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            names: [],
            coinName: ""
        }
    }


    componentDidMount() {
        fetch("https://api.coinmarketcap.com/v1/ticker/")
            .then(results => {
                return results.json();
            })
            .then(data => {
                let names = data.map((result) => {
                    return result.name;
                });
                this.setState({names: names});
                console.log(names);
            })
    }


    render() {
        return (
            <div>
                <input type="text"/>
                <button>Add</button>
            </div>
        )
    }
}

export default CoinSearch;