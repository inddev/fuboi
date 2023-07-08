import React, { Component } from 'react';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
      return (
        <div className="App">
          <h1>Fuboi - Your price discovery buddy</h1>
          <ProductList></ProductList>
        </div>  
      );
  }
}

export default App;