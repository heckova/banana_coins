import React from "react";
import ListOfNames from "../components/listOfNames";

let inputValue = "";

class CoinSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showedNames: [],
            allCoins: [],
            allCoinsInfo: [],
            coinName: "",
            showPopup: false,
            showListOfNames: false,

            chosenCoin: "",
            amount: 0,
            buyPrice: 0,
        };
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onInputClick = this.onInputClick.bind(this);
        this.onCoinClick = this.onCoinClick.bind(this);
        this.valueOfValue = this.valueOfValue.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onBuyPriceChange = this.onBuyPriceChange.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
    }

    onCoinClick(selected) {
        let selectedItem = selected.item;
        this.setState({chosenCoin: selectedItem});
        this.setState({showListOfNames: false});
        // console.log(selectedItem);


    };

    onButtonClick() {
        if (this.state.showPopup === false) {
            this.setState({showPopup: true});
        }
        else {
            this.setState({showPopup: false})
        }
    }

    onAddClick() {
        const result = {
            coin: this.state.chosenCoin,
            amount: this.state.amount,
            buyPrice: this.state.buyPrice,
            details: this.state.allCoinsInfo.find((item) => {
                return (item.name === this.state.chosenCoin);
            })
        };

        this.props.addToCoins(result);

        this.setState({showPopup: false});
    }

    onInputChange(event) {
        let searchName = event.target.value;
        inputValue = searchName;

        this.setState({coinName: searchName});
        let filteredNames = this.state.allCoins;
        if (searchName !== null && searchName !== "") {
            filteredNames = this.state.allCoins.filter((n) => n.toLowerCase().startsWith(searchName.toLowerCase()));
        }

        this.setState({showedNames: filteredNames});
        this.setState({showListOfNames: true});
    }

    onAmountChange(event) {
        let amount = event.target.value;

        this.setState({amount: amount});
        // console.log(this.state.amount);
    }

    onBuyPriceChange(event) {

        this.setState({buyPrice: event.target.value})
    }

    valueOfValue() {
        if (this.state.chosenCoin === "") {
            return inputValue
        }
        else {
            return this.state.chosenCoin
        }
    };

    onInputClick() {
        if (this.state.showListOfNames === false) {
            this.setState({showListOfNames: true});
            this.setState({showedNames: this.state.allCoins});
            this.setState({chosenCoin: ""})
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
                this.setState({allCoinsInfo: data});
                return data;
            })
            .then(data => {
                let names = data.map((result) => {
                    return result.name;
                });
                this.setState({allCoins: names});
                // console.log(names);
            })
    }

    render() {
        return (
            <div className="coinSearch">
                <button onClick={this.onButtonClick}><i className="fa fa-plus" aria-hidden="true"/> New Coin</button>
                {this.state.showPopup ?
                    <div className="popup">
                        <div className="dialog">
                            <label>Name of Coin</label>
                            <input onClick={this.onInputClick} type="text"
                                   onChange={this.onInputChange}
                                   value={this.valueOfValue()}/>

                            {this.state.showListOfNames ?
                                <ListOfNames names={this.state.showedNames}
                                             onCoinClick={this.onCoinClick}/> : null}
                            <label>Amount</label>
                            <input type="number" onChange={this.onAmountChange}/>
                            <label>Buy Price</label>
                            <input type="number" onChange={this.onBuyPriceChange}/>
                        </div>
                        <div className="buttons">
                            <button onClick={this.onAddClick}>Add</button>
                            <button onClick={this.onButtonClick}>Cancel</button>
                        </div>
                    </div> : null}
            </div>
        )
    }
}

export default CoinSearch;