import React from "react";
import ListOfNames from "../components/listOfNames";

class CoinSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showedNames: [],
            allCoins: [],
            coinName: "",
            showPopup: false,
            showListOfNames: false
        };
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onInputClick = this.onInputClick.bind(this);
    }

    onButtonClick() {
        if (this.state.showPopup === false) {
            this.setState({showPopup: true});
        }
        else {
            this.setState({showPopup: false})
        }
    }

    onInputChange(event) {
        this.setState({coinName: event.target.value});
        let filteredNames = this.state.allCoins.filter((n) => n.startsWith(this.state.coinName));
        this.setState({showedNames: filteredNames});
        this.setState({showListOfNames: true});
    }

    onInputClick(event) {
        if (this.state.showListOfNames === false) {
            this.setState({showListOfNames: true});
        }
        else {
            this.setState({showListOfNames: false})
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
                this.setState({allCoins: names});
                console.log(names);
            })
    }


    render() {
        return (
            <div className="coinSearch">
                <button onClick={this.onButtonClick}>Add new coin</button>
                {this.state.showPopup ?
                    <div className="popup">
                        <label>Name of Coin</label>
                        <input onClick={this.onInputClick} type="text" onChange={this.onInputChange.bind(this)}/>
                        {this.state.showListOfNames ?
                            <ListOfNames names={this.state.showedNames}/> : null}
                        <button>Add</button>
                        <button onClick={this.onButtonClick}>Cancel</button>
                    </div> : null}
            </div>
        )
    }
}

export default CoinSearch;