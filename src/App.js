import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Data from './data.json';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: Data,
      modalOn: false,
      clickedBeast: {}
    };
  }

  modalOn = (index) => {
    this.setState({
      modalOn: true,
      clickedBeast: Data[index],
    });
  }

  modalOff = () => {
    this.setState({modalOn: false});
  }

  render() {
    return (
    <div>
        <Header />

        <Main 
          beasts={this.beastData}
          modalOn={this.state.modalOn}
        />

        <SelectedBeast
          modalOn={this.state.modalOn}
          modalOff={this.state.modalOff}
          clickedBeast={this.state.clickedBeast}
        />

        <Footer />
    </div>
    );
  }
}

export default App;
