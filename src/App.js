import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }
    this.db = firebase.firestore()
  }
    /*this.state = {
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
    }*/

  // componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map( (doc) => {
    //       console.log(doc.data());
    //     })

    //     const products = snapshot.docs.map( (doc) => {
    //       return doc.data();
    //     })

    //     this.setState({
    //       products,
    //       loading: false
    //     })
    //   })
    // }

  componentDidMount() {
    this.db
      .collection('products')
      .onSnapshot( (snapshot) => {
        console.log(snapshot);

        snapshot.docs.map( (doc) => {
          console.log(doc.data());
        })

        const products = snapshot.docs.map( (doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })

        this.setState({
          products,
          loading: false
        })
    })
  } 

  handleIncreaseQuantity = (product) => {
      const { products } = this.state
      const index = products.indexOf(product)
      // products[index].qty += 1
      // this.setState( {
      //     products
      // })

      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
      .update({
        qty: products[index].qty + 1
      })
      .then( () => {
        console.log('Updated successfully')
      })
      .catch( (error) => {
        console.log("Error : ", error);
      })
  }

  handleDecreaseQuantity = (product) => {
      const { products } = this.state
      const index = products.indexOf(product)
      if(products[index].qty === 0) return
      // products[index].qty -= 1
      // this.setState({
      //     products: products
      // })
      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
      .update({
        qty: products[index].qty - 1
      })
      .then( () => {
        console.log('Updated successfully')
      })
      .catch( (error) => {
        console.log("Error : ", error);
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

  getCartTotalPrice = () => {
    const { products } = this.state;
    let price = 0;
    products.forEach( (product) => {
      price += product.qty * product.price
    }) 
    return price;
  }

  addProduct = () => {
    this.db
    .collection('products')
    .add({
      img: "",
      title: 'Washing machine',
      qty: 3,
      price: 2000
    })
    .then((docRef) => {
      console.log("Product has been added", docRef);
    })
    .catch((error) => {
      console.log("Error : ", error);
    })
  }

  render() {
    const { products, loading } = this.state 
    return (
      <div className ="App">
        <Navbar count={this.getCartCount()}/>
        <button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add a product</button>
        <Cart
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity} 
            onDecreaseQuantity={this.handleDecreaseQuantity}   
            onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ...</h1>}
       <div 
            style={ {padding: 10, fontSize: 20} }>
            TOTAL: {this.getCartTotalPrice()}
        </div>
      </div>
    );
  }
}

export default App;
