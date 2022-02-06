import React from 'react';

const CartItem = (props) => {

    const {price, title, qty} = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img 
                    style={styles.image} 
                    src={product.img}
                />
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
                        onClick={ () => props.onIncreaseQuantity(props.product) } 
                    />
                    <img 
                        alt="" 
                        className='action-icons' 
                        src="https://cdn-icons-png.flaticon.com/512/66/66889.png"
                        onClick={ () => onDecreaseQuantity(product) } 
                    />
                    <img 
                        alt="" 
                        className='action-icons' 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        onClick={ () => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    )
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;