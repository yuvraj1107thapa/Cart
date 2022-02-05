import React from 'react';

class CartItem extends React.Component {

    render() {
        const {price, title, qty} = this.props.product;
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
                            onClick={ () => this.props.onIncreaseQuantity(this.props.product) } 
                        />
                        <img 
                            alt="" 
                            className='action-icons' 
                            src="https://cdn-icons-png.flaticon.com/512/66/66889.png"
                            onClick={ () => this.props.onDecreaseQuantity(this.props.product) } 
                        />
                        <img 
                            alt="" 
                            className='action-icons' 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                            onClick={ () => this.props.onDeleteProduct(this.props.product.id)}
                        />
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