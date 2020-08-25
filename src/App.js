import React from 'react';
import data from './data.json';
import Products from './components/Products';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
  }


  render() {
    return (
      <div className="grid-container">

        <header className="header">
          <a href="/">Shopping Cart</a>
        </header>

        <main className="main">
          <div className="content">
            <div className="main">
              <Products products={this.state.products}/>
            </div>
            <div className="sidebar">
              Cart Items
            </div>
          </div>
        </main>

        <footer className="footer">
          Footer
      </footer>
      </div>
    );
  }

}

export default App;
