import React from 'react';
import { connect } from 'react-redux';

const Checkout = (props) => {
	return (
		<>
			<h3>Checkout</h3>
			{props.cart.map((item) => (
				<p>{item}</p>
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

export default connect(mapStateToProps)(Checkout);
