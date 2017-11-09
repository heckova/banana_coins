import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Header from "./components/header";
import Table from "./components/table";
import CoinSearch from "./components/coinSearch";

const App = () => {
    return <div>
        <Header/>
        <CoinSearch/>
        <Table/>
    </div>
};

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
