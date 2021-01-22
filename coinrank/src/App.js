import React from 'react';
import axios from 'axios';
import Coinlist from './components/CoinList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coinList: [] };
  }
  async componentDidMount() {
    const url = 'http://coinrank-env.eba-u7vpw8bc.ap-southeast-2.elasticbeanstalk.com/api/currency';
    const result = await axios.get(url)
    const { data } = result
    this.setState({ coinList: data });
  }
  render() {
    return (
      <div>
        <Coinlist coinlist={this.state.coinList}/>
      </div>
    );
  }
}

export default App;
