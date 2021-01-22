import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coinList: [] };
  }
  async componentDidMount() {
    const url = `localhost:8080/api/currency`;
    const result = await axios.get(url)
    const { data } = result
    console.log(data)
    this.SetState({ data });
  }
  render() {
    return (
      <div className="App">
        app
      </div>
    );
  }
}

export default App;
