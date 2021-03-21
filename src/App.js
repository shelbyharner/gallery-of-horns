import React from 'react';

import './App.css';
import './Footer.js';
import './Header.js';
import './Main.js';

class App extends React.Component {
  render() {
    return (
    <div>
      <header>
        <Header />
      </header>
      
      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
    );
  }
}



export default App;
