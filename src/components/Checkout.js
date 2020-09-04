import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';

import { Link } from 'react-router-dom';

const Checkout = (props) => {
	return (
		<div className='checkout-container'>
			<h3>Checkout</h3>
			<Link to='/'>Back</Link>

			<div className='checkout-grid'>
				{props.cart.map((item, index) => (
					<div className='item'>
						<p>{item.name}</p>
						<p>${item.price}</p>
						<img src={item.image} alt={item.name} />
						<button onClick={() => props.removeFromCart(index)}>
							Remove From Cart
						</button>
					</div>
				))}
			</div>
			<p>Cart Total: ${props.cartTotal.toFixed(2)}</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		cart: [...state.cart],
		cartCount: state.cartCount,
		cartTotal: state.cartTotal,
	};
};

export default connect(mapStateToProps, { removeFromCart })(Checkout);
