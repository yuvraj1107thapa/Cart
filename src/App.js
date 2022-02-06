import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [
            { 
            price: 9999,
            title: 'Phone',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
            id: 1    
            },
            { 
                price: 9999,
                title: 'Telivision',
                qty: 5,
                img: 'https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
                id: 2
            },
            { 
                price: 99999,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
                id: 3    
            }
        ]
    }
  }

  handleIncreaseQuantity = (product) => {
      const { products } = this.state
      const index = products.indexOf(product)
      products[index].qty += 1
      this.setState( {
          products
      })
  }

  handleDecreaseQuantity = (product) => {
      const { products } = this.state
      const index = products.indexOf(product)
      if(products[index].qty === 0) return
      products[index].qty -= 1
      this.setState({
          products: products
      })
  }

  handleDeleteProduct = (id) => {
      const { products } = this.state;
      const items = products.filter( (item) => {
          return item.id !== id
      })
      this.setState({
          products: items
      })
  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach( (product) => {
      count += product.qty
    }) 
    return count;
  }

  render() {
    const { products } = this.state 
    return (
      <div className ="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity} 
            onDecreaseQuantity={this.handleDecreaseQuantity}   
            onDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
