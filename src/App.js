import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './components/Loading'
import Home from './components/Home'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    setTimeout(() => { this.setState({isLoading: false}); }, 1000);
  }

  render() {
    return(
        this.state.isLoading? <Loading/>:<Home/>
    );
  }
}

export default App;
