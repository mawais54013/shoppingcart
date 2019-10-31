import React from 'react';
import ItemList from './itemList';
import Cart from "./cart";
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Shopping Cart
        </p>
        <Cart />
      </header>
      <div>
        <ItemList />
      </div>
    </div>
  );
}

export default App;
