import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    const { carItems } = this.props;
    return (
      <div>
        {
          carItems.lenght === 0 ? (
            <div className="cart cart-header">Cart is empty</div>
          ) : (
              <div className="cart cart-header">
                You have {carItems.lengh} in the cart{" "}
              </div>
            )
        }
      </div>)
  }
}