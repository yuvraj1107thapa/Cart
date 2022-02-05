import React from 'react';

class CartItem extends React.Component {

    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity() = this.increaseQuantity.bind(this)
    }

    increaseQuantity = () => {

        // setState from 1
        // this.setState( {
        //     qty: this.state.qty + 1
        // })

        // setState form 2 - if prevState required use this
        this.setState( (prevState) => {
            return {
                qty: prevState.qty + 1
            }
        })
    }

    deccreaseQuantity = () => {
        this.setState( (prevState) => {
            return {
                qty: prevState.qty - 1
            }
        })
    }

    render() {
        const {price, title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="" 
                            className='action-icons' 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={ this.increaseQuantity }>
                        </img>
                        <img 
                            alt="" 
                            className='action-icons' 
                            src="https://cdn-icons-png.flaticon.com/512/66/66889.png">
                        </img>
                        <img 
                            alt="" 
                            className='action-icons' 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png">
                        </img>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 120,
        width: 120,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;