import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';

const Checkout = (props) => {
	return (
		<>
			<h3>Checkout</h3>
			{props.cart.map((item, index) => (
				<div>
					<p>{item}</p>
					<button onClick={() => props.removeFromCart(index)}>X</button>
				</div>
			))}
		</>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		cart: [...state.cart],
		cartCount: state.cartCount,
	};
};

export default connect(mapStateToProps, { removeFromCart })(Checkout);
