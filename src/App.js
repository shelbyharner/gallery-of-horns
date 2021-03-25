import React from 'react';

import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';

class App extends React.Component {
  render() {
    return (
    <div>
        <Header />

        <Main />

        <Footer />
    </div>
    );
  }
}

export default App;
