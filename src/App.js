import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Data from './data.json';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast';
import HornForm from './HornForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: Data,
      modalOn: false,
      clickedBeast: Data[0],
    };
  }

  showModal = (index) => {
    this.setState({
      modalOn: true,
      clickedBeast: Data[index],
    });
  }

  hideModal = () => {
    this.setState({modalOn: false});
  }

  handleFilteredHorns = (event) => {
    console.log('filter');
    const numOfHorns = parseInt(event.target.value); 

    let filteredArray = Data;
    if (numOfHorns) {
      filteredArray = Data.filter(element => element.horns === numOfHorns);
    }
    this.renderFilteredBeast(filteredArray);
  };

  renderFilteredBeast = (data) => {
    this.setState({beastData: data});
  }

  render() {
    return (
    <div>
        <Header />

        <HornForm 
          onChange={this.handleFilteredHorns}
          beasts={this.state.beastData}
        />

        <Main 
          beasts={this.state.beastData}
          showModal={this.showModal}
        />

        <SelectedBeast
          modalOn={this.state.modalOn}
          modalOff={this.hideModal}
          clickedBeast={this.state.clickedBeast}
        />

        <Footer />
    </div>
    );
  }
}

export default App;
