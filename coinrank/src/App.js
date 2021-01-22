import './App.css';
import React from 'react';
import axios from 'axios';
import Coinlist from './components/CoinList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coinList: [] };
  }
  async componentDidMount() {
    const url = 'http://localhost:8080/api/currency';
    const result = await axios.get(url)
    const { data } = result
    this.setState({ coinList: data });
  }
  render() {
    return (
      <div className="App">
        <Coinlist coinlist={this.state.coinList}/>
      </div>
    );
  }
}

export default App;
