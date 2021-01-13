import React, { Component, createContext } from "react";

const Context = createContext();
const { Provider } = Context;

class AppState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: 0,
        name: "Razvan",
      },
      cart: [],
      addToCart: this.addToCart,
    };
  }

  addToCart = (item) => {
    const newCart = [...this.state.cart];
    newCart.push(item);
    this.setState({ cart: newCart });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default AppState;
export { Context };
