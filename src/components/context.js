import React, { Component } from "react";
import { phoneProducts, detailProduct } from "../data";
const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    min: 100,
    max: 1200,
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    phoneProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  filterMinPrice = (min) => {
    let tempProduct = [...phoneProducts];
    if (min) {
      this.setState({ min });
      tempProduct = phoneProducts.filter(
        (item) => item.price >= min && item.price <= this.state.max
      );
    }
    this.setState(() => {
      return { products: tempProduct };
    });
  };
  filterMaxPrice = (max) => {
    this.setState({ max });

    let tempProduct = [...phoneProducts];
    if (max) {
      tempProduct = phoneProducts.filter(
        (item) => item.price <= max && item.price >= this.state.min
      );
    }
    this.setState(() => {
      return { products: tempProduct };
    });
  };
  findProduct = (q) => {
    let tempProduct = [...phoneProducts];
    if (q) {
      tempProduct = phoneProducts.filter((item) =>
        item.title.toLocaleLowerCase().includes(q)
      );
    }
    this.setState(() => {
      return { products: tempProduct };
    });
  };
  filterByBrand = (brand) => {
    let tempProduct = [...phoneProducts];
    if (brand) {
      tempProduct = phoneProducts.filter((item) => item.company === brand);
    }
    this.setState(() => {
      return { products: tempProduct };
    });
  };
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (id) => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProduct, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = (id) => {
    let tempProduct = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProduct.indexOf(this.getItem(id));
    let removedProduct = tempProduct[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          product: [...tempProduct],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          filterByBrand: this.filterByBrand,
          filterMinPrice: this.filterMinPrice,
          filterMaxPrice: this.filterMaxPrice,
          findProduct: this.findProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
