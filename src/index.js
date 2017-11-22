import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Header from "./components/header";
import Table from "./components/table";
import CoinSearch from "./components/coinSearch";


class App extends React.Component {
    addToCoins = (coinInfo) => {
        this.setState({coins: this.state.coins.concat([coinInfo])});
        console.log("Coin " + coinInfo.coin + ", amount: " + coinInfo.amount + ", price: " + coinInfo.buyPrice + "\ndetails: " + JSON.stringify(coinInfo.details));
    };

    constructor(props) {
        super(props);

        this.state = {
            coins: []
        };


        this.addToCoins = this.addToCoins.bind(this)
    }

    render() {
        return (
            <div>
                <Header/>
                <CoinSearch addToCoins={this.addToCoins}/>
                <Table coinsToAdd={this.state.coins}/>
            </div>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
