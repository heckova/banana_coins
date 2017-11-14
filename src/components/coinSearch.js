import React from "react";
import ListOfNames from "../components/listOfNames";

class CoinSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showedNames: [],
            allCoins: [],
            coinName: "",
            chosenCoin: "",
            showPopup: false,
            showListOfNames: false
        };
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onInputClick = this.onInputClick.bind(this);
        this.onCoinClick = this.onCoinClick.bind(this);
    }

    onCoinClick(selected) {
        console.log("I am here: " + selected);
    };

    onButtonClick() {
        if (this.state.showPopup === false) {
            this.setState({showPopup: true});
        }
        else {
            this.setState({showPopup: false})
        }
    }

    onInputChange(event) {
        let searchName = event.target.value;

        this.setState({coinName: searchName});
        let filteredNames = this.state.allCoins;
        if (searchName !== null && searchName !== "") {
            filteredNames = this.state.allCoins.filter((n) => n.toLowerCase().startsWith(searchName.toLowerCase()));
        }

        this.setState({showedNames: filteredNames});
        this.setState({showListOfNames: true});
    }

    onInputClick() {
        if (this.state.showListOfNames === false) {
            this.setState({showListOfNames: true});
            this.setState({showedNames: this.state.allCoins});
        }
        else {
            this.setState({showListOfNames: false})
        }
    }

    componentWillMount() {
        fetch("https://api.coinmarketcap.com/v1/ticker/")
            .then(results => {
                return results.json();
            })
            .then(data => {
                let names = data.map((result) => {
                    return result.name;
                });
                console.log("Loaded all coins");
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
                        <div className="dialog">
                            <label>Name of Coin</label>
                            <input onClick={this.onInputClick} type="text" onChange={this.onInputChange.bind(this)}/>

                            {this.state.showListOfNames ?
                                <ListOfNames names={this.state.showedNames}
                                             onCoinClick={this.onCoinClick}/> : null}
                        </div>
                        <div className="buttons">
                            <button>Add</button>
                            <button onClick={this.onButtonClick}>Cancel</button>
                        </div>
                    </div> : null}
            </div>
        )
    }
}

export default CoinSearch;